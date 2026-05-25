import type { PortalTenant } from '../../types/portal/models'
import { mapTenant } from './normalize'

const STORAGE_KEY = 'inftec-portal-tenant-registry-v1'

function read(): PortalTenant[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed
      .map((item) => mapTenant(item, 'registry'))
      .filter((t): t is PortalTenant => t !== null)
  } catch {
    return []
  }
}

function write(tenants: PortalTenant[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tenants.map((t) => t.raw)))
}

export function listRegistryTenants(): PortalTenant[] {
  return read()
}

export function registerTenantFromResponse(data: unknown) {
  const mapped = mapTenant(data, 'registry')
  if (!mapped) {
    if (typeof data === 'object' && data !== null) {
      const row = data as Record<string, unknown>
      const fallback = mapTenant(
        {
          id: row.id ?? row.tenantId ?? `tenant-${Date.now()}`,
          name: row.name ?? row.nome ?? 'Novo tenant',
          slug: row.slug ?? row.identifier,
        },
        'registry'
      )
      if (fallback) upsertTenant(fallback)
    }
    return
  }
  upsertTenant(mapped)
}

export function upsertTenant(tenant: PortalTenant) {
  const list = read().filter((t) => t.id !== tenant.id)
  list.unshift({ ...tenant, source: 'registry' })
  write(list)
}

export function mergeTenantLists(apiTenants: PortalTenant[], registry: PortalTenant[]): PortalTenant[] {
  const map = new Map<string, PortalTenant>()
  for (const t of [...registry, ...apiTenants]) {
    map.set(t.id, t)
  }
  return [...map.values()]
}
