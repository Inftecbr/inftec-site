import { Link } from 'react-router-dom'
import { COMPANY, PRODUCT, PORTAL_LABELS } from '../../lib/constants'
import { DOMAINS } from '../../config/domains'

const legalLinks = [
  { to: '/privacidade', label: 'Privacidade' },
  { to: '/termos', label: 'Termos de uso' },
  { to: '/remocao-de-dados', label: 'Remoção de dados' },
  { to: '/cookies', label: 'Cookies' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold text-text-primary">{COMPANY.legalName}</p>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{COMPANY.shortDescription}</p>
            <p className="mt-4 text-xs text-text-muted">CNPJ {COMPANY.cnpj}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">INFTEC</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/empresa" className="hover:text-text-primary">Empresa</Link></li>
              <li><Link to="/produtos" className="hover:text-text-primary">Produtos</Link></li>
              <li><Link to="/ecossistema" className="hover:text-text-primary">Ecossistema</Link></li>
              <li><Link to="/seguranca" className="hover:text-text-primary">Segurança</Link></li>
              <li><Link to="/contato" className="hover:text-text-primary">Contato</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">Produtos</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link to="/produtos" className="hover:text-text-primary">
                  Portfólio INFTEC
                </Link>
              </li>
              <li>
                <a href={PRODUCT.siteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">
                  {PRODUCT.name} ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              {legalLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-text-primary">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border space-y-3 text-xs text-text-muted">
          <p>
            {PRODUCT.name} é um produto desenvolvido e operado por {COMPANY.legalName}.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <p>© {new Date().getFullYear()} {COMPANY.name}</p>
            <p className="font-mono">{DOMAINS.INFTEC_SITE_URL.replace('https://', '')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
