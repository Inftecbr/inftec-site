import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { LegalLayout } from '../components/LegalLayout'
import { COMPANY, PRODUCT } from '../lib/constants'

export default function TermosPage() {
  return (
    <>
      <PageMeta
        title="Termos de Uso | INFTEC — Salefast"
        description="Termos de uso da plataforma Salefast operada pela INFTEC Tecnologia Ltda."
        path="/termos"
      />
      <LegalLayout title="Termos de Uso" updated="24 de maio de 2026">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-text-primary">1. Partes e objeto</h2>
          <p>
            Estes termos regulam o acesso e uso da plataforma {PRODUCT.name}, software como serviço (SaaS) operado por{' '}
            {COMPANY.legalName}. O uso comercial está sujeito a contrato, ordem de serviço ou aceite eletrônico específico.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">2. Conta e acesso</h2>
          <p>
            Credenciais são pessoais e intransferíveis. O cliente é responsável por usuários autorizados e pelo uso da
            conta em {PRODUCT.appUrl}.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">3. Licença de uso</h2>
          <p>
            Concedemos licença limitada, não exclusiva e revogável para uso da plataforma conforme plano contratado.
            É vedada engenharia reversa, sublicenciamento não autorizado e uso que viole lei ou direitos de terceiros.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">4. Dados do cliente</h2>
          <p>
            O cliente mantém titularidade sobre dados inseridos na operação. A INFTEC trata dados conforme contrato e{' '}
            <Link to="/privacidade" className="text-data">
              Política de Privacidade
            </Link>
            , atuando como operadora quando aplicável.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">5. Disponibilidade e suporte</h2>
          <p>
            Metas de disponibilidade, suporte e SLA constam do contrato enterprise ou documento comercial aplicável. Manutenções
            programadas serão comunicadas quando exigido.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">6. Limitação de responsabilidade</h2>
          <p>
            Na extensão permitida pela lei, a responsabilidade limita-se aos termos contratuais. A plataforma apoia decisão
            comercial humana; resultados de vendas dependem da operação do cliente.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">7. Contato</h2>
          <p>
            Dúvidas:{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-data">
              {COMPANY.email}
            </a>
            .
          </p>
        </section>
      </LegalLayout>
    </>
  )
}
