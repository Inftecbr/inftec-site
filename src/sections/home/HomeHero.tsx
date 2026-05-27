import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import Button from '../../components/ui/Button'
import { COMPANY, PRODUCT } from '../../lib/constants'

const pillars = [
  {
    title: 'Plataformas SaaS',
    body: 'Produtos proprietários com arquitetura multi-tenant e operação contínua.',
  },
  {
    title: 'Governança e segurança',
    body: 'Controle de acesso, conformidade e engenharia orientada a confiança.',
  },
  {
    title: 'Ecossistema organizado',
    body: 'Superfícies independentes — institucional, produto, portal e developers.',
  },
]

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-bg-deep pb-16 pt-12 md:pt-20 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.12), transparent),
            radial-gradient(ellipse 60% 40% at 100% 0%, rgba(192, 86, 33, 0.08), transparent)`,
        }}
      />
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium tracking-wide text-text-secondary uppercase mb-4">
              {COMPANY.brand} · Software vendor
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight tracking-tight text-balance">
              Tecnologia enterprise para plataformas SaaS e ecossistemas digitais.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
              A {COMPANY.brand} constrói e opera plataformas com foco em governança, segurança e maturidade
              operacional. O Salefast é nosso produto flagship — site e aplicação em domínios próprios.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" href="/empresa">
                Conhecer a INFTEC
              </Button>
              <Button variant="secondary" href={PRODUCT.siteUrl} external>
                Conhecer Salefast ↗
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
            aria-hidden
          >
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-bg-secondary/80 p-5">
                <p className="text-sm font-semibold text-text-primary">{p.title}</p>
                <p className="mt-1 text-sm text-text-secondary">{p.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
