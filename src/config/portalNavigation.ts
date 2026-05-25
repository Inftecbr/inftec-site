export type PortalNavItem = {
  to: string
  label: string
  /** Rótulo no menu recolhido (rail) — deve ser único e legível. */
  shortLabel: string
}

export type PortalNavGroup = {
  id: string
  label: string
  items: PortalNavItem[]
}

/** Fonte única de verdade — sidebar desktop, drawer mobile e auditoria de rotas. */
export const PORTAL_NAV_GROUPS: PortalNavGroup[] = [
  {
    id: 'overview',
    label: 'Visão geral',
    items: [{ to: '/app/dashboard', label: 'Dashboard', shortLabel: 'Home' }],
  },
  {
    id: 'clients',
    label: 'Clientes & Acesso',
    items: [
      { to: '/app/tenants', label: 'Tenants', shortLabel: 'Tnt' },
      { to: '/app/users', label: 'Usuários', shortLabel: 'Usr' },
    ],
  },
  {
    id: 'catalog',
    label: 'Catálogo',
    items: [
      { to: '/app/plans', label: 'Planos', shortLabel: 'Pln' },
      { to: '/app/features', label: 'Features', shortLabel: 'Ftr' },
    ],
  },
  {
    id: 'finance',
    label: 'Financeiro',
    items: [{ to: '/app/billing', label: 'Billing', shortLabel: 'Bill' }],
  },
  {
    id: 'platform',
    label: 'Plataforma',
    items: [{ to: '/app/integrations', label: 'Integrações', shortLabel: 'Int' }],
  },
  {
    id: 'system',
    label: 'Sistema',
    items: [
      { to: '/app/diagnostics', label: 'Diagnóstico', shortLabel: 'Diag' },
      { to: '/app/settings', label: 'Preferências do Console', shortLabel: 'Pref' },
    ],
  },
]

export const PORTAL_NAV_ITEMS: PortalNavItem[] = PORTAL_NAV_GROUPS.flatMap((g) => g.items)

/** Rotas registradas no router — detalhe/redirects não entram no menu principal. */
export const PORTAL_APP_ROUTES = [
  '/app/dashboard',
  '/app/users',
  '/app/tenants',
  '/app/plans',
  '/app/features',
  '/app/billing',
  '/app/integrations',
  '/app/diagnostics',
  '/app/settings',
  '/app/tenants/:tenantId',
  '/app/subscriptions',
] as const

export const PORTAL_MODULES = [
  {
    title: 'Tenants',
    description: 'Hub operacional — plano, assinatura e billing por cliente.',
    to: '/app/tenants',
  },
  {
    title: 'Planos',
    description: 'Catálogo comercial e capabilities por plano.',
    to: '/app/plans',
  },
  {
    title: 'Features',
    description: 'Capabilities vinculadas aos planos.',
    to: '/app/features',
  },
  {
    title: 'Billing',
    description: 'Visão global de faturas e histórico financeiro.',
    to: '/app/billing',
  },
  {
    title: 'Usuários',
    description: 'Contas, status e bloqueios da plataforma.',
    to: '/app/users',
  },
  {
    title: 'Integrações',
    description: 'Conectores e Meta Business.',
    to: '/app/integrations',
  },
] as const

export const PORTAL_SIDEBAR_WIDTH = 260
export const PORTAL_SIDEBAR_COLLAPSED_WIDTH = 80
