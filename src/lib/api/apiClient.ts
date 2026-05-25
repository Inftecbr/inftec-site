import { appEnv } from '../env'
import { ApiError } from './apiError'
import { getPortalNetworkErrorMessage } from './portalNetworkError'

export type ApiClientOptions = {
  getAccessToken: () => Promise<string>
}

function resolveUrl(path: string): string {
  const base = appEnv.apiBaseUrl
  if (!base) {
    throw new ApiError({
      kind: 'configuration',
      message: 'VITE_API_BASE_URL is not set',
      friendlyMessage: 'Configure VITE_API_BASE_URL no ambiente (ex.: http://localhost:5000).',
    })
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}

async function parseJsonBody(response: Response): Promise<unknown> {
  const text = await response.text()
  if (!text) return undefined
  try {
    return JSON.parse(text) as unknown
  } catch {
    throw new ApiError({
      kind: 'invalid_json',
      message: 'Invalid JSON in API response',
      friendlyMessage: 'A API retornou uma resposta que não é JSON válido.',
      status: response.status,
    })
  }
}

function mapHttpError(status: number, body: unknown): ApiError {
  if (status === 401) {
    return new ApiError({
      kind: 'unauthorized',
      message: 'Unauthorized',
      friendlyMessage:
        'Login funcionando, mas token/scopes/audience ainda não autorizam a API.',
      status,
      body,
    })
  }
  if (status === 403) {
    return new ApiError({
      kind: 'forbidden',
      message: 'Forbidden',
      friendlyMessage:
        'Login funcionando, mas token/scopes/audience ainda não autorizam a API.',
      status,
      body,
    })
  }
  if (status === 404) {
    return new ApiError({
      kind: 'not_found',
      message: 'Not found',
      friendlyMessage:
        'Endpoint não encontrado na API local. Verifique se o backend em execução possui o Swagger INFTEC Portal atualizado.',
      status,
      body,
    })
  }
  if (status >= 500) {
    return new ApiError({
      kind: 'server_error',
      message: `HTTP ${status}`,
      friendlyMessage:
        'A API respondeu com erro interno. O Portal está autenticado e conseguiu chamar a rota, mas o backend falhou.',
      status,
      body,
    })
  }
  return new ApiError({
    kind: 'http',
    message: `HTTP ${status}`,
    friendlyMessage: `Erro na API (HTTP ${status}).`,
    status,
    body,
  })
}

async function request<T>(
  method: string,
  path: string,
  getAccessToken: () => Promise<string>,
  body?: unknown
): Promise<{ data: T; status: number }> {
  let url: string
  try {
    url = resolveUrl(path)
  } catch (error) {
    throw error
  }

  let token: string
  try {
    token = await getAccessToken()
  } catch (error) {
    throw new ApiError({
      kind: 'unauthorized',
      message: error instanceof Error ? error.message : 'Token unavailable',
      friendlyMessage:
        'Não foi possível obter o token de acesso. Faça login novamente.',
    })
  }

  const headers: Record<string, string> = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }
  if (body !== undefined) {
    headers['Content-Type'] = 'application/json'
  }

  let response: Response
  try {
    response = await fetch(url, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new ApiError({
      kind: 'network',
      message: 'Network error',
      friendlyMessage: getPortalNetworkErrorMessage(appEnv.apiBaseUrl),
    })
  }

  const parsed = await parseJsonBody(response)

  if (!response.ok) {
    throw mapHttpError(response.status, parsed)
  }

  return { data: parsed as T, status: response.status }
}

export function createApiClient(options: ApiClientOptions) {
  const { getAccessToken } = options
  return {
    get<T>(path: string) {
      return request<T>('GET', path, getAccessToken)
    },
    post<T>(path: string, body?: unknown) {
      return request<T>('POST', path, getAccessToken, body)
    },
    put<T>(path: string, body?: unknown) {
      return request<T>('PUT', path, getAccessToken, body)
    },
    patch<T>(path: string, body?: unknown) {
      return request<T>('PATCH', path, getAccessToken, body)
    },
    delete<T>(path: string) {
      return request<T>('DELETE', path, getAccessToken)
    },
  }
}

export type ApiClient = ReturnType<typeof createApiClient>
