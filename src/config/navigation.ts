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
        id: 'portfolio',
        label: 'Portfólio INFTEC',
        description: 'Produtos SaaS da INFTEC — visão institucional do portfólio.',
        href: '/produtos',
        external: false,
        icon: 'product' as const,
      },
      {
        id: 'salefast',
        label: 'Salefast',
        description: 'Site do produto — funcionalidades e jornada comercial.',
        href: DOMAINS.SALEFAST_SITE_URL,
        external: true,
        icon: 'product' as const,
      },
    ],
  },
  links: [
    { to: '/ecossistema', label: 'Ecossistema' },
    { to: '/seguranca', label: 'Segurança' },
    { to: '/empresa', label: 'Empresa' },
    { to: '/contato', label: 'Contato' },
  ],
} as const

export const HEADER_MAIN_LINKS = PUBLIC_NAV.links
