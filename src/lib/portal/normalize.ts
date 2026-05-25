import type {
  PortalFeature,
  PortalInvoice,
  PortalMetaIntegration,
  PortalPlan,
  PortalPricing,
  PortalSubscription,
  PortalTenant,
  PortalUser,
} from '../../types/portal/models'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function unwrapList(data: unknown): unknown[] {
  if (Array.isArray(data)) return data
  if (!isRecord(data)) return []
  for (const key of ['items', 'data', 'results', 'usuarios', 'users', 'tenants', 'plans', 'features', 'invoices']) {
    const nested = data[key]
    if (Array.isArray(nested)) return nested
  }
  return []
}

function str(value: unknown, fallback = ''): string {
  if (value === null || value === undefined) return fallback
  if (typeof value === 'string') return value
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  return fallback
}

function bool(value: unknown): boolean {
  if (typeof value === 'boolean') return value
  if (typeof value === 'string') {
    const v = value.toLowerCase()
    if (v === 'true' || v === 'blocked' || v === 'bloqueado' || v === 'inactive') return true
    if (v === 'false' || v === 'active' || v === 'ativo') return false
  }
  return Boolean(value)
}

export function mapUser(row: unknown): PortalUser | null {
  if (!isRecord(row)) return null
  const id = str(row.id ?? row.userId ?? row.usuarioId)
  if (!id) return null
  const blocked =
    bool(row.blocked ?? row.bloqueado ?? row.isBlocked) ||
    str(row.status ?? row.estado).toLowerCase().includes('block')
  const active = row.active ?? row.ativo
  const statusLabel = blocked
    ? 'Bloqueado'
    : active === false
      ? 'Inativo'
      : 'Ativo'
  return {
    id,
    email: str(row.email ?? row.eMail),
    name: str(row.name ?? row.nome ?? row.displayName, '—'),
    blocked,
    statusLabel,
    raw: row,
  }
}

export function mapUsers(data: unknown): PortalUser[] {
  return unwrapList(data)
    .map(mapUser)
    .filter((u): u is PortalUser => u !== null)
}

export function mapTenant(row: unknown, source: PortalTenant['source'] = 'api'): PortalTenant | null {
  if (!isRecord(row)) return null
  const id = str(row.id ?? row.tenantId ?? row.slug)
  if (!id) return null

  const subscription = isRecord(row.subscription)
    ? row.subscription
    : isRecord(row.activeSubscription)
      ? row.activeSubscription
      : null
  const billing = isRecord(row.billing)
    ? row.billing
    : isRecord(row.billingSummary)
      ? row.billingSummary
      : null

  const planId =
    str(row.planId ?? row.planoId) ||
    (isRecord(row.plan) ? str(row.plan.id ?? row.plan.planId) : '') ||
    undefined
  const planName =
    str(row.planName ?? row.plano) ||
    (isRecord(row.plan) ? str(row.plan.name ?? row.plan.nome) : '') ||
    undefined

  let billingSummary = str(row.billingSummaryLabel ?? row.billingStatus)
  if (!billingSummary && billing) {
    const pending = billing.pendingInvoices ?? billing.pendingCount ?? billing.openInvoices
    const total = billing.totalDue ?? billing.total ?? billing.amount
    if (pending !== undefined || total !== undefined) {
      const parts: string[] = []
      if (pending !== undefined) parts.push(`${str(pending)} pendentes`)
      if (total !== undefined) parts.push(`total ${str(total)}`)
      billingSummary = parts.join(' · ') || undefined
    }
  }

  const pendingRaw = row.pendingInvoicesCount ?? row.pendingInvoices ?? (billing ? billing.pendingCount : undefined)

  return {
    id,
    name: str(row.name ?? row.nome ?? row.displayName, id),
    slug: str(row.slug ?? row.identifier ?? id),
    statusLabel: str(row.status ?? row.estado, 'Ativo'),
    planId: planId || undefined,
    planName: planName || undefined,
    subscriptionStatus:
      str(row.subscriptionStatus) ||
      (subscription ? str(subscription.status ?? subscription.estado) : '') ||
      undefined,
    subscriptionPlanId:
      str(row.subscriptionPlanId) ||
      (subscription ? str(subscription.planId ?? subscription.planoId) : '') ||
      undefined,
    billingSummary: billingSummary || undefined,
    pendingInvoicesCount:
      typeof pendingRaw === 'number'
        ? pendingRaw
        : pendingRaw !== undefined && pendingRaw !== ''
          ? Number(pendingRaw)
          : undefined,
    source,
    raw: row,
  }
}

export function mapTenants(data: unknown, source: PortalTenant['source'] = 'api'): PortalTenant[] {
  return unwrapList(data)
    .map((r) => mapTenant(r, source))
    .filter((t): t is PortalTenant => t !== null)
}

export function mapPlan(row: unknown): PortalPlan | null {
  if (!isRecord(row)) return null
  const id = str(row.id ?? row.planId)
  if (!id) return null
  const active = row.active === false || row.ativo === false ? false : true
  return {
    id,
    name: str(row.name ?? row.nome, id),
    code: str(row.code ?? row.codigo ?? row.key, id),
    description: str(row.description ?? row.descricao),
    active,
    raw: row,
  }
}

export function mapPlans(data: unknown): PortalPlan[] {
  return unwrapList(data)
    .map(mapPlan)
    .filter((p): p is PortalPlan => p !== null)
}

export function mapFeature(row: unknown): PortalFeature | null {
  if (!isRecord(row)) return null
  const key = str(row.key ?? row.featureKey ?? row.codigo)
  const id = str(row.id ?? key)
  if (!id && !key) return null
  return {
    id: id || key,
    key: key || id,
    name: str(row.name ?? row.nome, key || id),
    description: str(row.description ?? row.descricao),
    category: str(row.category ?? row.categoria ?? row.type ?? row.tipo, 'Geral'),
    raw: row,
  }
}

export function mapFeatures(data: unknown): PortalFeature[] {
  return unwrapList(data)
    .map(mapFeature)
    .filter((f): f is PortalFeature => f !== null)
}

export function mapInvoice(row: unknown): PortalInvoice | null {
  if (!isRecord(row)) return null
  const id = str(row.id ?? row.invoiceId)
  if (!id) return null
  return {
    id,
    status: str(row.status ?? row.estado, '—'),
    amount: str(row.amount ?? row.valor ?? row.total),
    currency: str(row.currency ?? row.moeda, 'BRL'),
    tenantId: str(row.tenantId ?? row.tenant),
    dueDate: str(row.dueDate ?? row.vencimento ?? row.due),
    raw: row,
  }
}

export function mapInvoices(data: unknown): PortalInvoice[] {
  return unwrapList(data)
    .map(mapInvoice)
    .filter((i): i is PortalInvoice => i !== null)
}

export function mapPricing(row: unknown): PortalPricing | null {
  if (!isRecord(row)) return null
  const feature = str(row.feature ?? row.featureKey ?? row.key)
  const id = str(row.id ?? feature)
  if (!id && !feature) return null
  return {
    id: id || feature,
    feature: feature || id,
    amount: str(row.amount ?? row.price ?? row.valor),
    currency: str(row.currency ?? row.moeda, 'BRL'),
    active: row.active === undefined ? true : Boolean(row.active),
    raw: row,
  }
}

export function mapPricingList(data: unknown): PortalPricing[] {
  const list = unwrapList(data)
  if (list.length === 0 && isRecord(data)) {
    const single = mapPricing(data)
    return single ? [single] : []
  }
  return list
    .map(mapPricing)
    .filter((p): p is PortalPricing => p !== null)
}

export function mapSubscription(data: unknown): PortalSubscription | null {
  const row = Array.isArray(data) ? data[0] : data
  if (!isRecord(row)) return null
  const id = str(row.id ?? row.subscriptionId, 'active')
  return {
    id,
    status: str(row.status ?? row.estado, '—'),
    planId: str(row.planId ?? row.planoId),
    planName: str(row.planName ?? row.plano),
    tenantId: str(row.tenantId ?? row.tenant),
    startedAt: str(row.startedAt ?? row.inicio ?? row.startDate),
    endsAt: str(row.endsAt ?? row.fim ?? row.endDate),
    raw: row,
  }
}

export function mapMetaIntegration(data: unknown): PortalMetaIntegration {
  if (!isRecord(data) || Object.keys(data).length === 0) {
    return {
      configured: false,
      statusLabel: 'Não configurada',
      appId: '',
      pageId: '',
      raw: {},
    }
  }
  return {
    configured: true,
    statusLabel: str(data.status ?? data.estado, 'Configurada'),
    appId: str(data.appId ?? data.app_id),
    pageId: str(data.pageId ?? data.page_id),
    raw: data,
  }
}

export function mapPlanFeatureKeys(data: unknown): string[] {
  const rows = unwrapList(data)
  if (rows.length === 0 && isRecord(data)) {
    for (const k of ['features', 'keys', 'items']) {
      const nested = data[k]
      if (Array.isArray(nested)) return nested.map((x) => (typeof x === 'string' ? x : str((x as Record<string, unknown>).key)))
    }
  }
  return rows
    .map((row) => {
      if (typeof row === 'string') return row
      if (isRecord(row)) return str(row.key ?? row.featureKey ?? row.feature)
      return ''
    })
    .filter(Boolean)
}
