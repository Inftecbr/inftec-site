/**
 * @deprecated Use `ConsolePreferencesProvider` / `useConsolePreferences` e `consolePreferencesStorage`.
 * Mantido para imports legados mínimos durante transição.
 */
export {
  readConsolePreferences as getPortalPreferences,
  writeConsolePreferences as savePortalPreferences,
  defaultConsolePreferences as defaultPrefs,
  CONSOLE_PREFS_STORAGE_KEY as PREFS_KEY,
  type ConsolePreferences as PortalPreferences,
  type ConsoleDensity,
} from '../../features/console-preferences/consolePreferencesStorage'
