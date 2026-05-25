import { useAuth0 } from '@auth0/auth0-react'
import EnvDiagnostics from '../../components/portal/EnvDiagnostics'
import PortalApiTest from '../../components/portal/PortalApiTest'
import { PortalDataCard, PortalPageHeader, PortalToolBadge } from '../../components/portal/ui'
import { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'
import { useConsolePreferences } from '../../features/console-preferences/ConsolePreferencesContext'
import { CONSOLE_PREFS_STORAGE_KEY } from '../../features/console-preferences/consolePreferencesStorage'
import { auth0Env } from '../../lib/auth/authConfig'
import { inftecPortalEndpoints } from '../../lib/api/endpoints'
import { getAppEnvironment, getConfiguredApiBaseUrlForDisplay } from '../../lib/env'
import { maskClientId, runtimeEnv } from '../../lib/envConfig'
import { clearPortalErrorLog, getPortalErrorLog } from '../../lib/portal/portalErrorLog'
import { usePortalApiProbeQuery, usePortalPlansQuery, usePortalTenantsQuery, usePortalUsersQuery } from '../../portal/query/hooks'
import { PortalActionButton } from '../../components/portal/layout/PortalPageToolbar'
import { useState } from 'react'

const PRIMARY_ENDPOINTS = [
  'GET /tenants?take=',
  'POST /tenants/{tenantId}/plan',
  'GET /tenants/{tenantId}/subscriptions/active',
  'GET /tenants/{tenantId}/billing/invoices',
  'GET /plans',
  'GET /features',
  'GET /billing/invoices',
  'GET /integrations/meta',
] as const

export default function PortalDiagnosticsPage() {
  const probe = usePortalApiProbeQuery()
  const tenantsProbe = usePortalTenantsQuery()
  const usersProbe = usePortalUsersQuery()
  const plansProbe = usePortalPlansQuery()
  const env = getAppEnvironment()
  const { isAuthenticated, isLoading: authLoading, user } = useAuth0()
  const { density, advancedTools } = useConsolePreferences()
  const [errorLogTick, setErrorLogTick] = useState(0)
  const errors = getPortalErrorLog()

  return (
    <div className="portal-section-stack flex flex-col">
      <PortalPageHeader
        title="Diagnóstico técnico"
        description="Centro de troubleshooting — runtime, auth, API e estado do console administrativo."
        actions={<PortalToolBadge label="Somente equipe INFTEC" />}
        kicker=""
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat label="Ambiente" value={env === 'local' ? 'Local' : 'Produção'} />
        <Stat label="Vite mode" value={runtimeEnv.mode} />
        <Stat label="Versão portal" value="inftec-site@0.1.0" />
        <Stat
          label="Auth"
          value={authLoading ? 'Verificando…' : isAuthenticated ? 'Sessão ativa' : 'Não autenticado'}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-bg-secondary/40 p-4">
          <p className="text-xs text-text-muted">API base</p>
          <p className="mt-1 font-mono text-xs break-all">{getConfiguredApiBaseUrlForDisplay()}</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-secondary/40 p-4">
          <p className="text-xs text-text-muted">Probe API</p>
          <p className="mt-2">
            {probe.isLoading ? (
              'Verificando…'
            ) : (
              <PortalStatusBadge
                label={probe.data?.ok ? `OK (${probe.data.endpoint})` : 'Falha'}
                tone={probe.data?.ok ? 'success' : 'warning'}
              />
            )}
          </p>
          {probe.data && !probe.data.ok ? (
            <p className="mt-2 text-xs text-text-muted">{probe.data.message}</p>
          ) : null}
        </div>
        <div className="rounded-xl border border-border bg-bg-secondary/40 p-4">
          <p className="text-xs text-text-muted">Console preferences</p>
          <dl className="mt-2 text-xs space-y-1">
            <div>
              <span className="text-text-muted">Densidade: </span>
              <span className="font-medium">{density}</span>
            </div>
            <div>
              <span className="text-text-muted">Modo avançado: </span>
              <span className="font-medium">{advancedTools ? 'ativo' : 'desligado'}</span>
            </div>
            <div>
              <span className="text-text-muted">Idioma: </span>
              <span className="font-medium">pt-BR (fixo)</span>
            </div>
            <div className="font-mono text-[10px] text-text-muted break-all">{CONSOLE_PREFS_STORAGE_KEY}</div>
          </dl>
        </div>
      </div>

      <PortalDataCard title="Saúde dos endpoints (autenticado)">
        <ul className="p-4 space-y-3 text-sm">
          <EndpointRow label="GET /tenants?take=" query={tenantsProbe} count={tenantsProbe.data?.length} />
          <EndpointRow label="GET /usuarios" query={usersProbe} count={usersProbe.data?.length} />
          <EndpointRow label="GET /plans" query={plansProbe} count={plansProbe.data?.length} />
        </ul>
      </PortalDataCard>

      <PortalDataCard title="Auth0 & runtime">
        <dl className="p-4 grid gap-3 sm:grid-cols-2 text-sm">
          <Row label="Auth0 domain" value={auth0Env.domain || '—'} />
          <Row label="Client ID" value={maskClientId(auth0Env.clientId)} />
          <Row label="Audience" value={auth0Env.audience || '—'} />
          <Row label="Callback" value={auth0Env.callbackPath} />
          <Row label="Usuário" value={user?.email ?? user?.sub ?? '—'} />
          <Row label="Tenant context (Auth0)" value={(user as { org_id?: string })?.org_id ?? '— (não exposto no token)'} />
        </dl>
      </PortalDataCard>

      <PortalDataCard title="Endpoints principais (jornada comercial)">
        <ul className="p-4 text-xs font-mono text-text-secondary space-y-1">
          {PRIMARY_ENDPOINTS.map((ep) => (
            <li key={ep}>{ep}</li>
          ))}
        </ul>
        <p className="px-4 pb-4 text-xs text-text-muted">
          Mapa completo em código: <span className="font-mono">inftecPortalEndpoints</span> (
          {Object.keys(inftecPortalEndpoints).length} grupos)
        </p>
      </PortalDataCard>

      <PortalDataCard title="Erros recentes (sessão)">
        <div className="p-4">
          {errors.length === 0 ? (
            <p className="text-sm text-text-secondary">Nenhum erro registrado nesta sessão do console.</p>
          ) : (
            <ul className="space-y-2 text-xs">
              {errors.map((e, i) => (
                <li key={`${e.at}-${i}`} className="rounded-lg border border-border bg-bg-secondary/40 p-2">
                  <span className="font-mono text-text-muted">{e.at}</span>
                  <p className="mt-1 text-text-primary">{e.message}</p>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4">
            <PortalActionButton
              onClick={() => {
                clearPortalErrorLog()
                setErrorLogTick((n) => n + 1)
              }}
            >
              Limpar log
            </PortalActionButton>
          </div>
        </div>
      </PortalDataCard>

      <EnvDiagnostics compact />
      <PortalDataCard title="Teste autenticado">
        <div className="p-4">
          <PortalApiTest />
        </div>
      </PortalDataCard>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg-secondary/40 p-4">
      <p className="text-xs text-text-muted">{label}</p>
      <p className="mt-1 font-medium text-sm break-all">{value}</p>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-text-muted text-xs">{label}</dt>
      <dd className="font-mono text-xs text-text-primary break-all mt-0.5">{value}</dd>
    </div>
  )
}

function EndpointRow({
  label,
  query,
  count,
}: {
  label: string
  query: { isLoading: boolean; isError: boolean; isFetching: boolean; refetch: () => void }
  count?: number
}) {
  return (
    <li className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-2 last:border-0 last:pb-0">
      <span className="font-mono text-xs">{label}</span>
      <div className="flex items-center gap-2">
        {query.isLoading ? (
          <PortalStatusBadge label="Carregando" tone="muted" />
        ) : query.isError ? (
          <PortalStatusBadge label="Erro" tone="warning" />
        ) : (
          <PortalStatusBadge label={`OK (${count ?? 0})`} tone="success" />
        )}
        <PortalActionButton onClick={() => void query.refetch()} disabled={query.isFetching}>
          Testar
        </PortalActionButton>
      </div>
    </li>
  )
}
