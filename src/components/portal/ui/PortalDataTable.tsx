import PortalEmptyState from './PortalEmptyState'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export default function PortalDataTable({ data }: { data: unknown }) {
  if (data === null || data === undefined) {
    return <PortalEmptyState message="A API respondeu sem conteúdo." />
  }

  const rows = extractRows(data)
  if (rows.length === 0) {
    return <PortalEmptyState message="Nenhum registro retornado pela API." />
  }

  const first = rows[0]
  if (isRecord(first)) {
    const keys = Object.keys(first).slice(0, 8)
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-bg-secondary/80 text-text-muted text-xs uppercase">
            <tr>
              {keys.map((k) => (
                <th key={k} className="px-4 py-3 font-medium">
                  {k}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.slice(0, 50).map((row, i) =>
              isRecord(row) ? (
                <tr key={i} className="hover:bg-bg-secondary/40">
                  {keys.map((k) => (
                    <td key={k} className="px-4 py-3 text-text-secondary font-mono text-xs max-w-[220px] truncate">
                      {formatCell(row[k])}
                    </td>
                  ))}
                </tr>
              ) : null
            )}
          </tbody>
        </table>
        {rows.length > 50 ? (
          <p className="px-4 py-3 text-xs text-text-muted border-t border-border">
            Exibindo 50 de {rows.length} registros.
          </p>
        ) : null}
      </div>
    )
  }

  return (
    <pre className="overflow-x-auto p-4 text-xs text-text-secondary font-mono">{JSON.stringify(data, null, 2)}</pre>
  )
}

function extractRows(data: unknown): unknown[] {
  if (Array.isArray(data)) return data
  if (isRecord(data)) {
    for (const key of ['items', 'data', 'results', 'usuarios', 'plans', 'invoices', 'features']) {
      const nested = data[key]
      if (Array.isArray(nested)) return nested
    }
  }
  return [data]
}

function formatCell(value: unknown): string {
  if (value === null || value === undefined) return '—'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}
