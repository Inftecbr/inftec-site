import { NavLink } from 'react-router-dom'
import { PORTAL_NAV_GROUPS } from '../../../config/portalNavigation'

type PortalNavListProps = {
  onItemClick?: () => void
  className?: string
  collapsed?: boolean
}

export default function PortalNavList({ onItemClick, className = '', collapsed }: PortalNavListProps) {
  return (
    <nav className={`flex flex-col gap-4 ${className}`} aria-label="Portal INFTEC">
      {PORTAL_NAV_GROUPS.map((group, groupIndex) => (
        <div
          key={group.id}
          className={collapsed && groupIndex > 0 ? 'pt-3 border-t border-border/60' : undefined}
        >
          {!collapsed ? (
            <p className="px-3 mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
              {group.label}
            </p>
          ) : null}
          <ul className="space-y-0.5">
            {group.items.map(({ to, label, shortLabel }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/app/dashboard'}
                  onClick={onItemClick}
                  title={collapsed ? label : undefined}
                  aria-label={collapsed ? label : undefined}
                  className={({ isActive }) =>
                    [
                      'block rounded-lg portal-nav-link text-sm transition-colors border border-transparent min-w-0',
                      collapsed ? 'text-center text-xs font-medium tracking-tight' : 'truncate',
                      isActive
                        ? 'bg-bg-surface text-text-primary font-medium border-border-strong'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary/80',
                    ].join(' ')
                  }
                >
                  {collapsed ? shortLabel : label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
