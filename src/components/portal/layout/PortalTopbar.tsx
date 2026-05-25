import { Link } from 'react-router-dom'
import UserMenu from '../../auth/UserMenu'
import { getAppEnvironment } from '../../../lib/env'
import { runtimeEnv } from '../../../lib/envConfig'

type PortalTopbarProps = {
  onMenuClick?: () => void
}

export default function PortalTopbar({ onMenuClick }: PortalTopbarProps) {
  const env = getAppEnvironment()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border flex items-center gap-2 sm:gap-3 px-3 sm:px-5 bg-bg-deep/95 backdrop-blur-md">
      <button
        type="button"
        className="lg:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-text-primary hover:bg-bg-secondary"
        aria-label="Abrir menu"
        onClick={onMenuClick}
      >
        <span className="sr-only">Menu</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <Link to="/app/dashboard" className="flex items-center gap-2 shrink-0 min-w-0">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent text-xs font-bold shrink-0">
          IN
        </span>
        <span className="text-sm font-semibold text-text-primary truncate hidden sm:inline">
          Portal INFTEC
        </span>
      </Link>

      <span
        className={`inline-flex rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide shrink-0 ${
          env === 'local' ? 'bg-data/10 text-data ring-1 ring-data/20' : 'bg-accent/10 text-accent ring-1 ring-accent/20'
        }`}
      >
        {env === 'local' ? 'Local' : 'Prod'}
      </span>

      {runtimeEnv.apiBaseUrl && getAppEnvironment() === 'local' ? (
        <span
          className="hidden xl:inline font-mono text-[10px] text-text-muted truncate max-w-[200px] shrink-0"
          title={runtimeEnv.apiBaseUrl}
        >
          API · {runtimeEnv.apiBaseUrl.replace(/^https?:\/\//, '')}
        </span>
      ) : null}

      <div className="ml-auto flex items-center gap-2 sm:gap-4 shrink-0">
        <UserMenu />
        <Link
          to="/"
          className="text-xs text-text-muted hover:text-text-primary whitespace-nowrap"
          title="Site institucional"
        >
          <span className="hidden sm:inline">Site institucional</span>
          <span className="sm:hidden text-lg leading-none" aria-hidden>
            ↗
          </span>
          <span className="sr-only sm:hidden">Site institucional</span>
        </Link>
      </div>
    </header>
  )
}
