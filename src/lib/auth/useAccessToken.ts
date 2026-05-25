import { useCallback } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { auth0Env } from './authConfig'

/** Obtém access token via Auth0 SDK (cache em memória — sem localStorage manual). */
export function useAccessToken() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()

  return useCallback(async (): Promise<string> => {
    if (!isAuthenticated) {
      throw new Error('Not authenticated')
    }
    return getAccessTokenSilently({
      authorizationParams: auth0Env.audience
        ? { audience: auth0Env.audience }
        : undefined,
    })
  }, [getAccessTokenSilently, isAuthenticated])
}
