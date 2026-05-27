import { Link } from 'react-router-dom'
import { COMPANY, PRODUCT } from '../../lib/constants'
import {
  LegalContactChannels,
  LegalEntityCard,
  LegalList,
  LegalSection,
  LegalSubsection,
} from '../../components/legal/LegalBlocks'

export function DataRemovalBody() {
  return (
    <>
      <nav className="rounded-xl border border-border bg-bg-secondary/60 p-4 text-sm text-text-secondary mb-8">
        <p className="font-medium text-text-primary mb-2">Índice</p>
        <ol className="columns-1 md:columns-2 gap-x-8 list-decimal pl-5 space-y-1">
          <li>
            <a href="#introducao" className="text-data hover:underline">
              Introdução
            </a>
          </li>
          <li>
            <a href="#dados-existentes" className="text-data hover:underline">
              Quais dados podem existir
            </a>
          </li>
          <li>
            <a href="#como-solicitar" className="text-data hover:underline">
              Como solicitar exclusão
            </a>
          </li>
          <li>
            <a href="#retencao" className="text-data hover:underline">
              Dados que podem ser mantidos
            </a>
          </li>
          <li>
            <a href="#integracoes" className="text-data hover:underline">
              Integrações externas
            </a>
          </li>
          <li>
            <a href="#prazo" className="text-data hover:underline">
              Prazo de processamento
            </a>
          </li>
          <li>
            <a href="#seguranca" className="text-data hover:underline">
              Segurança operacional
            </a>
          </li>
          <li>
            <a href="#contato" className="text-data hover:underline">
              Contato para exclusão
            </a>
          </li>
        </ol>
      </nav>

      <LegalSection id="introducao" title="Introdução">
        <p>
          A <strong>{COMPANY.legalName}</strong> trata a privacidade como requisito de governança do ecossistema SaaS
          que opera, incluindo o produto <strong>{PRODUCT.name}</strong>. Esta página descreve o processo de{' '}
          <strong>remoção e eliminação de dados pessoais</strong>, em conformidade com a Lei Geral de Proteção de Dados
          (LGPD) e com a transparência exigida por integrações corporativas (Meta, WhatsApp Business) e App Review.
        </p>
        <p>
          A remoção pode envolver dados nos quais a INFTEC atua como <strong>controladora</strong> (ex.: contato
          institucional, conta de usuário administrada diretamente) ou como <strong>operadora</strong> em nome de
          clientes B2B — neste último caso, titulares finais devem, em regra, acionar primeiro o controlador (empresa
          cliente).
        </p>
        <p>
          Documento complementar:{' '}
          <Link to="/privacidade" className="text-data hover:underline">
            Política de Privacidade
          </Link>
          {' · '}
          <Link to="/termos" className="text-data hover:underline">
            Termos de Uso
          </Link>
        </p>
      </LegalSection>

      <LegalSection id="dados-existentes" title="Quais dados podem existir">
        <p>Dependendo do seu vínculo com a INFTEC e do uso do Salefast, podemos processar:</p>
        <LegalList
          items={[
            'Dados cadastrais e de conta: nome, e-mail, telefone, organização, perfil de acesso, identificadores de autenticação.',
            'Dados operacionais: configuração de tenant, contexto operacional, filas, preferências de IA assistiva, metadados de onboarding.',
            'Mensagens e conteúdos conversacionais recebidos ou enviados via canais integrados pelo cliente.',
            'Logs técnicos: IP, timestamps, identificadores de requisição, erros de API, eventos de auditoria.',
            'Integrações Meta/WhatsApp: tokens OAuth, IDs de ativos (páginas, números, contas de anúncio) conforme autorização.',
            'Identificadores técnicos: tenant ID, correlation IDs, versões de contexto, registros de publicação ou webhook.',
            'Eventos operacionais: handoffs, classificações, sinais comportamentais configurados, trilhas para rastreabilidade.',
          ]}
        />
        <p>
          Nem todas as categorias se aplicam a todo titular. A INFTEC não comercializa bases de dados nem utiliza
          conversas para publicidade.
        </p>
      </LegalSection>

      <LegalSection id="como-solicitar" title="Como solicitar exclusão">
        <LegalSubsection title="Titularidade e autoridade">
          <p>
            Solicitações devem partir do titular, de representante legal comprovado ou de administrador autorizado do
            tenant (para dados da organização). Podemos exigir verificação de identidade, confirmação de domínio
            corporativo ou documentos societários proporcionais ao risco.
          </p>
        </LegalSubsection>
        <LegalSubsection title="Canal oficial e informações mínimas">
          <p>
            Envie e-mail para{' '}
            <a href={`mailto:${COMPANY.privacyEmail}`} className="text-data">
              {COMPANY.privacyEmail}
            </a>{' '}
            com assunto <strong>“Solicitação de remoção de dados — LGPD”</strong>, informando:
          </p>
          <LegalList
            items={[
              'Nome completo e e-mail de resposta;',
              'Produto/superfície (site INFTEC, Salefast, portal, integração específica);',
              'Organização/tenant e papel (titular, admin, representante legal);',
              'Escopo desejado (conta individual, tenant completo, integração Meta, conversas, logs);',
              'Documentos de apoio, se solicitados na triagem.',
            ]}
          />
        </LegalSubsection>
        <p>
          Assuntos jurídicos contratuais podem ser encaminhados também a{' '}
          <a href={`mailto:${COMPANY.legalEmail}`} className="text-data">
            {COMPANY.legalEmail}
          </a>
          . Suporte operacional (dúvidas de uso, não substituto de solicitação formal):{' '}
          <a href={`mailto:${COMPANY.supportEmail}`} className="text-data">
            {COMPANY.supportEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="retencao" title="Dados que podem ser mantidos após a solicitação">
        <p>Podemos reter dados, total ou parcialmente, quando necessário para:</p>
        <LegalList
          items={[
            'Cumprimento de obrigação legal ou regulatória, ordem de autoridade competente ou prazos fiscais/contábeis.',
            'Prevenção a fraude, segurança da plataforma multi-tenant e investigação de incidentes.',
            'Auditoria, compliance interno e defesa de direitos em processos regulatórios ou judiciais.',
            'Registros financeiros e operacionais vinculados a contrato vigente ou encerrado recentemente.',
            'Backups em ciclo de expurgo — eliminação definitiva conforme janelas técnicas documentadas.',
            'Dados anonimizados ou agregados que não permitam identificação do titular.',
          ]}
        />
        <p>
          Informaremos, quando aplicável, a base da retenção residual e o prazo estimado de expurgo, dentro dos limites
          legais e contratuais.
        </p>
      </LegalSection>

      <LegalSection id="integracoes" title="Integrações externas (Meta, WhatsApp e terceiros)">
        <p>
          Dados processados ou armazenados por <strong>Meta, WhatsApp Business, Auth0</strong> ou outros provedores
          seguem políticas e painéis desses serviços. A desconexão OAuth e a exclusão na INFTEC{' '}
          <strong>não removem automaticamente</strong> cópias mantidas por terceiros.
        </p>
        <LegalList
          items={[
            'O cliente deve revogar permissões no Business Manager / Meta for Developers quando aplicável.',
            'Números WhatsApp Business podem exigir procedimentos específicos do provedor.',
            'Webhooks e filas externas podem reter metadados até desativação completa.',
          ]}
        />
        <p>
          Cooperaremos com instruções válidas do controlador cliente e com requisitos razoáveis de provedores, dentro
          das capacidades técnicas da v0.
        </p>
      </LegalSection>

      <LegalSection id="prazo" title="Prazo de processamento">
        <p>O fluxo operacional padrão compreende:</p>
        <LegalList
          items={[
            'Confirmação de recebimento em prazo comercial inicial (em geral até 5 dias úteis).',
            'Análise de escopo, titularidade e impacto multi-tenant.',
            'Execução técnica da eliminação ou anonimização, incluindo filas de backup quando aplicável.',
            'Confirmação por e-mail ao solicitante, com ressalvas legais de retenção residual.',
          ]}
        />
        <p>
          Prazos da LGPD para resposta ao titular serão observados; solicitações complexas (tenant enterprise, múltiplas
          integrações) podem exigir prazo adicional comunicado de forma transparente.
        </p>
      </LegalSection>

      <LegalSection id="seguranca" title="Segurança operacional">
        <p>
          Pedidos de exclusão são registrados em trilhas de auditoria para prevenir abuso (ex.: tentativas de apagar
          dados de terceiros). Logs técnicos de segurança podem ser mantidos por período curto mesmo após eliminação do
          dado principal, para integridade da plataforma e investigação de incidentes — conforme{' '}
          <Link to="/seguranca" className="text-data hover:underline">
            práticas de segurança
          </Link>
          .
        </p>
        <p>
          Ambientes multi-tenant exigem isolamento rigoroso: exclusões são aplicadas por escopo de organização, sem
          afetar outros clientes.
        </p>
      </LegalSection>

      <LegalSection id="contato" title="Contato para exclusão">
        <LegalEntityCard />
        <div className="pt-4">
          <LegalContactChannels />
        </div>
        <p className="text-sm text-text-muted pt-4">
          Segurança de incidentes:{' '}
          <a href={`mailto:${COMPANY.securityEmail}`} className="text-data hover:underline">
            {COMPANY.securityEmail}
          </a>
        </p>
      </LegalSection>
    </>
  )
}
