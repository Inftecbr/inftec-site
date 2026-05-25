import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { useConsolePreferences } from '../../../features/console-preferences/ConsolePreferencesContext'

const fieldClass =
  'w-full rounded-lg border border-border bg-bg-secondary portal-input-density text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-data/30'

export function PortalField({
  label,
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-text-primary">{label}</span>
      {hint ? <span className="block text-xs text-text-muted mt-0.5">{hint}</span> : null}
      <div className="portal-field-mt">{children}</div>
      {error ? <p className="mt-1 text-xs text-warning">{error}</p> : null}
    </label>
  )
}

export function PortalInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${fieldClass} ${props.className ?? ''}`} />
}

export function PortalTextarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldClass} min-h-[88px] ${props.className ?? ''}`} />
}

export function PortalSelect({
  options,
  ...props
}: InputHTMLAttributes<HTMLSelectElement> & { options: { value: string; label: string }[] }) {
  return (
    <select {...props} className={`${fieldClass} ${props.className ?? ''}`}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}

export function PortalAdvancedJsonPanel({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  const { advancedTools } = useConsolePreferences()
  if (!advancedTools) return null
  return (
    <details className="rounded-lg border border-dashed border-border p-3">
      <summary className="cursor-pointer text-xs font-medium text-text-muted">Modo avançado (JSON)</summary>
      <textarea
        className={`${fieldClass} mt-3 font-mono text-xs min-h-[120px]`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
    </details>
  )
}
