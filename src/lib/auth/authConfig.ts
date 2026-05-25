import {
  AUTH0_CONFIG_ERROR_MESSAGE,
  AUTH0_REQUIRED_ENV_KEYS,
  runtimeEnv,
  validateRequiredEnv,
} from '../envConfig'

export { AUTH0_CONFIG_ERROR_MESSAGE, validateRequiredEnv } from '../envConfig'
export { getMissingEnvVars } from '../envConfig'

export const auth0Env = {
  domain: runtimeEnv.auth0Domain,
  clientId: runtimeEnv.auth0ClientId,
  audience: runtimeEnv.auth0Audience,
  callbackPath: runtimeEnv.auth0CallbackPath,
} as const

export function getAuth0RedirectUri(): string {
  if (typeof window === 'undefined') {
    return `https://inftec.com.br${auth0Env.callbackPath}`
  }
  return `${window.location.origin}${auth0Env.callbackPath}`
}

export function getAuth0LogoutReturnTo(): string {
  if (typeof window === 'undefined') {
    return 'https://inftec.com.br/'
  }
  return `${window.location.origin}/`
}

export function isAuth0Configured(): boolean {
  return validateRequiredEnv(AUTH0_REQUIRED_ENV_KEYS).valid
}

/** Problemas de config visíveis no portal (sem expor segredos). */
export function getAuth0ConfigIssues(): string[] {
  const issues: string[] = []
  const { missing } = validateRequiredEnv(AUTH0_REQUIRED_ENV_KEYS)

  for (const key of missing) {
    if (key === 'VITE_AUTH0_DOMAIN') {
      issues.push(`${key} está vazio — ex.: prod-inftec-saas.us.auth0.com (sem https://)`)
    } else if (key === 'VITE_AUTH0_CLIENT_ID') {
      issues.push(
        `${key} está vazio — Client ID da SPA "Inftec Portal" no Auth0 (não é o Identifier da API)`
      )
    } else if (key === 'VITE_AUTH0_AUDIENCE') {
      issues.push(`${key} está vazio — use https://api.saas.inftec.com`)
    } else {
      issues.push(`${key} está vazio`)
    }
  }

  const rawDomainInput = (import.meta.env.VITE_AUTH0_DOMAIN ?? '').trim()
  if (rawDomainInput && /^https?:\/\//i.test(rawDomainInput)) {
    issues.push('VITE_AUTH0_DOMAIN não deve incluir https://')
  }

  if (auth0Env.audience && auth0Env.audience !== 'https://api.saas.inftec.com') {
    issues.push(
      `VITE_AUTH0_AUDIENCE="${auth0Env.audience}" — esperado https://api.saas.inftec.com (Inftec SaaS API)`
    )
  }

  if (auth0Env.callbackPath !== '/app') {
    issues.push(`VITE_AUTH0_CALLBACK_PATH="${auth0Env.callbackPath}" — esperado /app`)
  }

  if (!runtimeEnv.apiBaseUrl) {
    issues.push('VITE_API_BASE_URL está vazio — ex.: http://localhost:5000')
  }

  if (issues.length === 0 && !isAuth0Configured()) {
    issues.push(AUTH0_CONFIG_ERROR_MESSAGE)
  }

  return issues
}

export const PORTAL_LOGIN_RETURN_TO = '/app'

export function getLoginAuthorizationParams() {
  return {
    redirect_uri: getAuth0RedirectUri(),
    ...(auth0Env.audience ? { audience: auth0Env.audience } : {}),
  }
}
