/** DTOs alinhados ao contrato INFTEC Portal (OpenAPI). Campos opcionais toleram variações do backend. */

export type PortalUser = {
  id: string
  email: string
  name: string
  blocked: boolean
  statusLabel: string
  raw: Record<string, unknown>
}

export type PortalTenant = {
  id: string
  name: string
  slug: string
  statusLabel: string
  planId?: string
  planName?: string
  subscriptionStatus?: string
  subscriptionPlanId?: string
  billingSummary?: string
  pendingInvoicesCount?: number
  source: 'api' | 'registry'
  raw: Record<string, unknown>
}

export type PortalPlan = {
  id: string
  name: string
  code: string
  description: string
  active: boolean
  raw: Record<string, unknown>
}

export type PortalFeature = {
  id: string
  key: string
  name: string
  description: string
  category: string
  raw: Record<string, unknown>
}

export type PortalPlanFeature = {
  planId: string
  featureKey: string
  raw: Record<string, unknown>
}

export type PortalInvoice = {
  id: string
  status: string
  amount: string
  currency: string
  tenantId: string
  dueDate: string
  raw: Record<string, unknown>
}

export type PortalPricing = {
  id: string
  feature: string
  amount: string
  currency: string
  active: boolean
  raw: Record<string, unknown>
}

export type PortalSubscription = {
  id: string
  status: string
  planId: string
  planName: string
  tenantId: string
  startedAt: string
  endsAt: string
  raw: Record<string, unknown>
}

export type PortalMetaIntegration = {
  configured: boolean
  statusLabel: string
  appId: string
  pageId: string
  raw: Record<string, unknown>
}

export type ModuleHealth = {
  module: string
  status: 'ok' | 'empty' | 'error' | 'loading'
  detail?: string
  count?: number
}
