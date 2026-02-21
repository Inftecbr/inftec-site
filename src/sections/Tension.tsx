import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Tension(){
  return (
    <SectionWrapper id="tension">
      <div style={{textAlign:'center',maxWidth:720,margin:'0 auto'}}>
        <h3 className="section-title">Escalar sem estrutura é apostar no caos.</h3>
        <p className="section-lead">Antes de acelerar, é preciso organizar.</p>
        <ul className="problem-list" style={{marginTop:24}}>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="transparent" stroke="none"/><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Processos manuais limitam crescimento</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Dados descentralizados impedem decisões</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Falta de integração gera retrabalho</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Crescimento sem previsibilidade corrói margem</span></li>
        </ul>
      </div>
    </SectionWrapper>
  )
}
