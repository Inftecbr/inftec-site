export type ApiErrorKind =
  | 'network'
  | 'unauthorized'
  | 'forbidden'
  | 'not_found'
  | 'server_error'
  | 'invalid_json'
  | 'http'
  | 'configuration'

export class ApiError extends Error {
  readonly kind: ApiErrorKind
  readonly status?: number
  readonly friendlyMessage: string
  readonly body?: unknown

  constructor(options: {
    kind: ApiErrorKind
    message: string
    friendlyMessage: string
    status?: number
    body?: unknown
  }) {
    super(options.message)
    this.name = 'ApiError'
    this.kind = options.kind
    this.friendlyMessage = options.friendlyMessage
    this.status = options.status
    this.body = options.body
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError
}
