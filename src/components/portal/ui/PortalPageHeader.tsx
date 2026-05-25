import type { ReactNode } from 'react'

type PortalPageHeaderProps = {
  title: string
  description?: string
  actions?: ReactNode
  kicker?: string
}

export default function PortalPageHeader({
  title,
  description,
  actions,
  kicker = 'Portal INFTEC',
}: PortalPageHeaderProps) {
  return (
    <div className="portal-page-header-wrap flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-border pb-6">
      <div>
        {kicker ? (
          <p className="text-[10px] font-mono uppercase tracking-widest text-data">{kicker}</p>
        ) : null}
        <h1 className="mt-2 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">{title}</h1>
        {description ? <p className="mt-2 text-sm text-text-secondary max-w-2xl leading-relaxed">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-2 shrink-0">{actions}</div> : null}
    </div>
  )
}
