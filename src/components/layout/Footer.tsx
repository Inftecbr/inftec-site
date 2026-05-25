import { Link } from 'react-router-dom'
import { COMPANY, PRODUCT, PORTAL_LABELS } from '../../lib/constants'
import { DOMAINS } from '../../config/domains'

const legalLinks = [
  { to: '/privacidade', label: 'Privacidade' },
  { to: '/termos', label: 'Termos de uso' },
  { to: '/cookies', label: 'Cookies' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold text-text-primary">{COMPANY.legalName}</p>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{COMPANY.shortDescription}</p>
            <p className="mt-4 text-xs text-text-muted">CNPJ {COMPANY.cnpj}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">INFTEC</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/empresa" className="hover:text-text-primary">Empresa</Link></li>
              <li><Link to="/plataforma" className="hover:text-text-primary">Plataforma</Link></li>
              <li><Link to="/seguranca" className="hover:text-text-primary">Segurança</Link></li>
              <li><Link to="/contato" className="hover:text-text-primary">Contato</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">Produtos</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/produto" className="hover:text-text-primary">Salefast (visão INFTEC)</Link></li>
              <li>
                <a href={PRODUCT.siteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">
                  {PORTAL_LABELS.salefastSite} ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">Portais</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link to={DOMAINS.INFTEC_PORTAL_PATH} className="hover:text-text-primary">
                  {PORTAL_LABELS.inftecPortal}
                </Link>
              </li>
              <li>
                <a href={PRODUCT.appUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">
                  {PORTAL_LABELS.salefastApp} ↗
                </a>
              </li>
              <li>
                <a href={DOMAINS.DOCS_PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">
                  {PORTAL_LABELS.apiPlatform} ↗
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

        <div className="mt-12 pt-8 border-t border-border text-xs text-text-muted flex flex-col sm:flex-row sm:justify-between gap-2">
          <p>© {new Date().getFullYear()} {COMPANY.name}</p>
          <p className="font-mono">Hub · {DOMAINS.INFTEC_SITE_URL.replace('https://', '')} · {DOMAINS.INFTEC_PORTAL_PATH}</p>
        </div>
      </div>
    </footer>
  )
}
