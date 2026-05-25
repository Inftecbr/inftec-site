import type { AuthorizedApiClient } from '../../lib/api/createAuthorizedClient'
import { inftecPortalEndpoints as ep } from '../../lib/api/endpoints'

export function listFeatures(client: AuthorizedApiClient) {
  return client.get<unknown>(ep.features.list)
}

export function createFeature(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.features.create, body)
}
