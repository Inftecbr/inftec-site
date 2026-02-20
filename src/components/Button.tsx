import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLink?: boolean
  href?: string
}

export default function Button({ asLink, href, children, className = '', ...rest }: Props) {
  if (asLink && href) {
    return (
      <a className={`btn ${className}`} href={href} {...(rest as any)}>
        {children}
      </a>
    )
  }

  return (
    <button className={`btn ${className}`} {...rest}>
      {children}
    </button>
  )
}
