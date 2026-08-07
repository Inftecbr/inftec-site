import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { COMPANY, PRODUCT, PORTAL_LABELS } from '../lib/constants'

const channelCardClass =
  'rounded-xl border border-border bg-bg-secondary p-5 md:p-6 space-y-2'

export default function ContatoPage() {
  return (
    <>
      <PageMeta
        title="Contato — INFTEC Tecnologia"
        description="Canais institucionais da INFTEC: comercial corporativo, jurídico, privacidade, segurança e contato geral. Produtos comerciais em domínios dedicados."
        path="/contato"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Contato"
            title="Canais da INFTEC."
            lead="Assuntos da empresa SaaS e do ecossistema. Demonstrações, pricing e onboarding de cada produto ficam no site comercial da respectiva linha."
          />
          <p className="text-sm text-text-secondary max-w-3xl -mt-4 mb-10 leading-relaxed">
            {COMPANY.legalName} · CNPJ {COMPANY.cnpj} · {COMPANY.city}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <div className={channelCardClass}>
              <h3 className="font-semibold text-text-primary">Institucional</h3>
              <p className="text-sm text-text-secondary">
                Parcerias estratégicas, governança, ecossistema e assuntos corporativos.
              </p>
              <a href={`mailto:${COMPANY.email}`} className="text-sm text-data hover:underline">
                {COMPANY.email}
              </a>
            </div>
            <div className={channelCardClass}>
              <h3 className="font-semibold text-text-primary">Comercial (produtos)</h3>
              <p className="text-sm text-text-secondary">
                Demonstrações, pricing e onboarding comercial do {PRODUCT.name} — no site do produto.
              </p>
              <a
                href={PRODUCT.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-data hover:underline"
              >
                {PRODUCT.siteUrl.replace('https://', '')} ↗
              </a>
            </div>
            <div className={channelCardClass}>
              <h3 className="font-semibold text-text-primary">Jurídico</h3>
              <p className="text-sm text-text-secondary">Contratos, termos e questões legais corporativas.</p>
              <a href={`mailto:${COMPANY.legalEmail}`} className="text-sm text-data hover:underline">
                {COMPANY.legalEmail}
              </a>
            </div>
            <div className={channelCardClass}>
              <h3 className="font-semibold text-text-primary">Privacidade / LGPD</h3>
              <p className="text-sm text-text-secondary">Titulares, DPO e tratamento de dados pessoais.</p>
              <a href={`mailto:${COMPANY.privacyEmail}`} className="text-sm text-data hover:underline">
                {COMPANY.privacyEmail}
              </a>
            </div>
            <div className={channelCardClass}>
              <h3 className="font-semibold text-text-primary">Segurança</h3>
              <p className="text-sm text-text-secondary">Incidentes, vulnerabilidades e assuntos de segurança da informação.</p>
              <a href={`mailto:${COMPANY.securityEmail}`} className="text-sm text-data hover:underline">
                {COMPANY.securityEmail}
              </a>
            </div>
            <div className={channelCardClass}>
              <h3 className="font-semibold text-text-primary">Suporte operacional</h3>
              <p className="text-sm text-text-secondary">Clientes em produção — conforme contrato e canal do produto.</p>
              <a href={`mailto:${COMPANY.supportEmail}`} className="text-sm text-data hover:underline">
                {COMPANY.supportEmail}
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-bg-primary p-6 md:p-8">
              <h3 className="font-semibold text-text-primary">{PORTAL_LABELS.inftecPortal}</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Ambiente administrativo da empresa — distinto do login de clientes de produtos.
              </p>
              <div className="mt-4">
                <Button variant="secondary" href={COMPANY.portalUrl} external>
                  Acessar portal
                </Button>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-primary p-6 md:p-8">
              <h3 className="font-semibold text-text-primary">Operação do produto {PRODUCT.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Aplicação autenticada para clientes — domínio e políticas do produto.
              </p>
              <div className="mt-4">
                <Button variant="ghost" href={PRODUCT.appUrl} external>
                  {PORTAL_LABELS.salefastApp} ↗
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
