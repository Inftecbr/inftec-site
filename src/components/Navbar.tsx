import React, { useState, useEffect } from 'react'
import logoSvg from '../assets/images/logo/inftec-logo.svg'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  const items = [
    { id: 'market', label: 'O Problema' },
    { id: 'what-we-do', label: 'Abordagem' },
    { id: 'impact', label: 'Impacto' },
    { id: 'competence', label: 'Competência' },
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
    <nav className="nav">
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
