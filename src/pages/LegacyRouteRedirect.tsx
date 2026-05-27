import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { DOMAINS } from '../config/domains'

type Props =
  | { kind: 'internal'; to: string }
  | { kind: 'external'; url: string }

export default function LegacyRouteRedirect(props: Props) {
  if (props.kind === 'internal') {
    return <Navigate to={props.to} replace />
  }

  useEffect(() => {
    window.location.replace(props.url)
  }, [props.url])

  return (
    <div className="py-24 text-center text-sm text-text-muted">
      Redirecionando para {props.url.replace('https://', '')}…
    </div>
  )
}

export function SolucoesLegacyRedirect() {
  return <LegacyRouteRedirect kind="external" url={DOMAINS.SALEFAST_SITE_URL} />
}
