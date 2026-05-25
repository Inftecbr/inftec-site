import { useAuth } from './AuthProvider'

type LogoutButtonProps = {
  className?: string
}

export default function LogoutButton({ className }: LogoutButtonProps) {
  const { logout } = useAuth()

  return (
    <button type="button" className={className} onClick={() => logout()}>
      Sair
    </button>
  )
}
