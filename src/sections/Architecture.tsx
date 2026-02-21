import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Architecture(){
  const cards = [
    'Mapeamento operacional',
    'Integração estratégica',
    'Organização de dados',
    'Automação crítica',
    'Indicadores claros',
    'Base preparada para escala'
  ]

  return (
    <SectionWrapper id="architecture" alt>
      <h3 className="section-title">Crescimento exige arquitetura.</h3>
      <p className="section-lead">Nosso método organiza as bases para um crescimento previsível e sustentável.</p>

      <div className="grid three" style={{marginTop:24}}>
        {cards.map((c, idx) => (
          <div key={idx} className="card method-card">
            <h4>{String(idx+1).padStart(2,'0')} — {c}</h4>
            <p className="muted">Descrição breve sobre {c.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
