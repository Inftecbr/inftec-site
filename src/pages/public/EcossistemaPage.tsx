import { Link } from 'react-router-dom'
import PageMeta from '../../components/PageMeta'
import Container, { Section, SectionHeader } from '../../components/ui/Container'
import Button from '../../components/ui/Button'
import { ECOSYSTEM_SURFACES } from '../../config/ecosystem'
import { DOMAINS } from '../../config/domains'

export default function EcossistemaPage() {
  return (
    <>
      <PageMeta
        title="Ecossistema INFTEC — Superfícies e responsabilidades"
        description="Mapa institucional do ecossistema INFTEC: site corporativo, produto Salefast, aplicação, portal, documentação e status."
        path="/ecossistema"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Ecossistema"
            title="Superfícies independentes, responsabilidades claras."
            lead="A INFTEC opera um ecossistema de domínios distintos. Cada superfície resolve um tipo de necessidade — institucional, produto, operação, governança ou desenvolvimento."
          />
          <p className="text-sm text-text-secondary max-w-3xl leading-relaxed -mt-4 mb-10">
            <strong className="text-text-primary font-medium">INFTEC</strong> é a empresa.{' '}
            <strong className="text-text-primary font-medium">Salefast</strong> é um produto desenvolvido e operado
            pela INFTEC TECNOLOGIA LTDA. Este mapa não substitui a documentação técnica — para APIs, use o{' '}
            <a href={DOMAINS.DOCS_PLATFORM_URL} className="text-data hover:underline" target="_blank" rel="noopener noreferrer">
              API Platform ↗
            </a>
            .
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {ECOSYSTEM_SURFACES.map((s) => (
              <article key={s.id} className="rounded-xl border border-border bg-bg-secondary p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-base font-semibold text-text-primary">{s.name}</h2>
                  <span className="text-xs text-text-muted">{s.surfaceType}</span>
                </div>
                <p className="mt-2 font-mono text-xs text-data">{s.domain}</p>
                <dl className="mt-4 space-y-3 text-sm text-text-secondary">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-text-muted">Propósito</dt>
                    <dd className="mt-1">{s.purpose}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-text-muted">Responsabilidade</dt>
                    <dd className="mt-1">{s.responsibility}</dd>
                  </div>
                </dl>
                {s.external ? (
                  <a
                    href={s.href}
                    className="inline-block mt-4 text-sm font-medium text-data hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir superfície ↗
                  </a>
                ) : s.id === 'inftec-site' ? (
                  <Link to="/" className="inline-block mt-4 text-sm font-medium text-data hover:underline">
                    Voltar ao início
                  </Link>
                ) : (
                  <Link
                    to={s.href.replace(/^https:\/\/[^/]+/, '') || '/app'}
                    className="inline-block mt-4 text-sm font-medium text-data hover:underline"
                  >
                    Acessar no site INFTEC
                  </Link>
                )}
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button variant="secondary" href="/produtos">
              Ver produtos INFTEC
            </Button>
            <Button variant="ghost" href="/seguranca">
              Central de segurança
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
