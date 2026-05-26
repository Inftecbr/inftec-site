import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { LegalLayout } from '../components/LegalLayout'
import { PrivacyLandingSummary } from '../content/legal/privacySummaries'
import { PrivacyOnboardingSummary } from '../content/legal/privacySummaries'

export default function PrivacidadeResumoPage() {
  return (
    <>
      <PageMeta
        title="Privacidade — resumo | INFTEC — Salefast"
        description="Resumo da política de privacidade do Salefast e da INFTEC para landing, onboarding e integrações Meta/WhatsApp."
        path="/privacidade/resumo"
      />
      <LegalLayout title="Privacidade — resumo" updated="25 de maio de 2026">
        <p className="text-text-secondary leading-relaxed">
          Versão curta para landing page, materiais comerciais e referência rápida. O documento vinculante é a{' '}
          <Link to="/privacidade" className="text-data">
            Política de Privacidade completa
          </Link>
          .
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-text-primary">Institucional</h2>
          <PrivacyLandingSummary />
        </section>

        <section className="mt-10 space-y-4 rounded-xl border border-border bg-bg-secondary p-5">
          <h2 className="text-lg font-semibold text-text-primary">Onboarding do produto</h2>
          <div className="text-text-secondary [&_strong]:text-text-primary">
            <PrivacyOnboardingSummary />
          </div>
        </section>
      </LegalLayout>
    </>
  )
}
