import React from 'react'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">

                <div className="footer-left">
                    <p className="footer-brand">
                        INFTEC TECNOLOGIA LTDA
                    </p>
                    <p className="footer-description">
                        Estrutura digital para crescimento empresarial.
                    </p>
                </div>

                <div className="footer-right">
                    <p>CNPJ: 47.281.110/0001-32</p>
                    <p>São Paulo – SP</p>
                    <p>© {new Date().getFullYear()} INFTEC Tecnologia Ltda. Todos os direitos reservados.</p>
                </div>

            </div>
        </footer>
    )
}