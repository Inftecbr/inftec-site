import PageMeta from '../components/PageMeta'
import HomeHero from '../sections/home/HomeHero'
import {
  HomePurposeSection,
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
        title="INFTEC — Empresa SaaS | Produtos próprios e ecossistema"
        description="INFTEC: empresa SaaS que cria, opera e evolui produtos próprios. Quem somos, como criamos valor e ecossistema de produtos — Salefast e futuras linhas."
        path="/"
      />
      <HomeHero />
      <HomePurposeSection />
      <TrustConfidenceSection />
      <HomeProductsSection />
      <HomeEcosystemSection />
      <SecurityTeaserSection />
      <FinalCTASection />
    </>
  )
}
