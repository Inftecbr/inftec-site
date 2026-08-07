import { Link } from 'react-router-dom'
import PageMeta from '../../components/PageMeta'
import Container, { Section, SectionHeader } from '../../components/ui/Container'
import Button from '../../components/ui/Button'
import { ECOSYSTEM_SURFACES } from '../../config/ecosystem'
import { COMPANY, PRODUCT } from '../../lib/constants'

const ecosystemLayers = [
  { label: 'Empresa', detail: `${COMPANY.brand} — marca, modelo SaaS, confiança e portfólio` },
  { label: 'Produtos SaaS', detail: 'Linhas com site próprio (ex.: Salefast hoje; novos produtos amanhã)' },
  { label: 'Aplicações', detail: 'Operação autenticada dos clientes em cada produto' },
  { label: 'Documentação e status', detail: 'Referência técnica e transparência operacional do ecossistema' },
  { label: 'Clientes', detail: 'Valor entregue via assinatura e uso contínuo dos produtos SaaS' },
]

export default function EcossistemaPage() {
  return (
    <>
      <PageMeta
        title="Ecossistema SaaS — INFTEC"
        description="Ecossistema INFTEC: empresa SaaS, produtos, aplicações, documentação, status e clientes — uma operação integrada de produtos próprios."
        path="/ecossistema"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Ecossistema"
            title="Como empresa, produtos e clientes se conectam."
            lead="Um ecossistema SaaS único: a INFTEC opera produtos próprios; cada produto conversa com clientes em domínios dedicados; a empresa garante confiança institucional."
          />
          <div className="max-w-3xl space-y-6 text-sm text-text-secondary leading-relaxed -mt-4 mb-10">
            <ol className="space-y-3">
              {ecosystemLayers.map((layer, i) => (
                <li key={layer.label} className="flex gap-3 rounded-lg border border-border bg-bg-secondary/50 px-4 py-3">
                  <span className="font-mono text-xs text-data shrink-0">{i + 1}</span>
                  <span>
                    <strong className="text-text-primary font-medium">{layer.label}</strong>
                    {' — '}
                    {layer.detail}
                  </span>
                </li>
              ))}
            </ol>
            <p>
              <strong className="text-text-primary font-medium">{PRODUCT.name}</strong> é o primeiro produto SaaS
              visível neste mapa. A INFTEC permanece a entidade constante quando novos produtos entrarem no portfólio.
            </p>
          </div>
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
              Produtos SaaS
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
