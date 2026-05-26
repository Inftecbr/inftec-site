import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { LegalLayout } from '../components/LegalLayout'
import { COMPANY, PRODUCT } from '../lib/constants'

export default function PrivacidadeExclusaoPage() {
  return (
    <>
      <PageMeta
        title="Exclusão de dados | INFTEC — Salefast"
        description="Como solicitar exclusão ou eliminação de dados pessoais tratados pela INFTEC e pela plataforma Salefast, conforme LGPD."
        path="/privacidade/exclusao-de-dados"
      />
      <LegalLayout title="Exclusão de dados" updated="25 de maio de 2026">
        <p className="text-text-secondary leading-relaxed">
          Esta página descreve como solicitar a exclusão ou eliminação de dados pessoais relacionados ao site INFTEC, à
          sua conta de usuário ou, quando aplicável, a dados processados na plataforma {PRODUCT.name} em nome da sua
          organização.
        </p>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">1. Quem pode solicitar</h2>
          <ul className="list-disc pl-5 space-y-1 text-text-secondary">
            <li>Titulares de dados pessoais nos quais a INFTEC atua como controladora (ex.: contato institucional, conta direta);</li>
            <li>
              Administradores autorizados de organizações clientes do Salefast, para dados do tenant sob responsabilidade
              contratual do cliente;
            </li>
            <li>Representantes legais, mediante comprovação quando necessário.</li>
          </ul>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">2. Como solicitar</h2>
          <p className="text-text-secondary">
            Envie e-mail para{' '}
            <a href={`mailto:${COMPANY.privacyEmail}`} className="text-data">
              {COMPANY.privacyEmail}
            </a>{' '}
            com assunto &quot;Solicitação de exclusão de dados&quot; e inclua:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-text-secondary">
            <li>Nome completo e e-mail de contato;</li>
            <li>Organização/tenant (se cliente Salefast);</li>
            <li>Descrição clara do que deseja excluir (conta, tenant, conversas, integração específica);</li>
            <li>Indicação se você é titular ou administrador autorizado da organização.</li>
          </ul>
          <p className="text-text-secondary">
            Para dados de titulares finais atendidos via canais do cliente (ex.: WhatsApp), a solicitação em regra deve
            ser feita ao <strong>controlador (empresa cliente)</strong>, que instruirá a INFTEC quando necessário.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">3. O que acontece após a solicitação</h2>
          <ul className="list-disc pl-5 space-y-1 text-text-secondary">
            <li>Confirmaremos o recebimento e podemos solicitar informações adicionais para verificar identidade ou autoridade;</li>
            <li>
              Avaliaremos prazos legais, obrigações contratuais, backups em ciclo de expurgo e logs de segurança de
              retenção curta;
            </li>
            <li>
              Desconexão de integrações Meta/WhatsApp deve ser feita pelo cliente no provedor e na plataforma — a
              exclusão na INFTEC não remove automaticamente cópias mantidas pela Meta;
            </li>
            <li>Responderemos dentro de prazos razoáveis previstos na LGPD, informando conclusão ou fundamentos de retenção residual.</li>
          </ul>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">4. Limitações transparentes</h2>
          <p className="text-text-secondary">
            Podemos manter dados anonimizados ou agregados que não identifiquem titulares, registros exigidos por lei ou
            evidências necessárias para defesa de direitos em procedimentos regulatórios ou judiciais. Ambientes
            multi-tenant exigem cuidado para não afetar outros clientes — exclusões são escopadas por organização.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">5. Documentos relacionados</h2>
          <p className="text-text-secondary">
            <Link to="/privacidade" className="text-data">
              Política de Privacidade completa
            </Link>
            {' · '}
            <Link to="/seguranca" className="text-data">
              Segurança
            </Link>
            {' · '}
            <a href={`mailto:${COMPANY.securityEmail}`} className="text-data">
              {COMPANY.securityEmail}
            </a>
          </p>
        </section>
      </LegalLayout>
    </>
  )
}
