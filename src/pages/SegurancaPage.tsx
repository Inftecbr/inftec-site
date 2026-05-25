import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { COMPANY } from '../lib/constants'

const topics = [
  {
    title: 'LGPD e privacidade',
    body: 'Tratamento de dados pessoais alinhado à Lei Geral de Proteção de Dados. Controlador: INFTEC Tecnologia Ltda. Canal dedicado: privacidade@inftec.com.br.',
  },
  {
    title: 'Controle de acesso',
    body: 'Autenticação na plataforma, perfis por função e princípio do menor privilégio para ambientes multi-tenant.',
  },
  {
    title: 'Rastreabilidade e auditoria',
    body: 'Eventos operacionais e trilhas de contexto para investigação, conformidade e melhoria contínua da operação.',
  },
  {
    title: 'Arquitetura e confiabilidade',
    body: 'Backend .NET, arquitetura modular orientada a eventos, observabilidade (logs, métricas, tracing) e práticas de engenharia para SaaS crítico.',
  },
  {
    title: 'Resposta a incidentes',
    body: 'Processos de identificação, contenção e comunicação. Contato de segurança: security@inftec.com.br.',
  },
  {
    title: 'Subprocessadores',
    body: 'Uso transparente de provedores de infraestrutura e integrações. Detalhes na Política de Privacidade e contratos enterprise.',
  },
]

export default function SegurancaPage() {
  return (
    <>
      <PageMeta
        title="Segurança e governança — Salefast | INFTEC"
        description="LGPD, controle de acesso, auditoria e arquitetura SaaS séria. Conheça as práticas de segurança da INFTEC e do Salefast."
        path="/seguranca"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Segurança"
            title="Enterprise readiness começa na engenharia — não no rodapé."
            lead="Operações comerciais confiam conversas e dados sensíveis à plataforma. Tratamos segurança, privacidade e governança como requisito de produto."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {topics.map((t) => (
              <article key={t.title} className="rounded-xl border border-border bg-bg-secondary p-6">
                <h3 className="font-semibold text-text-primary">{t.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{t.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Button variant="secondary" href="/privacidade">
              Política de privacidade
            </Button>
            <a href={`mailto:${COMPANY.securityEmail}`} className="text-sm text-data hover:text-data-dim">
              {COMPANY.securityEmail}
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
