import { DOMAINS, INFTEC_PORTAL_URL } from './domains'

export type EcosystemSurface = {
  id: string
  name: string
  domain: string
  surfaceType: string
  purpose: string
  responsibility: string
  href: string
  external: boolean
}

/** Superfícies do ecossistema — visão institucional (não documentação técnica). */
export const ECOSYSTEM_SURFACES: EcosystemSurface[] = [
  {
    id: 'inftec-site',
    name: 'INFTEC institucional',
    domain: 'inftec.com.br',
    surfaceType: 'Site corporativo',
    purpose: 'Empresa, ecossistema, governança, confiança e contato institucional.',
    responsibility: 'Comunicação da INFTEC como software vendor e operadora do ecossistema.',
    href: DOMAINS.INFTEC_SITE_URL,
    external: false,
  },
  {
    id: 'salefast-site',
    name: 'Salefast',
    domain: 'www.salefast.com.br',
    surfaceType: 'Site do produto',
    purpose: 'Apresentação comercial, funcionalidades e jornada do produto Salefast.',
    responsibility: 'Marketing e profundidade operacional do produto — fora do site INFTEC.',
    href: DOMAINS.SALEFAST_SITE_URL,
    external: true,
  },
  {
    id: 'salefast-app',
    name: 'Salefast Application',
    domain: 'app.salefast.com.br',
    surfaceType: 'Aplicação autenticada',
    purpose: 'Operação diária dos clientes do Salefast.',
    responsibility: 'CRM, atendimento, automação e dashboards — login de clientes do produto.',
    href: DOMAINS.SALEFAST_APP_URL,
    external: true,
  },
  {
    id: 'inftec-portal',
    name: 'Portal INFTEC',
    domain: 'inftec.com.br/app',
    surfaceType: 'Console administrativo',
    purpose: 'Governança multi-tenant, administração e configuração institucional.',
    responsibility: 'Operadores INFTEC e administradores autorizados — distinto do app Salefast.',
    href: INFTEC_PORTAL_URL,
    external: false,
  },
  {
    id: 'docs',
    name: 'API Platform',
    domain: 'docs.inftec.com.br',
    surfaceType: 'Documentação',
    purpose: 'Contratos de API, integrações e referência para desenvolvedores.',
    responsibility: 'Profundidade técnica de integração — link externo ao site institucional.',
    href: DOMAINS.DOCS_PLATFORM_URL,
    external: true,
  },
  {
    id: 'status',
    name: 'Platform Status',
    domain: 'status.inftec.com.br',
    surfaceType: 'Status operacional',
    purpose: 'Disponibilidade e incidentes das superfícies do ecossistema.',
    responsibility: 'Transparência operacional e comunicação de incidentes.',
    href: DOMAINS.STATUS_PLATFORM_URL,
    external: true,
  },
]
