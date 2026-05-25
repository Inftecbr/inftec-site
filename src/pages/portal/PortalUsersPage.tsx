import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import PortalDataGrid, { PortalStatusBadge } from '../../components/portal/data/PortalDataGrid'
import PortalConfirmDialog, { PortalModalShell } from '../../components/portal/feedback/PortalConfirmDialog'
import { usePortalToast } from '../../components/portal/feedback/PortalToastProvider'
import { PortalAdvancedJsonPanel, PortalField, PortalInput } from '../../components/portal/forms/PortalFormFields'
import PortalPageToolbar, { PortalActionButton } from '../../components/portal/layout/PortalPageToolbar'
import {
  PortalDataCard,
  PortalErrorState,
  PortalPageHeader,
  PortalPageStatus,
} from '../../components/portal/ui'
import { derivePortalPageStatus } from '../../hooks/portalPageStatus'
import { usePortalUserMutations, usePortalUsersQuery } from '../../portal/query/hooks'
import type { PortalUser } from '../../types/portal/models'
import { isApiError } from '../../lib/api/apiError'

const createSchema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  name: z.string().min(2, 'Nome obrigatório'),
})

type CreateForm = z.infer<typeof createSchema>

export default function PortalUsersPage() {
  const toast = usePortalToast()
  const { data = [], isLoading, isError, error, refetch, isFetching } = usePortalUsersQuery()
  const { create, block, unblock } = usePortalUserMutations()
  const [search, setSearch] = useState('')
  const [createOpen, setCreateOpen] = useState(false)
  const [confirm, setConfirm] = useState<{ type: 'block' | 'unblock'; user: PortalUser } | null>(null)
  const [advancedJson, setAdvancedJson] = useState('')

  const form = useForm<CreateForm>({
    resolver: zodResolver(createSchema),
    defaultValues: { email: '', name: '' },
  })

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return data
    return data.filter((u) => u.email.toLowerCase().includes(q) || u.name.toLowerCase().includes(q) || u.id.includes(q))
  }, [data, search])

  const statusVariant = derivePortalPageStatus(
    isLoading ? { status: 'loading' } : isError ? { status: 'error', message: '' } : { status: 'success', data },
    { hasData: data.length > 0 }
  )

  async function submitCreate(values: CreateForm) {
    try {
      const body =
        advancedJson.trim() !== ''
          ? (JSON.parse(advancedJson) as unknown)
          : { email: values.email, name: values.name, nome: values.name }
      await create.mutateAsync(body)
      toast.success('Usuário criado com sucesso.')
      setCreateOpen(false)
      form.reset()
      setAdvancedJson('')
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Não foi possível criar o usuário.')
    }
  }

  async function runConfirm() {
    if (!confirm) return
    try {
      if (confirm.type === 'block') await block.mutateAsync(confirm.user.id)
      else await unblock.mutateAsync(confirm.user.id)
      toast.success(confirm.type === 'block' ? 'Usuário bloqueado.' : 'Usuário desbloqueado.')
      setConfirm(null)
    } catch (e) {
      toast.error(isApiError(e) ? e.friendlyMessage : 'Operação não concluída.')
    }
  }

  return (
    <div>
      <PortalPageHeader
        title="Usuários"
        description="Governança de contas da plataforma SaaS."
        actions={
          <>
            <PortalPageStatus variant={statusVariant} />
            <PortalActionButton onClick={() => void refetch()} disabled={isFetching}>
              {isFetching ? 'Atualizando…' : 'Atualizar'}
            </PortalActionButton>
          </>
        }
      />

      <PortalPageToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Buscar por nome, e-mail ou ID"
        primaryAction={
          <PortalActionButton variant="primary" onClick={() => setCreateOpen(true)}>
            Novo usuário
          </PortalActionButton>
        }
      />

      {isError ? (
        <PortalErrorState
          message={error instanceof Error ? error.message : 'Erro ao carregar usuários.'}
          onRetry={() => void refetch()}
        />
      ) : (
        <PortalDataCard title="Contas">
          <PortalDataGrid
            loading={isLoading}
            rows={filtered}
            rowKey={(u) => u.id}
            emptyTitle="Nenhum usuário"
            emptyMessage="Crie o primeiro usuário ou ajuste a busca."
            columns={[
              { id: 'name', header: 'Nome', render: (u) => <span className="text-text-primary font-medium">{u.name}</span> },
              { id: 'email', header: 'E-mail', render: (u) => u.email || '—' },
              { id: 'id', header: 'ID', render: (u) => <span className="font-mono text-xs">{u.id}</span> },
              {
                id: 'status',
                header: 'Status',
                render: (u) => (
                  <PortalStatusBadge
                    label={u.statusLabel}
                    tone={u.blocked ? 'warning' : 'success'}
                  />
                ),
              },
            ]}
            actions={(u) => (
              <div className="flex flex-wrap gap-2 justify-end">
                {u.blocked ? (
                  <PortalActionButton onClick={() => setConfirm({ type: 'unblock', user: u })}>Desbloquear</PortalActionButton>
                ) : (
                  <PortalActionButton onClick={() => setConfirm({ type: 'block', user: u })}>Bloquear</PortalActionButton>
                )}
              </div>
            )}
          />
        </PortalDataCard>
      )}

      <PortalModalShell
        open={createOpen}
        title="Novo usuário"
        description="Cadastro administrativo de conta."
        onClose={() => setCreateOpen(false)}
        footer={
          <>
            <PortalActionButton onClick={() => setCreateOpen(false)}>Cancelar</PortalActionButton>
            <PortalActionButton variant="primary" onClick={() => void form.handleSubmit(submitCreate)()} disabled={create.isPending}>
              {create.isPending ? 'Salvando…' : 'Criar usuário'}
            </PortalActionButton>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(e) => void form.handleSubmit(submitCreate)(e)}>
          <PortalField label="E-mail" error={form.formState.errors.email?.message}>
            <PortalInput type="email" {...form.register('email')} />
          </PortalField>
          <PortalField label="Nome" error={form.formState.errors.name?.message}>
            <PortalInput {...form.register('name')} />
          </PortalField>
          <PortalAdvancedJsonPanel value={advancedJson} onChange={setAdvancedJson} />
        </form>
      </PortalModalShell>

      <PortalConfirmDialog
        open={Boolean(confirm)}
        title={confirm?.type === 'block' ? 'Bloquear usuário' : 'Desbloquear usuário'}
        description={
          confirm
            ? `${confirm.type === 'block' ? 'Bloquear' : 'Desbloquear'} ${confirm.user.name} (${confirm.user.email || confirm.user.id})?`
            : ''
        }
        destructive={confirm?.type === 'block'}
        loading={block.isPending || unblock.isPending}
        onCancel={() => setConfirm(null)}
        onConfirm={() => void runConfirm()}
      />
    </div>
  )
}
