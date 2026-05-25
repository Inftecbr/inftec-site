/** Badge para páginas técnicas (ex.: Diagnóstico) — não usar variant placeholder. */
export default function PortalToolBadge({ label = 'Ferramenta técnica' }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ring-1 bg-data/10 text-data ring-data/25">
      {label}
    </span>
  )
}
