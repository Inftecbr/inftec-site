import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Tension(){
  return (
    <SectionWrapper id="tension">
      <div style={{textAlign:'center',maxWidth:720,margin:'0 auto'}}>
        <h3 className="section-title">Quando a solução genérica não resolve mais.</h3>
        <p className="section-lead">Planilhas, ERPs, CRMs, automações... a tecnologia já está espalhada, mas a operação continua pesada e pouco previsível.</p>
        <ul className="problem-list" style={{marginTop:24}}>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Projetos de software que começaram fortes e morreram no meio.</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Processos críticos presos em planilhas e mensagens de chat.</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Integrações feitas às pressas que ninguém mais entende.</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Indicadores que não refletem o que acontece na operação real.</span></li>
        </ul>
        <p className="muted" style={{marginTop:24}}>Meu trabalho começa quando a empresa percebe que não precisa de mais uma ferramenta, e sim de alguém que entenda o negócio e entregue soluções sob medida.</p>
      </div>
    </SectionWrapper>
  )
}
