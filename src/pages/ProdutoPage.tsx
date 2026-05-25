import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { COMPANY, PRODUCT, PORTAL_LABELS } from '../lib/constants'

export default function ProdutoPage() {
  return (
    <>
      <PageMeta
        title="Salefast — Produto da INFTEC | Visão corporativa"
        description="Salefast é o produto SaaS flagship da INFTEC. Site comercial e app operacional em domínios próprios. Esta página é a visão institucional no site da INFTEC."
        path="/produto"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Produto · INFTEC"
            title={`${PRODUCT.name} — produto SaaS da ${COMPANY.brand}`}
            lead={`${PRODUCT.tagline} Desenvolvido e operado pela INFTEC, com identidade e portais próprios.`}
          />
          <div className="prose-inftec max-w-3xl space-y-4 mb-10">
            <p>
              Esta página faz parte de <strong className="text-text-primary font-medium">inftec.com.br</strong> — visão
              corporativa do produto. Materiais comerciais, demonstrações e onboarding de clientes vivem em{' '}
              <strong className="text-text-primary font-medium">{PRODUCT.siteUrl.replace('https://', '')}</strong>. A
              operação autenticada dos clientes está em{' '}
              <strong className="text-text-primary font-medium">{PRODUCT.appUrl.replace('https://', '')}</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Console operacional',
                body: 'Fila, scores e contexto unificado para quem atende e vende no dia a dia.',
              },
              {
                title: 'Motor de intenção',
                body: 'Interpretação de comportamento nas conversas — timing, retorno, tipo de demanda.',
              },
              {
                title: 'Integrações',
                body: 'Mensageria, canais digitais e sistemas adjacentes conectados à operação viva.',
              },
            ].map((m) => (
              <article key={m.title} className="rounded-xl border border-border bg-bg-secondary p-6">
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{m.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button variant="primary" href={PRODUCT.siteUrl} external>
              {PORTAL_LABELS.salefastSite}
            </Button>
            <Button variant="secondary" href={PRODUCT.appUrl} external>
              {PORTAL_LABELS.salefastApp}
            </Button>
            <Button variant="ghost" href="/contato">
              Contato INFTEC
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
