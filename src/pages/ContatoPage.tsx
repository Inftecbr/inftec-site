import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { COMPANY, PRODUCT, PORTAL_LABELS } from '../lib/constants'

export default function ContatoPage() {
  return (
    <>
      <PageMeta
        title="Contato — INFTEC Tecnologia"
        description="Contato institucional da INFTEC. Para produto Salefast, use o site comercial ou o app de clientes."
        path="/contato"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Contato"
            title="Fale com a INFTEC (institucional)."
            lead="Parcerias, governança, privacidade, segurança e assuntos corporativos. Para demonstração comercial do Salefast, prefira o site do produto."
          />
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-xl border border-border bg-bg-secondary p-6 md:p-8">
              <h3 className="font-semibold text-text-primary">Canais INFTEC</h3>
              <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                <li>
                  Geral:{' '}
                  <a href={`mailto:${COMPANY.email}`} className="text-data hover:underline">
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  Privacidade / LGPD:{' '}
                  <a href={`mailto:${COMPANY.privacyEmail}`} className="text-data hover:underline">
                    {COMPANY.privacyEmail}
                  </a>
                </li>
                <li>
                  Segurança:{' '}
                  <a href={`mailto:${COMPANY.securityEmail}`} className="text-data hover:underline">
                    {COMPANY.securityEmail}
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-xs text-text-muted">
                {COMPANY.legalName} · CNPJ {COMPANY.cnpj} · {COMPANY.city}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-primary p-6 md:p-8 space-y-6">
              <div>
                <h3 className="font-semibold text-text-primary">Portal INFTEC</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Ambiente administrativo da empresa — não é o login de clientes do Salefast.
                </p>
                <div className="mt-4">
                  <Button variant="secondary" href={COMPANY.portalUrl} external>
                    {PORTAL_LABELS.inftecPortal}
                  </Button>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-text-primary">Universo Salefast</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Site comercial e app operacional do produto (domínios próprios).
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button variant="primary" href={PRODUCT.siteUrl} external>
                    {PORTAL_LABELS.salefastSite}
                  </Button>
                  <Button variant="ghost" href={PRODUCT.appUrl} external>
                    {PORTAL_LABELS.salefastApp}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
