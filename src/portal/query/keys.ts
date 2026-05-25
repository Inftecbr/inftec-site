export const portalKeys = {
  all: ['portal'] as const,
  users: {
    all: () => [...portalKeys.all, 'users'] as const,
    list: () => [...portalKeys.users.all(), 'list'] as const,
  },
  tenants: {
    all: () => [...portalKeys.all, 'tenants'] as const,
    list: (take?: number) => [...portalKeys.tenants.all(), 'list', take ?? 'default'] as const,
    detail: (tenantId: string) => [...portalKeys.tenants.all(), 'detail', tenantId] as const,
    plan: (tenantId?: string) => [...portalKeys.tenants.all(), 'plan', tenantId ?? 'current'] as const,
    subscription: (tenantId: string) => [...portalKeys.tenants.all(), 'subscription', tenantId] as const,
    invoices: (tenantId: string) => [...portalKeys.tenants.all(), 'invoices', tenantId] as const,
  },
  plans: {
    all: () => [...portalKeys.all, 'plans'] as const,
    list: () => [...portalKeys.plans.all(), 'list'] as const,
    features: (planId: string) => [...portalKeys.plans.all(), 'features', planId] as const,
  },
  features: {
    all: () => [...portalKeys.all, 'features'] as const,
    list: () => [...portalKeys.features.all(), 'list'] as const,
  },
  billing: {
    all: () => [...portalKeys.all, 'billing'] as const,
    invoices: () => [...portalKeys.billing.all(), 'invoices'] as const,
    invoice: (id: string) => [...portalKeys.billing.all(), 'invoice', id] as const,
    pricingActive: () => [...portalKeys.billing.all(), 'pricing-active'] as const,
    pricingFeature: (feature: string) => [...portalKeys.billing.all(), 'pricing', feature] as const,
    pricingHistory: (feature: string) => [...portalKeys.billing.all(), 'pricing-history', feature] as const,
  },
  subscriptions: {
    all: () => [...portalKeys.all, 'subscriptions'] as const,
    active: () => [...portalKeys.subscriptions.all(), 'active'] as const,
  },
  integrations: {
    all: () => [...portalKeys.all, 'integrations'] as const,
    meta: () => [...portalKeys.integrations.all(), 'meta'] as const,
  },
  health: {
    all: () => [...portalKeys.all, 'health'] as const,
    probe: () => [...portalKeys.health.all(), 'probe'] as const,
  },
}
