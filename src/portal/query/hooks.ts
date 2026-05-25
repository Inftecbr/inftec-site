import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { isApiError } from '../../lib/api/apiError'
import {
  mapFeatures,
  mapInvoices,
  mapMetaIntegration,
  mapPlans,
  mapPricingList,
  mapSubscription,
  mapTenants,
  mapUsers,
} from '../../lib/portal/normalize'
import {
  listRegistryTenants,
  mergeTenantLists,
  registerTenantFromResponse,
} from '../../lib/portal/tenantRegistry'
import { usePortalApiClient } from '../../hooks/usePortalApiClient'
import { probePortalApi } from '../../hooks/usePortalApiProbe'
import {
  createFeature,
  listFeatures,
} from '../../services/inftecPortal/featuresService'
import {
  createInvoice,
  calculateBillingEvents,
  createPricing,
  generateInvoices,
  generateTenantInvoices,
  getActivePricing,
  getInvoice,
  getPricingByFeature,
  getPricingHistory,
  internalPayInvoice,
  listInvoices,
  listTenantInvoices,
  postBillingEvent,
} from '../../services/inftecPortal/billingService'
import {
  deleteMetaIntegration,
  getMetaIntegration,
  setMetaIntegration,
} from '../../services/inftecPortal/integrationsService'
import {
  addPlanFeature,
  createPlan,
  deletePlan,
  listPlanFeatures,
  listPlans,
  removePlanFeature,
  updatePlan,
} from '../../services/inftecPortal/plansService'
import {
  createSubscription,
  createTenantSubscription,
  getActiveSubscription,
  getTenantActiveSubscription,
} from '../../services/inftecPortal/subscriptionsService'
import {
  createTenant,
  getTenantPlan,
  listTenants,
  setTenantPlan,
  setTenantPlanForTenant,
} from '../../services/inftecPortal/tenantsService'
import {
  blockUser,
  createUser,
  listUsers,
  unblockUser,
} from '../../services/inftecPortal/usersService'
import { portalKeys } from './keys'

export function usePortalUsersQuery() {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.users.list(),
    queryFn: async () => mapUsers((await listUsers(client)).data),
  })
}

export function usePortalUserMutations() {
  const client = usePortalApiClient()
  const qc = useQueryClient()
  const invalidate = () => void qc.invalidateQueries({ queryKey: portalKeys.users.list() })

  return {
    create: useMutation({
      mutationFn: (body: unknown) => createUser(client, body),
      onSuccess: () => {
        invalidate()
      },
    }),
    block: useMutation({
      mutationFn: (id: string) => blockUser(client, id),
      onSuccess: () => invalidate(),
    }),
    unblock: useMutation({
      mutationFn: (id: string) => unblockUser(client, id),
      onSuccess: () => invalidate(),
    }),
  }
}

export const PORTAL_TENANTS_LIST_TAKE = 200

export function usePortalTenantsQuery(take = PORTAL_TENANTS_LIST_TAKE) {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.tenants.list(take),
    queryFn: async () => {
      const registry = listRegistryTenants()
      try {
        const res = await listTenants(client, { take })
        return mergeTenantLists(mapTenants(res.data, 'api'), registry)
      } catch (error) {
        if (isApiError(error) && (error.kind === 'not_found' || error.status === 404)) {
          return registry
        }
        throw error
      }
    },
  })
}

export function usePortalTenantFromList(tenantId: string | undefined) {
  const tenants = usePortalTenantsQuery()
  const tenant = tenants.data?.find((t) => t.id === tenantId)
  return { tenants, tenant }
}

export function usePortalTenantMutations() {
  const client = usePortalApiClient()
  const qc = useQueryClient()
  const invalidate = () => void qc.invalidateQueries({ queryKey: portalKeys.tenants.all() })

  return {
    create: useMutation({
      mutationFn: async (body: unknown) => {
        const res = await createTenant(client, body)
        registerTenantFromResponse(res.data ?? body)
        return res
      },
      onSuccess: () => invalidate(),
    }),
    /** Fluxo principal — POST /tenants/{tenantId}/plan */
    setPlanForTenant: useMutation({
      mutationFn: ({ tenantId, planId }: { tenantId: string; planId: string }) =>
        setTenantPlanForTenant(client, tenantId, { planId, plan: planId, planoId: planId }),
      onSuccess: (_, v) => {
        invalidate()
        void qc.invalidateQueries({ queryKey: portalKeys.tenants.detail(v.tenantId) })
      },
    }),
    /** Legado — POST /tenants/plan */
    setPlanLegacy: useMutation({
      mutationFn: (body: unknown) => setTenantPlan(client, body),
      onSuccess: () => invalidate(),
    }),
    loadPlanLegacy: useMutation({
      mutationFn: () => getTenantPlan(client),
    }),
  }
}

export function usePortalTenantActiveSubscriptionQuery(tenantId: string | null) {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.tenants.subscription(tenantId ?? ''),
    enabled: Boolean(tenantId),
    queryFn: async () => {
      try {
        return mapSubscription((await getTenantActiveSubscription(client, tenantId!)).data)
      } catch (error) {
        if (isApiError(error) && (error.kind === 'not_found' || error.status === 404)) {
          return null
        }
        throw error
      }
    },
  })
}

export function usePortalTenantSubscriptionMutations(tenantId: string) {
  const client = usePortalApiClient()
  const qc = useQueryClient()
  const invalidate = () => {
    void qc.invalidateQueries({ queryKey: portalKeys.tenants.subscription(tenantId) })
    void qc.invalidateQueries({ queryKey: portalKeys.tenants.all() })
  }
  return useMutation({
    mutationFn: (planId: string) => createTenantSubscription(client, tenantId, planId),
    onSuccess: () => invalidate(),
  })
}

export function usePortalTenantInvoicesQuery(tenantId: string | null) {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.tenants.invoices(tenantId ?? ''),
    enabled: Boolean(tenantId),
    queryFn: async () => mapInvoices((await listTenantInvoices(client, tenantId!)).data),
  })
}

export function usePortalTenantBillingMutations(tenantId: string) {
  const client = usePortalApiClient()
  const qc = useQueryClient()
  const invalidate = () => {
    void qc.invalidateQueries({ queryKey: portalKeys.tenants.invoices(tenantId) })
    void qc.invalidateQueries({ queryKey: portalKeys.billing.invoices() })
    void qc.invalidateQueries({ queryKey: portalKeys.tenants.all() })
  }
  return {
    generateInvoices: useMutation({
      mutationFn: (body?: unknown) => generateTenantInvoices(client, tenantId, body),
      onSuccess: () => invalidate(),
    }),
  }
}

export function usePortalPlansQuery() {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.plans.list(),
    queryFn: async () => mapPlans((await listPlans(client)).data),
  })
}

export function usePortalPlanFeaturesQuery(planId: string | null) {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.plans.features(planId ?? ''),
    enabled: Boolean(planId),
    queryFn: async () => {
      const res = await listPlanFeatures(client, planId!)
      return res.data
    },
  })
}

export function usePortalPlanMutations() {
  const client = usePortalApiClient()
  const qc = useQueryClient()
  const invalidate = () => void qc.invalidateQueries({ queryKey: portalKeys.plans.all() })

  return {
    create: useMutation({ mutationFn: (body: unknown) => createPlan(client, body), onSuccess: invalidate }),
    update: useMutation({
      mutationFn: ({ id, body }: { id: string; body: unknown }) => updatePlan(client, id, body),
      onSuccess: invalidate,
    }),
    remove: useMutation({ mutationFn: (id: string) => deletePlan(client, id), onSuccess: invalidate }),
    addFeature: useMutation({
      mutationFn: ({ planId, body }: { planId: string; body: unknown }) => addPlanFeature(client, planId, body),
      onSuccess: (_, v) => {
        invalidate()
        void qc.invalidateQueries({ queryKey: portalKeys.plans.features(v.planId) })
      },
    }),
    removeFeature: useMutation({
      mutationFn: ({ planId, featureKey }: { planId: string; featureKey: string }) =>
        removePlanFeature(client, planId, featureKey),
      onSuccess: (_, v) => {
        invalidate()
        void qc.invalidateQueries({ queryKey: portalKeys.plans.features(v.planId) })
      },
    }),
  }
}

export function usePortalFeaturesQuery() {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.features.list(),
    queryFn: async () => mapFeatures((await listFeatures(client)).data),
  })
}

export function usePortalFeatureMutations() {
  const client = usePortalApiClient()
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (body: unknown) => createFeature(client, body),
    onSuccess: () => void qc.invalidateQueries({ queryKey: portalKeys.features.list() }),
  })
}

export function usePortalInvoicesQuery() {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.billing.invoices(),
    queryFn: async () => mapInvoices((await listInvoices(client)).data),
  })
}

export function usePortalBillingMutations() {
  const client = usePortalApiClient()
  const qc = useQueryClient()
  const invalidate = () => void qc.invalidateQueries({ queryKey: portalKeys.billing.all() })

  return {
    createInvoice: useMutation({ mutationFn: (body: unknown) => createInvoice(client, body), onSuccess: invalidate }),
    generateInvoices: useMutation({ mutationFn: (body?: unknown) => generateInvoices(client, body), onSuccess: invalidate }),
    internalPay: useMutation({
      mutationFn: ({ id, body }: { id: string; body?: unknown }) => internalPayInvoice(client, id, body),
      onSuccess: invalidate,
    }),
    getInvoice: useMutation({ mutationFn: (id: string) => getInvoice(client, id) }),
    postEvent: useMutation({ mutationFn: (body: unknown) => postBillingEvent(client, body), onSuccess: invalidate }),
    calculateEvents: useMutation({ mutationFn: (body: unknown) => calculateBillingEvents(client, body) }),
    createPricing: useMutation({ mutationFn: (body: unknown) => createPricing(client, body), onSuccess: invalidate }),
  }
}

export function usePortalActivePricingQuery() {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.billing.pricingActive(),
    queryFn: async () => mapPricingList((await getActivePricing(client)).data),
  })
}

export function usePortalPricingFeatureQuery(feature: string | null) {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.billing.pricingFeature(feature ?? ''),
    enabled: Boolean(feature),
    queryFn: async () => mapPricingList((await getPricingByFeature(client, feature!)).data),
  })
}

export function usePortalPricingHistoryQuery(feature: string | null) {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.billing.pricingHistory(feature ?? ''),
    enabled: Boolean(feature),
    queryFn: async () => mapPricingList((await getPricingHistory(client, feature!)).data),
  })
}

export function usePortalSubscriptionQuery() {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.subscriptions.active(),
    queryFn: async () => {
      try {
        return mapSubscription((await getActiveSubscription(client)).data)
      } catch (error) {
        if (isApiError(error) && (error.kind === 'not_found' || error.status === 404)) {
          return null
        }
        throw error
      }
    },
  })
}

export function usePortalSubscriptionMutations() {
  const client = usePortalApiClient()
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (body: unknown) => createSubscription(client, body),
    onSuccess: () => void qc.invalidateQueries({ queryKey: portalKeys.subscriptions.active() }),
  })
}

export function usePortalMetaIntegrationQuery() {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.integrations.meta(),
    queryFn: async () => {
      try {
        return mapMetaIntegration((await getMetaIntegration(client)).data)
      } catch (error) {
        if (isApiError(error) && (error.kind === 'not_found' || error.status === 404)) {
          return mapMetaIntegration(null)
        }
        throw error
      }
    },
    retry: false,
  })
}

export function usePortalMetaMutations() {
  const client = usePortalApiClient()
  const qc = useQueryClient()
  const invalidate = () => void qc.invalidateQueries({ queryKey: portalKeys.integrations.meta() })

  return {
    save: useMutation({ mutationFn: (body: unknown) => setMetaIntegration(client, body), onSuccess: invalidate }),
    remove: useMutation({ mutationFn: () => deleteMetaIntegration(client), onSuccess: invalidate }),
  }
}

export function usePortalApiProbeQuery() {
  const client = usePortalApiClient()
  return useQuery({
    queryKey: portalKeys.health.probe(),
    queryFn: () => probePortalApi(client),
    staleTime: 60_000,
  })
}

export function usePortalDashboardSnapshot() {
  const users = usePortalUsersQuery()
  const tenants = usePortalTenantsQuery()
  const plans = usePortalPlansQuery()
  const invoices = usePortalInvoicesQuery()
  const meta = usePortalMetaIntegrationQuery()
  const probe = usePortalApiProbeQuery()

  return { users, tenants, plans, invoices, meta, probe }
}
