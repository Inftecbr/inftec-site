import Button from '../ui/Button'
import { useAccessHub } from '../../features/access-hub/AccessHubContext'

export default function MobileStickyCTA() {
  const { open } = useAccessHub()
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border-strong bg-bg-deep/95 backdrop-blur-md p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex gap-2 max-w-lg mx-auto">
        <Button variant="secondary" href="/ecossistema" className="flex-1 text-xs py-2.5 px-2">
          Ecossistema
        </Button>
        <Button variant="primary" className="flex-1 text-xs py-2.5 px-2" onClick={open}>
          Entrar
        </Button>
      </div>
    </div>
  )
}
