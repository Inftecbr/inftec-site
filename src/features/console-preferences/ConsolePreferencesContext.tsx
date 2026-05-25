import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  applyConsolePreferencesToDom,
  defaultConsolePreferences,
  readConsolePreferences,
  writeConsolePreferences,
  type ConsoleDensity,
  type ConsolePreferences,
  stripLegacyConsolePreferenceKeys,
} from './consolePreferencesStorage'

type ConsolePreferencesContextValue = {
  preferences: ConsolePreferences
  density: ConsoleDensity
  advancedTools: boolean
  hydrated: boolean
  setDensity: (density: ConsoleDensity) => void
  setAdvancedTools: (enabled: boolean) => void
  resetPreferences: () => void
}

const ConsolePreferencesContext = createContext<ConsolePreferencesContextValue | null>(null)

export function ConsolePreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<ConsolePreferences>(() => readConsolePreferences())
  const [hydrated] = useState(true)

  const persist = useCallback((updater: (prev: ConsolePreferences) => ConsolePreferences) => {
    setPreferences((prev) => {
      const next = updater(prev)
      writeConsolePreferences(next)
      return next
    })
  }, [])

  const setDensity = useCallback(
    (density: ConsoleDensity) => {
      persist((prev) => ({ ...prev, density }))
    },
    [persist]
  )

  const setAdvancedTools = useCallback(
    (advancedTools: boolean) => {
      persist((prev) => ({ ...prev, advancedTools }))
    },
    [persist]
  )

  const resetPreferences = useCallback(() => {
    persist(() => defaultConsolePreferences)
    stripLegacyConsolePreferenceKeys()
  }, [persist])

  const value = useMemo(
    () => ({
      preferences,
      density: preferences.density,
      advancedTools: preferences.advancedTools,
      hydrated,
      setDensity,
      setAdvancedTools,
      resetPreferences,
    }),
    [preferences, hydrated, setDensity, setAdvancedTools, resetPreferences]
  )

  return <ConsolePreferencesContext.Provider value={value}>{children}</ConsolePreferencesContext.Provider>
}

export function useConsolePreferences(): ConsolePreferencesContextValue {
  const ctx = useContext(ConsolePreferencesContext)
  if (!ctx) {
    throw new Error('useConsolePreferences must be used within ConsolePreferencesProvider')
  }
  return ctx
}

/** Bootstrap antes do React (evita flash de densidade). */
export function bootstrapConsolePreferencesDom(): void {
  applyConsolePreferencesToDom(readConsolePreferences())
}
