import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { logPortalError } from '../../../lib/portal/portalErrorLog'

type ToastVariant = 'success' | 'error' | 'info'

type ToastItem = {
  id: number
  message: string
  variant: ToastVariant
}

type ToastContextValue = {
  push: (message: string, variant?: ToastVariant) => void
  success: (message: string) => void
  error: (message: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function PortalToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([])

  const push = useCallback((message: string, variant: ToastVariant = 'info') => {
    const id = Date.now() + Math.random()
    setItems((prev) => [...prev, { id, message, variant }])
    window.setTimeout(() => {
      setItems((prev) => prev.filter((t) => t.id !== id))
    }, 4500)
  }, [])

  const value = useMemo(
    () => ({
      push,
      success: (message: string) => push(message, 'success'),
      error: (message: string) => {
        logPortalError(message)
        push(message, 'error')
      },
    }),
    [push]
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className="fixed bottom-4 right-4 z-[300] flex flex-col gap-2 max-w-sm pointer-events-none"
        aria-live="polite"
      >
        {items.map((t) => (
          <div
            key={t.id}
            className={`rounded-lg border px-4 py-3 text-sm shadow-lg pointer-events-auto ${
              t.variant === 'success'
                ? 'border-success/40 bg-bg-primary text-success'
                : t.variant === 'error'
                  ? 'border-warning/40 bg-bg-primary text-warning'
                  : 'border-border bg-bg-primary text-text-primary'
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function usePortalToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('usePortalToast must be used within PortalToastProvider')
  return ctx
}
