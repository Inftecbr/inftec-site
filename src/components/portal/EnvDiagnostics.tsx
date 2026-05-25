import {
  AUTH0_CONFIG_ERROR_MESSAGE,
  getAppEnvironmentLabel,
  maskClientId,
  runtimeEnv,
  validateRequiredEnv,
} from '../../lib/envConfig'
import { auth0Env } from '../../lib/auth/authConfig'

export default function EnvDiagnostics({ compact = false }: { compact?: boolean }) {
  const { valid, missing } = validateRequiredEnv()
  const environment = getAppEnvironmentLabel()

  const rows = [
    { label: 'Ambiente', value: environment === 'local' ? 'Local' : 'Produção' },
    { label: 'Modo Vite', value: runtimeEnv.mode },
    { label: 'Domínio Auth0', value: auth0Env.domain || '(não definido)' },
    { label: 'Client ID', value: maskClientId(auth0Env.clientId) },
    { label: 'Audience', value: auth0Env.audience || '(não definido)' },
    { label: 'Callback', value: auth0Env.callbackPath },
    {
      label: 'Redirect URI (runtime)',
      value:
        typeof window !== 'undefined'
          ? `${window.location.origin}${auth0Env.callbackPath}`
          : '—',
    },
    { label: 'URL base da API', value: runtimeEnv.apiBaseUrl || '(não definido)' },
    { label: 'Idioma do console', value: 'pt-BR (fixo — sem i18n)' },
  ]

  return (
    <div className={compact ? 'space-y-3' : 'mt-6 space-y-4'}>
      {!valid && (
        <div className="rounded-lg border border-warning/40 bg-warning/5 p-4 text-sm">
          <p className="font-medium text-warning">{AUTH0_CONFIG_ERROR_MESSAGE}</p>
          {missing.length > 0 && (
            <ul className="mt-2 list-disc pl-5 text-text-primary space-y-1">
              {missing.map((key) => (
                <li key={key}>
                  <span className="font-mono text-xs">{key}</span> ausente ou vazio
                </li>
              ))}
            </ul>
          )}
          <p className="mt-2 text-text-secondary text-xs">
            Rode <span className="font-mono">npm run env:setup</span> se não tiver .env.local. Reinicie{' '}
            <span className="font-mono">npm run dev</span> após editar variáveis.
          </p>
        </div>
      )}

      <div className="rounded-xl border border-border bg-bg-secondary p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Configuração carregada (Vite)
        </p>
        <dl className={`mt-3 ${compact ? 'space-y-2' : 'grid gap-3 sm:grid-cols-2'}`}>
          {rows.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-xs text-text-muted">{label}</dt>
              <dd className="mt-0.5 font-mono text-xs text-text-primary break-all">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
