import React, { useState, useEffect, useRef } from 'react'
import logoSvg from '../assets/images/logo/inftec-logo.svg'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')
  const navRef = useRef<HTMLElement | null>(null)

  const items = [
    { id: 'tension', label: 'O problema' },
    { id: 'architecture', label: 'Meu método' },
    { id: 'impact', label: 'Maturidade' },
    { id: 'competence', label: 'Sobre' },
    { id: 'contact', label: 'Contato' }
  ]

  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + 80
      let current = items[0].id
      for (const it of items) {
        const el = document.getElementById(it.id)
        if (el && el.offsetTop <= fromTop) {
          current = it.id
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on scroll
  useEffect(() => {
    const onScrollClose = () => { if (open) setOpen(false) }
    window.addEventListener('scroll', onScrollClose, { passive: true })
    return () => window.removeEventListener('scroll', onScrollClose)
  }, [open])

  // close menu on click outside
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return
      const node = navRef.current
      if (node && !node.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-inner">
        <div className="nav-brand">
          <a href="#" className="brand-inline" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <img src={logoSvg} alt="INFTEC" className="logo-mark" />
          </a>
        </div>

        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          ☰
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {items.map(i => (
            <a key={i.id} href={`#${i.id}`} onClick={(e) => handleNavClick(e, i.id)} className={active === i.id ? 'active' : ''}>{i.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
