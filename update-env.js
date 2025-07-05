import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Получаем текущую дату и время в локальном часовом поясе
const now = new Date()
const buildDate = now
  .toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  .replace(',', '')

// Получаем версию из package.json
const packageJsonPath = path.join(__dirname, 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
let version = packageJson.version

// Инкремент патч-версии (третье число)
const versionParts = version.split('.')

versionParts[2] = parseInt(versionParts[2]) + 1
if (parseInt(versionParts[2]) > 99) {
  versionParts[1] = parseInt(versionParts[1]) + 1
  versionParts[2] = '0'
  if (parseInt(versionParts[1]) > 99) {
    versionParts[0] = parseInt(versionParts[0]) + 1
    versionParts[1] = '0'
  }
}
version = versionParts.join('.')

// Обновляем версию в package.json
packageJson.version = version
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

// Читаем файл .env
const envPath = path.join(__dirname, '.env')
let envContent = fs.readFileSync(envPath, 'utf8')

// Обновляем переменные
envContent = envContent.replace(
  /VITE_BUILD_DATE=.*/,
  `VITE_BUILD_DATE=${buildDate}`
)
envContent = envContent.replace(/VITE_VERSION=.*/, `VITE_VERSION=${version}`)
envContent = envContent.replace(
  /VITE_APP_VERSION=.*/,
  `VITE_APP_VERSION=${version}`
)

// Записываем обновленный файл
fs.writeFileSync(envPath, envContent)

// Коммитим изменения версий
try {
  execSync('git add package.json .env')
  execSync(`git commit -m "chore: bump version to ${version}"`)
  execSync('git push')
  console.warn(`Committed version changes: ${version}`)
} catch (error) {
  // amazonq-ignore-next-line
  console.error('Failed to commit version changes:', error.message)
}

console.warn(
  `Updated .env with build date: ${buildDate} and version: ${version}`
)
