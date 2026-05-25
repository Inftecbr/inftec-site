import { DOMAINS } from '../../config/domains'
import type { AccessHubCardModel } from './types'

export const ACCESS_HUB_CARDS: AccessHubCardModel[] = [
  {
    id: 'portal-inftec',
    title: 'Portal INFTEC',
    description: 'Governança, administração e configuração da plataforma.',
    href: DOMAINS.INFTEC_PORTAL_PATH,
    external: false,
    domainLabel: 'inftec.com.br/app',
    portalLogin: true,
  },
  {
    id: 'salefast-operation',
    title: 'Salefast Operation',
    description: 'Operação comercial e inteligência operacional.',
    href: DOMAINS.SALEFAST_APP_URL,
    external: true,
    domainLabel: 'app.salefast.com.br',
  },
  {
    id: 'api-platform',
    title: 'API Platform',
    description: 'Documentação técnica e superfícies de integração.',
    href: DOMAINS.DOCS_PLATFORM_URL,
    external: true,
    domainLabel: 'docs.inftec.com.br',
  },
]
