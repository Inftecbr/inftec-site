import Container, { Section, SectionHeader } from '../../../components/ui/Container'
import InfoCard from '../../../components/cards/InfoCard'
import { BFF_LAYERS } from '../../../config/platform'

export function ArchitectureSection() {
  return (
    <Section alt>
      <Container>
        <SectionHeader
          eyebrow="Arquitetura"
          title="Arquitetura operacional"
          lead="Camadas BFF isolam superfícies — cada front consome contratos filtrados, sem acoplamento entre administração e operação."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {BFF_LAYERS.map((bff) => (
            <InfoCard key={bff.id} title={bff.name}>
              {bff.description}
            </InfoCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
