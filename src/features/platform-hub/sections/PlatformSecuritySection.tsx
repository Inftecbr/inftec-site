import Container, { Section, SectionHeader } from '../../../components/ui/Container'
import InfoCard from '../../../components/cards/InfoCard'

export function PlatformSecuritySection() {
  return (
    <Section alt>
      <Container>
        <SectionHeader
          eyebrow="Governança"
          title="Segurança e boundaries"
          lead="Multi-tenant, Auth0, observabilidade e separação rígida entre universos administrativos e operacionais."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard title="Multi-tenant">Isolamento lógico por tenant em dados, filas e configuração.</InfoCard>
          <InfoCard title="Superfícies isoladas">Portal INFTEC, Salefast Operation e docs não compartilham sessão.</InfoCard>
          <InfoCard title="Auth0">Identidade federada preparada — integração progressiva no portal /app.</InfoCard>
          <InfoCard title="Governança de APIs">Contratos, headers de roteamento e revisão por superfície.</InfoCard>
          <InfoCard title="Observabilidade">Logs, métricas e tracing como requisito de plataforma.</InfoCard>
          <InfoCard title="Boundaries">Domínios e BFFs delimitam responsabilidade — sem “war room” no site público.</InfoCard>
        </div>
      </Container>
    </Section>
  )
}
