/** @deprecated Prefer importing from `config/domains` and `config/navigation` */
import { DOMAINS, INFTEC_PORTAL_URL } from '../config/domains'

export const URLS = {
  inftecSite: DOMAINS.INFTEC_SITE_URL,
  inftecPortal: INFTEC_PORTAL_URL,
  salefastSite: DOMAINS.SALEFAST_SITE_URL,
  salefastApp: DOMAINS.SALEFAST_APP_URL,
  status: DOMAINS.STATUS_PLATFORM_URL,
  docs: DOMAINS.DOCS_PLATFORM_URL,
} as const

export const COMPANY = {
  name: 'INFTEC Tecnologia Ltda',
  legalName: 'INFTEC TECNOLOGIA LTDA',
  brand: 'INFTEC',
  cnpj: '47.281.110/0001-32',
  city: 'São Paulo – SP',
  email: 'contato@inftec.com.br',
  legalEmail: 'juridico@inftec.com.br',
  privacyEmail: 'privacidade@inftec.com.br',
  supportEmail: 'suporte@inftec.com.br',
  securityEmail: 'security@inftec.com.br',
  siteUrl: DOMAINS.INFTEC_SITE_URL,
  portalUrl: INFTEC_PORTAL_URL,
  portalPath: DOMAINS.INFTEC_PORTAL_PATH,
  ogImage: 'https://inftec.com.br/og-image.png',
  slogan: 'Inteligência operacional, aplicada.',
  positioning:
    'Empresa de tecnologia que constrói e opera plataformas operacionais — software onde sinais viram prioridade acionável.',
  shortDescription:
    'Hub institucional da INFTEC: plataformas SaaS, governança e acesso às superfícies do ecossistema.',
} as const

export const PRODUCT = {
  name: 'Salefast',
  tagline: 'Plataforma de inteligência comercial orientada a comportamento.',
  siteUrl: DOMAINS.SALEFAST_SITE_URL,
  appUrl: DOMAINS.SALEFAST_APP_URL,
} as const

export const PORTAL_LABELS = {
  inftecPortal: 'Portal INFTEC',
  salefastApp: 'Salefast Operation',
  salefastSite: 'Site Salefast',
  apiPlatform: 'API Platform',
} as const
