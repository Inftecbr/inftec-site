import React from 'react'
import dashboardMock from '../assets/images/hero/dashboard-mockup.svg'

export default function Hero() {
  const phone = '5521999232887' // +55 21 99923-2887
  const whatsappUrl = `https://wa.me/${phone}`

  return (
    <section id="hero" className="section bg-primary hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p
            className="section-lead"
            style={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}
          >
            Consultoria em tecnologia com foco em soluções sob medida
          </p>

          <h1 className="brand-main">
            Eu ajudo empresas a estruturar os sistemas que sustentam a sua operação digital.
          </h1>

          <p className="support">
            Desenho e implemento soluções técnicas — de arquiteturas distribuídas a fluxos mais simples e síncronos —
            sempre escolhendo o que faz mais sentido para o seu negócio, não para a moda tecnológica.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar sobre a sua operação</a>
            <a className="btn ghost" href="#architecture">Entender como eu trabalho</a>
          </div>
        </div>

        <div className="hero-right" aria-hidden>
          <div className="image-box">
            <img src={dashboardMock} alt="Dashboard de operação digital" />
          </div>
        </div>
      </div>
    </section>
  )
}
