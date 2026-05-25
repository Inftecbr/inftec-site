import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
  id?: string
}

export default function Container({ children, className = '', as: Tag = 'div', id }: ContainerProps) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}

export function Section({
  children,
  className = '',
  id,
  alt = false,
}: {
  children: ReactNode
  className?: string
  id?: string
  alt?: boolean
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${alt ? 'bg-bg-primary border-y border-border' : 'bg-bg-deep'} ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignCls}`}>
      {eyebrow && (
        <p className="text-xs font-medium tracking-wide text-data uppercase mb-3">{eyebrow}</p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary text-balance">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed">{lead}</p>
      )}
    </div>
  )
}
