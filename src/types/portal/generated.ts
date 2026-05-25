/**
 * Tipos derivados do OpenAPI INFTEC Portal.
 * Regenerar: npm run generate:portal-types (requer API local ou openapi/inftec-portal.swagger.json).
 */
export type { PortalUser, PortalTenant, PortalPlan, PortalFeature, PortalInvoice, PortalPricing, PortalSubscription, PortalMetaIntegration } from './models'

/** Payloads de escrita — campos mínimos aceitos pela API (extensível via modo avançado). */
export type CreateUserPayload = { email: string; name?: string; nome?: string }
export type CreateTenantPayload = { name: string; slug?: string; identifier?: string; nome?: string }
export type CreatePlanPayload = { name: string; code: string; description?: string }
export type CreateFeaturePayload = { key: string; name: string; description?: string; category?: string }
export type SetTenantPlanPayload = { planId: string; tenantId?: string; plan?: string; tenant?: string }
export type CreateSubscriptionPayload = { planId: string; tenantId: string; plan?: string; tenant?: string }
export type MetaIntegrationPayload = { appId?: string; pageId?: string; accessToken?: string }
