import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { COMPANY, PRODUCT } from '../lib/constants'

const products = [
  {
    id: 'salefast',
    name: PRODUCT.name,
    summary: PRODUCT.institutionalSummary,
    siteUrl: PRODUCT.siteUrl,
  },
]

export default function ProdutosPage() {
  return (
    <>
      <PageMeta
        title="Produtos SaaS — INFTEC"
        description="Produtos SaaS do ecossistema INFTEC. Visão institucional do portfólio — funcionalidades, pricing e demonstrações nos sites de cada produto."
        path="/produtos"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Produtos SaaS"
            title={`Ecossistema de produtos ${COMPANY.brand}`}
            lead="Cada item abaixo é um produto SaaS operado pela INFTEC. Este site não vende nem detalha funcionalidades — apenas a ligação empresa ↔ produto."
          />
          <p className="text-sm text-text-secondary max-w-2xl -mt-4 mb-8 leading-relaxed">
            O portfólio cresce com novos produtos SaaS ao longo do tempo. Hoje: {PRODUCT.name}. Amanhã: novas linhas
            sob a mesma empresa.
          </p>
          <div className="grid gap-6 max-w-2xl">
            {products.map((p) => (
              <article key={p.id} className="rounded-2xl border border-border bg-bg-secondary p-8">
                <h2 className="text-xl font-semibold text-text-primary">{p.name}</h2>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{p.summary}</p>
                <div className="mt-6">
                  <Button variant="primary" href={p.siteUrl} external>
                    Acessar site do produto ↗
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
