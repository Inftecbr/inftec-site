import { getAppEnvironmentLabel, runtimeEnv } from './envConfig'

export const appEnv = {
  apiBaseUrl: runtimeEnv.apiBaseUrl,
  portalSwaggerUrl: runtimeEnv.portalSwaggerUrl,
} as const

export type AppEnvironment = 'local' | 'production'

export function getAppEnvironment(): AppEnvironment {
  return getAppEnvironmentLabel()
}

/** URL exibida em erros de rede — só usa valor configurado (sem fallback hardcoded). */
export function getConfiguredApiBaseUrlForDisplay(): string {
  return runtimeEnv.apiBaseUrl || '(VITE_API_BASE_URL não definida)'
}
