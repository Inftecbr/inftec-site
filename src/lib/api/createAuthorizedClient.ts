import { createApiClient, type ApiClient } from './apiClient'

export type GetAccessToken = () => Promise<string>

/** Cliente HTTP autorizado — usar apenas dentro do portal (/app). */
export function createAuthorizedClient(getAccessToken: GetAccessToken): ApiClient {
  return createApiClient({ getAccessToken })
}

export type AuthorizedApiClient = ApiClient
