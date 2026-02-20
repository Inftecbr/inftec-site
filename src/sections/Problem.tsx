import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Problem(){
  return (
    <SectionWrapper id="market" alt>
      <h3 className="section-title">Crescer sem estrutura é crescer no escuro.</h3>
      <p className="section-lead">Empresas investem em marketing, ferramentas e pessoas, mas continuam enfrentando:</p>
      <ul className="problem-list">
        <li>Processos desorganizados</li>
        <li>Falta de controle de dados</li>
        <li>Baixa previsibilidade</li>
        <li>Retrabalho constante</li>
        <li>Dificuldade em medir performance</li>
      </ul>
      <p className="muted">Sem tecnologia bem estruturada, crescimento vira instabilidade.</p>
    </SectionWrapper>
  )
}
