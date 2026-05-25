import { isApiError } from '../lib/api/apiError'
import type { AuthorizedApiClient } from '../lib/api/createAuthorizedClient'
import { listUsers } from '../services/inftecPortal/usersService'
import { listPlans } from '../services/inftecPortal/plansService'

export type PortalApiProbeResult =
  | { ok: true; endpoint: string; httpStatus: number }
  | { ok: false; kind: 'auth' | 'network' | 'http' | 'none'; message: string; endpoint?: string; httpStatus?: number }

/** GET /usuarios → fallback GET /plans (INFTEC Portal, Bearer). */
export async function probePortalApi(client: AuthorizedApiClient): Promise<PortalApiProbeResult> {
  const attempts = [
    { label: 'GET /usuarios', run: () => listUsers(client) },
    { label: 'GET /plans', run: () => listPlans(client) },
  ]

  for (const attempt of attempts) {
    try {
      const result = await attempt.run()
      return { ok: true, endpoint: attempt.label, httpStatus: result.status }
    } catch (error) {
      if (isApiError(error) && error.kind === 'not_found' && attempt.label.startsWith('GET /usuarios')) {
        continue
      }
      if (isApiError(error) && (error.kind === 'unauthorized' || error.kind === 'forbidden')) {
        return {
          ok: false,
          kind: 'auth',
          message:
            'Login funcionando, mas token/audience/scopes ainda não autorizam o Portal INFTEC.',
          endpoint: attempt.label,
          httpStatus: error.status,
        }
      }
      if (isApiError(error) && error.kind === 'network') {
        return {
          ok: false,
          kind: 'network',
          message: error.friendlyMessage,
          endpoint: attempt.label,
        }
      }
      if (isApiError(error)) {
        return {
          ok: false,
          kind: 'http',
          message: error.friendlyMessage,
          endpoint: attempt.label,
          httpStatus: error.status,
        }
      }
      return {
        ok: false,
        kind: 'http',
        message: error instanceof Error ? error.message : 'Erro desconhecido',
        endpoint: attempt.label,
      }
    }
  }

  return {
    ok: false,
    kind: 'none',
    message: 'Nenhum endpoint respondeu com sucesso (GET /usuarios | GET /plans).',
  }
}
