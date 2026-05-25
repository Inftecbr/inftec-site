import type { AuthorizedApiClient } from '../../lib/api/createAuthorizedClient'
import { inftecPortalEndpoints as ep } from '../../lib/api/endpoints'

export function listPlans(client: AuthorizedApiClient) {
  return client.get<unknown>(ep.plans.list)
}

export function createPlan(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.plans.create, body)
}

export function updatePlan(client: AuthorizedApiClient, planId: string, body: unknown) {
  return client.put<unknown>(ep.plans.update(planId), body)
}

export function deletePlan(client: AuthorizedApiClient, planId: string) {
  return client.delete<unknown>(ep.plans.delete(planId))
}

export function listPlanFeatures(client: AuthorizedApiClient, planId: string) {
  return client.get<unknown>(ep.plans.featuresList(planId))
}

export function addPlanFeature(client: AuthorizedApiClient, planId: string, body: unknown) {
  return client.post<unknown>(ep.plans.featuresAdd(planId), body)
}

export function removePlanFeature(client: AuthorizedApiClient, planId: string, featureKey: string) {
  return client.delete<unknown>(ep.plans.featuresRemove(planId, featureKey))
}
