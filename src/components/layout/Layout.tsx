import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MobileStickyCTA from './MobileStickyCTA'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col pt-[72px] pb-16 lg:pb-0">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  )
}
