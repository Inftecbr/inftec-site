import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Solutions() {
    return (
        <SectionWrapper id="what-we-do" className="bg-primary">
            <div className="solutions-header">
                <h3 className="section-title">Estrutura antes de escala.</h3>
                <p className="section-lead">
                    Na INFTEC, aplicamos tecnologia com método. Antes de falar em crescimento exponencial,
                    organizamos a base operacional para que a escala seja consequência, não aposta.
                </p>
            </div>

            <div className="solutions-grid">
                <div className="solution-card">
                    <h4>Fluxos operacionais</h4>
                    <p>Mapeamento e padronização para reduzir retrabalho.</p>
                </div>

                <div className="solution-card">
                    <h4>Integração entre sistemas</h4>
                    <p>Conectamos ferramentas para fluxo contínuo de dados.</p>
                </div>

                <div className="solution-card">
                    <h4>Captação inteligente de dados</h4>
                    <p>Estruturas que permitem análise e tomada de decisão.</p>
                </div>

                <div className="solution-card">
                    <h4>Automação de processos críticos</h4>
                    <p>Redução de esforço manual e aumento de eficiência.</p>
                </div>

                <div className="solution-card">
                    <h4>Indicadores de performance</h4>
                    <p>KPIs claros que orientam estratégia e execução.</p>
                </div>

                <div className="solution-card">
                    <h4>Tecnologia com direção</h4>
                    <p>Foco em resultados mensuráveis, não em vaidade técnica.</p>
                </div>
            </div>
        </SectionWrapper>
    )
}