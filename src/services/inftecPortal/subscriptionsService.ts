import type { AuthorizedApiClient } from '../../lib/api/createAuthorizedClient'
import { inftecPortalEndpoints as ep } from '../../lib/api/endpoints'

export function getActiveSubscription(client: AuthorizedApiClient) {
  return client.get<unknown>(ep.subscriptions.active)
}

export function createSubscription(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.subscriptions.create, body)
}

export function getTenantActiveSubscription(client: AuthorizedApiClient, tenantId: string) {
  return client.get<unknown>(ep.tenants.subscriptionsActive(tenantId))
}

export function createTenantSubscription(
  client: AuthorizedApiClient,
  tenantId: string,
  planId: string,
  body?: unknown
) {
  return client.post<unknown>(ep.tenants.subscriptionsCreate(tenantId, planId), body)
}
