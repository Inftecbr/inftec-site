/** Variáveis VITE_* lidas em build/dev — única camada de leitura de import.meta.env. */

export const AUTH0_CONFIG_ERROR_MESSAGE =
  'Auth0 não configurado corretamente. Verifique .env.local.'

export const AUTH0_REQUIRED_ENV_KEYS = [
  'VITE_AUTH0_DOMAIN',
  'VITE_AUTH0_CLIENT_ID',
  'VITE_AUTH0_AUDIENCE',
] as const

export type Auth0RequiredEnvKey = (typeof AUTH0_REQUIRED_ENV_KEYS)[number]

const viteEnv = import.meta.env

function readEnv(key: string): string {
  const value = viteEnv[key as keyof ImportMetaEnv]
  if (value === undefined || value === null) return ''
  return String(value).trim()
}

/** Normaliza domain Auth0 (sem protocolo, sem barra final). */
export function normalizeAuth0Domain(raw: string): string {
  let value = raw.trim()
  if (!value) return ''
  value = value.replace(/^https?:\/\//i, '')
  value = value.replace(/\/+$/, '')
  return value
}

export function getMissingEnvVars(keys: readonly string[] = AUTH0_REQUIRED_ENV_KEYS): string[] {
  return keys.filter((key) => !readEnv(key))
}

export function validateRequiredEnv(keys: readonly string[] = AUTH0_REQUIRED_ENV_KEYS): {
  valid: boolean
  missing: string[]
} {
  const missing = getMissingEnvVars(keys)
  return { valid: missing.length === 0, missing }
}

export const runtimeEnv = {
  auth0Domain: normalizeAuth0Domain(readEnv('VITE_AUTH0_DOMAIN')),
  auth0ClientId: readEnv('VITE_AUTH0_CLIENT_ID'),
  auth0Audience: readEnv('VITE_AUTH0_AUDIENCE'),
  auth0CallbackPath: readEnv('VITE_AUTH0_CALLBACK_PATH') || '/app',
  apiBaseUrl: readEnv('VITE_API_BASE_URL').replace(/\/$/, ''),
  portalSwaggerUrl: readEnv('VITE_INFTEC_PORTAL_SWAGGER_URL'),
  mode: viteEnv.MODE,
  dev: viteEnv.DEV,
  prod: viteEnv.PROD,
} as const

export function maskClientId(clientId: string): string {
  if (!clientId) return '(não definido — preencha .env.local)'
  if (clientId.length <= 10) return '***'
  return `${clientId.slice(0, 6)}…${clientId.slice(-3)}`
}

export function getAppEnvironmentLabel(): 'local' | 'production' {
  const base = runtimeEnv.apiBaseUrl.toLowerCase()
  if (!base || base.includes('localhost') || base.includes('127.0.0.1')) {
    return 'local'
  }
  return 'production'
}

/** Dev: aviso explícito no console se Auth0 incompleto. */
export function reportEnvIssuesInDev(): void {
  if (!import.meta.env.DEV) return
  const { valid, missing } = validateRequiredEnv()
  if (valid) {
    console.info('[env] Auth0: variáveis obrigatórias presentes (.env.local carregado).')
    return
  }
  console.error(`[env] ${AUTH0_CONFIG_ERROR_MESSAGE}`)
  console.error('[env] Variáveis ausentes ou vazias:', missing.join(', '))
  console.error('[env] Crie/atualize .env.local e reinicie `npm run dev` (Vite não recarrega env em hot reload).')
}
