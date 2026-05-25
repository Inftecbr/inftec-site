import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import PortalDataGrid, { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'
import PortalConfirmDialog, { PortalModalShell } from '../../components/portal/feedback/PortalConfirmDialog'
import { usePortalToast } from '../../components/portal/feedback/PortalToastProvider'
import { PortalAdvancedJsonPanel, PortalField, PortalInput } from '../../components/portal/forms/PortalFormFields'
import PortalPageToolbar, { PortalActionButton } from '../../components/portal/layout/PortalPageToolbar'
import { PortalTechnicalPayload } from '../../components/portal/ui/PortalTechnicalDetails'
import { PortalDataCard, PortalErrorState, PortalPageHeader } from '../../components/portal/ui'
import { isApiError } from '../../lib/api/apiError'
import {
  usePortalActivePricingQuery,
  usePortalBillingMutations,
  usePortalInvoicesQuery,
  usePortalPricingFeatureQuery,
  usePortalPricingHistoryQuery,
} from '../../portal/query/hooks'
import type { PortalInvoice } from '../../types/portal/models'
import { filterInvoices, parseBillingListFilter } from '../../lib/portal/filters'

type Tab = 'invoices' | 'pricing' | 'events'

export default function PortalBillingPage() {
  const toast = usePortalToast()
  const [searchParams, setSearchParams] = useSearchParams()
  const listFilter = parseBillingListFilter(searchParams.get('filter'))
  const [tab, setTab] = useState<Tab>('invoices')
  const [search, setSearch] = useState('')
  const invoicesQuery = usePortalInvoicesQuery()
  const pricingQuery = usePortalActivePricingQuery()
  const billing = usePortalBillingMutations()

  const [invoiceOpen, setInvoiceOpen] = useState(false)
  const [generateOpen, setGenerateOpen] = useState(false)
  const [payTarget, setPayTarget] = useState<PortalInvoice | null>(null)
  const [detail, setDetail] = useState<unknown>(null)
  const [pricingFeature, setPricingFeature] = useState('')
  const [createPricingOpen, setCreatePricingOpen] = useState(false)
  const [advancedJson, setAdvancedJson] = useState('')

  const featurePricing = usePortalPricingFeatureQuery(pricingFeature || null)
  const pricingHistory = usePortalPricingHistoryQuery(pricingFeature || null)

  const invoiceForm = useForm({ defaultValues: { tenantId: '', amount: '', currency: 'BRL' } })
  const pricingForm = useForm({ defaultValues: { feature: '', amount: '', currency: 'BRL' } })
  const eventForm = useForm({ defaultValues: { type: '', quantity: '1' } })

  useEffect(() => {
    if (listFilter === 'pending') setTab('invoices')
  }, [listFilter])

  const filteredInvoices = useMemo(() => {
    return filterInvoices(invoicesQuery.data ?? [], listFilter, search)
  }, [invoicesQuery.data, listFilter, search])

  async function createInvoiceSubmit(values: { tenantId: string; amount: string; currency: string }) {
    try {
      const body =
        advancedJson.trim() !== ''
          ? (JSON.parse(advancedJson) as unknown)
          : { tenantId: values.tenantId, amount: values.amount, currency: values.currency }
      await billing.createInvoice.mutateAsync(body)
      toast.success('Fatura registrada.')
      setInvoiceOpen(false)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao criar fatura.')
    }
  }

  async function generateInvoices() {
    try {
      await billing.generateInvoices.mutateAsync({})
      toast.success('Geração de faturas solicitada.')
      setGenerateOpen(false)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao gerar faturas.')
    }
  }

  async function internalPay() {
    if (!payTarget) return
    try {
      await billing.internalPay.mutateAsync({ id: payTarget.id })
      toast.success('Pagamento interno registrado.')
      setPayTarget(null)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha no pagamento.')
    }
  }

  async function loadInvoiceDetail(invoice: PortalInvoice) {
    try {
      const res = await billing.getInvoice.mutateAsync(invoice.id)
      setDetail(res.data)
      toast.success('Detalhe carregado.')
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao carregar fatura.')
    }
  }

  async function createPricingSubmit(values: { feature: string; amount: string; currency: string }) {
    try {
      await billing.createPricing.mutateAsync(values)
      toast.success('Pricing criado.')
      setCreatePricingOpen(false)
      void pricingQuery.refetch()
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao criar pricing.')
    }
  }

  async function calculateEvents(values: { type: string; quantity: string }) {
    try {
      const res = await billing.calculateEvents.mutateAsync({ type: values.type, quantity: Number(values.quantity) })
      toast.success('Cálculo concluído.')
      setDetail(res.data)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha no cálculo.')
    }
  }

  async function postEvent(values: { type: string; quantity: string }) {
    try {
      await billing.postEvent.mutateAsync({ type: values.type, quantity: Number(values.quantity) })
      toast.success('Evento registrado.')
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Falha ao registrar evento.')
    }
  }

  return (
    <div className="space-y-6">
      <PortalPageHeader
        title="Faturamento"
        description="Visão global e histórico financeiro. Para gerar faturas e operar por cliente, use o detalhe em Tenants."
        actions={
          <PortalActionButton onClick={() => void invoicesQuery.refetch()} disabled={invoicesQuery.isFetching}>
            Atualizar
          </PortalActionButton>
        }
      />

      {listFilter === 'pending' ? (
        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-warning/30 bg-warning/5 px-4 py-3 text-sm mb-4">
          <span className="text-text-primary">
            Filtro ativo: <strong>faturas pendentes</strong>
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

      <div className="flex flex-wrap gap-2 border-b border-border pb-2">
        {(
          [
            ['invoices', 'Faturas'],
            ['pricing', 'Pricing'],
            ['events', 'Eventos'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`rounded-lg px-3 py-2 text-sm ${tab === id ? 'bg-bg-surface text-text-primary font-medium' : 'text-text-secondary hover:bg-bg-secondary'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'invoices' ? (
        <>
          <PortalPageToolbar
            search={search}
            onSearchChange={setSearch}
            primaryAction={
              <PortalActionButton variant="primary" onClick={() => setInvoiceOpen(true)}>
                Nova fatura
              </PortalActionButton>
            }
            secondaryActions={
              <PortalActionButton onClick={() => setGenerateOpen(true)}>Gerar faturas</PortalActionButton>
            }
          />
          {invoicesQuery.isError ? (
            <PortalErrorState message="Erro ao carregar faturas." onRetry={() => void invoicesQuery.refetch()} />
          ) : (
            <PortalDataCard title="Faturas">
              <PortalDataGrid
                loading={invoicesQuery.isLoading}
                rows={filteredInvoices}
                rowKey={(i) => i.id}
                emptyTitle={listFilter === 'pending' ? 'Nenhuma fatura pendente' : 'Nenhuma fatura'}
                emptyMessage={
                  listFilter === 'pending'
                    ? 'Não há faturas com status pendente/aberto no momento.'
                    : 'Nenhuma fatura retornada pela API.'
                }
                columns={[
                  { id: 'id', header: 'ID', render: (i) => <span className="font-mono text-xs">{i.id}</span> },
                  { id: 'tenant', header: 'Tenant', render: (i) =>
                      i.tenantId ? (
                        <Link to={`/app/tenants/${encodeURIComponent(i.tenantId)}`} className="text-data hover:underline">
                          {i.tenantId}
                        </Link>
                      ) : (
                        '—'
                      ),
                  },
                  { id: 'amount', header: 'Valor', render: (i) => `${i.amount || '—'} ${i.currency}` },
                  { id: 'status', header: 'Status', render: (i) => <PortalStatusBadge label={i.status} tone="data" /> },
                ]}
                actions={(i) => (
                  <div className="flex gap-2 justify-end">
                    <PortalActionButton onClick={() => void loadInvoiceDetail(i)}>Detalhe</PortalActionButton>
                    <PortalActionButton onClick={() => setPayTarget(i)}>Pagar (interno)</PortalActionButton>
                  </div>
                )}
              />
            </PortalDataCard>
          )}
        </>
      ) : null}

      {tab === 'pricing' ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <PortalDataCard title="Pricing ativo">
            {pricingQuery.isError ? (
              <PortalErrorState message="Erro ao carregar pricing." onRetry={() => void pricingQuery.refetch()} />
            ) : (
              <PortalDataGrid
                loading={pricingQuery.isLoading}
                rows={pricingQuery.data ?? []}
                rowKey={(p) => p.id}
                columns={[
                  { id: 'feature', header: 'Feature', render: (p) => p.feature },
                  { id: 'amount', header: 'Valor', render: (p) => `${p.amount} ${p.currency}` },
                  {
                    id: 'active',
                    header: 'Status',
                    render: (p) => <PortalStatusBadge label={p.active ? 'Ativo' : 'Inativo'} tone={p.active ? 'success' : 'muted'} />,
                  },
                ]}
              />
            )}
            <div className="p-4 border-t border-border">
              <PortalActionButton variant="primary" onClick={() => setCreatePricingOpen(true)}>
                Criar pricing
              </PortalActionButton>
            </div>
          </PortalDataCard>
          <PortalDataCard title="Consulta por feature">
            <div className="p-4 space-y-3">
              <PortalField label="Feature">
                <PortalInput value={pricingFeature} onChange={(e) => setPricingFeature(e.target.value)} placeholder="ex.: messaging" />
              </PortalField>
              <PortalActionButton onClick={() => void featurePricing.refetch()} disabled={!pricingFeature}>
                Carregar pricing
              </PortalActionButton>
              <PortalActionButton onClick={() => void pricingHistory.refetch()} disabled={!pricingFeature}>
                Ver histórico
              </PortalActionButton>
              {(featurePricing.data ?? []).length > 0 ? (
                <PortalTechnicalPayload title="Pricing (JSON)" data={featurePricing.data} />
              ) : null}
              {(pricingHistory.data ?? []).length > 0 ? (
                <PortalTechnicalPayload title="Histórico pricing (JSON)" data={pricingHistory.data} />
              ) : null}
            </div>
          </PortalDataCard>
        </div>
      ) : null}

      {tab === 'events' ? (
        <PortalDataCard title="Eventos de billing">
          <form className="p-4 space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <PortalField label="Tipo de evento">
              <PortalInput {...eventForm.register('type')} />
            </PortalField>
            <PortalField label="Quantidade">
              <PortalInput {...eventForm.register('quantity')} />
            </PortalField>
            <div className="flex gap-2">
              <PortalActionButton variant="primary" onClick={() => void eventForm.handleSubmit(postEvent)()}>
                Registrar evento
              </PortalActionButton>
              <PortalActionButton onClick={() => void eventForm.handleSubmit(calculateEvents)()}>Calcular</PortalActionButton>
            </div>
          </form>
        </PortalDataCard>
      ) : null}

      {detail ? (
        <PortalDataCard title="Detalhe / resultado">
          <div className="p-4 text-sm text-text-secondary">
            {typeof detail === 'object' && detail !== null && 'id' in (detail as object) ? (
              <p>
                Fatura{' '}
                <span className="font-mono text-xs">{(detail as { id?: string }).id ?? '—'}</span>
              </p>
            ) : (
              <p>Resposta recebida. Ative ferramentas avançadas para ver o payload completo.</p>
            )}
            <PortalTechnicalPayload title="Payload técnico (JSON)" data={detail} />
          </div>
        </PortalDataCard>
      ) : null}

      <PortalModalShell
        open={invoiceOpen}
        title="Nova fatura"
        onClose={() => setInvoiceOpen(false)}
        footer={
          <>
            <PortalActionButton onClick={() => setInvoiceOpen(false)}>Cancelar</PortalActionButton>
            <PortalActionButton variant="primary" onClick={() => void invoiceForm.handleSubmit(createInvoiceSubmit)()}>
              Criar
            </PortalActionButton>
          </>
        }
      >
        <form className="space-y-4">
          <PortalField label="Tenant ID">
            <PortalInput {...invoiceForm.register('tenantId')} />
          </PortalField>
          <PortalField label="Valor">
            <PortalInput {...invoiceForm.register('amount')} />
          </PortalField>
          <PortalField label="Moeda">
            <PortalInput {...invoiceForm.register('currency')} />
          </PortalField>
          <PortalAdvancedJsonPanel value={advancedJson} onChange={setAdvancedJson} />
        </form>
      </PortalModalShell>

      <PortalModalShell
        open={createPricingOpen}
        title="Criar pricing"
        onClose={() => setCreatePricingOpen(false)}
        footer={
          <>
            <PortalActionButton onClick={() => setCreatePricingOpen(false)}>Cancelar</PortalActionButton>
            <PortalActionButton variant="primary" onClick={() => void pricingForm.handleSubmit(createPricingSubmit)()}>
              Salvar
            </PortalActionButton>
          </>
        }
      >
        <form className="space-y-4">
          <PortalField label="Feature">
            <PortalInput {...pricingForm.register('feature')} />
          </PortalField>
          <PortalField label="Valor">
            <PortalInput {...pricingForm.register('amount')} />
          </PortalField>
          <PortalField label="Moeda">
            <PortalInput {...pricingForm.register('currency')} />
          </PortalField>
        </form>
      </PortalModalShell>

      <PortalConfirmDialog
        open={generateOpen}
        title="Gerar faturas"
        description="Disparar o job de geração de faturas na API?"
        onCancel={() => setGenerateOpen(false)}
        onConfirm={() => void generateInvoices()}
        loading={billing.generateInvoices.isPending}
      />

      <PortalConfirmDialog
        open={Boolean(payTarget)}
        title="Pagamento interno"
        description={payTarget ? `Registrar pagamento interno da fatura ${payTarget.id}?` : ''}
        onCancel={() => setPayTarget(null)}
        onConfirm={() => void internalPay()}
        loading={billing.internalPay.isPending}
      />
    </div>
  )
}
