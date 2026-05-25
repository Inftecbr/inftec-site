import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants = {
  primary: `${base} bg-accent text-white hover:bg-accent-hover px-5 py-2.5 text-sm`,
  secondary: `${base} border border-border-strong bg-bg-surface/50 text-text-primary hover:border-accent/40 px-5 py-2.5 text-sm`,
  ghost: `${base} text-text-secondary hover:text-text-primary px-3 py-2 text-sm`,
  link: 'text-data hover:text-data-dim text-sm font-medium transition-colors',
} as const

type ButtonProps = {
  variant?: keyof typeof variants
  href?: string
  external?: boolean
  className?: string
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  variant = 'primary',
  href,
  external,
  className = '',
  children,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const cls = `${variants[variant]} ${className}${disabled ? ' opacity-50 pointer-events-none' : ''}`

  if (href) {
    if (external || href.startsWith('http')) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
