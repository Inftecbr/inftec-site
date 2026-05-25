export function getPortalNetworkErrorMessage(baseUrl?: string): string {
  const base = baseUrl?.trim() || import.meta.env.VITE_API_BASE_URL || '(base URL não configurada)'
  const origin = typeof window !== 'undefined' ? window.location.origin : 'esta origem'
  return `Não foi possível acessar a API do Portal INFTEC em ${base}. A API pode estar fora do ar ou bloqueando CORS para ${origin}.`
}
