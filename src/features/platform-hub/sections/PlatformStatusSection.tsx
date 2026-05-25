import Container, { Section, SectionHeader } from '../../../components/ui/Container'
import StatusCard from '../../../components/cards/StatusCard'
import { BFF_STATUS_STATIC } from '../../../config/platform'
import { DOMAINS } from '../../../config/domains'

export function PlatformStatusSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Status"
          title="Platform status"
          lead="Indicadores estáticos iniciais — integração com monitoramento real via status.inftec.com.br."
        />
        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
          {BFF_STATUS_STATIC.map((row) => (
            <StatusCard key={row.id} label={row.label} state={row.state} />
          ))}
        </div>
        <p className="mt-6 text-sm">
          <a href={DOMAINS.STATUS_PLATFORM_URL} className="text-data hover:underline" target="_blank" rel="noopener noreferrer">
            Ver status completo ↗
          </a>
        </p>
      </Container>
    </Section>
  )
}
