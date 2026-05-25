import { isApiError, type ApiErrorKind } from '../lib/api/apiError'

export type AsyncResourceState<T> =
  | { status: 'idle' | 'loading' }
  | { status: 'success'; data: T }
  | {
      status: 'error'
      message: string
      errorKind?: ApiErrorKind
      httpStatus?: number
    }

export type PortalPageStatusVariant =
  | 'loading'
  | 'connected'
  | 'api-error'
  | 'endpoint-unavailable'
  | 'no-data'
  | 'placeholder'

export function derivePortalPageStatus(
  state: AsyncResourceState<unknown>,
  options?: { uiPlaceholder?: boolean; hasData?: boolean }
): PortalPageStatusVariant {
  if (options?.uiPlaceholder) return 'placeholder'
  if (state.status === 'idle' || state.status === 'loading') return 'loading'
  if (state.status === 'error') {
    if (state.errorKind === 'not_found' || state.httpStatus === 404) return 'endpoint-unavailable'
    return 'api-error'
  }
  if (state.status === 'success') {
    if (options?.hasData === false) return 'no-data'
    return 'connected'
  }
  return 'loading'
}

export function hasListData(data: unknown): boolean {
  if (data === null || data === undefined) return false
  if (Array.isArray(data)) return data.length > 0
  if (typeof data === 'object') {
    const obj = data as Record<string, unknown>
    for (const key of ['items', 'data', 'results', 'usuarios', 'plans', 'invoices', 'features']) {
      const nested = obj[key]
      if (Array.isArray(nested)) return nested.length > 0
    }
  }
  return true
}

export function getApiErrorMeta(error: unknown): { message: string; errorKind?: ApiErrorKind; httpStatus?: number } {
  if (isApiError(error)) {
    return { message: error.friendlyMessage, errorKind: error.kind, httpStatus: error.status }
  }
  return {
    message: error instanceof Error ? error.message : 'Erro desconhecido',
  }
}
