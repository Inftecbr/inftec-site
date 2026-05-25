import { useForm } from 'react-hook-form'
import PortalDataGrid, { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'
import PortalConfirmDialog, { PortalModalShell } from '../../components/portal/feedback/PortalConfirmDialog'
import { usePortalToast } from '../../components/portal/feedback/PortalToastProvider'
import { PortalAdvancedJsonPanel, PortalField, PortalInput } from '../../components/portal/forms/PortalFormFields'
import PortalPageToolbar, { PortalActionButton } from '../../components/portal/layout/PortalPageToolbar'
import { PortalDataCard, PortalErrorState, PortalPageHeader } from '../../components/portal/ui'
import { isApiError } from '../../lib/api/apiError'
import { usePortalMetaIntegrationQuery, usePortalMetaMutations } from '../../portal/query/hooks'
import { useState } from 'react'

export default function PortalIntegrationsPage() {
  const toast = usePortalToast()
  const query = usePortalMetaIntegrationQuery()
  const { save, remove } = usePortalMetaMutations()
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [advancedJson, setAdvancedJson] = useState('')

  const form = useForm({
    defaultValues: { appId: '', pageId: '', accessToken: '' },
  })

  const meta = query.data
  const rows = meta ? [meta] : []

  async function submit(values: { appId: string; pageId: string; accessToken: string }) {
    try {
      const body =
        advancedJson.trim() !== ''
          ? (JSON.parse(advancedJson) as unknown)
          : { appId: values.appId, pageId: values.pageId, accessToken: values.accessToken }
      await save.mutateAsync(body)
      toast.success('Integração Meta salva.')
      setEditOpen(false)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao salvar integração.')
    }
  }

  async function confirmRemove() {
    try {
      await remove.mutateAsync()
      toast.success('Integração Meta removida.')
      setDeleteOpen(false)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao remover integração.')
    }
  }

  return (
    <div>
      <PortalPageHeader
        title="Integrações"
        description="Meta Business — configuração operacional do conector."
        actions={
          <PortalActionButton onClick={() => void query.refetch()} disabled={query.isFetching}>
            Atualizar
          </PortalActionButton>
        }
      />

      <PortalPageToolbar
        primaryAction={
          <PortalActionButton variant="primary" onClick={() => setEditOpen(true)}>
            {meta?.configured ? 'Editar Meta' : 'Configurar Meta'}
          </PortalActionButton>
        }
        secondaryActions={
          meta?.configured ? (
            <PortalActionButton onClick={() => setDeleteOpen(true)}>Remover integração</PortalActionButton>
          ) : null
        }
      />

      {query.isError && !meta ? (
        <PortalErrorState
          message={query.error instanceof Error ? query.error.message : 'Integração indisponível.'}
          onRetry={() => void query.refetch()}
        />
      ) : (
        <PortalDataCard title="Meta">
          <PortalDataGrid
            loading={query.isLoading}
            rows={rows}
            rowKey={() => 'meta'}
            emptyTitle="Integração não configurada"
            emptyMessage="Configure a integração Meta para conectar campanhas e ativos."
            columns={[
              {
                id: 'status',
                header: 'Status',
                render: (m) => (
                  <PortalStatusBadge label={m.statusLabel} tone={m.configured ? 'success' : 'muted'} />
                ),
              },
              { id: 'app', header: 'App ID', render: (m) => m.appId || '—' },
              { id: 'page', header: 'Page ID', render: (m) => m.pageId || '—' },
            ]}
          />
        </PortalDataCard>
      )}

      <PortalModalShell
        open={editOpen}
        title="Integração Meta"
        onClose={() => setEditOpen(false)}
        footer={
          <>
            <PortalActionButton onClick={() => setEditOpen(false)}>Cancelar</PortalActionButton>
            <PortalActionButton variant="primary" onClick={() => void form.handleSubmit(submit)()} disabled={save.isPending}>
              Salvar
            </PortalActionButton>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(e) => void form.handleSubmit(submit)(e)}>
          <PortalField label="App ID">
            <PortalInput {...form.register('appId')} defaultValue={meta?.appId} />
          </PortalField>
          <PortalField label="Page ID">
            <PortalInput {...form.register('pageId')} defaultValue={meta?.pageId} />
          </PortalField>
          <PortalField label="Access token">
            <PortalInput type="password" {...form.register('accessToken')} autoComplete="off" />
          </PortalField>
          <PortalAdvancedJsonPanel value={advancedJson} onChange={setAdvancedJson} />
        </form>
      </PortalModalShell>

      <PortalConfirmDialog
        open={deleteOpen}
        title="Remover integração Meta"
        description="Esta ação remove a configuração Meta da plataforma. Continuar?"
        destructive
        loading={remove.isPending}
        confirmLabel="Remover"
        onCancel={() => setDeleteOpen(false)}
        onConfirm={() => void confirmRemove()}
      />
    </div>
  )
}
