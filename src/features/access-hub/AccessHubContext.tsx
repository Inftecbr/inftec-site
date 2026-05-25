import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

type AccessHubContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const AccessHubContext = createContext<AccessHubContextValue | null>(null)

export function AccessHubProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close])
  return <AccessHubContext.Provider value={value}>{children}</AccessHubContext.Provider>
}

export function useAccessHub() {
  const ctx = useContext(AccessHubContext)
  if (!ctx) throw new Error('useAccessHub must be used within AccessHubProvider')
  return ctx
}
