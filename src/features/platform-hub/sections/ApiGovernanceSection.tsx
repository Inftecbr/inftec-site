import Container, { Section, SectionHeader } from '../../../components/ui/Container'
import InfoCard from '../../../components/cards/InfoCard'
import { DOMAINS } from '../../../config/domains'

export function ApiGovernanceSection() {
  return (
    <Section alt>
      <Container>
        <SectionHeader
          eyebrow="APIs"
          title="Governança de APIs"
          lead="Contratos journey-first, consumo por superfície e isolamento de frontends — documentação viva no API Platform."
        />
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Journey-first APIs">
            Endpoints organizados por jornada de produto, não por tabelas de banco — alinhados ao domínio operacional.
          </InfoCard>
          <InfoCard title="x-target-front">
            Cabeçalho de roteamento indica qual BFF/superfície pode consumir cada operação — evita vazamento entre admin e operação.
          </InfoCard>
          <InfoCard title="Isolamento de frontend">
            Nenhuma superfície compartilha bundle ou sessão com outra; contratos versionados por canal.
          </InfoCard>
          <InfoCard title="OpenAPI filtrado">
            Documentação publicada por superfície em{' '}
            <a href={DOMAINS.DOCS_PLATFORM_URL} className="text-data hover:underline" target="_blank" rel="noopener noreferrer">
              docs.inftec.com.br
            </a>{' '}
            — não exposição crua de todo o backend.
          </InfoCard>
        </div>
      </Container>
    </Section>
  )
}
