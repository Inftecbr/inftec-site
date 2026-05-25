import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PortalDataGrid, { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'
import { PortalModalShell } from '../../components/portal/feedback/PortalConfirmDialog'
import { usePortalToast } from '../../components/portal/feedback/PortalToastProvider'
import { PortalAdvancedJsonPanel, PortalField, PortalInput, PortalSelect } from '../../components/portal/forms/PortalFormFields'
import PortalPageToolbar, { PortalActionButton } from '../../components/portal/layout/PortalPageToolbar'
import { PortalDataCard, PortalErrorState, PortalPageHeader } from '../../components/portal/ui'
import { isApiError } from '../../lib/api/apiError'
import { usePortalPlansQuery, usePortalSubscriptionMutations, usePortalSubscriptionQuery, usePortalTenantsQuery } from '../../portal/query/hooks'

export default function PortalSubscriptionsPage() {
  const toast = usePortalToast()
  const subscriptionQuery = usePortalSubscriptionQuery()
  const create = usePortalSubscriptionMutations()
  const plansQuery = usePortalPlansQuery()
  const tenantsQuery = usePortalTenantsQuery()
  const [open, setOpen] = useState(false)
  const [advancedJson, setAdvancedJson] = useState('')

  const form = useForm({ defaultValues: { planId: '', tenantId: '' } })

  const rows = subscriptionQuery.data ? [subscriptionQuery.data] : []

  async function submit(values: { planId: string; tenantId: string }) {
    try {
      const body =
        advancedJson.trim() !== ''
          ? (JSON.parse(advancedJson) as unknown)
          : { planId: values.planId, tenantId: values.tenantId, plan: values.planId, tenant: values.tenantId }
      await create.mutateAsync(body)
      toast.success('Assinatura criada.')
      setOpen(false)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao criar assinatura.')
    }
  }

  const planOptions = (plansQuery.data ?? []).map((p) => ({ value: p.id, label: p.name }))
  const tenantOptions = (tenantsQuery.data ?? []).map((t) => ({ value: t.id, label: t.name }))

  return (
    <div>
      <PortalPageHeader
        title="Assinaturas"
        description="Assinatura ativa e ciclo de vida comercial por tenant."
        actions={
          <PortalActionButton onClick={() => void subscriptionQuery.refetch()} disabled={subscriptionQuery.isFetching}>
            Atualizar
          </PortalActionButton>
        }
      />

      <PortalPageToolbar
        primaryAction={
          <PortalActionButton variant="primary" onClick={() => setOpen(true)}>
            Nova assinatura
          </PortalActionButton>
        }
      />

      {subscriptionQuery.isError ? (
        <PortalErrorState
          message={subscriptionQuery.error instanceof Error ? subscriptionQuery.error.message : 'Erro ao carregar assinatura.'}
          onRetry={() => void subscriptionQuery.refetch()}
        />
      ) : (
        <PortalDataCard title="Assinatura ativa">
          <PortalDataGrid
            loading={subscriptionQuery.isLoading}
            rows={rows}
            rowKey={(s) => s.id}
            emptyTitle="Nenhuma assinatura ativa"
            emptyMessage="Crie uma assinatura para o tenant."
            columns={[
              { id: 'status', header: 'Status', render: (s) => <PortalStatusBadge label={s.status} tone="data" /> },
              { id: 'tenant', header: 'Tenant', render: (s) => s.tenantId || '—' },
              { id: 'plan', header: 'Plano', render: (s) => s.planName || s.planId || '—' },
              { id: 'start', header: 'Início', render: (s) => s.startedAt || '—' },
              { id: 'end', header: 'Fim', render: (s) => s.endsAt || '—' },
            ]}
          />
        </PortalDataCard>
      )}

      <PortalModalShell
        open={open}
        title="Nova assinatura"
        onClose={() => setOpen(false)}
        footer={
          <>
            <PortalActionButton onClick={() => setOpen(false)}>Cancelar</PortalActionButton>
            <PortalActionButton variant="primary" onClick={() => void form.handleSubmit(submit)()} disabled={create.isPending}>
              Criar assinatura
            </PortalActionButton>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(e) => void form.handleSubmit(submit)(e)}>
          <PortalField label="Tenant">
            <PortalSelect {...form.register('tenantId')} options={[{ value: '', label: 'Selecione…' }, ...tenantOptions]} />
          </PortalField>
          <PortalField label="Plano">
            <PortalSelect {...form.register('planId')} options={[{ value: '', label: 'Selecione…' }, ...planOptions]} />
          </PortalField>
          <PortalAdvancedJsonPanel value={advancedJson} onChange={setAdvancedJson} />
        </form>
      </PortalModalShell>
    </div>
  )
}
