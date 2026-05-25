import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const localSpec = path.join(root, 'openapi', 'inftec-portal.swagger.json')
const outFile = path.join(root, 'src', 'types', 'portal', 'openapi.d.ts')

const url =
  process.env.VITE_INFTEC_PORTAL_SWAGGER_URL ??
  process.env.PORTAL_SWAGGER_URL ??
  'http://localhost:5000/swagger/inftec-portal/swagger.json'

async function main() {
  let specPath = localSpec
  if (!fs.existsSync(localSpec)) {
    console.log(`Baixando OpenAPI de ${url}…`)
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status} ao baixar swagger`)
    fs.mkdirSync(path.dirname(localSpec), { recursive: true })
    const text = await res.text()
    fs.writeFileSync(localSpec, text)
    specPath = localSpec
  }

  const { execSync } = await import('node:child_process')
  execSync(`npx openapi-typescript "${specPath}" -o "${outFile}"`, { stdio: 'inherit', cwd: root })
  console.log(`Tipos gerados em ${outFile}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
