import { Navigate } from 'react-router-dom'

/** Mantém URL legada da política de privacidade. */
export default function PrivacidadeExclusaoRedirect() {
  return <Navigate to="/remocao-de-dados" replace />
}
