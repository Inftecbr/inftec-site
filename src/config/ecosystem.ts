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
    surfaceType: 'Empresa SaaS',
    purpose: 'Identidade da empresa, modelo de negócio, confiança, portfólio e contato institucional.',
    responsibility: 'Comunicar a INFTEC como empresa SaaS operadora do ecossistema de produtos.',
    href: DOMAINS.INFTEC_SITE_URL,
    external: false,
  },
  {
    id: 'salefast-site',
    name: 'Salefast',
    domain: 'www.salefast.com.br',
    surfaceType: 'Produto SaaS',
    purpose: 'Presença comercial e institucional do produto Salefast — fora do site da empresa.',
    responsibility: 'Jornada comercial, funcionalidades e marketing do produto — domínio próprio.',
    href: DOMAINS.SALEFAST_SITE_URL,
    external: true,
  },
  {
    id: 'salefast-app',
    name: 'Salefast Application',
    domain: 'app.salefast.com.br',
    surfaceType: 'Aplicação SaaS',
    purpose: 'Operação autenticada dos clientes do produto Salefast.',
    responsibility: 'Experiência diária do cliente no produto — login e operação no domínio do produto.',
    href: DOMAINS.SALEFAST_APP_URL,
    external: true,
  },
  {
    id: 'inftec-portal',
    name: 'Portal INFTEC',
    domain: 'inftec.com.br/app',
    surfaceType: 'Governança corporativa',
    purpose: 'Administração institucional e governança do ecossistema SaaS.',
    responsibility: 'Operadores autorizados da empresa — distinto dos logins de clientes dos produtos.',
    href: INFTEC_PORTAL_URL,
    external: false,
  },
  {
    id: 'docs',
    name: 'Documentação',
    domain: 'docs.inftec.com.br',
    surfaceType: 'Documentação',
    purpose: 'Referência técnica de APIs e integrações dos produtos do ecossistema.',
    responsibility: 'Suporte à operação e integração — complementar ao site institucional.',
    href: DOMAINS.DOCS_PLATFORM_URL,
    external: true,
  },
  {
    id: 'status',
    name: 'Status',
    domain: 'status.inftec.com.br',
    surfaceType: 'Transparência operacional',
    purpose: 'Disponibilidade e comunicação de incidentes das plataformas SaaS.',
    responsibility: 'Confiança operacional para clientes do ecossistema.',
    href: DOMAINS.STATUS_PLATFORM_URL,
    external: true,
  },
]
