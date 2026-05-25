import { useMemo, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import PortalDataGrid, { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'

import PortalConfirmDialog, { PortalModalShell } from '../../components/portal/feedback/PortalConfirmDialog'

import { usePortalToast } from '../../components/portal/feedback/PortalToastProvider'

import { PortalField, PortalSelect } from '../../components/portal/forms/PortalFormFields'

import PortalPageToolbar, { PortalActionButton } from '../../components/portal/layout/PortalPageToolbar'

import { PortalDataCard, PortalErrorState, PortalPageHeader } from '../../components/portal/ui'

import { isApiError } from '../../lib/api/apiError'

import {

  usePortalMetaIntegrationQuery,

  usePortalPlansQuery,

  usePortalTenantActiveSubscriptionQuery,

  usePortalTenantBillingMutations,

  usePortalTenantFromList,

  usePortalTenantInvoicesQuery,

  usePortalTenantMutations,

  usePortalTenantSubscriptionMutations,

} from '../../portal/query/hooks'



type TabId = 'overview' | 'plan' | 'subscription' | 'billing' | 'integrations'



const TABS: { id: TabId; label: string }[] = [

  { id: 'overview', label: 'Visão geral' },

  { id: 'plan', label: 'Plano' },

  { id: 'subscription', label: 'Subscription' },

  { id: 'billing', label: 'Billing' },

  { id: 'integrations', label: 'Integrações' },

]



export default function PortalTenantDetailPage() {

  const { tenantId = '' } = useParams()

  const toast = usePortalToast()

  const [tab, setTab] = useState<TabId>('overview')



  const { tenants, tenant } = usePortalTenantFromList(tenantId)

  const plansQuery = usePortalPlansQuery()

  const subscriptionQuery = usePortalTenantActiveSubscriptionQuery(tenantId || null)

  const invoicesQuery = usePortalTenantInvoicesQuery(tenantId || null)

  const metaQuery = usePortalMetaIntegrationQuery()



  const { setPlanForTenant } = usePortalTenantMutations()

  const createSubscription = usePortalTenantSubscriptionMutations(tenantId)

  const tenantBilling = usePortalTenantBillingMutations(tenantId)



  const [planOpen, setPlanOpen] = useState(false)

  const [subOpen, setSubOpen] = useState(false)

  const [generateOpen, setGenerateOpen] = useState(false)



  const planForm = useForm<{ planId: string }>({ defaultValues: { planId: '' } })

  const subForm = useForm<{ planId: string }>({ defaultValues: { planId: '' } })



  const planOptions = (plansQuery.data ?? []).map((p) => ({ value: p.id, label: `${p.name} (${p.code})` }))



  const planLabel = useMemo(() => {

    if (!tenant) return '—'

    if (tenant.planName) return tenant.planName

    if (tenant.planId) {

      const p = plansQuery.data?.find((x) => x.id === tenant.planId)

      return p ? `${p.name} (${p.code})` : tenant.planId

    }

    return '—'

  }, [tenant, plansQuery.data])



  async function submitPlan(values: { planId: string }) {

    if (!values.planId) {

      toast.error('Selecione um plano.')

      return

    }

    try {

      await setPlanForTenant.mutateAsync({ tenantId, planId: values.planId })

      toast.success('Plano atualizado.')

      setPlanOpen(false)

      void tenants.refetch()

      void subscriptionQuery.refetch()

    } catch (e) {

      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao alterar plano.')

    }

  }



  async function submitSubscription(values: { planId: string }) {

    if (!values.planId) {

      toast.error('Selecione um plano.')

      return

    }

    try {

      await createSubscription.mutateAsync(values.planId)

      toast.success('Assinatura criada.')

      setSubOpen(false)

    } catch (e) {

      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao criar assinatura.')

    }

  }



  async function generateInvoices() {

    try {

      await tenantBilling.generateInvoices.mutateAsync({})

      toast.success('Geração de faturas solicitada.')

      setGenerateOpen(false)

    } catch (e) {

      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao gerar faturas.')

    }

  }



  if (!tenantId) {

    return <PortalErrorState message="Tenant não informado na URL." onRetry={() => undefined} />

  }



  return (

    <div className="space-y-6">

      <Link to="/app/tenants" className="text-sm text-data hover:underline inline-block mb-2">

        ← Voltar para Tenants

      </Link>

      <PortalPageHeader

        title={tenant?.name ?? 'Tenant'}

        description={tenant ? `${tenant.slug} · ${tenant.id}` : `ID ${tenantId}`}

        kicker="Cliente"

        actions={

          <PortalActionButton onClick={() => void tenants.refetch()} disabled={tenants.isFetching}>

            Atualizar

          </PortalActionButton>

        }

      />



      {!tenant && !tenants.isLoading ? (

        <div className="rounded-xl border border-border bg-bg-secondary/40 p-4 text-sm text-text-secondary">

          Tenant não encontrado na listagem atual. Os dados abaixo ainda podem ser carregados pela API por ID.

        </div>

      ) : null}



      <div className="flex flex-wrap gap-2 border-b border-border pb-2">

        {TABS.map((t) => (

          <button

            key={t.id}

            type="button"

            onClick={() => setTab(t.id)}

            className={`rounded-lg px-3 py-2 text-sm ${tab === t.id ? 'bg-bg-surface text-text-primary font-medium' : 'text-text-secondary hover:bg-bg-secondary'}`}

          >

            {t.label}

          </button>

        ))}

      </div>



      {tab === 'overview' ? (

        <div className="grid gap-6 lg:grid-cols-2">

          <PortalDataCard title="Dados do tenant">

            <dl className="p-4 space-y-3 text-sm">

              <Row label="Nome" value={tenant?.name ?? '—'} />

              <Row label="Identificador" value={tenant?.slug ?? '—'} />

              <Row label="ID" value={tenantId} />

              <Row label="Status" value={tenant?.statusLabel ?? '—'} />

            </dl>

          </PortalDataCard>

          <PortalDataCard title="Jornada comercial">

            <dl className="p-4 space-y-3 text-sm">

              <Row label="Plano atual" value={planLabel} />

              <Row

                label="Assinatura"

                value={subscriptionQuery.data?.status ?? tenant?.subscriptionStatus ?? '—'}

              />

              <Row

                label="Billing"

                value={

                  tenant?.billingSummary ??

                  (tenant?.pendingInvoicesCount !== undefined

                    ? `${tenant.pendingInvoicesCount} pendente(s)`

                    : invoicesQuery.data?.length

                      ? `${invoicesQuery.data.length} fatura(s) no tenant`

                      : '—')

                }

              />

            </dl>

          </PortalDataCard>

        </div>

      ) : null}



      {tab === 'plan' ? (

        <PortalDataCard title="Plano comercial">

          <div className="p-4 space-y-4">

            <p className="text-sm text-text-secondary">

              Plano ativo: <span className="font-medium text-text-primary">{planLabel}</span>

            </p>

            <PortalActionButton variant="primary" onClick={() => {

              planForm.reset({ planId: tenant?.planId ?? subscriptionQuery.data?.planId ?? '' })

              setPlanOpen(true)

            }}>

              Alterar plano

            </PortalActionButton>

          </div>

        </PortalDataCard>

      ) : null}



      {tab === 'subscription' ? (

        <PortalDataCard title="Assinatura ativa">

          {subscriptionQuery.isError ? (

            <PortalErrorState

              message="Erro ao carregar assinatura do tenant."

              onRetry={() => void subscriptionQuery.refetch()}

            />

          ) : (

            <>

              <PortalDataGrid

                loading={subscriptionQuery.isLoading}

                rows={subscriptionQuery.data ? [subscriptionQuery.data] : []}

                rowKey={(s) => s.id}

                emptyTitle="Nenhuma assinatura ativa"

                emptyMessage="Crie uma assinatura vinculada a um plano do catálogo."

                columns={[

                  { id: 'status', header: 'Status', render: (s) => <PortalStatusBadge label={s.status} tone="data" /> },

                  { id: 'plan', header: 'Plano', render: (s) => s.planName || s.planId || '—' },

                  { id: 'start', header: 'Início', render: (s) => s.startedAt || '—' },

                  { id: 'end', header: 'Fim', render: (s) => s.endsAt || '—' },

                ]}

              />

              <div className="p-4 border-t border-border">

                <PortalActionButton variant="primary" onClick={() => setSubOpen(true)}>

                  Nova assinatura

                </PortalActionButton>

              </div>

            </>

          )}

        </PortalDataCard>

      ) : null}



      {tab === 'billing' ? (

        <>

          <PortalPageToolbar

            primaryAction={

              <PortalActionButton variant="primary" onClick={() => setGenerateOpen(true)}>

                Gerar fatura

              </PortalActionButton>

            }

            secondaryActions={

              <PortalActionButton onClick={() => void invoicesQuery.refetch()} disabled={invoicesQuery.isFetching}>

                Atualizar lista

              </PortalActionButton>

            }

          />

          {invoicesQuery.isError ? (

            <PortalErrorState message="Erro ao carregar faturas do tenant." onRetry={() => void invoicesQuery.refetch()} />

          ) : (

            <PortalDataCard title="Faturas">

              <PortalDataGrid

                loading={invoicesQuery.isLoading}

                rows={invoicesQuery.data ?? []}

                rowKey={(i) => i.id}

                emptyTitle="Nenhuma fatura"

                emptyMessage="Use Gerar fatura para disparar a cobrança deste tenant."

                columns={[

                  { id: 'id', header: 'ID', render: (i) => <span className="font-mono text-xs">{i.id}</span> },

                  { id: 'amount', header: 'Total', render: (i) => `${i.amount || '—'} ${i.currency}` },

                  { id: 'status', header: 'Status', render: (i) => <PortalStatusBadge label={i.status} tone="data" /> },

                  { id: 'due', header: 'Vencimento', render: (i) => i.dueDate || '—' },

                ]}

              />

            </PortalDataCard>

          )}

        </>

      ) : null}



      {tab === 'integrations' ? (

        <PortalDataCard title="Integrações">

          <div className="p-4 space-y-3 text-sm text-text-secondary">

            <p>

              A API expõe Meta em escopo global (<code className="text-xs">/integrations/meta</code>), não por tenant.

              Configure e monitore em{' '}

              <Link to="/app/integrations" className="text-data underline">

                Integrações

              </Link>

              .

            </p>

            {metaQuery.isLoading ? (

              <p>Carregando status Meta…</p>

            ) : (

              <dl className="space-y-2">

                <Row label="Meta" value={metaQuery.data?.configured ? metaQuery.data.statusLabel : 'Não configurada'} />

                {metaQuery.data?.configured ? (

                  <>

                    <Row label="App ID" value={metaQuery.data.appId || '—'} />

                    <Row label="Page ID" value={metaQuery.data.pageId || '—'} />

                  </>

                ) : null}

              </dl>

            )}

          </div>

        </PortalDataCard>

      ) : null}



      <PortalModalShell

        open={planOpen}

        title="Alterar plano"

        onClose={() => setPlanOpen(false)}

        footer={

          <>

            <PortalActionButton onClick={() => setPlanOpen(false)}>Cancelar</PortalActionButton>

            <PortalActionButton variant="primary" onClick={() => void planForm.handleSubmit(submitPlan)()} disabled={setPlanForTenant.isPending}>

              Confirmar

            </PortalActionButton>

          </>

        }

      >

        <form className="space-y-4" onSubmit={(e) => void planForm.handleSubmit(submitPlan)(e)}>

          <PortalField label="Plano">

            <PortalSelect {...planForm.register('planId')} options={[{ value: '', label: 'Selecione…' }, ...planOptions]} />

          </PortalField>

        </form>

      </PortalModalShell>



      <PortalModalShell

        open={subOpen}

        title="Nova assinatura"

        onClose={() => setSubOpen(false)}

        footer={

          <>

            <PortalActionButton onClick={() => setSubOpen(false)}>Cancelar</PortalActionButton>

            <PortalActionButton variant="primary" onClick={() => void subForm.handleSubmit(submitSubscription)()} disabled={createSubscription.isPending}>

              Criar assinatura

            </PortalActionButton>

          </>

        }

      >

        <form className="space-y-4" onSubmit={(e) => void subForm.handleSubmit(submitSubscription)(e)}>

          <PortalField label="Plano">

            <PortalSelect {...subForm.register('planId')} options={[{ value: '', label: 'Selecione…' }, ...planOptions]} />

          </PortalField>

        </form>

      </PortalModalShell>



      <PortalConfirmDialog

        open={generateOpen}

        title="Gerar fatura"

        description="Disparar geração de faturas para este tenant?"

        onCancel={() => setGenerateOpen(false)}

        onConfirm={() => void generateInvoices()}

        loading={tenantBilling.generateInvoices.isPending}

      />

    </div>

  )

}



function Row({ label, value }: { label: string; value: string }) {

  return (

    <div>

      <dt className="text-text-muted text-xs">{label}</dt>

      <dd className="font-medium text-text-primary break-all">{value}</dd>

    </div>

  )

}

