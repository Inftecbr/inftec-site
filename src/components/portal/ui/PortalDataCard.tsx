import type { ReactNode } from 'react'

type PortalDataCardProps = {
  title?: string
  children: ReactNode
}

export default function PortalDataCard({ title, children }: PortalDataCardProps) {
  return (
    <section className="rounded-xl border border-border bg-bg-primary/50 overflow-hidden">
      {title ? (
        <div className="portal-card-header border-b border-border bg-bg-secondary/40">
          <h2 className="text-xs font-medium uppercase tracking-wide text-text-muted">{title}</h2>
        </div>
      ) : null}
      <div className="portal-card-body">{children}</div>
    </section>
  )
}
