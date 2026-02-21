import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Competence(){
  return (
    <SectionWrapper id="competence">
      <h3 className="section-title">Tecnologia aplicada com responsabilidade.</h3>
      <p className="section-lead">Acreditamos que crescimento real é consequência de decisões estruturadas e tecnologia bem aplicada.</p>
      <div className="grid-2" style={{marginTop:24}}>
        <ul className="competence-list">
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Desenvolvimento de software personalizado</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Arquitetura escalável</span></li>
        </ul>

        <ul className="competence-list">
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Integrações inteligentes</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Automação estratégica</span></li>
          <li className="icon-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12l4 4 8-8" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Mentalidade orientada a performance</span></li>
        </ul>
      </div>
    </SectionWrapper>
  )
}
