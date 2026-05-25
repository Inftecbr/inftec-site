import type { AuthorizedApiClient } from '../../lib/api/createAuthorizedClient'
import { inftecPortalEndpoints as ep } from '../../lib/api/endpoints'

export function listUsers(client: AuthorizedApiClient) {
  return client.get<unknown>(ep.users.list)
}

export function createUser(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.users.create, body)
}

export function blockUser(client: AuthorizedApiClient, id: string) {
  return client.patch<unknown>(ep.users.block(id))
}

export function unblockUser(client: AuthorizedApiClient, id: string) {
  return client.patch<unknown>(ep.users.unblock(id))
}
