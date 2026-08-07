import Container, { Section, SectionHeader } from '../../components/ui/Container'
import Button from '../../components/ui/Button'
import { COMPANY, PRODUCT, PORTAL_LABELS } from '../../lib/constants'

const valueLoop = [
  'Identificação de problemas relevantes do mercado corporativo',
  'Criação de produtos SaaS próprios no ecossistema INFTEC',
  'Operação contínua das plataformas para clientes',
  'Aprendizado com uso real e feedback dos clientes',
  'Evolução do produto via roadmap — benefícios compartilhados no ecossistema',
]

export function HomePurposeSection() {
  const items = [
    {
      title: 'Quem é a INFTEC',
      body: `${COMPANY.brand} é a empresa por trás do portfólio: marca corporativa, governança, confiança e visão de longo prazo — distinta de cada produto SaaS.`,
    },
    {
      title: 'Como criamos valor',
      body: 'Modelo product-led: produtos SaaS repetíveis, operados em escala, evoluídos continuamente. Não vendemos horas, escopo ou software sob encomenda.',
    },
    {
      title: 'Visão de longo prazo',
      body: 'Expandir o portfólio de produtos SaaS sob a mesma INFTEC — hoje com Salefast como primeiro produto; amanhã com novas linhas quando a tese de produto for sólida.',
    },
  ]

  return (
    <Section id="proposito" alt>
      <Container>
        <SectionHeader
          eyebrow="Empresa"
          title="SaaS orientado a produtos — não a projetos."
          lead={COMPANY.positioning}
          align="center"
        />
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-bg-secondary/60 p-5 text-center">
              <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 max-w-2xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-wide text-text-muted text-center mb-4">
            Ciclo de valor SaaS
          </p>
          <ol className="space-y-2 text-sm text-text-secondary">
            {valueLoop.map((step, i) => (
              <li key={step} className="flex gap-3 rounded-lg border border-border bg-bg-secondary/40 px-4 py-3">
                <span className="font-mono text-xs text-data shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8 text-center">
          <Button variant="ghost" href="/empresa">
            Filosofia da empresa
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export function TrustConfidenceSection() {
  const trustBullets = [
    'Experiência do cliente no centro de cada produto SaaS',
    'Portfólio próprio operado pela INFTEC',
    'Ecossistema com papéis claros: empresa, produtos e aplicações',
    'Privacidade, segurança e confiança institucional',
  ]

  return (
    <Section id="confianca">
      <Container>
        <SectionHeader
          eyebrow="Confiança"
          title="Empresa preparada para operar SaaS em escala."
          lead="Clientes, parceiros e reguladores encontram aqui a camada institucional — enquanto cada produto mantém sua própria jornada comercial."
          align="center"
        />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mt-8">
          {trustBullets.map((t) => (
            <li
              key={t}
              className="rounded-xl border border-border bg-bg-secondary/60 px-4 py-4 text-sm text-text-secondary text-center leading-snug"
            >
              {t}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export function HomeProductsSection() {
  return (
    <Section id="produtos" alt>
      <Container>
        <SectionHeader
          eyebrow="Produtos SaaS"
          title="Ecossistema de produtos da INFTEC"
          lead="Cada produto possui site e operação próprios. Aqui listamos apenas a pertinência institucional — sem funcionalidades, pricing ou demonstrações."
        />
        <article className="max-w-xl rounded-2xl border border-border bg-bg-secondary p-8">
          <p className="text-xs font-medium uppercase tracking-wide text-text-muted mb-2">No portfólio hoje</p>
          <h3 className="text-lg font-semibold text-text-primary">{PRODUCT.name}</h3>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">{PRODUCT.institutionalSummary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary" href={PRODUCT.siteUrl} external>
              Site do produto ↗
            </Button>
            <Button variant="ghost" href="/produtos">
              Ver todos os produtos
            </Button>
          </div>
        </article>
      </Container>
    </Section>
  )
}

export function HomeEcosystemSection() {
  return (
    <Section id="ecossistema">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <SectionHeader
            eyebrow="Ecossistema"
            title="Uma empresa SaaS, várias superfícies."
            lead="INFTEC → produtos SaaS → aplicações → documentação e status → clientes. Cada camada com responsabilidade definida."
          />
          <ul className="space-y-2 text-sm font-mono text-data">
            <li>INFTEC (inftec.com.br) — empresa e confiança</li>
            <li>Produtos SaaS — sites dedicados (ex.: salefast.com.br)</li>
            <li>Aplicações — operação autenticada dos clientes</li>
            <li>Clientes — valor entregue via produtos do portfólio</li>
          </ul>
        </div>
        <div className="mt-8">
          <Button variant="secondary" href="/ecossistema">
            Mapa do ecossistema
          </Button>
        </div>
      </Container>
    </Section>
  )
}

import PlatformPreview from '../../components/platform/PlatformPreview'

const pains = [
  'Leads chegam em vários canais; ninguém sabe quem está pronto para fechar.',
  'CRM vira cadastro atrasado — o contexto fica no celular do vendedor.',
  'Automação responde, mas não interpreta timing nem intenção real.',
  'Gestores veem volume de mensagens, não comportamento de compra.',
  'Follow-ups perdem janela porque a prioridade é manual.',
  'Ruído operacional consome o time; oportunidades quentes esfriam.',
]

export function ProblemSection() {
  return (
    <Section id="problema" alt>
      <Container>
        <SectionHeader
          eyebrow="O problema"
          title="Sua operação já conversa o dia inteiro. A prioridade ainda é manual."
          lead="A conversa comercial gera dados o tempo todo. O que falta é inteligência operacional sobre quem agir, quando agir e com qual contexto."
        />
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {pains.map((text) => (
            <div
              key={text}
              className="rounded-xl border border-border bg-bg-surface/50 p-5 text-sm text-text-secondary leading-relaxed"
            >
              <span className="text-data font-mono mr-2">—</span>
              {text}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

const pillars = [
  {
    title: 'Sinais centralizados',
    body: 'Mensagens, eventos, histórico e integrações em um único contexto por oportunidade — não em abas dispersas.',
  },
  {
    title: 'Comportamento interpretado',
    body: 'Padrões de intenção, urgência e retorno extraídos das conversas reais, não de campos vazios no CRM.',
  },
  {
    title: 'Prioridade operacional',
    body: 'Fila clara do que o time comercial deve fazer agora: ligar, responder, escalar ou nutrir.',
  },
  {
    title: 'Contexto omnichannel',
    body: 'WhatsApp, redes, e-mail e demais touchpoints organizados numa linha do tempo acionável.',
  },
  {
    title: 'Inteligência contínua',
    body: 'A plataforma aprende com a operação para refinar priorização — com governança e revisão humana.',
  },
]

export function SalefastProductSection() {
  return (
    <Section id="salefast">
      <Container>
        <SectionHeader
          eyebrow="Produto"
          title="Salefast: nossa primeira plataforma"
          lead="O Salefast é o produto SaaS da INFTEC para inteligência comercial orientada a comportamento. Possui site, identidade e ambiente operacional próprios — fora do site institucional da INFTEC."
        />
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="grid sm:grid-cols-2 gap-3">
              {pillars.map((p) => (
                <article key={p.title} className="rounded-xl border border-border bg-bg-secondary p-4">
                  <h3 className="text-sm font-semibold text-text-primary">{p.title}</h3>
                  <p className="mt-1 text-xs text-text-secondary leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-text-muted">
              Você sairá de inftec.com.br ao acessar os links do produto abaixo.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" href={PRODUCT.siteUrl} external>
                Ir para {PORTAL_LABELS.salefastSite}
              </Button>
              <Button variant="secondary" href={PRODUCT.appUrl} external>
                {PORTAL_LABELS.salefastApp}
              </Button>
              <Button variant="ghost" href="/produto">
                Visão corporativa (INFTEC)
              </Button>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-muted mb-2 font-mono">Referência — {PORTAL_LABELS.salefastApp}</p>
            <PlatformPreview />
          </div>
        </div>
      </Container>
    </Section>
  )
}

const steps = [
  { n: '01', title: 'Captura de sinais', body: 'Canais e touchpoints conectados; eventos comerciais entram na plataforma em tempo operacional.' },
  { n: '02', title: 'Organização de contexto', body: 'Histórico unificado por lead ou oportunidade — quem disse o quê, quando e por qual canal.' },
  { n: '03', title: 'Interpretação de intenção', body: 'Modelos e regras de domínio leem comportamento: timing, recorrência, tipo de pergunta, retorno.' },
  { n: '04', title: 'Priorização operacional', body: 'Score e fila orientam o time — menos adivinhação, mais ação no momento certo.' },
  { n: '05', title: 'Ação do time comercial', body: 'Corretores e atendentes agem com contexto completo; gestores enxergam a operação viva.' },
]

export function HowItWorksSection() {
  return (
    <Section alt>
      <Container>
        <SectionHeader
          eyebrow="Como funciona"
          title="Do sinal à ação — fluxo operacional contínuo."
          align="center"
        />
        <div className="max-w-3xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <div key={step.n} className="relative flex gap-6 pb-10 last:pb-0">
              {i < steps.length - 1 && (
                <div className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-border-strong" aria-hidden />
              )}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-data/40 bg-data/10 font-mono text-xs text-data">
                {step.n}
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function AISection() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SectionHeader
            eyebrow="IA aplicada"
            title="Inteligência onde a operação gera dado: nas conversas."
            lead="Não prometemos automação milagrosa. Entregamos apoio à decisão com interpretação comportamental e aprendizado contínuo — sempre com contexto auditável."
          />
          <div className="rounded-xl border border-border bg-bg-secondary p-6 space-y-4">
            <div>
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">O que fazemos</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>· Refinar priorização a partir de padrões reais de conversa</li>
                <li>· Destacar sinais de intenção e risco de esfriamento</li>
                <li>· Manter trilha de contexto para revisão humana</li>
                <li>· Separar ambientes de experimentação e produção</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">O que não vendemos</p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>· Chatbot genérico que substitui o vendedor</li>
                <li>· IA sem governança ou sem ligação com a operação</li>
                <li>· Promessas de fechamento automático</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function RealEstateSection() {
  return (
    <Section alt>
      <Container>
        <SectionHeader
          eyebrow="Imobiliárias"
          title="Operação comercial imobiliária exige timing — não só cadastro."
          lead="Plantão, visitas, unidades, corretores e follow-up pós-visita. O Salefast foi pensado para operações que vivem no WhatsApp e precisam priorizar intenção real."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'WhatsApp & plantão', desc: 'Fila viva por corretor e empreendimento.' },
            { label: 'Visitas & follow-up', desc: 'Sinais pós-visita e retorno de proposta.' },
            { label: 'Leads & unidades', desc: 'Contexto por tipologia e estágio do funil.' },
            { label: 'Intenção de compra', desc: 'Score comportamental, não só origem do lead.' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-bg-primary p-5">
              <p className="text-sm font-semibold text-text-primary">{item.label}</p>
              <p className="mt-2 text-xs text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="primary" href="/solucoes">
            Ver soluções
          </Button>
          <Button variant="secondary" href={PRODUCT.siteUrl} external>
            Demo no {PORTAL_LABELS.salefastSite}
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export function InftecInstitutionalSection() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <SectionHeader
            eyebrow="Quem é a INFTEC"
            title="Empresa de tecnologia que constrói plataformas de inteligência operacional."
            lead={COMPANY.positioning}
          />
          <div className="space-y-6">
            <p className="text-sm text-text-secondary leading-relaxed">
              O {PRODUCT.name} não é a empresa — é a{' '}
              <strong className="text-text-primary font-medium">primeira plataforma</strong> da INFTEC: foco em operações
              comerciais conversacionais, onde timing, contexto e comportamento definem receita.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Construímos software proprietário com engenharia .NET, arquitetura orientada a eventos e observabilidade —
              IA aplicada onde a operação gera dado, com governança e trilha auditável. Não implementamos projetos por
              escopo: operamos produto SaaS.
            </p>
            <ul className="grid sm:grid-cols-1 gap-3 text-sm text-text-secondary">
              <li className="flex gap-2">
                <span className="text-data font-mono text-xs">→</span>
                {COMPANY.siteUrl.replace('https://', '')} — site institucional
              </li>
              <li className="flex gap-2">
                <span className="text-data font-mono text-xs">→</span>
                {COMPANY.portalUrl.replace('https://', '')} — {PORTAL_LABELS.inftecPortal} (administração)
              </li>
              <li className="flex gap-2">
                <span className="text-data font-mono text-xs">→</span>
                {PRODUCT.siteUrl.replace('https://', '')} — {PORTAL_LABELS.salefastSite}
              </li>
              <li className="flex gap-2">
                <span className="text-data font-mono text-xs">→</span>
                {PRODUCT.appUrl.replace('https://', '')} — {PORTAL_LABELS.salefastApp} (clientes)
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="secondary" href="/empresa">
                A empresa
              </Button>
              <Button variant="ghost" href={COMPANY.portalUrl} external>
                {PORTAL_LABELS.inftecPortal}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function SecurityTeaserSection() {
  return (
    <Section>
      <Container>
        <div className="rounded-2xl border border-border-strong bg-bg-secondary p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <SectionHeader
              eyebrow="Segurança e confiança"
              title="Privacidade e governança para quem confia na INFTEC."
              lead="LGPD, segurança da informação e transparência institucional — base para operar produtos SaaS com responsabilidade."
            />
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-text-secondary">
              {['LGPD e privacidade', 'Segurança e gestão de acesso', 'Transparência com clientes', 'Resposta a incidentes', 'Governança do ecossistema', 'Políticas publicadas no site institucional'].map(
                (t) => (
                  <li key={t} className="flex gap-2 items-start">
                    <span className="text-data font-mono text-xs mt-0.5">✓</span>
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mt-8">
            <Button variant="secondary" href="/seguranca">
              Acessar central de segurança
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function FinalCTASection() {
  return (
    <Section alt>
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance">
            Fale com a INFTEC.
          </h2>
          <p className="mt-4 text-text-secondary">
            Parcerias, governança, privacidade, segurança e assuntos corporativos. Cada produto do portfólio mantém
            canais comerciais e operacionais em domínio próprio.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="primary" href="/contato">
              Contato institucional
            </Button>
            <Button variant="secondary" href="/ecossistema">
              Mapa do ecossistema
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
