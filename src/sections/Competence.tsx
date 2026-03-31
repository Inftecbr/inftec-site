import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Competence(){
  return (
    <SectionWrapper id="competence">
      <h3 className="section-title">Quem está por trás das soluções sob medida.</h3>
      <p className="section-lead">
        Atuo como tech lead e engenheiro de software com foco em arquitetura de sistemas distribuídos, principalmente em contextos de alta
        complexidade, como o mercado financeiro. Já participei da construção de plataformas críticas, lidando com domínios como recebíveis,
        liquidação, antecipação e garantias em operações de crédito.
      </p>
      <p className="section-lead" style={{ marginTop: 12 }}>
        Minha base técnica está em Event-Driven Architecture, Domain-Driven Design (DDD) e backend em .NET, sempre com o objetivo de construir
        sistemas resilientes, auditáveis e alinhados ao domínio de negócio.
      </p>
      <div className="grid-2" style={{marginTop:24}}>
        <ul className="competence-list">
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Design de sistemas distribuídos para cenários de alta concorrência e eventos assíncronos.</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Modelagem de domínios complexos em recebíveis, liquidação, antecipação e garantias.</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Reconstrução determinística de estado (event sourcing, snapshot e replay).</span></li>
        </ul>

        <ul className="competence-list">
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Equilíbrio entre arquiteturas distribuídas e soluções mais simples quando o negócio pede.</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Observabilidade prática: logs, métricas e tracing como parte do desenho da solução.</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Exploração de IA aplicada à engenharia de software para análise de logs e suporte a incidentes.</span></li>
        </ul>
      </div>
      <p className="muted" style={{ marginTop: 16 }}>
        Não vendo uma receita pronta. Entro, entendo o cenário e construo, junto com o seu time, a solução mais adequada para o momento da sua empresa.
      </p>
    </SectionWrapper>
  )
}
