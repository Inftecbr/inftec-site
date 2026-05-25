import { DOMAINS, INFTEC_PORTAL_URL } from './domains'

export type PlatformSurfaceId =
  | 'inftec-portal'
  | 'salefast-operation'
  | 'salefast-onboarding'
  | 'salefast-insights'

export type BffId = 'bff-admin' | 'bff-operation' | 'bff-onboarding' | 'bff-analytics'

export const BFF_LAYERS: {
  id: BffId
  name: string
  description: string
}[] = [
  {
    id: 'bff-admin',
    name: 'BFF.Admin',
    description: 'Superfície de governança, configuração institucional e administração multi-tenant.',
  },
  {
    id: 'bff-operation',
    name: 'BFF.Operation',
    description: 'Operação comercial em tempo real — filas, contexto e priorização.',
  },
  {
    id: 'bff-onboarding',
    name: 'BFF.Onboarding',
    description: 'Provisionamento, convites e ciclo de entrada de tenants e usuários.',
  },
  {
    id: 'bff-analytics',
    name: 'BFF.Analytics',
    description: 'Leituras agregadas e sinais de operação para gestão — sem acoplar ao admin.',
  },
]

export const PLATFORM_SURFACES: {
  id: PlatformSurfaceId
  name: string
  objective: string
  audience: string
  responsibility: string
  href: string
  external: boolean
}[] = [
  {
    id: 'inftec-portal',
    name: 'INFTEC Portal',
    objective: 'Administração e governança da plataforma INFTEC.',
    audience: 'Operadores internos e administradores autorizados.',
    responsibility: 'Configuração, clientes, produtos, faturamento e políticas.',
    href: INFTEC_PORTAL_URL,
    external: false,
  },
  {
    id: 'salefast-operation',
    name: 'Salefast Operation',
    objective: 'Operação comercial diária com inteligência orientada a comportamento.',
    audience: 'Times comerciais e atendimento dos clientes.',
    responsibility: 'Conversas, fila, prioridade e contexto omnichannel.',
    href: DOMAINS.SALEFAST_APP_URL,
    external: true,
  },
  {
    id: 'salefast-onboarding',
    name: 'Salefast Onboarding',
    objective: 'Entrada e configuração inicial do tenant comercial.',
    audience: 'Implementação e admins do cliente.',
    responsibility: 'Setup, integrações iniciais e habilitação de canais.',
    href: DOMAINS.SALEFAST_APP_URL,
    external: true,
  },
  {
    id: 'salefast-insights',
    name: 'Salefast Insights',
    objective: 'Visão gerencial sobre comportamento e operação comercial.',
    audience: 'Gestores comerciais.',
    responsibility: 'Indicadores operacionais derivados da operação viva.',
    href: DOMAINS.SALEFAST_APP_URL,
    external: true,
  },
]

export const BFF_STATUS_STATIC: { id: BffId; label: string; state: 'operational' | 'degraded' | 'maintenance' }[] = [
  { id: 'bff-admin', label: 'BFF.Admin', state: 'operational' },
  { id: 'bff-operation', label: 'BFF.Operation', state: 'operational' },
  { id: 'bff-analytics', label: 'BFF.Analytics', state: 'operational' },
  { id: 'bff-onboarding', label: 'BFF.Onboarding', state: 'operational' },
]
