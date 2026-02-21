import React from 'react'
import dashboardMock from '../assets/images/hero/dashboard-mockup.svg'

export default function Hero() {
  const phone = '5521999232887' // +55 21 99923-2887
  const whatsappUrl = `https://wa.me/${phone}`

  return (
    <section id="hero" className="section bg-primary hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="brand-main">Negócios crescem.</h1>
          <h2 className="brand-sub" style={{margin:0}}>Estruturas sustentam.</h2>

          <h2 className="headline">A INFTEC projeta arquiteturas digitais para empresas que querem crescer com previsibilidade e eficiência.</h2>

          <p className="support">A INFTEC projeta arquiteturas digitais para empresas que querem crescer com previsibilidade e eficiência.</p>

          <div className="hero-actions">
            <a className="btn primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Quero estruturar meu crescimento</a>
            <a className="btn ghost" href="#what-we-do">Conhecer o método</a>
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
