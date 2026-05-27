import PageMeta from '../components/PageMeta'
import HomeHero from '../sections/home/HomeHero'
import {
  TrustConfidenceSection,
  HomeProductsSection,
  HomeEcosystemSection,
  SecurityTeaserSection,
  FinalCTASection,
} from '../sections/home/HomeSections'

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="INFTEC — Empresa de tecnologia | Plataformas SaaS e ecossistema"
        description="Site institucional da INFTEC. Software vendor enterprise: governança, segurança e ecossistema. Salefast é produto em www.salefast.com.br."
        path="/"
      />
      <HomeHero />
      <TrustConfidenceSection />
      <HomeProductsSection />
      <HomeEcosystemSection />
      <SecurityTeaserSection />
      <FinalCTASection />
    </>
  )
}
