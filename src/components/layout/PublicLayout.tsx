import { Outlet } from 'react-router-dom'
import SiteHeader from '../navigation/SiteHeader'
import Footer from '../layout/Footer'
import MobileStickyCTA from '../layout/MobileStickyCTA'
import AccessHubModal from '../../features/access-hub/AccessHubModal'

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col pt-[72px] pb-16 lg:pb-0">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
      <AccessHubModal />
    </div>
  )
}
