import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { LegalLayout } from '../components/LegalLayout'
import { PrivacyPolicyBody } from '../content/legal/privacyPolicySections'
import { PrivacyLandingSummary } from '../content/legal/privacySummaries'
import { COMPANY } from '../lib/constants'

export default function PrivacidadePage() {
  return (
    <>
      <PageMeta
        title="Política de Privacidade | INFTEC — Salefast"
        description="Política de Privacidade da INFTEC e do Salefast: LGPD, integrações Meta/WhatsApp, IA assistiva, multi-tenant, direitos do titular e exclusão de dados."
        path="/privacidade"
      />
      <LegalLayout title="Política de Privacidade" updated="25 de maio de 2026">
        <p className="text-text-secondary leading-relaxed">
          Documento aplicável ao site {COMPANY.siteUrl}, ao ecossistema INFTEC e à plataforma Salefast. Versão orientada
          à operação real do produto, integrações comerciais e App Review futuro — sem promessas de certificação ou
          controles não implementados.
        </p>
        <div className="mt-8 rounded-xl border border-border bg-bg-secondary/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-3">Resumo institucional</p>
          <PrivacyLandingSummary />
        </div>
        <PrivacyPolicyBody />
      </LegalLayout>
    </>
  )
}
