import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'

import { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react'

import { useNavigate } from 'react-router-dom'

import {

  auth0Env,

  getAuth0ConfigIssues,

  getAuth0LogoutReturnTo,

  getLoginAuthorizationParams,

  isAuth0Configured,

  PORTAL_LOGIN_RETURN_TO,

} from '../../lib/auth/authConfig'



export type AuthUser = { sub: string; email?: string; name?: string; picture?: string } | null



type AuthContextValue = {

  isAuthenticated: boolean

  isLoading: boolean

  user: AuthUser

  isConfigured: boolean

  configIssues: string[]

  login: () => void

  loginToPortal: () => void

  logout: () => void

}



const AuthContext = createContext<AuthContextValue | null>(null)



function AuthContextBridge({ children }: { children: ReactNode }) {

  const { isAuthenticated, isLoading, user, loginWithRedirect, logout: auth0Logout } = useAuth0()



  const loginToPortal = useCallback(() => {

    loginWithRedirect({

      appState: { returnTo: PORTAL_LOGIN_RETURN_TO },

      authorizationParams: getLoginAuthorizationParams(),

    })

  }, [loginWithRedirect])



  const login = loginToPortal



  const logout = useCallback(() => {

    auth0Logout({

      logoutParams: { returnTo: getAuth0LogoutReturnTo() },

    })

  }, [auth0Logout])



  const mappedUser = useMemo<AuthUser>(() => {

    if (!user) return null

    return {

      sub: user.sub ?? '',

      email: user.email,

      name: user.name,

      picture: user.picture,

    }

  }, [user])



  const value = useMemo(

    () => ({

      isAuthenticated,

      isLoading,

      user: mappedUser,

      isConfigured: true,

      configIssues: [] as string[],

      login,

      loginToPortal,

      logout,

    }),

    [isAuthenticated, isLoading, mappedUser, login, loginToPortal, logout]

  )



  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}



function Auth0ProviderWithNavigate({ children }: { children: ReactNode }) {

  const navigate = useNavigate()



  const onRedirectCallback = useCallback(

    (appState?: { returnTo?: string }) => {

      navigate(appState?.returnTo ?? PORTAL_LOGIN_RETURN_TO, { replace: true })

    },

    [navigate]

  )



  return (

    <Auth0Provider

      domain={auth0Env.domain}

      clientId={auth0Env.clientId}

      authorizationParams={getLoginAuthorizationParams()}

      onRedirectCallback={onRedirectCallback}

      cacheLocation="memory"

    >

      {children}

    </Auth0Provider>

  )

}



function Auth0NotConfigured({ children }: { children: ReactNode }) {

  const configIssues = useMemo(() => getAuth0ConfigIssues(), [])



  const value = useMemo<AuthContextValue>(

    () => ({

      isAuthenticated: false,

      isLoading: false,

      user: null,

      isConfigured: false,

      configIssues,

      login: () => {

        console.warn('[Auth]', configIssues.join(' · '))

      },

      loginToPortal: () => {

        console.warn('[Auth]', configIssues.join(' · '))

      },

      logout: () => undefined,

    }),

    [configIssues]

  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}



export function AuthProvider({ children }: { children: ReactNode }) {

  if (!isAuth0Configured()) {

    return <Auth0NotConfigured>{children}</Auth0NotConfigured>

  }



  return (

    <Auth0ProviderWithNavigate>

      <AuthContextBridge>{children}</AuthContextBridge>

    </Auth0ProviderWithNavigate>

  )

}



export function useAuth() {

  const ctx = useContext(AuthContext)

  if (!ctx) throw new Error('useAuth must be used within AuthProvider')

  return ctx

}


