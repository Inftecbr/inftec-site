import { useMemo, useState } from 'react'

import { Link, useSearchParams } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { PortalEntityId } from '../../components/portal/ui/PortalTechnicalDetails'
import PortalDataGrid, { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'

import { PortalModalShell } from '../../components/portal/feedback/PortalConfirmDialog'

import { usePortalToast } from '../../components/portal/feedback/PortalToastProvider'

import { PortalAdvancedJsonPanel, PortalField, PortalInput, PortalSelect } from '../../components/portal/forms/PortalFormFields'

import PortalPageToolbar, { PortalActionButton } from '../../components/portal/layout/PortalPageToolbar'

import { PortalDataCard, PortalErrorState, PortalPageHeader } from '../../components/portal/ui'

import { usePortalPlansQuery, usePortalTenantMutations, usePortalTenantsQuery } from '../../portal/query/hooks'

import type { PortalTenant } from '../../types/portal/models'

import { isApiError } from '../../lib/api/apiError'
import { filterTenants, parseTenantListFilter } from '../../lib/portal/filters'



const createSchema = z.object({

  name: z.string().min(2, 'Nome obrigatório'),

  slug: z.string().min(2, 'Identificador obrigatório'),

})



type CreateForm = z.infer<typeof createSchema>



export default function PortalTenantsPage() {

  const toast = usePortalToast()

  const [searchParams, setSearchParams] = useSearchParams()

  const listFilter = parseTenantListFilter(searchParams.get('filter'))

  const tenantsQuery = usePortalTenantsQuery()

  const plansQuery = usePortalPlansQuery()

  const { create, setPlanForTenant } = usePortalTenantMutations()



  const [search, setSearch] = useState('')

  const [createOpen, setCreateOpen] = useState(false)

  const [planOpen, setPlanOpen] = useState(false)

  const [planTenant, setPlanTenant] = useState<PortalTenant | null>(null)

  const [advancedJson, setAdvancedJson] = useState('')



  const form = useForm<CreateForm>({ resolver: zodResolver(createSchema), defaultValues: { name: '', slug: '' } })

  const planForm = useForm<{ planId: string }>({ defaultValues: { planId: '' } })



  const filtered = useMemo(() => {

    return filterTenants(tenantsQuery.data ?? [], listFilter, search)

  }, [tenantsQuery.data, listFilter, search])



  async function submitCreate(values: CreateForm) {

    try {

      const body =

        advancedJson.trim() !== ''

          ? (JSON.parse(advancedJson) as unknown)

          : { name: values.name, nome: values.name, slug: values.slug, identifier: values.slug }

      await create.mutateAsync(body)

      toast.success('Tenant provisionado.')

      setCreateOpen(false)

      form.reset()

      setAdvancedJson('')

    } catch (e) {

      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao criar tenant.')

    }

  }



  function openPlanModal(tenant: PortalTenant) {

    setPlanTenant(tenant)

    planForm.reset({ planId: tenant.planId ?? '' })

    setPlanOpen(true)

  }



  async function submitPlanChange(values: { planId: string }) {

    if (!planTenant) return

    if (!values.planId) {

      toast.error('Selecione um plano.')

      return

    }

    try {

      await setPlanForTenant.mutateAsync({ tenantId: planTenant.id, planId: values.planId })

      toast.success('Plano do tenant atualizado.')

      setPlanOpen(false)

      void tenantsQuery.refetch()

    } catch (e) {

      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao alterar plano.')

    }

  }



  const planOptions = (plansQuery.data ?? []).map((p) => ({ value: p.id, label: `${p.name} (${p.code})` }))



  return (

    <div className="space-y-6">

      <PortalPageHeader

        title="Tenants"

        description="Hub da jornada comercial — cada cliente concentra plano, assinatura e faturamento."

        actions={

          <PortalActionButton onClick={() => void tenantsQuery.refetch()} disabled={tenantsQuery.isFetching}>

            Atualizar

          </PortalActionButton>

        }

      />

      {listFilter === 'missing-plan' ? (
        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-warning/30 bg-warning/5 px-4 py-3 text-sm">
          <span className="text-text-primary">
            Filtro ativo: <strong>tenants sem plano</strong>
          </span>
          <button
            type="button"
            className="text-data hover:underline text-sm"
            onClick={() => {
              searchParams.delete('filter')
              setSearchParams(searchParams, { replace: true })
            }}
          >
            Limpar filtro
          </button>
        </div>
      ) : null}

      <PortalPageToolbar

        search={search}

        onSearchChange={setSearch}

        searchPlaceholder="Buscar tenant"

        primaryAction={

          <PortalActionButton variant="primary" onClick={() => setCreateOpen(true)}>

            Novo tenant

          </PortalActionButton>

        }

      />



      {tenantsQuery.isError ? (

        <PortalErrorState

          message={tenantsQuery.error instanceof Error ? tenantsQuery.error.message : 'Erro ao listar tenants.'}

          onRetry={() => void tenantsQuery.refetch()}

        />

      ) : (

        <PortalDataCard title="Clientes">

          <PortalDataGrid

            loading={tenantsQuery.isLoading}

            rows={filtered}

            rowKey={(t) => t.id}

            emptyTitle={listFilter === 'missing-plan' ? 'Nenhum tenant sem plano' : 'Nenhum tenant'}

            emptyMessage={
              listFilter === 'missing-plan'
                ? 'Todos os tenants listados possuem plano ou o filtro não encontrou resultados.'
                : 'Provisione um tenant ou confirme GET /tenants?take= na API.'
            }

            columns={[

                { id: 'name', header: 'Nome', render: (t) => (
                    <span>
                      <span className="text-text-primary font-medium">{t.name}</span>
                      <PortalEntityId id={t.id} />
                    </span>
                  ) },

              { id: 'slug', header: 'Identificador', render: (t) => t.slug },

              { id: 'status', header: 'Status', render: (t) => <PortalStatusBadge label={t.statusLabel} tone="data" /> },

              {

                id: 'plan',

                header: 'Plano',

                render: (t) => (t.planName || t.planId ? t.planName || t.planId : '—'),

              },

              {

                id: 'subscription',

                header: 'Assinatura',

                render: (t) => (t.subscriptionStatus ? t.subscriptionStatus : '—'),

              },

              {

                id: 'billing',

                header: 'Billing',

                render: (t) =>

                  t.billingSummary ||

                  (t.pendingInvoicesCount !== undefined ? `${t.pendingInvoicesCount} fatura(s) pendente(s)` : '—'),

              },

            ]}

            actions={(t) => (

              <div className="flex flex-wrap gap-2 justify-end">

                <Link

                  to={`/app/tenants/${encodeURIComponent(t.id)}`}

                  className="inline-flex items-center rounded-lg border border-border px-3 py-1.5 text-sm text-text-primary hover:bg-bg-secondary"

                >

                  Abrir

                </Link>

                <PortalActionButton onClick={() => openPlanModal(t)}>Alterar plano</PortalActionButton>

              </div>

            )}

          />

        </PortalDataCard>

      )}



      <PortalModalShell

        open={createOpen}

        title="Provisionar tenant"

        onClose={() => setCreateOpen(false)}

        footer={

          <>

            <PortalActionButton onClick={() => setCreateOpen(false)}>Cancelar</PortalActionButton>

            <PortalActionButton variant="primary" onClick={() => void form.handleSubmit(submitCreate)()} disabled={create.isPending}>

              Criar tenant

            </PortalActionButton>

          </>

        }

      >

        <form className="space-y-4" onSubmit={(e) => void form.handleSubmit(submitCreate)(e)}>

          <PortalField label="Nome comercial" error={form.formState.errors.name?.message}>

            <PortalInput {...form.register('name')} />

          </PortalField>

          <PortalField label="Identificador (slug)" error={form.formState.errors.slug?.message}>

            <PortalInput {...form.register('slug')} />

          </PortalField>

          <PortalAdvancedJsonPanel value={advancedJson} onChange={setAdvancedJson} />

        </form>

      </PortalModalShell>



      <PortalModalShell

        open={planOpen}

        title={planTenant ? `Alterar plano — ${planTenant.name}` : 'Alterar plano'}

        onClose={() => setPlanOpen(false)}

        footer={

          <>

            <PortalActionButton onClick={() => setPlanOpen(false)}>Cancelar</PortalActionButton>

            <PortalActionButton

              variant="primary"

              onClick={() => void planForm.handleSubmit(submitPlanChange)()}

              disabled={setPlanForTenant.isPending}

            >

              Ativar plano

            </PortalActionButton>

          </>

        }

      >

        <form className="space-y-4" onSubmit={(e) => void planForm.handleSubmit(submitPlanChange)(e)}>

          <PortalField label="Plano comercial">

            <PortalSelect

              {...planForm.register('planId')}

              options={[{ value: '', label: 'Selecione…' }, ...planOptions]}

            />

          </PortalField>

        </form>

      </PortalModalShell>

    </div>

  )

}

