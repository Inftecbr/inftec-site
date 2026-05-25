import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import NavIcon from './NavIcon'
import type { NavDropdownItem } from '../../config/navigation'

type NavDropdownProps = {
  label: string
  items: readonly NavDropdownItem[]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  isActive?: boolean
}

function DropdownLink({ item, onClose }: { item: NavDropdownItem; onClose: () => void }) {
  const content = (
    <span className="flex gap-3">
      <NavIcon icon={item.icon} />
      <span>
        <span className="block text-sm font-medium text-text-primary">{item.label}</span>
        <span className="block text-xs text-text-muted mt-0.5">{item.description}</span>
        {item.external && <span className="block text-[10px] font-mono text-data mt-1">↗ domínio externo</span>}
      </span>
    </span>
  )
  const cls = 'block rounded-lg px-3 py-2.5 hover:bg-bg-surface transition-colors'
  if (item.external) {
    return (
      <a href={item.href} className={cls} target="_blank" rel="noopener noreferrer" onClick={onClose}>
        {content}
      </a>
    )
  }
  const path = item.href.startsWith('http') ? new URL(item.href).pathname : item.href
  return (
    <Link to={path} className={cls} onClick={onClose}>
      {content}
    </Link>
  )
}

export default function NavDropdown({ label, items, isOpen, onToggle, onClose, isActive }: NavDropdownProps) {
  return (
    <div className="relative">
      <button
        type="button"
        className={`text-sm font-medium inline-flex items-center gap-1 transition-colors ${
          isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
        }`}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 12 12" className={`opacity-70 ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute top-full left-0 mt-2 w-80 rounded-xl border border-border-strong bg-bg-secondary p-2 shadow-xl z-50"
          >
            {items.map((item) => (
              <DropdownLink key={item.id} item={item} onClose={onClose} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
