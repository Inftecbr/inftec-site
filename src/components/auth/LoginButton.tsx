import type { ReactNode } from 'react'
import { useAuth } from './AuthProvider'

type LoginButtonProps = {
  className?: string
  children?: ReactNode
}

export default function LoginButton({ className, children }: LoginButtonProps) {
  const { loginToPortal, isConfigured, configIssues } = useAuth()
  const hint = configIssues[0] ?? 'Configure Auth0 em .env.local'

  return (
    <button
      type="button"
      className={className}
      disabled={!isConfigured}
      title={!isConfigured ? hint : undefined}
      onClick={() => loginToPortal()}
    >
      {children ?? 'Entrar no portal'}
    </button>
  )
}
