/** Preferências operacionais do console admin INFTEC — persistidas localmente nesta fase. */
export const CONSOLE_PREFS_STORAGE_KEY = 'inftec-portal-console-preferences-v2'
const LEGACY_PREFS_KEY = 'inftec-portal-preferences-v1'

export type ConsoleDensity = 'compact' | 'comfortable' | 'expanded'

export type ConsolePreferences = {
  density: ConsoleDensity
  advancedTools: boolean
}

export const defaultConsolePreferences: ConsolePreferences = {
  density: 'comfortable',
  advancedTools: false,
}

function parseDensity(value: unknown): ConsoleDensity {
  if (value === 'compact' || value === 'expanded' || value === 'comfortable') return value
  return 'comfortable'
}

function migrateLegacy(raw: unknown): ConsolePreferences | null {
  if (!raw || typeof raw !== 'object') return null
  const o = raw as Record<string, unknown>
  if (!('density' in o) && !('showAdvancedTools' in o) && !('advancedTools' in o)) return null
  return {
    density: parseDensity(o.density),
    advancedTools: Boolean(o.advancedTools ?? o.showAdvancedTools),
  }
}

export function stripLegacyConsolePreferenceKeys(): void {
  try {
    localStorage.removeItem('inftec-portal-preferences-v1')
  } catch {
    /* ignore */
  }
}

export function readConsolePreferences(): ConsolePreferences {
  try {
    const v2 = localStorage.getItem(CONSOLE_PREFS_STORAGE_KEY)
    if (v2) {
      const parsed = JSON.parse(v2) as Partial<ConsolePreferences>
      return {
        ...defaultConsolePreferences,
        density: parseDensity(parsed.density),
        advancedTools: Boolean(parsed.advancedTools),
      }
    }
    const v1 = localStorage.getItem(LEGACY_PREFS_KEY)
    if (v1) {
      const migrated = migrateLegacy(JSON.parse(v1))
      if (migrated) {
        writeConsolePreferences(migrated)
        stripLegacyConsolePreferenceKeys()
        return migrated
      }
    }
    stripLegacyConsolePreferenceKeys()
  } catch {
    /* ignore */
  }
  return defaultConsolePreferences
}

export function writeConsolePreferences(prefs: ConsolePreferences): void {
  const clean: ConsolePreferences = {
    density: parseDensity(prefs.density),
    advancedTools: Boolean(prefs.advancedTools),
  }
  localStorage.setItem(CONSOLE_PREFS_STORAGE_KEY, JSON.stringify(clean))
  applyConsolePreferencesToDom(clean)
}

export function applyConsolePreferencesToDom(prefs: ConsolePreferences): void {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.portalDensity = prefs.density
  document.documentElement.dataset.portalAdvanced = prefs.advancedTools ? '1' : '0'
}
