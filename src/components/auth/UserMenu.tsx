import { useAuth } from './AuthProvider'
import LogoutButton from './LogoutButton'

export default function UserMenu() {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated || !user) return null

  const label = user.email ?? user.name ?? user.sub

  return (
    <div className="flex items-center gap-3">
      {user.picture ? (
        <img src={user.picture} alt="" className="h-8 w-8 rounded-full border border-border" />
      ) : (
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-surface text-xs font-medium text-text-primary"
          aria-hidden
        >
          {label.charAt(0).toUpperCase()}
        </span>
      )}
      <span className="hidden max-w-[200px] truncate text-sm text-text-secondary sm:inline">{label}</span>
      <LogoutButton className="text-xs text-text-muted hover:text-text-primary transition-colors" />
    </div>
  )
}
