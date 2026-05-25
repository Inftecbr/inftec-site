/** Domínios e URLs oficiais — única fonte de verdade */
export const DOMAINS = {
  INFTEC_SITE_URL: 'https://inftec.com.br',
  /** Portal autenticado INFTEC (mesmo origin, rota SPA) */
  INFTEC_PORTAL_PATH: '/app',
  SALEFAST_SITE_URL: 'https://salefast.com.br',
  SALEFAST_APP_URL: 'https://app.salefast.com.br',
  STATUS_PLATFORM_URL: 'https://status.inftec.com.br',
  DOCS_PLATFORM_URL: 'https://docs.inftec.com.br',
} as const

export function inftecPortalUrl(origin?: string): string {
  if (typeof window !== 'undefined' && !origin) {
    return `${window.location.origin}${DOMAINS.INFTEC_PORTAL_PATH}`
  }
  return `${DOMAINS.INFTEC_SITE_URL}${DOMAINS.INFTEC_PORTAL_PATH}`
}

export const INFTEC_PORTAL_URL = `${DOMAINS.INFTEC_SITE_URL}${DOMAINS.INFTEC_PORTAL_PATH}`
