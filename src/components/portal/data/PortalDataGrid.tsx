import type { ReactNode } from 'react'
import PortalEmptyState from '../ui/PortalEmptyState'

export type PortalColumn<T> = {
  id: string
  header: string
  render: (row: T) => ReactNode
  className?: string
}

type PortalDataGridProps<T> = {
  columns: PortalColumn<T>[]
  rows: T[]
  rowKey: (row: T) => string
  loading?: boolean
  emptyTitle?: string
  emptyMessage?: string
  actions?: (row: T) => ReactNode
}

export default function PortalDataGrid<T>({
  columns,
  rows,
  rowKey,
  loading,
  emptyTitle,
  emptyMessage,
  actions,
}: PortalDataGridProps<T>) {
  if (loading) {
    return (
      <div className="space-y-2 p-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-10 rounded-lg bg-bg-secondary/80 animate-pulse" />
        ))}
      </div>
    )
  }

  if (rows.length === 0) {
    return <PortalEmptyState title={emptyTitle ?? 'Nenhum registro'} message={emptyMessage} />
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-bg-secondary/80 text-text-muted text-xs uppercase">
          <tr>
            {columns.map((col) => (
              <th key={col.id} scope="col" className={`portal-grid-th font-medium ${col.className ?? ''}`}>
                {col.header}
              </th>
            ))}
            {actions ? (
              <th scope="col" className="portal-grid-th font-medium text-right">
                Ações
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={rowKey(row)} className="hover:bg-bg-secondary/40">
              {columns.map((col) => (
                <td key={col.id} className={`portal-grid-td text-text-secondary ${col.className ?? ''}`}>
                  {col.render(row)}
                </td>
              ))}
              {actions ? <td className="portal-grid-td text-right">{actions(row)}</td> : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function PortalStatusBadge({ label, tone }: { label: string; tone: 'success' | 'warning' | 'muted' | 'data' }) {
  const cls =
    tone === 'success'
      ? 'bg-success/10 text-success ring-success/20'
      : tone === 'warning'
        ? 'bg-warning/10 text-warning ring-warning/20'
        : tone === 'data'
          ? 'bg-data/10 text-data ring-data/20'
          : 'bg-bg-secondary text-text-muted ring-border'
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${cls}`}>{label}</span>
  )
}
