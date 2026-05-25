import { Link } from 'react-router-dom'

export type PortalModuleCardProps = {
  title: string
  description: string
  to: string
  hint?: string
}

export default function PortalModuleCard({ title, description, to, hint }: PortalModuleCardProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-xl border border-border bg-bg-secondary/80 p-5 hover:border-data/30 hover:bg-bg-secondary transition-all"
    >
      <p className="text-sm font-semibold text-text-primary group-hover:text-data transition-colors">{title}</p>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">{description}</p>
      {hint ? <p className="mt-3 text-xs text-text-muted">{hint}</p> : null}
      <p className="mt-4 text-xs font-medium text-data">Abrir módulo →</p>
    </Link>
  )
}
