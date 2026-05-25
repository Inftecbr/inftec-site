import { Routes, Route } from 'react-router-dom'
import PublicLayout from '../components/layout/PublicLayout'
import { publicRoutes } from './public.routes'
import { portalRoutes } from './portal.routes'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>{publicRoutes()}</Route>
      {portalRoutes()}
    </Routes>
  )
}
