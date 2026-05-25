import type { AuthorizedApiClient } from '../../lib/api/createAuthorizedClient'
import { inftecPortalEndpoints as ep } from '../../lib/api/endpoints'

export function getMetaIntegration(client: AuthorizedApiClient) {
  return client.get<unknown>(ep.integrations.metaGet)
}

export function setMetaIntegration(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.integrations.metaSet, body)
}

export function deleteMetaIntegration(client: AuthorizedApiClient) {
  return client.delete<unknown>(ep.integrations.metaDelete)
}
