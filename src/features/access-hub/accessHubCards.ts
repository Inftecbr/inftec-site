import { DOMAINS } from '../../config/domains'
import type { AccessHubCardModel } from './types'

export const ACCESS_HUB_CARDS: AccessHubCardModel[] = [
  {
    id: 'portal-inftec',
    title: 'Portal INFTEC',
    description: 'Console administrativo: governança multi-tenant, configuração e administração institucional.',
    href: DOMAINS.INFTEC_PORTAL_PATH,
    external: false,
    domainLabel: 'inftec.com.br/app',
    portalLogin: true,
  },
  {
    id: 'salefast-app',
    title: 'Salefast App',
    description: 'Aplicação autenticada dos clientes do produto Salefast — operação comercial diária.',
    href: DOMAINS.SALEFAST_APP_URL,
    external: true,
    domainLabel: 'app.salefast.com.br',
  },
  {
    id: 'developers',
    title: 'Developers / Docs',
    description: 'Documentação de APIs, contratos e integrações do ecossistema INFTEC.',
    href: DOMAINS.DOCS_PLATFORM_URL,
    external: true,
    domainLabel: 'docs.inftec.com.br',
  },
]
