import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { COMPANY } from '../lib/constants'

const topics = [
  {
    title: 'LGPD e privacidade',
    body: 'Tratamento de dados pessoais alinhado à LGPD. Controlador corporativo: INFTEC Tecnologia Ltda. Canal: privacidade@inftec.com.br — sem certificações declaradas indevidamente.',
  },
  {
    title: 'Controle de acesso',
    body: 'Autenticação e permissões nos produtos SaaS e portais do ecossistema, com segregação por organização cliente quando aplicável.',
  },
  {
    title: 'Transparência',
    body: 'Políticas publicadas, canais de contato dedicados e comunicação proporcional em incidentes relevantes.',
  },
  {
    title: 'Operação confiável',
    body: 'Compromisso com disponibilidade e evolução responsável dos produtos operados pela INFTEC — detalhes contratuais conforme plano e produto.',
  },
  {
    title: 'Resposta a incidentes',
    body: 'Processos de identificação, contenção e comunicação. Contato: security@inftec.com.br.',
  },
  {
    title: 'Relação com clientes',
    body: 'Confiança para operar SaaS B2B: privacidade, termos e acordos enterprise conforme Política de Privacidade e contratos — sem métricas ou logos inventados.',
  },
]

export default function SegurancaPage() {
  return (
    <>
      <PageMeta
        title="Segurança e confiança — INFTEC"
        description="Confiança institucional da INFTEC: LGPD, privacidade, segurança da informação e governança para operar produtos SaaS."
        path="/seguranca"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Segurança"
            title="Confiança para operar produtos SaaS."
            lead="Clientes e parceiros precisam confiar na empresa por trás do portfólio. Esta página resume compromissos institucionais — não substitui contratos ou políticas completas."
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
