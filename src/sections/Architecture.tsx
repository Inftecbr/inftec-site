import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Architecture(){
  const cards = [
    'Mapeamento operacional',
    'Integração estratégica',
    'Organização de dados',
    'Automação crítica',
    'Indicadores claros',
    'Base preparada para escala'
  ]

  const descriptions = [
    'Mapeamos os fluxos operacionais de ponta a ponta, identificando gargalos, dependências e riscos que travam o crescimento.',
    'Conectamos sistemas e ferramentas de forma estratégica para que a informação circule com consistência e sem retrabalho.',
    'Estruturamos como os dados são coletados, organizados e acessados para dar base às decisões operacionais e gerenciais.',
    'Automatizamos etapas repetitivas e críticas, reduzindo erro humano e liberando tempo da equipe para atividades de maior valor.',
    'Definimos indicadores práticos, conectados ao dia a dia da operação, que mostram se a estrutura está sustentando o crescimento.',
    'Deixamos processos, sistemas e dados preparados para suportar mais volume sem perda de controle, previsibilidade ou qualidade.'
  ]

  return (
    <SectionWrapper id="architecture" alt>
      <h3 className="section-title">Crescimento exige arquitetura.</h3>
      <p className="section-lead">Nosso método organiza as bases para um crescimento previsível e sustentável.</p>

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
