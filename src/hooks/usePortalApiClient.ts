import { useMemo } from 'react'
import { createAuthorizedClient } from '../lib/api/createAuthorizedClient'
import { useAccessToken } from '../lib/auth/useAccessToken'

/** Hook do portal — cliente API autorizado (somente em /app). */
export function usePortalApiClient() {
  const getAccessToken = useAccessToken()
  return useMemo(() => createAuthorizedClient(getAccessToken), [getAccessToken])
}
