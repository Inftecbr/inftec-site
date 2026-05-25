export type PortalErrorLogEntry = {
  at: string
  message: string
}

const MAX_ENTRIES = 8
const entries: PortalErrorLogEntry[] = []

export function logPortalError(message: string): void {
  const at = new Date().toISOString()
  entries.unshift({ at, message })
  if (entries.length > MAX_ENTRIES) entries.length = MAX_ENTRIES
}

export function getPortalErrorLog(): readonly PortalErrorLogEntry[] {
  return entries
}

export function clearPortalErrorLog(): void {
  entries.length = 0
}
