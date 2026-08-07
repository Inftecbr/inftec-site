import PageMeta from '../components/PageMeta'
import Container, { Section, SectionHeader } from '../components/ui/Container'
import Button from '../components/ui/Button'
import { COMPANY, PRODUCT, PORTAL_LABELS, URLS } from '../lib/constants'

export default function EmpresaPage() {
  return (
    <>
      <PageMeta
        title="Empresa — INFTEC Tecnologia"
        description="INFTEC: empresa SaaS, cultura de produto, evolução contínua do portfólio e ecossistema de produtos próprios para o mercado corporativo."
        path="/empresa"
      />
      <Section className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            eyebrow="Empresa"
            title="Empresa SaaS — produtos próprios, evolução contínua."
            lead={COMPANY.positioning}
          />
          <div className="prose-inftec max-w-3xl space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Filosofia</h2>
              <p>
                A INFTEC existe para criar produtos SaaS — identificar problemas relevantes, transformá-los em
                plataformas próprias, operá-las para clientes corporativos e evoluí-las com aprendizado contínuo. O
                modelo de negócio não é desenvolvimento sob encomenda, consultoria por escopo ou venda de horas. Quando
                uma necessidade de cliente beneficia todo o ecossistema de um produto, ela pode entrar no roadmap; o
                produto evolui para todos, não como projeto isolado.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Quem é a INFTEC</h2>
              <p>
                {COMPANY.legalName} (CNPJ {COMPANY.cnpj}) é a empresa SaaS por trás do portfólio. {COMPANY.brand} é a
                marca que clientes, parceiros e investidores associam à operação dos produtos — independente de cada
                nome comercial (como {PRODUCT.name}).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Missão</h2>
              <p>
                Criar e operar produtos SaaS que geram valor mensurável para empresas, com qualidade de experiência,
                confiança e melhoria contínua orientada ao uso real.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Visão</h2>
              <p>
                Ser reconhecida como empresa SaaS brasileira de referência em produtos corporativos — com portfólio
                crescente sob a mesma INFTEC, começando por {PRODUCT.name} e abrindo espaço para novos produtos quando
                a tese de mercado for clara.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Cultura de produto</h2>
              <p>
                Decisões priorizam o que fortalece o produto para todos os clientes: roadmap compartilhado, feedback
                estruturado, operação SaaS contínua e inovação orientada a problemas — não entregas pontuais por
                contrato customizado. A excelência técnica existe para sustentar produtos de longo prazo; não é a
                oferta comercial da empresa.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Compromissos</h2>
              <ul className="space-y-2 text-sm list-disc pl-5">
                <li>
                  <strong className="text-text-primary font-medium">Qualidade:</strong> produtos estáveis, experiência
                  clara e evolução responsável do que já está em produção.
                </li>
                <li>
                  <strong className="text-text-primary font-medium">Inovação:</strong> capacidades novas quando
                  resolvem problemas reais do mercado e do ecossistema — não modismos desconectados do produto.
                </li>
                <li>
                  <strong className="text-text-primary font-medium">Confiança:</strong> privacidade, segurança e
                  transparência institucional (
                  <a href="/seguranca" className="text-data hover:underline">
                    central de segurança
                  </a>
                  ).
                </li>
                <li>
                  <strong className="text-text-primary font-medium">Portfólio SaaS:</strong> apenas produtos próprios
                  operados pela INFTEC — sem consultoria, fábrica de software ou outsourcing como motor do negócio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Produtos no ecossistema</h2>
              <p>
                {PRODUCT.name} é o primeiro produto SaaS do portfólio, com {PORTAL_LABELS.salefastSite} e{' '}
                {PORTAL_LABELS.salefastApp}. Novos produtos seguirão a mesma lógica: marca INFTEC no institucional,
                identidade e jornada comercial no site de cada linha.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">Ecossistema</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-mono text-data text-xs">{URLS.inftecSite.replace('https://', '')}</span> — empresa
                  SaaS (institucional)
                </li>
                <li>
                  <span className="font-mono text-data text-xs">{URLS.inftecPortal.replace('https://', '')}</span> —{' '}
                  {PORTAL_LABELS.inftecPortal}
                </li>
                <li>
                  <span className="font-mono text-data text-xs">{URLS.salefastSite.replace('https://', '')}</span> —
                  produto {PRODUCT.name}
                </li>
                <li>
                  <span className="font-mono text-data text-xs">{URLS.salefastApp.replace('https://', '')}</span> —
                  aplicação SaaS do produto
                </li>
              </ul>
              <p className="mt-3 text-sm">
                Mapa completo em{' '}
                <a href="/ecossistema" className="text-data hover:underline">
                  Ecossistema
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" href="/produtos">
              Produtos SaaS
            </Button>
            <Button variant="secondary" href="/contato">
              Contato institucional
            </Button>
            <Button variant="ghost" href="/ecossistema">
              Ecossistema
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
