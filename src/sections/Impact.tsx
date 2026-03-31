import React from 'react'

export default function Impact() {
    return (
        <section id="impact" className="section bg-secondary">
            <div className="container">

                <div className="impact-header">
                    <h3 className="section-title">
                        Em que estágio está a sua operação digital?
                    </h3>
                    <p className="section-lead">
                        Uso um modelo simples de maturidade para entender onde sua operação digital e os sistemas que a sustentam estão hoje e o que precisa acontecer para evoluir de forma segura.
                    </p>
                </div>

                <div className="impact-content">
                    <div className="impact-item">
                        <h4>Nível 1 — Reativo</h4>
                        <p>Tudo depende de pessoas específicas, controles espalhados e decisões urgentes. A operação vive apagando incêndio.</p>
                    </div>

                    <div className="impact-item">
                        <h4>Nível 2 — Estruturado</h4>
                        <p>Processos mapeados, alguns sistemas integrados, dados começando a ser confiáveis. Ainda há muito esforço manual.</p>
                    </div>

                    <div className="impact-item">
                        <h4>Nível 3 — Arquitetado para escala</h4>
                        <p>Operação organizada, integrações claras, automações críticas rodando e sistemas preparados para crescer sem adicionar complexidade desnecessária.</p>
                    </div>
                </div>

                <div className="impact-diagnostic">
                    <h4>Como saber em qual nível você está?</h4>
                    <ul>
                        <li>Você consegue apontar rapidamente onde estão os principais gargalos da sua operação digital?</li>
                        <li>Os sistemas conversam entre si ou sua equipe precisa "costurar" informações manualmente?</li>
                        <li>Se um sistema cai, é claro o que acontece na cadeia e quem precisa agir?</li>
                        <li>Os relatórios e indicadores refletem o que o time vive no dia a dia?</li>
                    </ul>
                    <p className="muted" style={{ marginTop: 12 }}>
                        Quanto mais respostas "não", mais próxima sua operação está do nível reativo. Meu trabalho é ajudar a evoluir, com soluções sob medida, para uma estrutura preparada para escala.
                    </p>
                </div>

            </div>
        </section>
    )
}
