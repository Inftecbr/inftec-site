import PortalNavList from './PortalNavList'
import { PORTAL_SIDEBAR_COLLAPSED_WIDTH, PORTAL_SIDEBAR_WIDTH } from '../../../config/portalNavigation'

type PortalSidebarProps = {
  collapsed: boolean
  onToggleCollapse: () => void
}

export default function PortalSidebar({ collapsed, onToggleCollapse }: PortalSidebarProps) {
  const width = collapsed ? PORTAL_SIDEBAR_COLLAPSED_WIDTH : PORTAL_SIDEBAR_WIDTH

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-16 bottom-0 z-30 flex-col min-h-0 border-r border-border bg-bg-primary transition-[width] duration-200"
      style={{ width }}
      aria-label="Navegação administrativa"
    >
      <div className="portal-sidebar-header border-b border-border shrink-0 flex items-center justify-between gap-2">
        {!collapsed ? (
          <p className="text-[10px] font-mono uppercase tracking-widest text-text-muted truncate">Administração</p>
        ) : null}
        <button
          type="button"
          onClick={onToggleCollapse}
          className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-border text-text-muted hover:text-text-primary hover:bg-bg-secondary"
          aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}
        >
          {collapsed ? '»' : '«'}
        </button>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden portal-sidebar-pad">
        <PortalNavList collapsed={collapsed} />
      </div>
    </aside>
  )
}
