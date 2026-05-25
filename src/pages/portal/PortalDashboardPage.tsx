import { Link } from 'react-router-dom'
import { PortalModuleCard, PortalPageHeader } from '../../components/portal/ui'
import PortalDataGrid, { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'
import { PORTAL_MODULES } from '../../config/portalNavigation'
import { usePortalDashboardSnapshot } from '../../portal/query/hooks'
import { isPendingInvoice, tenantMissingPlan } from '../../lib/portal/filters'
import type { PortalTenant } from '../../types/portal/models'

type JourneyRow = {
  id: string
  label: string
  value: string
  hint: string
  ok: boolean
  actionLabel: string
  actionTo: string
}

function countTenantsWithoutPlan(tenants: PortalTenant[] | undefined): number {
  if (!tenants) return 0
  return tenants.filter(tenantMissingPlan).length
}

function countActiveSubscriptions(tenants: PortalTenant[] | undefined): number {
  if (!tenants) return 0
  return tenants.filter((t) => {
    const s = (t.subscriptionStatus ?? '').toLowerCase()
    return s.includes('active') || s.includes('ativo') || s === 'ok'
  }).length
}

export default function PortalDashboardPage() {
  const { users, tenants, plans, invoices, meta, probe } = usePortalDashboardSnapshot()

  const tenantList = tenants.data ?? []
  const withoutPlan = countTenantsWithoutPlan(tenantList)
  const activeSubs = countActiveSubscriptions(tenantList)
  const pendingInvoices = (invoices.data ?? []).filter(isPendingInvoice).length

  const apiOk = probe.data?.ok
  const apiLabel = probe.isLoading ? 'Verificando…' : apiOk ? 'Operacional' : 'Atenção'

  const journeyRows: JourneyRow[] = [
    {
      id: 'tenants',
      label: 'Tenants (clientes)',
      value: tenants.isLoading ? '…' : String(tenantList.length),
      hint: 'Hub da jornada comercial',
      ok: !tenants.isError && tenantList.length > 0,
      actionLabel: 'Ver tenants',
      actionTo: '/app/tenants',
    },
    {
      id: 'no-plan',
      label: 'Sem plano',
      value: tenants.isLoading ? '…' : String(withoutPlan),
      hint: 'Atribuir plano no detalhe do tenant',
      ok: withoutPlan === 0,
      actionLabel: 'Resolver',
      actionTo: '/app/tenants?filter=missing-plan',
    },
    {
      id: 'subs',
      label: 'Assinaturas ativas (resumo)',
      value: tenants.isLoading ? '…' : String(activeSubs),
      hint: 'Subscription no detalhe de cada tenant',
      ok: activeSubs > 0,
      actionLabel: 'Ver tenants',
      actionTo: '/app/tenants',
    },
    {
      id: 'invoices',
      label: 'Faturas pendentes (global)',
      value: invoices.isLoading ? '…' : String(pendingInvoices),
      hint: 'Operação por tenant no detalhe do cliente',
      ok: pendingInvoices === 0,
      actionLabel: 'Ver billing',
      actionTo: '/app/billing?filter=pending',
    },
    {
      id: 'plans',
      label: 'Planos no catálogo',
      value: plans.isLoading ? '…' : String(plans.data?.length ?? 0),
      hint: 'Catálogo comercial — não é operação de cliente',
      ok: (plans.data?.length ?? 0) > 0,
      actionLabel: 'Gerenciar planos',
      actionTo: '/app/plans',
    },
    {
      id: 'meta',
      label: 'Integração Meta',
      value: meta.isLoading ? '…' : meta.data?.configured ? 'Configurada' : 'Pendente',
      hint: 'Plataforma global',
      ok: Boolean(meta.data?.configured),
      actionLabel: 'Configurar Meta',
      actionTo: '/app/integrations',
    },
  ]

  return (
    <div className="space-y-8">
      <PortalPageHeader
        title="Visão operacional"
        description="Jornada comercial unificada — operação por tenant, catálogo em Planos/Features, billing global como histórico."
        kicker=""
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Tenants ativos"
          value={tenantList.length}
          to="/app/tenants"
          loading={tenants.isLoading}
        />
        <StatCard
          label="Sem plano"
          value={withoutPlan}
          to="/app/tenants?filter=missing-plan"
          loading={tenants.isLoading}
          tone={withoutPlan > 0 ? 'warning' : undefined}
        />
        <StatCard
          label="Faturas pendentes"
          value={pendingInvoices}
          to="/app/billing?filter=pending"
          loading={invoices.isLoading}
          tone={pendingInvoices > 0 ? 'warning' : undefined}
        />
        <StatCard label="API Portal" value={apiLabel} to="/app/diagnostics" loading={probe.isLoading} tone={apiOk ? 'success' : 'warning'} />
      </div>

      <PortalDataGrid
        rows={journeyRows}
        rowKey={(r) => r.id}
        loading={false}
        columns={[
          { id: 'label', header: 'Indicador', render: (r) => r.label },
          { id: 'value', header: 'Valor', render: (r) => <span className="font-semibold">{r.value}</span> },
          {
            id: 'st',
            header: 'Estado',
            render: (r) => (
              <PortalStatusBadge label={r.ok ? 'OK' : 'Atenção'} tone={r.ok ? 'success' : 'warning'} />
            ),
          },
          { id: 'hint', header: 'Notas', render: (r) => <span className="text-xs text-text-muted">{r.hint}</span> },
        ]}
        actions={(r) => (
          <Link to={r.actionTo} className="text-sm font-medium text-data hover:underline whitespace-nowrap">
            {r.actionLabel}
          </Link>
        )}
      />

      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-2">Atalhos</h2>
        <p className="text-xs text-text-muted mb-4">Usuários: {users.isLoading ? '…' : users.data?.length ?? 0} contas</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTAL_MODULES.map((mod) => (
            <PortalModuleCard key={mod.to} {...mod} />
          ))}
        </div>
      </div>

      {!probe.isLoading && probe.data && !probe.data.ok ? (
        <div className="rounded-xl border border-warning/30 bg-warning/5 p-4 text-sm text-warning">
          {probe.data.message}{' '}
          <Link to="/app/diagnostics" className="underline">
            Abrir diagnóstico
          </Link>
        </div>
      ) : null}
    </div>
  )
}

function StatCard({
  label,
  value,
  to,
  loading,
  tone,
}: {
  label: string
  value: string | number
  to: string
  loading?: boolean
  tone?: 'success' | 'warning'
}) {
  return (
    <Link
      to={to}
      className="rounded-xl border border-border bg-bg-secondary/60 p-5 hover:border-data/30 transition-colors block"
    >
      <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
      <p
        className={`mt-2 text-2xl font-semibold ${tone === 'warning' ? 'text-warning' : tone === 'success' ? 'text-success' : 'text-text-primary'}`}
      >
        {loading ? '…' : value}
      </p>
    </Link>
  )
}
