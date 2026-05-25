import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import PortalDataGrid, { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'
import PortalConfirmDialog, { PortalModalShell } from '../../components/portal/feedback/PortalConfirmDialog'
import { usePortalToast } from '../../components/portal/feedback/PortalToastProvider'
import { PortalAdvancedJsonPanel, PortalField, PortalInput, PortalTextarea } from '../../components/portal/forms/PortalFormFields'
import PortalPageToolbar, { PortalActionButton } from '../../components/portal/layout/PortalPageToolbar'
import { PortalDataCard, PortalErrorState, PortalPageHeader } from '../../components/portal/ui'
import { mapPlanFeatureKeys } from '../../lib/portal/normalize'
import { isApiError } from '../../lib/api/apiError'
import {
  usePortalFeaturesQuery,
  usePortalPlanFeaturesQuery,
  usePortalPlanMutations,
  usePortalPlansQuery,
} from '../../portal/query/hooks'
import type { PortalPlan } from '../../types/portal/models'

const planSchema = z.object({
  name: z.string().min(2),
  code: z.string().min(2),
  description: z.string().optional(),
})

type PlanForm = z.infer<typeof planSchema>

export default function PortalPlansPage() {
  const toast = usePortalToast()
  const plansQuery = usePortalPlansQuery()
  const featuresQuery = usePortalFeaturesQuery()
  const { create, update, remove, addFeature, removeFeature } = usePortalPlanMutations()

  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<PortalPlan | null>(null)
  const [modal, setModal] = useState<'create' | 'edit' | null>(null)
  const [deletePlanTarget, setDeletePlanTarget] = useState<PortalPlan | null>(null)
  const [featureKey, setFeatureKey] = useState('')
  const [advancedJson, setAdvancedJson] = useState('')

  const featuresForPlan = usePortalPlanFeaturesQuery(selected?.id ?? null)

  const form = useForm<PlanForm>({
    resolver: zodResolver(planSchema),
    defaultValues: { name: '', code: '', description: '' },
  })

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const list = plansQuery.data ?? []
    if (!q) return list
    return list.filter((p) => p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q))
  }, [plansQuery.data, search])

  const linkedKeys = mapPlanFeatureKeys(featuresForPlan.data)

  function openCreate() {
    form.reset({ name: '', code: '', description: '' })
    setAdvancedJson('')
    setModal('create')
  }

  function openEdit(plan: PortalPlan) {
    setSelected(plan)
    form.reset({ name: plan.name, code: plan.code, description: plan.description })
    setAdvancedJson('')
    setModal('edit')
  }

  async function submitPlan(values: PlanForm) {
    try {
      const body =
        advancedJson.trim() !== ''
          ? (JSON.parse(advancedJson) as unknown)
          : { name: values.name, nome: values.name, code: values.code, description: values.description }
      if (modal === 'create') {
        await create.mutateAsync(body)
        toast.success('Plano criado.')
      } else if (selected) {
        await update.mutateAsync({ id: selected.id, body })
        toast.success('Plano atualizado.')
      }
      setModal(null)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao salvar plano.')
    }
  }

  async function confirmDelete() {
    if (!deletePlanTarget) return
    try {
      await remove.mutateAsync(deletePlanTarget.id)
      toast.success('Plano removido.')
      if (selected?.id === deletePlanTarget.id) setSelected(null)
      setDeletePlanTarget(null)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Não foi possível excluir.')
    }
  }

  async function linkFeature() {
    if (!selected || !featureKey) return
    try {
      await addFeature.mutateAsync({ planId: selected.id, body: { featureKey, key: featureKey } })
      toast.success('Feature associada ao plano.')
      setFeatureKey('')
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao associar feature.')
    }
  }

  async function unlinkFeature(key: string) {
    if (!selected) return
    try {
      await removeFeature.mutateAsync({ planId: selected.id, featureKey: key })
      toast.success('Feature removida do plano.')
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao remover feature.')
    }
  }

  const featureOptions = featuresQuery.data ?? []

  return (
    <div className="space-y-6">
      <PortalPageHeader
        title="Planos"
        description="Catálogo comercial — crie e edite planos e associe features. A operação de plano por cliente ocorre em Tenants."
        actions={
          <PortalActionButton onClick={() => void plansQuery.refetch()} disabled={plansQuery.isFetching}>
            Atualizar
          </PortalActionButton>
        }
      />

      <PortalPageToolbar
        search={search}
        onSearchChange={setSearch}
        primaryAction={
          <PortalActionButton variant="primary" onClick={openCreate}>
            Novo plano
          </PortalActionButton>
        }
      />

      {plansQuery.isError ? (
        <PortalErrorState message="Erro ao carregar planos." onRetry={() => void plansQuery.refetch()} />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <PortalDataCard title="Catálogo">
            <PortalDataGrid
              loading={plansQuery.isLoading}
              rows={filtered}
              rowKey={(p) => p.id}
              columns={[
                { id: 'name', header: 'Plano', render: (p) => <span className="font-medium text-text-primary">{p.name}</span> },
                { id: 'code', header: 'Código', render: (p) => p.code },
                {
                  id: 'active',
                  header: 'Status',
                  render: (p) => <PortalStatusBadge label={p.active ? 'Ativo' : 'Inativo'} tone={p.active ? 'success' : 'muted'} />,
                },
              ]}
              actions={(p) => (
                <div className="flex flex-wrap gap-2 justify-end">
                  <PortalActionButton
                    onClick={() => {
                      setSelected(p)
                    }}
                  >
                    Capabilities
                  </PortalActionButton>
                  <PortalActionButton onClick={() => openEdit(p)}>Editar</PortalActionButton>
                  <PortalActionButton onClick={() => setDeletePlanTarget(p)}>Excluir</PortalActionButton>
                </div>
              )}
            />
          </PortalDataCard>

          <PortalDataCard title={selected ? `Features — ${selected.name}` : 'Features do plano'}>
            {selected ? (
              <div className="p-4 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {linkedKeys.length === 0 ? (
                    <p className="text-sm text-text-secondary">Nenhuma feature vinculada.</p>
                  ) : (
                    linkedKeys.map((key) => (
                      <span key={key} className="inline-flex items-center gap-2 rounded-full bg-bg-secondary px-3 py-1 text-xs">
                        {key}
                        <button type="button" className="text-warning hover:underline" onClick={() => void unlinkFeature(key)}>
                          remover
                        </button>
                      </span>
                    ))
                  )}
                </div>
                <div className="flex gap-2">
                  <select
                    className="flex-1 rounded-lg border border-border bg-bg-secondary px-3 py-2 text-sm"
                    value={featureKey}
                    onChange={(e) => setFeatureKey(e.target.value)}
                  >
                    <option value="">Selecionar feature…</option>
                    {featureOptions.map((f) => (
                      <option key={f.id} value={f.key}>
                        {f.name} ({f.key})
                      </option>
                    ))}
                  </select>
                  <PortalActionButton variant="primary" onClick={() => void linkFeature()} disabled={!featureKey}>
                    Associar
                  </PortalActionButton>
                </div>
                {featuresForPlan.isFetching ? <p className="text-xs text-text-muted">Sincronizando…</p> : null}
              </div>
            ) : (
              <p className="p-4 text-sm text-text-secondary">Selecione um plano e clique em Capabilities.</p>
            )}
          </PortalDataCard>
        </div>
      )}

      <PortalModalShell
        open={modal !== null}
        title={modal === 'create' ? 'Novo plano' : 'Editar plano'}
        onClose={() => setModal(null)}
        footer={
          <>
            <PortalActionButton onClick={() => setModal(null)}>Cancelar</PortalActionButton>
            <PortalActionButton variant="primary" onClick={() => void form.handleSubmit(submitPlan)()}>
              Salvar
            </PortalActionButton>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(e) => void form.handleSubmit(submitPlan)(e)}>
          <PortalField label="Nome" error={form.formState.errors.name?.message}>
            <PortalInput {...form.register('name')} />
          </PortalField>
          <PortalField label="Código" error={form.formState.errors.code?.message}>
            <PortalInput {...form.register('code')} />
          </PortalField>
          <PortalField label="Descrição">
            <PortalTextarea {...form.register('description')} />
          </PortalField>
          <PortalAdvancedJsonPanel value={advancedJson} onChange={setAdvancedJson} />
        </form>
      </PortalModalShell>

      <PortalConfirmDialog
        open={Boolean(deletePlanTarget)}
        title="Excluir plano"
        description={deletePlanTarget ? `Remover ${deletePlanTarget.name} permanentemente?` : ''}
        destructive
        loading={remove.isPending}
        confirmLabel="Excluir"
        onCancel={() => setDeletePlanTarget(null)}
        onConfirm={() => void confirmDelete()}
      />
    </div>
  )
}
