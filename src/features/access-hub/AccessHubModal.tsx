import { AnimatePresence, motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useAccessHub } from './AccessHubContext'
import { ACCESS_HUB_CARDS } from './accessHubCards'
import { useAuth } from '../../components/auth/AuthProvider'

function AccessCard({
  title,
  description,
  href,
  external,
  domainLabel,
  portalLogin,
  onNavigate,
}: (typeof ACCESS_HUB_CARDS)[0] & { onNavigate: () => void }) {
  const { loginToPortal, isAuthenticated, isConfigured } = useAuth()
  const navigate = useNavigate()
  const className =
    'block rounded-xl border border-border bg-bg-secondary p-5 hover:border-border-strong transition-colors text-left w-full'

  const inner = (
    <>
      <p className="text-sm font-semibold text-text-primary">{title}</p>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">{description}</p>
      <p className="mt-3 font-mono text-xs text-data">{domainLabel}</p>
      <p className="mt-1 text-xs text-text-muted">
        {external ? 'Abre em novo domínio' : portalLogin ? 'Login Auth0 · rota /app' : 'Mesmo site · rota /app'}
      </p>
    </>
  )

  if (portalLogin) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          onNavigate()
          if (!isConfigured) {
            navigate('/app')
            return
          }
          if (isAuthenticated) {
            navigate('/app/dashboard')
            return
          }
          loginToPortal()
        }}
      >
        {inner}
      </button>
    )
  }

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={onNavigate}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={href} className={className} onClick={onNavigate}>
      {inner}
    </Link>
  )
}

export default function AccessHubModal() {
  const { isOpen, close } = useAccessHub()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Fechar"
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="access-hub-title"
            className="fixed z-[101] left-4 right-4 top-[10vh] mx-auto max-w-lg rounded-2xl border border-border-strong bg-bg-primary p-6 shadow-2xl"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 id="access-hub-title" className="text-lg font-semibold">
                  Acesso à plataforma
                </h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Universos distintos — escolha o ambiente correto. Logins não são compartilhados entre superfícies.
                </p>
              </div>
              <button type="button" className="text-text-muted hover:text-text-primary p-1" onClick={close} aria-label="Fechar modal">
                ✕
              </button>
            </div>
            <div className="space-y-3">
              {ACCESS_HUB_CARDS.map((card) => (
                <AccessCard key={card.id} {...card} onNavigate={close} />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
