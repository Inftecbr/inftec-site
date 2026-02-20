import React from 'react'
import dashboardMock from '../assets/images/hero/dashboard-mockup.svg'

export default function Hero() {
  const phone = '5521999232887' // +55 21 99923-2887
  const whatsappUrl = `https://wa.me/${phone}`

  return (
    <section id="hero" className="section bg-primary hero">
      <div className="hero-inner">
        <div className="hero-left">
         

          <h2 className="headline">Estruturamos tecnologia para empresas que querem crescer com previsibilidade.</h2>

          <p className="support">Transformamos operações manuais e desorganizadas em sistemas digitais eficientes, automatizados e mensuráveis.</p>

          <div className="hero-actions">
            <a className="btn primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Fale conosco</a>
            <a className="btn ghost" href="#what-we-do">Conheça nossa abordagem</a>
          </div>
        </div>

        <div className="hero-right" aria-hidden>
          <div className="image-box">
            <img src={dashboardMock} alt="Dashboard mockup" />
          </div>
        </div>
      </div>
    </section>
  )
}
