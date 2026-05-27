import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY, PRODUCT, URLS } from '../../lib/constants'

function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="space-y-4 mt-10 scroll-mt-24">
      <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
      {children}
    </section>
  )
}

export function PrivacyPolicyBody() {
  return (
    <>
      <nav className="rounded-xl border border-border bg-bg-secondary p-4 text-sm text-text-secondary">
        <p className="font-medium text-text-primary mb-2">Nesta política</p>
        <ol className="list-decimal pl-5 space-y-1 columns-1 md:columns-2 gap-x-8">
          <li><a href="#introducao" className="text-data hover:underline">Introdução</a></li>
          <li><a href="#infotec" className="text-data hover:underline">Quem é a INFTEC</a></li>
          <li><a href="#escopo" className="text-data hover:underline">Escopo</a></li>
          <li><a href="#dados" className="text-data hover:underline">Dados coletados</a></li>
          <li><a href="#operacionais" className="text-data hover:underline">Dados operacionais e conversacionais</a></li>
          <li><a href="#integracoes" className="text-data hover:underline">Integrações com terceiros</a></li>
          <li><a href="#ia" className="text-data hover:underline">IA e automações</a></li>
          <li><a href="#bases" className="text-data hover:underline">Bases legais (LGPD)</a></li>
          <li><a href="#compartilhamento" className="text-data hover:underline">Compartilhamento e subprocessadores</a></li>
          <li><a href="#seguranca" className="text-data hover:underline">Segurança operacional</a></li>
          <li><a href="#logs" className="text-data hover:underline">Logs, auditoria e rastreabilidade</a></li>
          <li><a href="#retencao" className="text-data hover:underline">Retenção</a></li>
          <li><a href="#direitos" className="text-data hover:underline">Direitos do titular</a></li>
          <li><a href="#exclusao" className="text-data hover:underline">Exclusão de dados</a></li>
          <li><a href="#cliente" className="text-data hover:underline">Responsabilidades do cliente</a></li>
          <li><a href="#internacional" className="text-data hover:underline">Transferência internacional</a></li>
          <li><a href="#alteracoes" className="text-data hover:underline">Alterações</a></li>
          <li><a href="#contato" className="text-data hover:underline">Contato</a></li>
        </ol>
      </nav>

      <Section id="introducao" title="1. Introdução — o que é o Salefast">
        <p>
          O <strong>{PRODUCT.name}</strong> é uma plataforma SaaS de inteligência comercial e operação de atendimento
          orientada a comportamento, desenvolvida e operada pela {COMPANY.brand}. O produto integra canais comerciais
          autorizados pelo cliente, processa eventos operacionais, organiza filas e fluxos de atendimento, aplica IA
          assistiva e analisa sinais operacionais e comportamentais para priorização e apoio ao time comercial — sempre
          dentro de um ambiente <strong>multi-tenant</strong>, no qual cada organização cliente possui contexto
          operacional segregado.
        </p>
        <p>
          Esta política descreve como tratamos dados pessoais de forma transparente, alinhada ao comportamento real da
          plataforma na sua evolução atual (incluindo capacidades em maturação na v0), sem prometer certificações,
          compliance formal ou controles técnicos que ainda não estejam implementados.
        </p>
      </Section>

      <Section id="infotec" title="2. Quem é a INFTEC">
        <p>
          {COMPANY.legalName}, CNPJ {COMPANY.cnpj}, com sede em {COMPANY.city}, é a empresa responsável pelo site
          institucional ({COMPANY.siteUrl}), pelo ecossistema de plataformas INFTEC e pela operação do {PRODUCT.name}{' '}
          ({PRODUCT.appUrl}).
        </p>
        <p>
          Canal de privacidade e encarregado (DPO):{' '}
          <a href={`mailto:${COMPANY.privacyEmail}`} className="text-data">
            {COMPANY.privacyEmail}
          </a>
          . Segurança operacional:{' '}
          <a href={`mailto:${COMPANY.securityEmail}`} className="text-data">
            {COMPANY.securityEmail}
          </a>
          .
        </p>
      </Section>

      <Section id="escopo" title="3. Escopo desta política">
        <p>Aplica-se a:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Navegação no site institucional INFTEC e páginas públicas relacionadas;</li>
          <li>Cadastro, autenticação e uso das superfícies autenticadas (portal INFTEC, aplicação Salefast e APIs correlatas);</li>
          <li>Tratamento de dados operacionais e conversacionais processados em nome de clientes na plataforma Salefast;</li>
          <li>Integrações habilitadas pelo cliente (incluindo Meta, WhatsApp Business e demais canais comerciais suportados ou em preparação).</li>
        </ul>
        <p>
          Contratos comerciais, termos de uso e documentos enterprise podem complementar ou prevalecer sobre disposições
          específicas de determinados clientes.
        </p>
      </Section>

      <Section id="dados" title="4. Dados que podemos tratar">
        <p>Conforme o contexto de uso, categorias incluem:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Conta e identidade:</strong> nome, e-mail, identificadores de autenticação (via provedor de identidade
            configurado), organização/tenant, perfil de acesso e preferências de uso;
          </li>
          <li>
            <strong>Contato comercial:</strong> dados enviados em formulários institucionais, demonstrações e suporte;
          </li>
          <li>
            <strong>Dados técnicos:</strong> endereço IP, agente de usuário, timestamps, cookies conforme{' '}
            <Link to="/cookies" className="text-data">
              Política de Cookies
            </Link>
            ;
          </li>
          <li>
            <strong>Dados de onboarding e configuração:</strong> perfil operacional, modelos de negócio, preferências de
            IA assistiva, canais selecionados após descoberta via integrações;
          </li>
          <li>
            <strong>Dados inseridos ou sincronizados pelo cliente:</strong> conteúdo operacional necessário ao serviço
            (ver seção 5).
          </li>
        </ul>
        <p>
          <strong>Não vendemos</strong> dados pessoais e <strong>não utilizamos conversas ou eventos operacionais para
          publicidade</strong> ou perfilamento comercial de terceiros.
        </p>
      </Section>

      <Section id="operacionais" title="5. Dados operacionais e conversacionais">
        <p>
          No Salefast, clientes podem processar — conforme integrações e uso autorizado — dados relacionados à operação
          comercial, por exemplo:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mensagens e metadados de conversas em canais conectados (ex.: WhatsApp, Instagram, Messenger, páginas Meta);</li>
          <li>Eventos de atendimento, filas, handoff para humanos, status de leads e sinais de intenção configurados;</li>
          <li>Transcrições ou conteúdos derivados quando funcionalidades de mídia/áudio estiverem habilitadas;</li>
          <li>Registros de auditoria, versões de contexto operacional (Tenant Operational Context) e histórico de configuração;</li>
          <li>Indicadores analíticos operacionais agregados ou pseudonimizados para melhoria do serviço contratado.</li>
        </ul>
        <p>
          Esses dados em regra são controlados pelo <strong>cliente</strong> (empresa usuária), que define quais canais
          conectar, quais titulares interagem e qual base legal aplica-se aos titulares finais. A INFTEC trata tais dados
          como <strong>operadora</strong>, limitada às instruções contratuais e à operação técnica da plataforma.
        </p>
      </Section>

      <Section id="integracoes" title="6. Integrações com terceiros (Meta, WhatsApp e outros)">
        <p>
          Integrações com Meta (Facebook, Instagram, WhatsApp Business, contas de anúncio e ativos correlatos) dependem de{' '}
          <strong>autorização explícita do cliente</strong> via fluxos OAuth ou mecanismos oficiais do provedor. O
          Salefast utiliza essas integrações para <strong>descobrir e vincular ativos</strong> que o cliente possui
          direito de administrar, e para operar canais conforme permissões concedidas — não para acessar contas sem
          consentimento do administrador autorizado.
        </p>
        <p>
          O cliente é responsável por: possuir bases legais para contato e tratamento nos canais; cumprir políticas da
          Meta/WhatsApp; revogar integrações quando necessário; e garantir que dados importados ou sincronizados sejam
          legítimos. Capacidades específicas podem estar em rollout (v0): quando uma integração não estiver disponível no
          ambiente, a plataforma informa o estado sem simular conexões inexistentes.
        </p>
        <p>
          Provedores terceiros possuem políticas próprias. Recomendamos que clientes consultem a documentação oficial da
          Meta para WhatsApp Business Platform e Meta for Developers.
        </p>
      </Section>

      <Section id="ia" title="7. Uso de IA assistiva e automações">
        <p>
          O Salefast emprega IA e regras configuráveis para apoiar a operação comercial — por exemplo, qualificação
          inicial, organização de filas, priorização, sugestões de resposta e detecção de sinais operacionais conforme
          parâmetros definidos pelo cliente. Na v0, o modelo operacional previsto é{' '}
          <strong>IA na linha de frente com handoff para humanos</strong> quando há sinais de negociação, risco ou
          necessidade de atendimento humano.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Automações ocorrem conforme configuração e permissões do cliente;</li>
          <li>A plataforma pode gerar insights e classificações operacionais — não constituem aconselhamento jurídico, financeiro ou médico;</li>
          <li>
            O sistema <strong>não substitui</strong> a responsabilidade humana por decisões comerciais, contratuais ou de
            compliance; titulares finais devem ser informados pelo cliente, quando aplicável.
          </li>
        </ul>
        <p>
          Dados podem ser utilizados para: organização operacional, classificação de leads, priorização, automações
          autorizadas, analytics operacionais internos ao tenant, auditoria e melhoria operacional do serviço — sempre
          dentro dos limites contratuais e sem uso para publicidade.
        </p>
      </Section>

      <Section id="bases" title="8. Bases legais (LGPD)">
        <p>Tratamos dados pessoais com fundamento, conforme o caso, nos arts. 7º e 11 da LGPD, incluindo:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Execução de contrato</strong> ou procedimentos preliminares (prestação do SaaS, suporte, faturamento);</li>
          <li><strong>Legítimo interesse</strong> (segurança, prevenção a fraudes, melhoria técnica proporcional, logs de operação);</li>
          <li><strong>Consentimento</strong>, quando exigido (ex.: cookies não essenciais, comunicações opcionais);</li>
          <li><strong>Cumprimento de obrigação legal ou regulatória</strong>;</li>
          <li>
            <strong>Tratamento em nome do controlador (cliente)</strong>, com base nas instruções do cliente para dados de
            titulares finais processados na plataforma.
          </li>
        </ul>
        <p>
          Quando atuamos como operadores, cabe ao cliente definir e documentar a base legal perante seus titulares e
          atender solicitações que envolvam dados sob seu controle.
        </p>
      </Section>

      <Section id="compartilhamento" title="9. Compartilhamento e subprocessadores">
        <p>Podemos compartilhar dados limitados com:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provedores de infraestrutura em nuvem e hospedagem de aplicações;</li>
          <li>Provedor de autenticação e gestão de identidade (ex.: Auth0), conforme configurado;</li>
          <li>Ferramentas de observabilidade técnica (logs, métricas, tracing) para operação e diagnóstico;</li>
          <li>Integrações habilitadas pelo cliente (Meta e demais canais);</li>
          <li>Consultores ou autoridades, quando exigido por lei ou ordem válida.</li>
        </ul>
        <p>
          Exigimos de subprocessadores contratos ou termos compatíveis com a natureza do serviço e aplicamos controles
          proporcionais. Lista detalhada de subprocessadores críticos pode ser disponibilizada sob solicitação enterprise
          ou atualizada em anexo contratual.
        </p>
      </Section>

      <Section id="seguranca" title="10. Segurança operacional">
        <p>
          Adotamos medidas técnicas e organizacionais proporcionais ao risco, incluindo práticas reais da plataforma
          atual:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Autenticação e controle de acesso com perfis e políticas de autorização;</li>
          <li>Segregação lógica multi-tenant e contexto de execução por organização;</li>
          <li>Comunicação protegida via HTTPS/TLS entre clientes e serviços expostos;</li>
          <li>Auditoria operacional e trilhas de eventos relevantes ao produto;</li>
          <li>Monitoramento técnico, logs centralizados e práticas de observabilidade para detecção de falhas;</li>
          <li>Processos internos de resposta a incidentes (contato: {COMPANY.securityEmail}).</li>
        </ul>
        <p>
          Não afirmamos certificações ISO, SOC 2 ou criptografia ponta a ponta universal além do que está efetivamente
          implementado. Detalhes complementares em{' '}
          <Link to="/seguranca" className="text-data">
            Segurança e governança
          </Link>
          .
        </p>
      </Section>

      <Section id="logs" title="11. Logs, auditoria e rastreabilidade">
        <p>
          Para operar, proteger e investigar o serviço, registramos eventos técnicos e operacionais — acessos,
          alterações de configuração, versões de contexto operacional, erros de integração e metadados de requisições.
          Esses registros apoiam segurança, suporte, auditoria interna e melhoria do produto, com retenção limitada ao
          necessário (ver seção 12).
        </p>
        <p>
          Rastreabilidade operacional no Salefast permite reconstruir, dentro dos limites do produto, o que ocorreu em
          filas, handoffs e integrações — sem expor dados além do necessário a usuários não autorizados.
        </p>
      </Section>

      <Section id="retencao" title="12. Retenção de dados">
        <p>
          Prazos variam conforme finalidade, contrato, obrigações legais e necessidade operacional. Em linhas gerais:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Dados de conta e contrato: enquanto durar a relação e prazos legais subsequentes;</li>
          <li>Dados operacionais/conversacionais do tenant: conforme plano, solicitação de exclusão do cliente ou término do contrato;</li>
          <li>Logs técnicos: períodos curtos a moderados, alinhados à operação e diagnóstico;</li>
          <li>Backups: ciclos limitados, com expurgo conforme política interna.</li>
        </ul>
        <p>Após o término do contrato, procedimentos de devolução ou eliminação podem ser acordados conforme DPA/contrato.</p>
      </Section>

      <Section id="direitos" title="13. Direitos do titular (LGPD)">
        <p>
          Titulares podem solicitar, nos termos da LGPD: confirmação de tratamento, acesso, correção, anonimização,
          bloqueio, eliminação, portabilidade (quando aplicável), informação sobre compartilhamento e revogação de
          consentimento.
        </p>
        <p>
          Solicitações sobre dados processados <strong>em nome de um cliente Salefast</strong> devem, em regra, ser
          direcionadas ao controlador (cliente). Encaminharemos solicitações recebidas quando identificarmos o controlador
          responsável. Para dados nos quais a INFTEC é controladora (ex.: site, conta direta), contate{' '}
          <a href={`mailto:${COMPANY.privacyEmail}`} className="text-data">
            {COMPANY.privacyEmail}
          </a>
          .
        </p>
      </Section>

      <Section id="exclusao" title="14. Exclusão de dados">
        <p>
          Titulares e administradores autorizados podem solicitar exclusão conforme{' '}
          <Link to="/remocao-de-dados" className="text-data">
            instruções de remoção de dados
          </Link>
          . Eliminamos ou anonimizamos quando não houver obrigação legal de retenção, base contratual vigente ou
          necessidade operacional legítima (ex.: logs de segurança por prazo curto).
        </p>
        <p>
          Exclusão em ambiente multi-tenant pode exigir validação de identidade e confirmação de autoridade sobre a
          organização. Integrações externas (Meta/WhatsApp) podem reter dados conforme políticas do provedor até
          desconexão pelo cliente.
        </p>
      </Section>

      <Section id="cliente" title="15. Responsabilidades do cliente">
        <ul className="list-disc pl-5 space-y-1">
          <li>Garantir base legal para tratamento de titulares finais e transparência adequada (avisos, opt-in quando couber);</li>
          <li>Controlar quais integrações e canais conecta, permissões OAuth e usuários internos;</li>
          <li>Não inserir dados ilícitos, excessivos ou sem autorização;</li>
          <li>Configurar handoffs, automações e limites de IA de forma responsável;</li>
          <li>Responder a titulares finais e autoridades quando for controlador dos dados;</li>
          <li>Manter credenciais e acessos administrativos seguros.</li>
        </ul>
      </Section>

      <Section id="internacional" title="16. Transferência internacional">
        <p>
          Provedores de infraestrutura, autenticação ou observabilidade podem processar dados em servidores fora do
          Brasil. Quando houver transferência internacional, adotamos salvaguardas contratuais e técnicas compatíveis com
          a LGPD (ex.: cláusulas padrão, avaliação de fornecedores), conforme o subprocessador e o contrato aplicável.
        </p>
      </Section>

      <Section id="alteracoes" title="17. Alterações desta política">
        <p>
          Podemos atualizar esta política para refletir evolução do produto, requisitos legais ou integrações. A data de
          revisão aparece no topo da página. Mudanças relevantes podem ser comunicadas por e-mail, aviso in-app ou
          publicação no site.
        </p>
      </Section>

      <Section id="contato" title="18. Contato de privacidade">
        <p>
          Dúvidas, solicitações de titulares e assuntos LGPD:{' '}
          <a href={`mailto:${COMPANY.privacyEmail}`} className="text-data">
            {COMPANY.privacyEmail}
          </a>
          .
        </p>
        <p>
          Produto Salefast:{' '}
          <a href={PRODUCT.appUrl} className="text-data">
            {PRODUCT.appUrl}
          </a>{' '}
          · Site institucional:{' '}
          <a href={URLS.inftecSite} className="text-data">
            {URLS.inftecSite}
          </a>
          .
        </p>
      </Section>
    </>
  )
}
