import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoSvg from '../../assets/images/logo/inftec-logo.svg'
import Button from '../ui/Button'
import { NAV_LINKS, PRODUCT_NAV, COMPANY, PRODUCT, PORTAL_LABELS } from '../../lib/constants'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const productRef = useRef<HTMLDivElement>(null)

  const isProductActive =
    location.pathname === PRODUCT_NAV.overviewPath || location.pathname.startsWith('/produto')

  useEffect(() => {
    setOpen(false)
    setProductOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    if (!open && !productOpen) return
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (headerRef.current && !headerRef.current.contains(target)) {
        setOpen(false)
        setProductOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [open, productOpen])

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 h-[72px] border-b border-border bg-bg-deep/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="INFTEC — site institucional">
          <img src={logoSvg} alt="" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Principal">
          <div className="relative" ref={productRef}>
            <button
              type="button"
              className={`text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                isProductActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
              }`}
              aria-expanded={productOpen}
              aria-haspopup="true"
              onClick={() => setProductOpen((v) => !v)}
            >
              {PRODUCT_NAV.label}
              <svg width="12" height="12" viewBox="0 0 12 12" className={`opacity-70 transition-transform ${productOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </button>
            <AnimatePresence>
              {productOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute top-full left-0 mt-2 w-72 rounded-xl border border-border-strong bg-bg-secondary p-2 shadow-xl"
                >
                  {PRODUCT_NAV.items.map((item) =>
                    'to' in item && item.to ? (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="block rounded-lg px-3 py-2.5 hover:bg-bg-surface transition-colors"
                        onClick={() => setProductOpen(false)}
                      >
                        <span className="text-sm font-medium text-text-primary">{item.label}</span>
                        <span className="block text-xs text-text-muted mt-0.5">{item.description}</span>
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={'href' in item ? item.href : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg px-3 py-2.5 hover:bg-bg-surface transition-colors"
                        onClick={() => setProductOpen(false)}
                      >
                        <span className="text-sm font-medium text-text-primary">{item.label}</span>
                        <span className="block text-xs text-text-muted mt-0.5">{item.description}</span>
                      </a>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.to ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Button variant="ghost" href={COMPANY.portalUrl} external className="px-3">
            {PORTAL_LABELS.inftecPortal}
          </Button>
          <Button variant="primary" href={PRODUCT.siteUrl} external className="px-4">
            Conhecer Salefast
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-text-primary"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[72px] left-4 right-4 rounded-xl border border-border-strong bg-bg-secondary p-4 shadow-xl max-h-[calc(100vh-88px)] overflow-y-auto"
          >
            <p className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-text-muted">{PRODUCT_NAV.label}</p>
            {PRODUCT_NAV.items.map((item) =>
              'to' in item && item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary hover:bg-bg-surface"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={'href' in item ? item.href : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary hover:bg-bg-surface"
                >
                  {item.label} ↗
                </a>
              )
            )}
            <nav className="flex flex-col gap-1 mt-3 pt-3 border-t border-border">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary hover:bg-bg-surface"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Button variant="secondary" href={COMPANY.portalUrl} external className="w-full">
                {PORTAL_LABELS.inftecPortal}
              </Button>
              <Button variant="primary" href={PRODUCT.siteUrl} external className="w-full">
                Conhecer Salefast
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
