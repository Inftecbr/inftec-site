import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { COMPANY, PRODUCT, PORTAL_LABELS, URLS } from '../lib/constants'

export default function EmpresaPage() {
  return (
    <>
      <PageMeta
        title="Empresa — INFTEC Tecnologia"
        description="INFTEC é a empresa de tecnologia. Salefast é o produto flagship. Portal INFTEC e App Salefast são ambientes distintos."
        path="/empresa"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Empresa"
            title="Tecnologia para operações que não podem decidir no escuro."
            lead={COMPANY.positioning}
          />
          <div className="prose-inftec max-w-3xl space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">A INFTEC é a empresa</h2>
              <p>
                {COMPANY.legalName} (CNPJ {COMPANY.cnpj}) desenvolve e opera software SaaS proprietário.{' '}
                {COMPANY.brand} é a razão social e a marca guarda-chuva — não confundir com um produto.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Salefast é o produto flagship</h2>
              <p>
                {PRODUCT.name} é um produto desenvolvido e operado por {COMPANY.legalName}. Possui{' '}
                {PORTAL_LABELS.salefastSite} e {PORTAL_LABELS.salefastApp} — domínios, identidade e logins próprios.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Arquitetura de portais</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-mono text-data text-xs">{URLS.inftecSite.replace('https://', '')}</span> — site
                  institucional (você está aqui)
                </li>
                <li>
                  <span className="font-mono text-data text-xs">{URLS.inftecPortal.replace('https://', '')}</span> —{' '}
                  {PORTAL_LABELS.inftecPortal}: gestão institucional, governança e administração interna da empresa
                </li>
                <li>
                  <span className="font-mono text-data text-xs">{URLS.salefastSite.replace('https://', '')}</span> —{' '}
                  {PORTAL_LABELS.salefastSite}: institucional e comercial do produto
                </li>
                <li>
                  <span className="font-mono text-data text-xs">{URLS.salefastApp.replace('https://', '')}</span> —{' '}
                  {PORTAL_LABELS.salefastApp}: operação autenticada para clientes do {PRODUCT.name}
                </li>
              </ul>
              <p className="mt-3 text-sm">
                O login do {PORTAL_LABELS.inftecPortal} e o login do {PORTAL_LABELS.salefastApp} são{' '}
                <strong className="text-text-primary font-medium">distintos</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Missão e visão</h2>
              <p>
                Desenvolver plataformas SaaS que transformam sinais da operação em decisão acionável — com engenharia
                .NET, eventos, observabilidade e IA com governança. Visão: referência em inteligência operacional, com
                novos produtos sob a mesma tese quando aplicável.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" href={COMPANY.portalPath}>
              {PORTAL_LABELS.inftecPortal}
            </Button>
            <Button variant="secondary" href={PRODUCT.siteUrl} external>
              {PORTAL_LABELS.salefastSite}
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
