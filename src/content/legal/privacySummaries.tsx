import { Link } from 'react-router-dom'
import { COMPANY, PRODUCT, URLS } from '../../lib/constants'

/** Versão curta para landing institucional e materiais comerciais. */
export function PrivacyLandingSummary() {
  return (
    <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
      <p>
        O <strong className="text-text-primary">{PRODUCT.name}</strong> é uma plataforma operacional de inteligência
        comercial da {COMPANY.brand}. Tratamos dados para operar o serviço contratado — organização de filas,
        atendimento, integrações autorizadas e IA assistiva — com segregação multi-tenant, autenticação, auditoria e
        observabilidade técnica.
      </p>
      <p>
        <strong className="text-text-primary">Não vendemos dados</strong> e{' '}
        <strong className="text-text-primary">não usamos conversas para publicidade</strong>. Em operações B2B, o
        cliente costuma ser controlador dos dados de titulares finais; a INFTEC atua como operadora na prestação do
        SaaS, conforme contrato e instruções do cliente.
      </p>
      <p>
        Integrações Meta/WhatsApp dependem de autorização explícita do cliente e das políticas dos provedores. A IA
        apoia priorização e fluxo operacional; decisões comerciais, legais e financeiras permanecem sob responsabilidade
        humana do cliente.
      </p>
      <p>
        <Link to="/privacidade" className="text-data hover:text-data-dim">
          Política completa
        </Link>
        {' · '}
        <Link to="/remocao-de-dados" className="text-data hover:text-data-dim">
          Remoção de dados
        </Link>
        {' · '}
        <a href={`mailto:${COMPANY.privacyEmail}`} className="text-data hover:text-data-dim">
          {COMPANY.privacyEmail}
        </a>
      </p>
    </div>
  )
}

/** Resumo para onboarding e telas do produto (link para política publicada). */
export function PrivacyOnboardingSummary() {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-text-secondary">
      <p className="font-medium text-text-primary">Privacidade no Salefast (resumo)</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          Processamos dados operacionais e conversacionais inseridos ou recebidos via canais que{' '}
          <strong className="text-text-primary">você conecta e autoriza</strong> (ex.: Meta/WhatsApp), para filas,
          atendimento, classificação, priorização e automações configuradas.
        </li>
        <li>
          A INFTEC opera a plataforma como <strong className="text-text-primary">operadora</strong>; sua empresa é
          responsável pela base legal e pelos direitos dos titulares finais, salvo dados da sua conta de usuário
          administrados pela INFTEC.
        </li>
        <li>
          Usamos <strong className="text-text-primary">IA assistiva</strong> — não vendemos dados, não usamos conversas
          para anúnsios, e não substituímos decisões humanas sobre negociação, contratos ou compliance.
        </li>
        <li>
          Há logs, auditoria e observabilidade técnica para segurança e rastreabilidade operacional, conforme a{' '}
          <a
            href={`${URLS.inftecSite}/privacidade`}
            className="text-data hover:text-data-dim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade
          </a>
          .
        </li>
      </ul>
    </div>
  )
}
