import type { PortalInvoice, PortalTenant } from '../../types/portal/models'

export type TenantListFilter = 'missing-plan' | null
export type BillingListFilter = 'pending' | null

export function parseTenantListFilter(param: string | null): TenantListFilter {
  if (param === 'missing-plan') return 'missing-plan'
  return null
}

export function parseBillingListFilter(param: string | null): BillingListFilter {
  if (param === 'pending') return 'pending'
  return null
}

export function tenantMissingPlan(t: PortalTenant): boolean {
  return !t.planId && !t.planName
}

export function isPendingInvoice(i: PortalInvoice): boolean {
  const s = i.status.toLowerCase()
  return s.includes('pending') || s.includes('open') || s.includes('pendente') || s.includes('aberta')
}

export function filterTenants(list: PortalTenant[], filter: TenantListFilter, search: string): PortalTenant[] {
  let rows = list
  if (filter === 'missing-plan') {
    rows = rows.filter(tenantMissingPlan)
  }
  const q = search.trim().toLowerCase()
  if (!q) return rows
  return rows.filter(
    (t) => t.name.toLowerCase().includes(q) || t.slug.toLowerCase().includes(q) || t.id.toLowerCase().includes(q)
  )
}

export function filterInvoices(list: PortalInvoice[], filter: BillingListFilter, search: string): PortalInvoice[] {
  let rows = list
  if (filter === 'pending') {
    rows = rows.filter(isPendingInvoice)
  }
  const q = search.trim().toLowerCase()
  if (!q) return rows
  return rows.filter((i) => i.id.includes(q) || i.status.toLowerCase().includes(q) || i.tenantId.includes(q))
}
