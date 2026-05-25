import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { AUTH0_CONFIG_ERROR_MESSAGE } from '../../lib/envConfig'
import EnvDiagnostics from '../portal/EnvDiagnostics'
import { useAuth } from './AuthProvider'

function PortalAuthLoading({ message }: { message?: string }) {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center gap-4 px-4">
      <div
        className="h-10 w-10 rounded-full border-2 border-border-strong border-t-data animate-spin"
        aria-hidden
      />
      <p className="text-sm text-text-secondary">{message ?? 'Verificando sessão Auth0…'}</p>
    </div>
  )
}

/** Protege /app e subrotas — redireciona para login Auth0 quando necessário. */
export default function ProtectedRoute() {
  const { isAuthenticated, isLoading, loginToPortal, isConfigured } = useAuth()
  const loginTriggered = useRef(false)

  useEffect(() => {
    if (!isConfigured || isLoading || isAuthenticated) {
      loginTriggered.current = false
      return
    }
    if (loginTriggered.current) return
    loginTriggered.current = true
    loginToPortal()
  }, [isConfigured, isLoading, isAuthenticated, loginToPortal])

  if (!isConfigured) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center px-4">
        <div className="max-w-xl w-full">
          <p className="text-center text-sm font-medium text-warning mb-4">{AUTH0_CONFIG_ERROR_MESSAGE}</p>
          <EnvDiagnostics compact />
        </div>
      </div>
    )
  }

  if (isLoading || !isAuthenticated) {
    return <PortalAuthLoading message={isLoading ? 'Concluindo login Auth0…' : 'Redirecionando para Auth0…'} />
  }

  return <Outlet />
}
