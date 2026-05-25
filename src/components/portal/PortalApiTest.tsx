import { useState } from 'react'
import Button from '../ui/Button'
import { usePortalApiClient } from '../../hooks/usePortalApiClient'
import { probePortalApi } from '../../hooks/usePortalApiProbe'

type Props = {
  buttonLabel?: string
  variant?: 'primary' | 'secondary'
}

export default function PortalApiTest({ buttonLabel = 'Testar API Portal', variant = 'primary' }: Props) {
  const client = usePortalApiClient()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; message: string; detail?: string } | null>(null)

  async function run() {
    setLoading(true)
    setResult(null)
    const probe = await probePortalApi(client)
    setLoading(false)
    if (probe.ok) {
      setResult({
        ok: true,
        message: 'Portal INFTEC autenticado e API autorizada.',
        detail: `${probe.endpoint} — HTTP ${probe.httpStatus}`,
      })
    } else {
      setResult({
        ok: false,
        message: probe.message,
        detail: probe.endpoint ? `${probe.endpoint}${probe.httpStatus ? ` — HTTP ${probe.httpStatus}` : ''}` : undefined,
      })
    }
  }

  return (
    <div>
      <p className="text-sm text-text-secondary">
        <span className="font-mono text-xs">GET /usuarios</span> com fallback{' '}
        <span className="font-mono text-xs">GET /plans</span> — Bearer Auth0.
      </p>
      <Button variant={variant} className="mt-4" disabled={loading} onClick={() => void run()}>
        {loading ? 'Testando…' : buttonLabel}
      </Button>
      {result ? (
        <div
          className={`mt-4 rounded-lg border p-4 text-sm ${
            result.ok ? 'border-success/30 bg-success/5' : 'border-warning/30 bg-warning/5'
          }`}
        >
          <p className={`font-medium ${result.ok ? 'text-success' : 'text-warning'}`}>{result.message}</p>
          {result.detail ? <p className="mt-1 font-mono text-xs text-text-muted">{result.detail}</p> : null}
        </div>
      ) : null}
    </div>
  )
}
