import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PortalNavList from './PortalNavList'

type PortalMobileDrawerProps = {
  open: boolean
  onClose: () => void
}

export default function PortalMobileDrawer({ open, onClose }: PortalMobileDrawerProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Fechar menu"
            className="lg:hidden fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="lg:hidden fixed left-0 top-16 bottom-0 z-50 w-[min(300px,88vw)] flex flex-col min-h-0 border-r border-border-strong bg-bg-primary shadow-2xl"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.2 }}
            aria-modal="true"
            aria-label="Menu do portal"
          >
            <div className="px-4 py-4 border-b border-border">
              <p className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Administração</p>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto p-3">
              <PortalNavList onItemClick={onClose} />
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  )
}
