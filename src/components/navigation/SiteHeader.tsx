import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoSvg from '../../assets/images/logo/inftec-logo.svg'
import Button from '../ui/Button'
import NavDropdown from './NavDropdown'
import NavIcon from './NavIcon'
import { PUBLIC_NAV, HEADER_MAIN_LINKS } from '../../config/navigation'

import { useAccessHub } from '../../features/access-hub/AccessHubContext'

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<'products' | null>(null)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const { open: openAccessHub } = useAccessHub()

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    if (!mobileOpen && !openMenu) return
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [mobileOpen, openMenu])

  const toggleProducts = () => setOpenMenu((m) => (m === 'products' ? null : 'products'))

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 h-[72px] border-b border-border bg-bg-deep/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="INFTEC">
          <img src={logoSvg} alt="" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden lg:flex items-center gap-5" aria-label="Principal">
          <NavDropdown
            label={PUBLIC_NAV.products.label}
            items={PUBLIC_NAV.products.items}
            isOpen={openMenu === 'products'}
            onToggle={toggleProducts}
            onClose={() => setOpenMenu(null)}
          />
          {HEADER_MAIN_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium ${location.pathname === item.to ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" onClick={openAccessHub}>
            Entrar
          </Button>
        </div>

        <button type="button" className="lg:hidden p-2" aria-expanded={mobileOpen} aria-label="Menu" onClick={() => setMobileOpen((v) => !v)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden absolute top-[72px] left-4 right-4 max-h-[80vh] overflow-y-auto rounded-xl border border-border-strong bg-bg-secondary p-4 shadow-xl"
          >
            <MobileSection title={PUBLIC_NAV.products.label} items={PUBLIC_NAV.products.items} onClose={() => setMobileOpen(false)} />
            {HEADER_MAIN_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Button variant="primary" className="w-full" onClick={() => { setMobileOpen(false); openAccessHub() }}>
                Entrar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function MobileSection({
  title,
  items,
  onClose,
}: {
  title: string
  items: typeof PUBLIC_NAV.products.items
  onClose: () => void
}) {
  return (
    <div className="mb-4">
      <p className="text-xs uppercase tracking-wider text-text-muted px-1 mb-2">{title}</p>
      {items.map((item) => {
        const inner = (
          <span className="flex gap-2 py-2">
            <NavIcon icon={item.icon} />
            <span>
              <span className="text-sm font-medium">{item.label}</span>
              <span className="block text-xs text-text-muted">{item.description}</span>
            </span>
          </span>
        )
        if (item.external) {
          return (
            <a key={item.id} href={item.href} className="block px-1" target="_blank" rel="noopener noreferrer" onClick={onClose}>
              {inner}
            </a>
          )
        }
        const path = item.href.startsWith('http') ? new URL(item.href).pathname : item.href
        return (
          <Link key={item.id} to={path} className="block px-1" onClick={onClose}>
            {inner}
          </Link>
        )
      })}
    </div>
  )
}
