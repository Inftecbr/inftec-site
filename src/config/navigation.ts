import { DOMAINS } from './domains'

export type NavDropdownItem = {
  id: string
  label: string
  description: string
  href: string
  external: boolean
  icon: 'portal' | 'operation' | 'api' | 'status' | 'product'
}

export const PUBLIC_NAV = {
  products: {
    label: 'Produtos',
    items: [
      {
        id: 'salefast',
        label: 'Salefast',
        description: 'Plataforma de inteligência comercial orientada a comportamento.',
        href: DOMAINS.SALEFAST_SITE_URL,
        external: true,
        icon: 'product' as const,
      },
    ],
  },
  platform: {
    label: 'Plataforma',
    items: [
      {
        id: 'platform-overview',
        label: 'Visão da plataforma',
        description: 'Arquitetura, superfícies e governança no site INFTEC.',
        href: '/plataforma',
        external: false,
        icon: 'portal' as const,
      },
      {
        id: 'portal-inftec',
        label: 'Portal INFTEC',
        description: 'Administração, governança e configuração institucional.',
        href: DOMAINS.INFTEC_PORTAL_PATH,
        external: false,
        icon: 'portal' as const,
      },
      {
        id: 'salefast-operation',
        label: 'Salefast Operation',
        description: 'Operação comercial autenticada dos clientes.',
        href: DOMAINS.SALEFAST_APP_URL,
        external: true,
        icon: 'operation' as const,
      },
      {
        id: 'api-platform',
        label: 'API Platform',
        description: 'Documentação técnica, contratos e integrações.',
        href: DOMAINS.DOCS_PLATFORM_URL,
        external: true,
        icon: 'api' as const,
      },
      {
        id: 'platform-status',
        label: 'Platform Status',
        description: 'Disponibilidade operacional das superfícies.',
        href: DOMAINS.STATUS_PLATFORM_URL,
        external: true,
        icon: 'status' as const,
      },
    ],
  },
  links: [
    { to: '/seguranca', label: 'Segurança' },
    { to: '/empresa', label: 'Empresa' },
  ],
} as const

export const HEADER_MAIN_LINKS = PUBLIC_NAV.links
