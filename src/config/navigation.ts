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
        description: 'Plataforma de inteligência operacional comercial.',
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
