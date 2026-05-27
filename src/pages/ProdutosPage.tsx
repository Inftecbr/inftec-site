import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { COMPANY, PRODUCT, PORTAL_LABELS } from '../lib/constants'

const products = [
  {
    id: 'salefast',
    name: PRODUCT.name,
    summary:
      'Plataforma de inteligência operacional comercial: IA assistiva, atendimento conversacional e operação orientada a contexto — desenvolvida e operada pela INFTEC.',
    bullets: ['Inteligência operacional comercial', 'IA assistiva com governança', 'Atendimento conversacional'],
    siteUrl: PRODUCT.siteUrl,
  },
]

export default function ProdutosPage() {
  return (
    <>
      <PageMeta
        title="Produtos — INFTEC"
        description="Catálogo institucional de produtos da INFTEC. Salefast é o produto flagship — site e aplicação em domínios próprios."
        path="/produtos"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Produtos"
            title={`Plataformas operadas pela ${COMPANY.brand}`}
            lead="Visão resumida no site institucional. Funcionalidades, demonstrações e operação detalhada vivem nos sites e aplicações de cada produto."
          />
          <div className="grid gap-6 max-w-2xl">
            {products.map((p) => (
              <article key={p.id} className="rounded-2xl border border-border bg-bg-secondary p-8">
                <h2 className="text-xl font-semibold text-text-primary">{p.name}</h2>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{p.summary}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-text-secondary">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-data font-mono text-xs">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-text-muted">
                  Profundidade operacional, CRM, automação e onboarding: exclusivamente em{' '}
                  <span className="font-mono">{p.siteUrl.replace('https://', '')}</span> e{' '}
                  <span className="font-mono">{PRODUCT.appUrl.replace('https://', '')}</span>.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="primary" href={p.siteUrl} external>
                    Acessar site do produto ↗
                  </Button>
                  <Button variant="ghost" href={PRODUCT.appUrl} external>
                    {PORTAL_LABELS.salefastApp} ↗
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
