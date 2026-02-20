import React from 'react'

export default function SectionWrapper({ children, alt = false, id }: { children: React.ReactNode, alt?: boolean, id?: string }){
  // alt=true -> background secondary (per guideline), otherwise primary
  const bgClass = alt ? 'bg-secondary' : 'bg-primary'
  return (
    <section id={id} className={`section ${bgClass}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}
