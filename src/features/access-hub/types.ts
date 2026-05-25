export type AccessHubCardModel = {
  id: string
  title: string
  description: string
  href: string
  external: boolean
  domainLabel: string
  /** Inicia login Auth0 com retorno ao portal (somente Portal INFTEC). */
  portalLogin?: boolean
}
