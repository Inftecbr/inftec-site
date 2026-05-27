import type { ReactNode } from 'react'
import { DOMAINS } from '../../config/domains'

export function LegalSection({
  id,
  title,
  children,
  className = '',
}: {
  id?: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 space-y-4 pt-10 first:pt-0 border-t border-border first:border-t-0 ${className}`}
    >
      <h2 className="text-lg font-semibold tracking-tight text-text-primary">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

export function LegalSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function LegalEntityCard() {
  return (
    <aside className="rounded-xl border border-border bg-bg-secondary/80 p-5 text-sm text-text-secondary space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Identificação</p>
      <p className="font-medium text-text-primary">INFTEC TECNOLOGIA LTDA</p>
      <p>CNPJ 47.281.110/0001-32</p>
      <p>
        <a href="https://inftec.com.br" className="text-data hover:underline">
          https://inftec.com.br
        </a>
        {' · '}
        <a href={DOMAINS.SALEFAST_SITE_URL} className="text-data hover:underline">
          {DOMAINS.SALEFAST_SITE_URL}
        </a>
      </p>
    </aside>
  )
}

export function LegalContactChannels() {
  return (
    <dl className="grid gap-3 sm:grid-cols-2 text-sm">
      <div className="rounded-lg border border-border bg-bg-secondary/50 p-4">
        <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">Jurídico</dt>
        <dd className="mt-1">
          <a href="mailto:juridico@inftec.com.br" className="text-data hover:underline">
            juridico@inftec.com.br
          </a>
        </dd>
      </div>
      <div className="rounded-lg border border-border bg-bg-secondary/50 p-4">
        <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">Privacidade / LGPD</dt>
        <dd className="mt-1">
          <a href="mailto:privacidade@inftec.com.br" className="text-data hover:underline">
            privacidade@inftec.com.br
          </a>
        </dd>
      </div>
      <div className="rounded-lg border border-border bg-bg-secondary/50 p-4 sm:col-span-2">
        <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">Suporte operacional</dt>
        <dd className="mt-1">
          <a href="mailto:suporte@inftec.com.br" className="text-data hover:underline">
            suporte@inftec.com.br
          </a>
        </dd>
      </div>
    </dl>
  )
}
