import PageMeta from '../../components/PageMeta'
import Container, { Section } from '../../components/ui/Container'
import { ArchitectureSection } from '../../features/platform-hub/sections/ArchitectureSection'
import { SurfacesSection } from '../../features/platform-hub/sections/SurfacesSection'
import { ApiGovernanceSection } from '../../features/platform-hub/sections/ApiGovernanceSection'
import { PlatformStatusSection } from '../../features/platform-hub/sections/PlatformStatusSection'
import { PlatformSecuritySection } from '../../features/platform-hub/sections/PlatformSecuritySection'
import Button from '../../components/ui/Button'
import { useAccessHub } from '../../features/access-hub/AccessHubContext'

export default function PlataformaPage() {
  const { open } = useAccessHub()
  return (
    <>
      <PageMeta
        title="Plataforma INFTEC — Arquitetura e superfícies"
        description="Hub técnico institucional: BFFs, superfícies, governança de APIs e status da plataforma INFTEC."
        path="/plataforma"
      />
      <Section className="pt-12 md:pt-16 pb-8">
        <Container>
          <p className="text-xs font-medium uppercase tracking-wide text-data mb-3">Platform hub</p>
          <h1 className="text-3xl font-semibold tracking-tight max-w-3xl">Ecossistema operacional INFTEC</h1>
          <p className="mt-4 text-text-secondary max-w-2xl leading-relaxed">
            Visão técnica das superfícies, camadas BFF e governança — sem substituir a documentação completa do API Platform.
          </p>
          <div className="mt-6">
            <Button variant="primary" onClick={open}>
              Entrar — Access Hub
            </Button>
          </div>
        </Container>
      </Section>
      <ArchitectureSection />
      <SurfacesSection />
      <ApiGovernanceSection />
      <PlatformStatusSection />
      <PlatformSecuritySection />
    </>
  )
}
