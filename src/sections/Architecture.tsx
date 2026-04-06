import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Architecture(){
  const cards = [
    'Mapeamento operacional',
    'Integração estratégica',
    'Organização de dados',
    'Automação sob medida',
    'Indicadores orientados à operação',
    'Acompanhamento da estrutura'
  ]

  const descriptions = [
    'Entendo como o trabalho acontece hoje: fluxos reais, pontos de atrito, onde a equipe gasta energia e onde os dados se perdem.',
    'Desenho como sistemas, pessoas e informações precisam se conectar para a operação fluir sem retrabalho.',
    'Defino como os dados serão capturados, organizados e disponibilizados para decisões do dia a dia e da gestão.',
    'Projeto e implemento automações focadas nos pontos de maior impacto: menos trabalho manual, mais consistência.',
    'Traduzo a arquitetura em métricas que fazem sentido para a operação — não só para dashboards bonitos.',
    'Acompanho a implementação, ajusto o que for necessário e deixo a operação preparada para os próximos ciclos de crescimento.'
  ]

  return (
    <SectionWrapper id="architecture" alt>
      <h3 className="section-title">Como funciona um projeto comigo.</h3>
      <p className="section-lead">Combino visão de arquitetura digital com entrega prática: diagnóstico, desenho da estrutura e implementação de soluções sob medida.</p>

      <div className="grid three" style={{marginTop:24}}>
        {cards.map((c, idx) => (
          <div key={idx} className="card method-card">
            <h4>{String(idx+1).padStart(2,'0')} — {c}</h4>
            <p className="muted">{descriptions[idx]}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
