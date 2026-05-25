import type { ReactNode } from 'react'
import Container, { Section } from '../components/ui/Container'

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <Section className="pt-12 md:pt-16 pb-20">
      <Container>
        <header className="max-w-3xl mb-10 pb-8 border-b border-border">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-text-muted">Última atualização: {updated}</p>
        </header>
        <article className="prose-inftec max-w-3xl">{children}</article>
      </Container>
    </Section>
  )
}
