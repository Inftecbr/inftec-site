import PageMeta from '../components/PageMeta'
import { LegalLayout } from '../components/LegalLayout'
import { TermsOfUseBody } from '../content/legal/termsOfUseSections'
import { COMPANY, PRODUCT } from '../lib/constants'

export default function TermosPage() {
  return (
    <>
      <PageMeta
        title="Termos de Uso | INFTEC — Ecossistema SaaS e Salefast"
        description="Termos de Uso da INFTEC TECNOLOGIA LTDA: plataformas SaaS, Salefast, APIs, OAuth Meta/WhatsApp, multi-tenant e governança operacional."
        path="/termos"
      />
      <LegalLayout title="Termos de Uso" updated="26 de maio de 2026">
        <p className="text-text-secondary leading-relaxed border-l-2 border-data/40 pl-4">
          Documento aplicável ao ecossistema tecnológico operado por <strong className="text-text-primary">{COMPANY.legalName}</strong>,
          incluindo o produto <strong className="text-text-primary">{PRODUCT.name}</strong>, portais autenticados, APIs
          corporativas e integrações comerciais. Leitura recomendada para clientes enterprise, operadores de tenant e
          revisões Meta / WhatsApp Business.
        </p>
        <TermsOfUseBody />
      </LegalLayout>
    </>
  )
}
