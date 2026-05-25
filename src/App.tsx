import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/auth/AuthProvider'
import { AccessHubProvider } from './features/access-hub/AccessHubContext'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AccessHubProvider>
          <AppRoutes />
        </AccessHubProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
