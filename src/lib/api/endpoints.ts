/** Rotas permitidas — documento OpenAPI INFTEC Portal (Swagger filtrado) */
export const inftecPortalEndpoints = {
  users: {
    list: '/usuarios',
    create: '/usuarios',
    block: (id: string) => `/usuarios/${encodeURIComponent(id)}/bloquear`,
    unblock: (id: string) => `/usuarios/${encodeURIComponent(id)}/desbloquear`,
  },
  tenants: {
    list: '/tenants',
    create: '/tenants',
    /** Legado — compatibilidade */
    planGet: '/tenants/plan',
    /** Legado — compatibilidade */
    planSet: '/tenants/plan',
    planSetForTenant: (tenantId: string) => `/tenants/${encodeURIComponent(tenantId)}/plan`,
    subscriptionsActive: (tenantId: string) =>
      `/tenants/${encodeURIComponent(tenantId)}/subscriptions/active`,
    subscriptionsCreate: (tenantId: string, planId: string) =>
      `/tenants/${encodeURIComponent(tenantId)}/subscriptions?planId=${encodeURIComponent(planId)}`,
    billingInvoices: (tenantId: string) =>
      `/tenants/${encodeURIComponent(tenantId)}/billing/invoices`,
    billingInvoicesGenerate: (tenantId: string) =>
      `/tenants/${encodeURIComponent(tenantId)}/billing/invoices/generate`,
  },
  plans: {
    list: '/plans',
    create: '/plans',
    update: (planId: string) => `/plans/${encodeURIComponent(planId)}`,
    delete: (planId: string) => `/plans/${encodeURIComponent(planId)}`,
    featuresList: (planId: string) => `/plans/${encodeURIComponent(planId)}/features`,
    featuresAdd: (planId: string) => `/plans/${encodeURIComponent(planId)}/features`,
    featuresRemove: (planId: string, featureKey: string) =>
      `/plans/${encodeURIComponent(planId)}/features/${encodeURIComponent(featureKey)}`,
  },
  features: {
    list: '/features',
    create: '/features',
  },
  subscriptions: {
    active: '/subscriptions/active',
    create: '/subscriptions',
  },
  billing: {
    invoicesList: '/billing/invoices',
    invoicesCreate: '/billing/invoices',
    invoiceById: (invoiceId: string) => `/billing/invoices/${encodeURIComponent(invoiceId)}`,
    invoicesGenerate: '/billing/invoices/generate',
    invoiceInternalPay: (invoiceId: string) =>
      `/billing/invoices/${encodeURIComponent(invoiceId)}/internal-pay`,
    events: '/billing/events',
    eventsCalculate: '/billing/events/calculate',
    pricingActive: '/billing/pricing/active',
    pricingByFeature: (feature: string) => `/billing/pricing/${encodeURIComponent(feature)}`,
    pricingHistory: (feature: string) => `/billing/pricing/${encodeURIComponent(feature)}/history`,
    pricingCreate: '/billing/pricing',
  },
  integrations: {
    metaGet: '/integrations/meta',
    metaSet: '/integrations/meta',
    metaDelete: '/integrations/meta',
  },
} as const
