import { Navigate, Route } from 'react-router-dom'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import PortalLayout from '../pages/portal/PortalLayout'
import PortalDashboardPage from '../pages/portal/PortalDashboardPage'
import PortalUsersPage from '../pages/portal/PortalUsersPage'
import PortalTenantsPage from '../pages/portal/PortalTenantsPage'
import PortalTenantDetailPage from '../pages/portal/PortalTenantDetailPage'
import PortalPlansPage from '../pages/portal/PortalPlansPage'
import PortalFeaturesPage from '../pages/portal/PortalFeaturesPage'
import PortalBillingPage from '../pages/portal/PortalBillingPage'
import PortalIntegrationsPage from '../pages/portal/PortalIntegrationsPage'
import PortalDiagnosticsPage from '../pages/portal/PortalDiagnosticsPage'
import PortalSettingsPage from '../pages/portal/PortalSettingsPage'

export function portalRoutes() {
  return (
    <>
      <Route path="/app" element={<ProtectedRoute />}>
        <Route element={<PortalLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<PortalDashboardPage />} />
          <Route path="users" element={<PortalUsersPage />} />
          <Route path="tenants" element={<PortalTenantsPage />} />
          <Route path="tenants/:tenantId" element={<PortalTenantDetailPage />} />
          <Route path="plans" element={<PortalPlansPage />} />
          <Route path="features" element={<PortalFeaturesPage />} />
          <Route path="billing" element={<PortalBillingPage />} />
          <Route path="subscriptions" element={<Navigate to="/app/tenants" replace />} />
          <Route path="integrations" element={<PortalIntegrationsPage />} />
          <Route path="diagnostics" element={<PortalDiagnosticsPage />} />
          <Route path="settings" element={<PortalSettingsPage />} />
        </Route>
      </Route>
    </>
  )
}
