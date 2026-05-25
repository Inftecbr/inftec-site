import type { ReactNode } from 'react'

type InfoCardProps = {
  title: string
  children: ReactNode
  className?: string
}

export default function InfoCard({ title, children, className = '' }: InfoCardProps) {
  return (
    <article className={`rounded-xl border border-border bg-bg-secondary p-5 ${className}`}>
      <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      <div className="mt-2 text-sm text-text-secondary leading-relaxed">{children}</div>
    </article>
  )
}
