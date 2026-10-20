#!/usr/bin/env node
/**
 * Manage the Firebase Auth `admin` custom claim used by the admin panel
 * (see src/composables/useAdminAuth.ts: isAuthenticated requires the claim).
 *
 * There is no backend anymore, so the claim can only be granted through the
 * Admin SDK, which requires a service account.
 *
 * Usage:
 *   npm run admin:claim -- --check <email>
 *   npm run admin:claim -- --grant --email <email> [--password <password>]
 *   npm run admin:claim -- --grant --uid <uid>
 *   npm run admin:claim -- --revoke --email <email>
 *
 * Credentials (first match wins):
 *   1. FIREBASE_SERVICE_ACCOUNT_JSON  - inline JSON of a service account key
 *   2. GOOGLE_APPLICATION_CREDENTIALS  - path to a service account key file
 *   3. .secrets/service-account.json   - default local path (git-ignored)
 *
 * NOTE: a signed-in user keeps their ID token for ~1h. After granting or
 * revoking the claim the user must log out and log back in.
 */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import {
  applicationDefault,
  cert,
  getApps,
  initializeApp,
} from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

const ROOT_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
)
const DEFAULT_KEY_PATH = path.join(ROOT_DIR, '.secrets', 'service-account.json')

const USAGE = `
Manage the Firebase Auth "admin" custom claim.

Usage:
  node scripts/set-admin-claim.mjs --check <email>
  node scripts/set-admin-claim.mjs --grant --email <email> [--password <password>]
  node scripts/set-admin-claim.mjs --grant --uid <uid>
  node scripts/set-admin-claim.mjs --revoke --email <email>
  node scripts/set-admin-claim.mjs --revoke --uid <uid>

Options:
  --check <email>       Inspect a user: providers, disabled flag, claims.
                        Read-only, no changes made.
  --grant               Set claims.admin = true for the target user.
  --revoke              Remove the admin claim from the target user.
  --email <email>       Target user email.
  --uid <uid>           Target user UID (alternative to --email).
  --password <password> Set (or reset) the user password. Implies the user is
                        created by this script when it does not exist yet.
  --project <id>        Firebase project id (defaults to the service account
                        project or GOOGLE_CLOUD_PROJECT / GCLOUD_PROJECT).
  --help                Show this message.

Service account resolution order:
  FIREBASE_SERVICE_ACCOUNT_JSON (inline JSON) > GOOGLE_APPLICATION_CREDENTIALS
  > .secrets/service-account.json
`.trimStart()

/**
 * Parse CLI arguments into a plain options object.
 * Kept free of side effects so it stays trivially testable.
 *
 * @param {string[]} argv
 */
export function parseArgs(argv) {
  const options = {
    check: null,
    grant: false,
    revoke: false,
    email: null,
    uid: null,
    password: null,
    project: null,
    help: false,
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    const next = () => {
      index += 1
      const value = argv[index]
      if (value === undefined || value.startsWith('--')) {
        throw new Error(`Missing value for ${arg}`)
      }
      return value
    }

    switch (arg) {
      case '--check':
        options.check = next()
        break
      case '--grant':
        options.grant = true
        break
      case '--revoke':
        options.revoke = true
        break
      case '--email':
        options.email = next()
        break
      case '--uid':
        options.uid = next()
        break
      case '--password':
        options.password = next()
        break
      case '--project':
        options.project = next()
        break
      case '--help':
      case '-h':
        options.help = true
        break
      default:
        throw new Error(`Unknown argument: ${arg}`)
    }
  }

  return options
}

/**
 * Validate parsed options and return the resolved mode.
 *
 * @param {ReturnType<typeof parseArgs>} options
 */
function resolveMode(options) {
  const modes = [Boolean(options.check), options.grant, options.revoke].filter(
    Boolean
  )

  if (modes.length === 0) {
    throw new Error('Specify exactly one of: --check, --grant, --revoke')
  }
  if (modes.length > 1) {
    throw new Error('Use only one of: --check, --grant, --revoke')
  }
  if (!options.email && !options.uid) {
    throw new Error('Target user is required: pass --email or --uid')
  }
  if (options.check && options.password) {
    throw new Error('--check is read-only, drop --password')
  }
  if (options.password && options.password.length < 6) {
    throw new Error('Password must be at least 6 characters')
  }

  return options.check ? 'check' : options.grant ? 'grant' : 'revoke'
}

/**
 * Load a service account key from env vars or the default local path.
 * Returns null when neither is available so the caller can fall back to ADC.
 */
function loadServiceAccount() {
  const inline = process.env.FIREBASE_SERVICE_ACCOUNT_JSON
  if (inline) {
    return JSON.parse(inline)
  }

  const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || DEFAULT_KEY_PATH
  if (fs.existsSync(keyPath)) {
    return JSON.parse(fs.readFileSync(keyPath, 'utf8'))
  }

  return null
}

function initFirebaseApp(projectId) {
  const existing = getApps()
  if (existing.length > 0) {
    return existing[0]
  }

  const serviceAccount = loadServiceAccount()

  return initializeApp(
    serviceAccount
      ? { credential: cert(serviceAccount), projectId }
      : { credential: applicationDefault(), projectId }
  )
}

/**
 * @param {import('firebase-admin/auth').UserRecord} user
 */
function printUser(user) {
  const providers = (user.providerUserInfo ?? []).map(
    (provider) => provider.providerId
  )
  const hasPassword = providers.includes('password')

  console.log(`uid:            ${user.uid}`)
  console.log(`email:          ${user.email ?? '(none)'}`)
  console.log(`disabled:       ${user.disabled}`)
  console.log(`providers:      ${providers.join(', ') || '(none)'}`)
  console.log(`customClaims:   ${JSON.stringify(user.customClaims ?? {})}`)

  if (!hasPassword) {
    console.log(
      '\nWARNING: this account has no "password" provider. Password sign-in ' +
        'will fail with auth/invalid-credential. Use --grant --password to set one.'
    )
  }
  if (user.disabled) {
    console.log('\nWARNING: the account is disabled, sign-in is rejected.')
  }
}

/**
 * @param {import('firebase-admin/auth').Auth} auth
 * @param {{email: string|null, uid: string|null}} target
 */
async function findUser(auth, target) {
  try {
    return target.uid
      ? await auth.getUser(target.uid)
      : await auth.getUserByEmail(target.email)
  } catch (error) {
    if (error?.code === 'auth/user-not-found') {
      return null
    }
    throw error
  }
}

async function main() {
  let options
  try {
    options = parseArgs(process.argv.slice(2))
  } catch (error) {
    console.error(`Error: ${error.message}\n`)
    console.error(USAGE)
    process.exitCode = 1
    return
  }

  if (options.help) {
    console.log(USAGE)
    return
  }

  let mode
  try {
    mode = resolveMode(options)
  } catch (error) {
    console.error(`Error: ${error.message}\n`)
    console.error(USAGE)
    process.exitCode = 1
    return
  }

  const app = initFirebaseApp(options.project ?? undefined)
  const auth = getAuth(app)

  const user = await findUser(auth, options)

  if (mode === 'check') {
    if (!user) {
      console.error(
        `No user found for ${options.check ?? options.email ?? options.uid} in project ` +
          `"${app.options.projectId ?? 'unknown'}".`
      )
      process.exitCode = 1
      return
    }
    printUser(user)
    return
  }

  if (mode === 'grant') {
    let targetUser = user

    if (!targetUser) {
      if (!options.email) {
        throw new Error('Creating a user requires --email')
      }
      if (!options.password) {
        throw new Error('Creating a user requires --password')
      }
      targetUser = await auth.createUser({
        email: options.email,
        password: options.password,
        emailVerified: false,
      })
      console.log(`Created user ${targetUser.uid} (${options.email})`)
    } else if (options.password) {
      await auth.updateUser(targetUser.uid, { password: options.password })
      console.log(`Password updated for ${targetUser.uid}`)
    }

    const claims = { ...(targetUser.customClaims ?? {}), admin: true }
    await auth.setCustomUserClaims(targetUser.uid, claims)

    const verified = await auth.getUser(targetUser.uid)
    console.log('\nDone. Verified state:')
    printUser(verified)
    console.log(
      '\nNOTE: the current ID token stays valid for up to 1h. Log out and log ' +
        'back in to pick up the new claim.'
    )
    return
  }

  // mode === 'revoke'
  if (!user) {
    throw new Error('Target user not found')
  }
  // Setting a claim to null removes it.
  await auth.setCustomUserClaims(user.uid, {
    ...(user.customClaims ?? {}),
    admin: null,
  })

  const verified = await auth.getUser(user.uid)
  console.log('Done. Verified state:')
  printUser(verified)
}

main().catch((error) => {
  console.error(`\nFailed: ${error.message ?? error}`)
  if (error?.code) {
    console.error(`Firebase error code: ${error.code}`)
  }
  process.exitCode = 1
})
