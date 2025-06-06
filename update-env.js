import fs from 'fs'
import path from 'path'
import { fileURLToPath, } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Получаем текущую дату и время
const now = new Date()
const buildDate = now.toISOString().replace('T', ' ').substring(0, 19)

// Получаем версию из package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'))
const version = packageJson.version

// Читаем файл .env
const envPath = path.join(__dirname, '.env')
let envContent = fs.readFileSync(envPath, 'utf8')

// Обновляем переменные
envContent = envContent.replace(/VITE_BUILD_DATE=.*/, `VITE_BUILD_DATE=${buildDate}`)
envContent = envContent.replace(/VITE_VERSION=.*/, `VITE_VERSION=${version}`)

// Записываем обновленный файл
fs.writeFileSync(envPath, envContent)

console.warn(`Updated .env with build date: ${buildDate} and version: ${version}`)
