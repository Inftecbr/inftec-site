import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { LegalLayout } from '../components/LegalLayout'
import { COMPANY } from '../lib/constants'

export default function CookiesPage() {
  return (
    <>
      <PageMeta
        title="Política de Cookies | INFTEC"
        description="Como a INFTEC utiliza cookies e tecnologias similares no site institucional."
        path="/cookies"
      />
      <LegalLayout title="Política de Cookies" updated="24 de maio de 2026">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-text-primary">1. O que são cookies</h2>
          <p>
            Cookies são arquivos armazenados no navegador para lembrar preferências, medir uso ou manter sessões. Tecnologias
            similares incluem local storage e pixels, quando aplicável.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">2. Cookies que utilizamos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-text-primary">Essenciais:</strong> necessários ao funcionamento do site e preferências
              básicas.
            </li>
            <li>
              <strong className="text-text-primary">Analíticos:</strong> podem ser utilizados para entender tráfego e
              melhorar conteúdo (implementação conforme banner de consentimento).
            </li>
          </ul>
          <p className="text-sm text-text-muted">
            A plataforma Salefast em app.salefast.com.br possui política própria de cookies/sessão para usuários autenticados.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">3. Gestão</h2>
          <p>
            Você pode gerenciar cookies nas configurações do navegador. A desativação de cookies essenciais pode afetar
            funcionalidades.
          </p>
        </section>

        <section className="space-y-4 mt-10">
          <h2 className="text-lg font-semibold text-text-primary">4. Contato</h2>
          <p>
            {COMPANY.privacyEmail} — consulte também a{' '}
            <Link to="/privacidade" className="text-data">
              Política de Privacidade
            </Link>
            .
          </p>
        </section>
      </LegalLayout>
    </>
  )
}
