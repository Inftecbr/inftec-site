import PageMeta from '../components/PageMeta'
import HomeHero from '../sections/home/HomeHero'
import {
  ProblemSection,
  SalefastProductSection,
  HowItWorksSection,
  AISection,
  RealEstateSection,
  InftecInstitutionalSection,
  SecurityTeaserSection,
  FinalCTASection,
} from '../sections/home/HomeSections'

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="INFTEC — Empresa de tecnologia | Plataformas de inteligência operacional"
        description="Site institucional da INFTEC. Empresa de tecnologia que constrói produtos SaaS. Salefast é o produto flagship — site e app em domínios próprios."
        path="/"
      />
      <HomeHero />
      <InftecInstitutionalSection />
      <ProblemSection />
      <SalefastProductSection />
      <HowItWorksSection />
      <AISection />
      <RealEstateSection />
      <SecurityTeaserSection />
      <FinalCTASection />
    </>
  )
}
