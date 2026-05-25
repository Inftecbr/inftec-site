import type { ReactNode } from 'react'
import { useConsolePreferences } from '../../../features/console-preferences/ConsolePreferencesContext'

type PortalErrorStateProps = {
  title?: string
  message: string
  technicalDetail?: string
  onRetry?: () => void
}

export default function PortalErrorState({
  title = 'Não foi possível carregar',
  message,
  technicalDetail,
  onRetry,
}: PortalErrorStateProps) {
  const { advancedTools } = useConsolePreferences()

  return (
    <div className="rounded-xl border border-warning/25 bg-warning/5 px-6 py-8">
      <p className="text-sm font-medium text-warning">{title}</p>
      <p className="mt-2 text-sm text-text-primary">{message}</p>
      {advancedTools && technicalDetail ? (
        <pre className="mt-3 text-xs font-mono text-text-muted whitespace-pre-wrap break-all">{technicalDetail}</pre>
      ) : null}
      {onRetry ? (
        <button type="button" className="mt-4 text-sm font-medium text-data hover:underline" onClick={onRetry}>
          Tentar novamente
        </button>
      ) : null}
    </div>
  )
}

export function PortalAdvancedOnly({ children }: { children: ReactNode }) {
  const { advancedTools } = useConsolePreferences()
  if (!advancedTools) return null
  return <>{children}</>
}
