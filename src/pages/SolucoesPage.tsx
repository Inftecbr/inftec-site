import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { PRODUCT, PORTAL_LABELS } from '../lib/constants'

const verticals = [
  {
    title: 'Imobiliárias',
    body: 'Plantão, corretores, visitas, unidades e follow-up pós-proposta. Prioridade por intenção real no WhatsApp e canais digitais.',
    highlight: true,
  },
  {
    title: 'Times comerciais B2B',
    body: 'Funil consultivo, múltiplos decisores, ciclos longos — contexto e prioridade quando o timing importa.',
  },
  {
    title: 'Operações de atendimento',
    body: 'Volume alto de conversas, SLAs e escalonamento com leitura de comportamento e urgência.',
  },
]

export default function SolucoesPage() {
  return (
    <>
      <PageMeta
        title="Soluções Salefast — Imobiliárias e operações comerciais | INFTEC"
        description="Salefast para imobiliárias, times comerciais e atendimento: priorização por comportamento, contexto omnichannel e operação viva."
        path="/solucoes"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Soluções"
            title="Vertical e operação importam — a plataforma adapta o domínio."
            lead="Verticais do produto Salefast (INFTEC). Detalhes comerciais e demonstração no site do produto."
          />
          <div className="space-y-4">
            {verticals.map((v) => (
              <article
                key={v.title}
                className={`rounded-xl border p-6 md:p-8 ${
                  v.highlight ? 'border-accent/30 bg-accent/5' : 'border-border bg-bg-secondary'
                }`}
              >
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-text-secondary max-w-3xl">{v.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="primary" href={PRODUCT.siteUrl} external>
              {PORTAL_LABELS.salefastSite}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
