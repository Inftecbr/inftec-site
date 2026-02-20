import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Contact(){
  const phone = '5521999232887'
  const whatsappUrl = `https://wa.me/${phone}`
  return (
    <SectionWrapper id="contact" alt>
      <div className="cta">
        <h3 className="section-title">Vamos estruturar seu crescimento.</h3>
        <p className="section-lead">Se sua empresa busca crescer com organização, previsibilidade e controle, a tecnologia precisa trabalhar a seu favor.</p>
        <div className="cta-actions">
          <a className="btn primary large" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a>
          <p className="muted" style={{marginTop:12}}>Telefone: (21) 99923-2887</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
