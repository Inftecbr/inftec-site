export default function PortalLoadingState({ label = 'Carregando…' }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-secondary/50 px-6 py-12">
      <div className="h-8 w-8 rounded-full border-2 border-border-strong border-t-data animate-spin" aria-hidden />
      <p className="text-sm text-text-secondary">{label}</p>
    </div>
  )
}
