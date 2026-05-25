import { useCallback, useEffect, useState } from 'react'
import { getApiErrorMeta, type AsyncResourceState } from './portalPageStatus'

export function useAsyncResource<T>(loader: () => Promise<T>, deps: unknown[] = []) {
  const [state, setState] = useState<AsyncResourceState<T>>({ status: 'idle' })

  const run = useCallback(async () => {
    setState({ status: 'loading' })
    try {
      const data = await loader()
      setState({ status: 'success', data })
    } catch (error) {
      const meta = getApiErrorMeta(error)
      setState({
        status: 'error',
        message: meta.message,
        errorKind: meta.errorKind,
        httpStatus: meta.httpStatus,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => {
    void run()
  }, [run])

  return { state, reload: run }
}
