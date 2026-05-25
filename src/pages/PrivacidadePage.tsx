import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { LegalLayout } from '../components/LegalLayout'
import { COMPANY, PRODUCT } from '../lib/constants'

export default function PrivacidadePage() {
  return (
    <>
      <PageMeta
        title="Política de Privacidade | INFTEC — Salefast"
        description="Política de Privacidade da INFTEC Tecnologia Ltda e da plataforma Salefast. LGPD, direitos do titular e tratamento de dados."
        path="/privacidade"
      />
      <LegalLayout title="Política de Privacidade" updated="24 de maio de 2026">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-text-primary">1. Controlador</h2>
          <p>
            {COMPANY.legalName}, CNPJ {COMPANY.cnpj}, com sede em {COMPANY.city}, é controladora dos dados pessoais
            tratados no site {COMPANY.siteUrl} e na plataforma {PRODUCT.name} ({PRODUCT.appUrl}), salvo disposição em
            contrário para clientes enterprise.
          </p>
          <p>
            Contato do encarregado / privacidade:{' '}
            <a href={`mailto:${COMPANY.privacyEmail}`} className="text-data">
              {COMPANY.privacyEmail}
            </a>
            .
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">2. Dados tratados</h2>
          <p>Podemos tratar, conforme o contexto:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Dados de identificação e contato (nome, e-mail, telefone, empresa);</li>
            <li>Dados de uso do site (logs, cookies essenciais e analíticos, conforme política de cookies);</li>
            <li>Dados operacionais e conversacionais inseridos na plataforma Salefast por clientes, na qualidade de operadores de seus próprios titulares;</li>
            <li>Dados de autenticação e auditoria na plataforma.</li>
          </ul>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">3. Finalidades e bases legais (LGPD)</h2>
          <p>
            Tratamos dados para: prestação do serviço SaaS, demonstrações comerciais, suporte, segurança, cumprimento
            legal, melhoria do produto e comunicações necessárias ao contrato — com bases previstas nos arts. 7º e 11 da
            LGPD (execução de contrato, legítimo interesse, consentimento quando aplicável, cumprimento de obrigação legal).
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">4. Compartilhamento e integrações</h2>
          <p>
            Podemos utilizar subprocessadores de infraestrutura (hospedagem, e-mail, observabilidade) e integrações
            autorizadas pelo cliente (ex.: mensageria e canais comerciais). Integrações com provedores como Meta/WhatsApp
            Business seguem políticas desses provedores e configurações do cliente.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">5. Direitos do titular</h2>
          <p>
            Titulares podem solicitar confirmação, acesso, correção, anonimização, portabilidade, eliminação, informação
            sobre compartilhamento e revogação de consentimento, quando cabível, via {COMPANY.privacyEmail}.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">6. Retenção e segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas proporcionais ao risco. Prazos de retenção seguem contrato,
            legislação aplicável e necessidade operacional. Detalhes adicionais em{' '}
            <Link to="/seguranca" className="text-data">
              Segurança
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">7. Alterações</h2>
          <p>Esta política pode ser atualizada. A data de revisão constará no topo desta página.</p>
        </section>
      </LegalLayout>
    </>
  )
}
