type PortalEmptyStateProps = {
  title?: string
  message: string
}

export default function PortalEmptyState({ title = 'Nenhum dado', message }: PortalEmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-border-strong bg-bg-secondary/30 px-6 py-14 text-center">
      <p className="text-sm font-medium text-text-primary">{title}</p>
      <p className="mt-2 text-sm text-text-secondary max-w-md mx-auto">{message}</p>
    </div>
  )
}
