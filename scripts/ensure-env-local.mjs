import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const target = path.join(root, '.env.local')
const templatePath = path.join(root, 'scripts', 'env-local-template.txt')

if (fs.existsSync(target)) {
  console.log('.env.local já existe — nada alterado (evita sobrescrever seu Client ID).')
  process.exit(0)
}

if (!fs.existsSync(templatePath)) {
  console.error('Template não encontrado:', templatePath)
  process.exit(1)
}

fs.copyFileSync(templatePath, target)
console.log('Criado .env.local — preencha VITE_AUTH0_CLIENT_ID e reinicie: npm run dev')
