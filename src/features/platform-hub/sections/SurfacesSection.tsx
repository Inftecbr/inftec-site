import { Link } from 'react-router-dom'
import Container, { Section, SectionHeader } from '../../../components/ui/Container'
import { PLATFORM_SURFACES } from '../../../config/platform'

export function SurfacesSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Superfícies"
          title="Superfícies da plataforma"
          lead="Cada ambiente possui objetivo, público e domínio explícitos."
        />
        <div className="grid lg:grid-cols-2 gap-4">
          {PLATFORM_SURFACES.map((s) => (
            <article key={s.id} className="rounded-xl border border-border bg-bg-secondary p-5">
              <h3 className="font-semibold text-text-primary">{s.name}</h3>
              <dl className="mt-3 space-y-2 text-sm text-text-secondary">
                <div>
                  <dt className="text-xs uppercase text-text-muted">Objetivo</dt>
                  <dd>{s.objective}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase text-text-muted">Usuário</dt>
                  <dd>{s.audience}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase text-text-muted">Responsabilidade</dt>
                  <dd>{s.responsibility}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase text-text-muted">Domínio</dt>
                  <dd className="font-mono text-data text-xs">{s.href.replace('https://', '')}</dd>
                </div>
              </dl>
              {s.external ? (
                <a href={s.href} className="inline-block mt-4 text-sm text-data hover:underline" target="_blank" rel="noopener noreferrer">
                  Abrir superfície ↗
                </a>
              ) : (
                <Link to={s.href.replace(/^https:\/\/[^/]+/, '') || '/app'} className="inline-block mt-4 text-sm text-data hover:underline">
                  Abrir no hub INFTEC
                </Link>
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
