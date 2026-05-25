import type { ReactNode } from 'react'
import Button from '../../ui/Button'

type PortalPageToolbarProps = {
  search?: string
  onSearchChange?: (value: string) => void
  searchPlaceholder?: string
  primaryAction?: ReactNode
  secondaryActions?: ReactNode
}

export default function PortalPageToolbar({
  search,
  onSearchChange,
  searchPlaceholder = 'Buscar…',
  primaryAction,
  secondaryActions,
}: PortalPageToolbarProps) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {onSearchChange ? (
        <input
          type="search"
          value={search ?? ''}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full sm:max-w-xs rounded-lg border border-border bg-bg-secondary px-3 py-2 text-sm text-text-primary"
        />
      ) : (
        <div />
      )}
      <div className="flex flex-wrap gap-2 justify-end">
        {secondaryActions}
        {primaryAction}
      </div>
    </div>
  )
}

export function PortalActionButton({
  children,
  onClick,
  variant = 'secondary',
  disabled,
}: {
  children: ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
}) {
  return (
    <Button variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}
