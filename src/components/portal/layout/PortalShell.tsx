import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { portalQueryClient } from '../../../portal/query/client'
import { PORTAL_SIDEBAR_COLLAPSED_WIDTH, PORTAL_SIDEBAR_WIDTH } from '../../../config/portalNavigation'
import { ConsolePreferencesProvider } from '../../../features/console-preferences/ConsolePreferencesContext'
import { PortalToastProvider } from '../feedback/PortalToastProvider'
import PortalSidebar from './PortalSidebar'
import PortalTopbar from './PortalTopbar'
import PortalMobileDrawer from './PortalMobileDrawer'

const COLLAPSE_KEY = 'inftec-portal-sidebar-collapsed'

function PortalShellLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem(COLLAPSE_KEY) === '1')

  useEffect(() => {
    localStorage.setItem(COLLAPSE_KEY, collapsed ? '1' : '0')
  }, [collapsed])

  const sidebarWidth = collapsed ? PORTAL_SIDEBAR_COLLAPSED_WIDTH : PORTAL_SIDEBAR_WIDTH

  return (
    <div
      className="min-h-screen w-full min-w-0 bg-bg-deep"
      style={{ ['--portal-sidebar' as string]: `${sidebarWidth}px` }}
    >
      <PortalTopbar onMenuClick={() => setMobileOpen(true)} />
      <PortalMobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <PortalSidebar collapsed={collapsed} onToggleCollapse={() => setCollapsed((v) => !v)} />
      <main className="w-full min-h-screen pt-16 lg:pl-[var(--portal-sidebar)]">
        <div className="portal-main-shell max-w-[1360px] w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default function PortalShell() {
  return (
    <QueryClientProvider client={portalQueryClient}>
      <ConsolePreferencesProvider>
        <PortalToastProvider>
          <PortalShellLayout />
        </PortalToastProvider>
      </ConsolePreferencesProvider>
    </QueryClientProvider>
  )
}
