type StatusCardProps = {
  label: string
  state: 'operational' | 'degraded' | 'maintenance'
}

const stateStyles = {
  operational: 'text-success border-success/30 bg-success/10',
  degraded: 'text-warning border-warning/30 bg-warning/10',
  maintenance: 'text-text-muted border-border bg-bg-surface',
}

export default function StatusCard({ label, state }: StatusCardProps) {
  const text = state === 'operational' ? 'Operational' : state === 'degraded' ? 'Degraded' : 'Maintenance'
  return (
    <div className="rounded-xl border border-border bg-bg-secondary p-4 flex items-center justify-between gap-3">
      <span className="text-sm font-medium font-mono">{label}</span>
      <span className={`text-xs font-medium px-2 py-0.5 rounded border ${stateStyles[state]}`}>{text}</span>
    </div>
  )
}
