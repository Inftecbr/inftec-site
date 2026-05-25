import type { AuthorizedApiClient } from '../../lib/api/createAuthorizedClient'
import { inftecPortalEndpoints as ep } from '../../lib/api/endpoints'

export function listTenants(client: AuthorizedApiClient, params?: { take?: number }) {
  const qs =
    params?.take !== undefined ? `?take=${encodeURIComponent(String(params.take))}` : ''
  return client.get<unknown>(`${ep.tenants.list}${qs}`)
}

export function createTenant(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.tenants.create, body)
}

export function getTenantPlan(client: AuthorizedApiClient) {
  return client.get<unknown>(ep.tenants.planGet)
}

export function setTenantPlan(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.tenants.planSet, body)
}

export function setTenantPlanForTenant(
  client: AuthorizedApiClient,
  tenantId: string,
  body: unknown
) {
  return client.post<unknown>(ep.tenants.planSetForTenant(tenantId), body)
}
