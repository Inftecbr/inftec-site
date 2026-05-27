import { Link } from 'react-router-dom'
import { COMPANY, PRODUCT, URLS } from '../../lib/constants'
import { LegalEntityCard, LegalList, LegalSection, LegalSubsection } from '../../components/legal/LegalBlocks'

export function TermsOfUseBody() {
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
            <a href="#estrutura" className="text-data hover:underline">
              Estrutura da plataforma
            </a>
          </li>
          <li>
            <a href="#elegibilidade" className="text-data hover:underline">
              Elegibilidade e acesso
            </a>
          </li>
          <li>
            <a href="#uso-aceitavel" className="text-data hover:underline">
              Uso aceitável
            </a>
          </li>
          <li>
            <a href="#apis" className="text-data hover:underline">
              APIs e integrações
            </a>
          </li>
          <li>
            <a href="#dados" className="text-data hover:underline">
              Dados e privacidade
            </a>
          </li>
          <li>
            <a href="#disponibilidade" className="text-data hover:underline">
              Disponibilidade dos serviços
            </a>
          </li>
          <li>
            <a href="#suspensao" className="text-data hover:underline">
              Suspensão e encerramento
            </a>
          </li>
          <li>
            <a href="#pi" className="text-data hover:underline">
              Propriedade intelectual
            </a>
          </li>
          <li>
            <a href="#limitacao" className="text-data hover:underline">
              Limitação de responsabilidade
            </a>
          </li>
          <li>
            <a href="#contato" className="text-data hover:underline">
              Contato institucional
            </a>
          </li>
        </ol>
      </nav>

      <LegalSection id="introducao" title="Introdução">
        <p>
          Estes Termos de Uso regulam o acesso e a utilização dos sites, portais, APIs, automações, integrações e
          produtos de software como serviço (SaaS) operados pela <strong>{COMPANY.legalName}</strong> (“INFTEC”,
          “nós”), incluindo o hub institucional em {URLS.inftecSite} e os ambientes autenticados do ecossistema.
        </p>
        <p>
          A INFTEC desenvolve e opera plataformas digitais orientadas a operação comercial, governança tecnológica e
          integração com canais corporativos. Ao acessar ou utilizar qualquer serviço INFTEC, você declara ter lido,
          compreendido e concordado com estes Termos, bem como com a{' '}
          <Link to="/privacidade">Política de Privacidade</Link> e documentos complementares aplicáveis ao seu plano ou
          contrato.
        </p>
        <p>
          Relações comerciais B2B podem ser regidas adicionalmente por contrato, ordem de serviço, DPA ou anexo
          enterprise, que prevalecem em caso de conflito específico.
        </p>
      </LegalSection>

      <LegalSection id="estrutura" title="Estrutura da plataforma e relação INFTEC — Salefast">
        <p>
          A INFTEC opera um <strong>ecossistema multi-produto</strong> sob infraestrutura e governança comuns. O{' '}
          <strong>{PRODUCT.name}</strong> é um produto SaaS da INFTEC, com presença institucional em{' '}
          {PRODUCT.siteUrl} e operação em {PRODUCT.appUrl}. O site {URLS.inftecSite} é o hub corporativo; o site e a
          aplicação Salefast são superfícies operacionais e comerciais do mesmo produto.
        </p>
        <p>
          Funcionalidades, limites de uso, integrações habilitadas (incluindo Meta, WhatsApp Business e OAuth
          corporativo), ambientes (produção, homologação) e módulos disponíveis podem variar conforme plano contratado,
          feature flags, maturidade da v0 e configuração do tenant. A INFTEC pode evoluir arquitetura, APIs e UX sem
          alterar a natureza jurídica destes Termos, respeitando contratos vigentes.
        </p>
        <LegalSubsection title="Multi-tenant e contexto operacional">
          <p>
            Serviços como o Salefast segregam dados e configurações por organização (tenant), com contexto operacional,
            auditoria e controle de acesso aplicados por ambiente. Cada cliente é responsável pelos usuários,
            integrações e dados inseridos em seu tenant.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="elegibilidade" title="Elegibilidade e acesso">
        <p>
          O uso exige capacidade civil e, quando aplicável, poderes para representar a pessoa jurídica contratante. Você
          deve fornecer informações verdadeiras, completas e atualizadas no cadastro e manter a precisão dos dados de
          faturamento e contato.
        </p>
        <LegalList
          items={[
            'Credenciais de acesso (incluindo autenticação federada via provedor de identidade configurado) são pessoais ou vinculadas ao perfil autorizado — não devem ser compartilhadas indevidamente.',
            'O administrador do tenant responde por convites, perfis, permissões e atos de usuários vinculados à organização.',
            'É vedado criar contas automatizadas para burlar limites, contornar suspensões ou acessar tenants alheios.',
            'Podemos solicitar verificação adicional para segurança, compliance ou integrações sensíveis (ex.: Meta App Review).',
          ]}
        />
      </LegalSection>

      <LegalSection id="uso-aceitavel" title="Uso aceitável">
        <p>
          Os serviços destinam-se a operação comercial legítima, automação assistiva e integração autorizada de canais. É
          expressamente proibido, direta ou indiretamente:
        </p>
        <LegalList
          items={[
            'Envio de spam, mensagens em massa não solicitadas ou práticas que violem políticas de mensageria (incluindo WhatsApp Business Platform e Meta).',
            'Automações abusivas, flooding, scraping não autorizado de APIs ou superfícies protegidas.',
            'Uso ilegal, difamatório, fraudulento ou que viole direitos de terceiros.',
            'Violação de termos e políticas de Meta, WhatsApp, Auth0 ou demais provedores integrados.',
            'Engenharia reversa, descompilação ou tentativa de extrair código-fonte ou segredos, salvo permissão legal expressa.',
            'Exploração de vulnerabilidades, testes de intrusão não autorizados ou interferência na integridade do ecossistema.',
            'Sobrecarga intencional de infraestrutura, bypass de rate limits ou abuso de tokens OAuth.',
          ]}
        />
        <p>
          A INFTEC pode investigar indícios de abuso com base em logs, auditoria e alertas de observabilidade, adotando
          medidas proporcionais (ver Suspensão).
        </p>
      </LegalSection>

      <LegalSection id="apis" title="APIs, OAuth e integrações com terceiros">
        <p>
          Parte dos serviços expõe APIs REST e fluxos OAuth para conectar canais comerciais (Meta, WhatsApp Business,
          publicações, webhooks e correlatos). O funcionamento depende de:
        </p>
        <LegalList
          items={[
            'Disponibilidade, políticas e limites impostos por terceiros (Meta, provedores de nuvem, identidade, mensageria).',
            'Configuração correta pelo cliente (apps Meta, permissões, tokens, webhooks, números WhatsApp Business).',
            'Estado de maturidade do ambiente — integrações podem estar em rollout ou indisponíveis em determinados ambientes da v0.',
          ]}
        />
        <p>
          A INFTEC não garante comportamento de plataformas externas nem aprovação em App Review de terceiros. O cliente
          deve manter conformidade com documentação oficial da Meta for Developers e WhatsApp Business Platform.
        </p>
      </LegalSection>

      <LegalSection id="dados" title="Dados, privacidade e governança">
        <p>
          O tratamento de dados pessoais observa a LGPD e a{' '}
          <Link to="/privacidade">Política de Privacidade</Link>. Em operações B2B no Salefast, o cliente em regra atua
          como controlador dos dados de titulares finais; a INFTEC atua como operadora na execução técnica do SaaS,
          conforme instruções contratuais.
        </p>
        <LegalList
          items={[
            'Dados operacionais e conversacionais processados no tenant para filas, atendimento, IA assistiva e analytics operacionais autorizados.',
            'Logs técnicos, métricas, tracing e registros de auditoria para segurança, suporte e rastreabilidade.',
            'Retenção limitada ao necessário contratual, legal e operacional — detalhes na Política de Privacidade e em contratos.',
            'Solicitações de exclusão: ver página de Remoção de Dados.',
          ]}
        />
        <p>
          <Link to="/remocao-de-dados" className="text-data hover:underline">
            Remoção de dados
          </Link>
          {' · '}
          <Link to="/seguranca" className="text-data hover:underline">
            Segurança e governança
          </Link>
        </p>
      </LegalSection>

      <LegalSection id="disponibilidade" title="Disponibilidade dos serviços">
        <p>
          Operamos SaaS com evolução contínua. Podemos realizar manutenções programadas, deploys, atualizações de
          segurança e ajustes de capacidade. Metas de SLA, janelas de manutenção e suporte prioritário, quando existirem,
          constam do contrato ou anexo comercial — não destes Termos genéricos.
        </p>
        <p>
          Interrupções não programadas podem ocorrer por falhas de terceiros, incidentes de segurança ou force majeure.
          Comunicaremos eventos relevantes por canais razoáveis (status page, e-mail, aviso in-app) quando aplicável.
        </p>
      </LegalSection>

      <LegalSection id="suspensao" title="Suspensão e encerramento">
        <p>Podemos suspender ou encerrar acesso, total ou parcialmente, quando houver:</p>
        <LegalList
          items={[
            'Violação destes Termos, políticas de integração ou uso abusivo comprovado.',
            'Risco imediato à segurança, integridade multi-tenant ou outros clientes.',
            'Inadimplemento contratual ou solicitação válida de autoridade competente.',
            'Descontinuação de produto ou módulo, com aviso prévio razoável quando exigido por contrato.',
          ]}
        />
        <p>
          O cliente pode encerrar conforme contrato. Após encerramento, procedimentos de exportação, eliminação e
          retenção residual seguem Política de Privacidade, contrato e obrigações legais.
        </p>
      </LegalSection>

      <LegalSection id="pi" title="Propriedade intelectual">
        <p>
          Software, APIs, documentação, marcas INFTEC e Salefast, identidade visual, fluxos proprietários, modelos de
          dados operacionais e arquitetura do ecossistema são de titularidade da INFTEC ou licenciadores. Nenhuma cláusula
          transfere propriedade intelectual além da licença de uso limitada do SaaS.
        </p>
        <p>
          Feedback técnico pode ser utilizado para melhoria do produto, sem obrigação de compensação, salvo acordo
          escrito em contrário.
        </p>
      </LegalSection>

      <LegalSection id="limitacao" title="Limitação de responsabilidade">
        <p>
          Na máxima extensão permitida pela lei aplicável, a INFTEC não responde por danos indiretos, lucros cessantes ou
          perdas decorrentes exclusivamente de indisponibilidade de terceiros (Meta, WhatsApp, provedores de nuvem,
          internet do usuário), configuração incorreta de integrações pelo cliente ou decisões comerciais tomadas com
          base em insights ou automações da plataforma.
        </p>
        <p>
          O Salefast apoia operação humana e IA assistiva; não substitui assessoria jurídica, fiscal ou compliance
          específica do cliente. Limites quantitativos de responsabilidade, quando existirem, constam do contrato
          enterprise aplicável.
        </p>
      </LegalSection>

      <LegalSection id="contato" title="Contato institucional">
        <p>Dúvidas sobre estes Termos e assuntos corporativos:</p>
        <LegalEntityCard />
        <p className="pt-2">
          E-mail geral:{' '}
          <a href={`mailto:${COMPANY.email}`} className="text-data">
            {COMPANY.email}
          </a>
          {' · '}
          Jurídico:{' '}
          <a href={`mailto:${COMPANY.legalEmail}`} className="text-data">
            {COMPANY.legalEmail}
          </a>
        </p>
      </LegalSection>
    </>
  )
}
