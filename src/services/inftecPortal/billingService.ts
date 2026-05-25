import type { AuthorizedApiClient } from '../../lib/api/createAuthorizedClient'
import { inftecPortalEndpoints as ep } from '../../lib/api/endpoints'

export function listInvoices(client: AuthorizedApiClient) {
  return client.get<unknown>(ep.billing.invoicesList)
}

export function createInvoice(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.billing.invoicesCreate, body)
}

export function getInvoice(client: AuthorizedApiClient, invoiceId: string) {
  return client.get<unknown>(ep.billing.invoiceById(invoiceId))
}

export function generateInvoices(client: AuthorizedApiClient, body?: unknown) {
  return client.post<unknown>(ep.billing.invoicesGenerate, body)
}

export function internalPayInvoice(client: AuthorizedApiClient, invoiceId: string, body?: unknown) {
  return client.post<unknown>(ep.billing.invoiceInternalPay(invoiceId), body)
}

export function postBillingEvent(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.billing.events, body)
}

export function calculateBillingEvents(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.billing.eventsCalculate, body)
}

export function getActivePricing(client: AuthorizedApiClient) {
  return client.get<unknown>(ep.billing.pricingActive)
}

export function getPricingByFeature(client: AuthorizedApiClient, feature: string) {
  return client.get<unknown>(ep.billing.pricingByFeature(feature))
}

export function getPricingHistory(client: AuthorizedApiClient, feature: string) {
  return client.get<unknown>(ep.billing.pricingHistory(feature))
}

export function createPricing(client: AuthorizedApiClient, body: unknown) {
  return client.post<unknown>(ep.billing.pricingCreate, body)
}

export function listTenantInvoices(client: AuthorizedApiClient, tenantId: string) {
  return client.get<unknown>(ep.tenants.billingInvoices(tenantId))
}

export function generateTenantInvoices(client: AuthorizedApiClient, tenantId: string, body?: unknown) {
  return client.post<unknown>(ep.tenants.billingInvoicesGenerate(tenantId), body)
}
