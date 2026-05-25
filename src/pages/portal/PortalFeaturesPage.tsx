import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import PortalDataGrid, { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'
import { PortalModalShell } from '../../components/portal/feedback/PortalConfirmDialog'
import { usePortalToast } from '../../components/portal/feedback/PortalToastProvider'
import { PortalAdvancedJsonPanel, PortalField, PortalInput, PortalTextarea } from '../../components/portal/forms/PortalFormFields'
import PortalPageToolbar, { PortalActionButton } from '../../components/portal/layout/PortalPageToolbar'
import { PortalDataCard, PortalErrorState, PortalPageHeader } from '../../components/portal/ui'
import { isApiError } from '../../lib/api/apiError'
import { usePortalFeatureMutations, usePortalFeaturesQuery, usePortalPlansQuery } from '../../portal/query/hooks'

const schema = z.object({
  key: z.string().min(2),
  name: z.string().min(2),
  description: z.string().optional(),
  category: z.string().optional(),
})

type FeatureForm = z.infer<typeof schema>

export default function PortalFeaturesPage() {
  const toast = usePortalToast()
  const featuresQuery = usePortalFeaturesQuery()
  const plansQuery = usePortalPlansQuery()
  const createFeature = usePortalFeatureMutations()

  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [advancedJson, setAdvancedJson] = useState('')

  const form = useForm<FeatureForm>({
    resolver: zodResolver(schema),
    defaultValues: { key: '', name: '', description: '', category: 'Geral' },
  })

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const list = featuresQuery.data ?? []
    if (!q) return list
    return list.filter(
      (f) => f.key.toLowerCase().includes(q) || f.name.toLowerCase().includes(q) || f.category.toLowerCase().includes(q)
    )
  }, [featuresQuery.data, search])

  async function submit(values: FeatureForm) {
    try {
      const body =
        advancedJson.trim() !== ''
          ? (JSON.parse(advancedJson) as unknown)
          : {
              key: values.key,
              name: values.name,
              nome: values.name,
              description: values.description,
              category: values.category,
            }
      await createFeature.mutateAsync(body)
      toast.success('Feature criada.')
      setOpen(false)
      form.reset()
      setAdvancedJson('')
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao criar feature.')
    }
  }

  return (
    <div>
      <PortalPageHeader
        title="Features"
        description="Capabilities do catálogo — vincule aos planos na tela Planos."
        actions={
          <PortalActionButton onClick={() => void featuresQuery.refetch()} disabled={featuresQuery.isFetching}>
            Atualizar
          </PortalActionButton>
        }
      />

      <PortalPageToolbar
        search={search}
        onSearchChange={setSearch}
        primaryAction={
          <PortalActionButton variant="primary" onClick={() => setOpen(true)}>
            Nova feature
          </PortalActionButton>
        }
      />

      {featuresQuery.isError ? (
        <PortalErrorState message="Erro ao carregar features." onRetry={() => void featuresQuery.refetch()} />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <PortalDataCard title="Capabilities">
            <PortalDataGrid
              loading={featuresQuery.isLoading}
              rows={filtered}
              rowKey={(f) => f.id}
              columns={[
                { id: 'name', header: 'Nome', render: (f) => <span className="font-medium text-text-primary">{f.name}</span> },
                { id: 'key', header: 'Chave', render: (f) => <span className="font-mono text-xs">{f.key}</span> },
                { id: 'cat', header: 'Categoria', render: (f) => <PortalStatusBadge label={f.category} tone="data" /> },
              ]}
            />
          </PortalDataCard>
          <PortalDataCard title="Catálogo comercial">
            <p className="p-4 text-sm text-text-secondary">
              {plansQuery.data?.length ?? 0} planos ativos no catálogo. Gerencie vínculos em{' '}
              <span className="text-data">Planos → Capabilities</span>.
            </p>
          </PortalDataCard>
        </div>
      )}

      <PortalModalShell
        open={open}
        title="Nova feature"
        onClose={() => setOpen(false)}
        footer={
          <>
            <PortalActionButton onClick={() => setOpen(false)}>Cancelar</PortalActionButton>
            <PortalActionButton variant="primary" onClick={() => void form.handleSubmit(submit)()} disabled={createFeature.isPending}>
              Criar
            </PortalActionButton>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(e) => void form.handleSubmit(submit)(e)}>
          <PortalField label="Chave" error={form.formState.errors.key?.message}>
            <PortalInput {...form.register('key')} />
          </PortalField>
          <PortalField label="Nome" error={form.formState.errors.name?.message}>
            <PortalInput {...form.register('name')} />
          </PortalField>
          <PortalField label="Categoria">
            <PortalInput {...form.register('category')} />
          </PortalField>
          <PortalField label="Descrição">
            <PortalTextarea {...form.register('description')} />
          </PortalField>
          <PortalAdvancedJsonPanel value={advancedJson} onChange={setAdvancedJson} />
        </form>
      </PortalModalShell>
    </div>
  )
}
