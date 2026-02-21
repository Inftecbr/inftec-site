import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Tension(){
  return (
    <SectionWrapper id="tension" alt>
      <div style={{textAlign:'center',maxWidth:720,margin:'0 auto'}}>
        <h3 className="section-title">Escalar sem estrutura é apostar no caos.</h3>
        <p className="section-lead">Antes de acelerar, é preciso organizar.</p>
        <ul className="problem-list" style={{marginTop:24}}>
          <li>Processos manuais limitam crescimento</li>
          <li>Dados descentralizados impedem decisões</li>
          <li>Falta de integração gera retrabalho</li>
          <li>Crescimento sem previsibilidade corrói margem</li>
        </ul>
      </div>
    </SectionWrapper>
  )
}
