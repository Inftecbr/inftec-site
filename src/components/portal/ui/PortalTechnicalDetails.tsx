import { useConsolePreferences } from '../../../features/console-preferences/ConsolePreferencesContext'

/** Exibe ID interno quando o modo técnico do console está ativo. */
export function PortalEntityId({ id, label = 'ID' }: { id: string; label?: string }) {
  const { advancedTools } = useConsolePreferences()
  if (!advancedTools || !id) return null
  return (
    <span className="block font-mono text-[10px] text-text-muted mt-0.5" title={label}>
      {id}
    </span>
  )
}

/** Bloco JSON bruto — visível apenas com ferramentas avançadas. */
export function PortalTechnicalPayload({ title, data }: { title: string; data: unknown }) {
  const { advancedTools } = useConsolePreferences()
  if (!advancedTools || data === null || data === undefined) return null
  return (
    <details className="rounded-lg border border-dashed border-border p-3 mt-4">
      <summary className="cursor-pointer text-xs font-medium text-text-muted">{title}</summary>
      <pre className="mt-3 text-xs font-mono text-text-secondary overflow-x-auto whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>
    </details>
  )
}
