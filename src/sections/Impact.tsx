import React from 'react'
import efficiencyChart from '../assets/images/graphics/efficiency-chart.svg'

export default function Impact() {
    return (
        <section id="impact" className="section bg-secondary">
            <div className="container">

                <div className="impact-header">
                    <h3 className="section-title">
                        Crescimento precisa ser estruturado antes de ser acelerado.
                    </h3>
                    <p className="section-lead">
                        Não prometemos números mágicos. Estrutura gera evolução consistente.
                    </p>
                </div>

                <div className="impact-block">

                    <div className="impact-visual">
                        <div className="impact-chart-box">
                            <img src={efficiencyChart} alt="Evolução da Maturidade Operacional" />
                        </div>
                    </div>

                    <div className="impact-content">
                        <div className="impact-item">
                            <h4>Organização</h4>
                            <p>Processos padronizados e redução de retrabalho.</p>
                        </div>

                        <div className="impact-item">
                            <h4>Previsibilidade</h4>
                            <p>Dados centralizados e indicadores claros.</p>
                        </div>

                        <div className="impact-item">
                            <h4>Escala Sustentável</h4>
                            <p>Base estruturada pronta para crescer com segurança.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}