import type { PortalPageStatusVariant } from '../../hooks/portalPageStatus'

const LABELS: Record<PortalPageStatusVariant, string> = {
  loading: 'Carregando…',
  connected: 'API conectada',
  'api-error': 'API retornou erro',
  'endpoint-unavailable': 'Endpoint não disponível',
  'no-data': 'Sem dados',
  placeholder: 'UI placeholder',
}

const STYLES: Record<PortalPageStatusVariant, string> = {
  loading: 'bg-bg-surface text-text-muted ring-border',
  connected: 'bg-success/10 text-success ring-success/20',
  'api-error': 'bg-warning/10 text-warning ring-warning/20',
  'endpoint-unavailable': 'bg-warning/10 text-warning ring-warning/20',
  'no-data': 'bg-bg-surface text-text-secondary ring-border',
  placeholder: 'bg-data/10 text-data ring-data/20',
}

export default function PortalPageStatus({ variant }: { variant: PortalPageStatusVariant }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ring-1 ${STYLES[variant]}`}
    >
      {LABELS[variant]}
    </span>
  )
}
