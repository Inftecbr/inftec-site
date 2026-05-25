# Auditoria funcional — Portal INFTEC (frontend)

Atualizado após correções de UX, mensagens HTTP e botões com feedback.

## 1. Mapa por rota

| Rota | Arquivo | API | Endpoint(s) | Status típico |
|------|---------|-----|-------------|----------------|
| `/app/dashboard` | `PortalDashboardPage.tsx` | Sim (probe) | GET `/usuarios` → `/plans` | Depende da API |
| `/app/users` | `PortalUsersPage.tsx` | Sim | GET/POST `/usuarios` | **500** reportado no backend |
| `/app/tenants` | `PortalTenantsPage.tsx` | Parcial | POST `/tenants`, GET `/tenants/plan` | **UI placeholder** (sem GET list) |
| `/app/plans` | `PortalPlansPage.tsx` | Sim | GET/POST `/plans` | Depende da API |
| `/app/features` | `PortalFeaturesPage.tsx` | Sim | GET/POST `/features` | Depende da API |
| `/app/billing` | `PortalBillingPage.tsx` | Sim | GET `/billing/invoices`, GET `/billing/pricing/active` | Depende da API |
| `/app/subscriptions` | `PortalSubscriptionsPage.tsx` | Sim | GET `/subscriptions/active` | **404** se rota ausente no backend local |
| `/app/integrations` | `PortalIntegrationsPage.tsx` | Sim | GET/POST `/integrations/meta` | **404** se rota ausente |
| `/app/diagnostics` | `PortalDiagnosticsPage.tsx` | Teste manual | GET `/usuarios` → `/plans` | Técnico |
| `/app/settings` | `PortalSettingsPage.tsx` | Não | — | **UI placeholder** (env local) |

Cada página de lista inclui: loading, error (com mensagens 404/500/CORS), empty via `PortalDataTable`, etiqueta `PortalPageStatus`.

## 2. Navegação

| Interação | Classificação |
|-----------|----------------|
| Sidebar / mobile nav (`NavLink`) | **FUNCIONAL** |
| Topbar, logout, site | **FUNCIONAL** |
| Cards “Abrir módulo” (`PortalModuleCard` → `Link`) | **FUNCIONAL** |
| Atalhos dashboard | **FUNCIONAL** |
| ~~Pricing → Diagnóstico~~ | **CORRIGIDO** — seção Pricing em `/app/billing` |

## 3. Botões de criação / ações

| Botão | Comportamento |
|-------|----------------|
| Criar usuário | Modal JSON → POST `/usuarios` |
| Criar plano | Modal JSON → POST `/plans` |
| Criar feature | Modal JSON → POST `/features` |
| Criar tenant | Modal JSON → POST `/tenants` |
| Criar fatura | Modal JSON → POST `/billing/invoices` |
| Configurar Meta | Modal JSON → POST `/integrations/meta` |
| Ver plano do tenant | GET `/tenants/plan` |
| Carregar pricing ativo | GET `/billing/pricing/active` |
| Gerar faturas / Nova subscription / Remover Meta / Listar tenants (UI) | **PLACEHOLDER EXPLÍCITO** (`PortalNotImplementedAction`) |

## 4. Services × Swagger INFTEC Portal

| Service | Endpoint | Método | No Swagger Portal | Observação |
|---------|----------|--------|-------------------|------------|
| usersService | `/usuarios` | GET, POST | Sim | 500 = erro backend |
| usersService | `/usuarios/{id}/bloquear` | PATCH | Sim | Não usado na UI ainda |
| plansService | `/plans` | GET, POST | Sim | |
| featuresService | `/features` | GET, POST | Sim | |
| tenantsService | `/tenants` | POST | Sim | Sem GET list |
| tenantsService | `/tenants/plan` | GET, POST | Sim | GET na UI Tenants |
| billingService | `/billing/invoices` | GET, POST | Sim | |
| billingService | `/billing/pricing/active` | GET | Sim | Seção Billing |
| subscriptionsService | `/subscriptions/active` | GET | Sim | 404 se backend desatualizado |
| integrationsService | `/integrations/meta` | GET, POST, DELETE | Sim | 404 se backend desatualizado |

## 5. Mensagens de erro (frontend)

| Caso | Mensagem |
|------|----------|
| 404 | Endpoint não encontrado na API local… Swagger INFTEC Portal atualizado |
| 500+ | API respondeu com erro interno… Portal autenticado, backend falhou |
| Network/CORS | Não foi possível acessar a API… fora do ar ou bloqueando CORS |
| 401/403 | Login ok, token/audience/scopes não autorizam |

## 6. O que funciona vs depende da API

**Funcionando (frontend):** Auth0, rotas, sidebar, layout, modais POST, etiquetas de status, probe dashboard, diagnóstico.

**Parcial:** Listagens quando a API responde 2xx; POST depende de payload válido.

**Depende da API (.NET):** GET `/usuarios` (500), GET `/subscriptions/active` (404), GET `/integrations/meta` (404), qualquer rota não deployada no ambiente local.

**Placeholder honesto:** Tenants listagem, Settings, partes de Billing (gerar faturas UI completa).

## 7. Arquivos alterados nesta auditoria

- `src/lib/api/apiClient.ts`, `apiError.ts`, `portalNetworkError.ts`
- `src/hooks/useAsyncResource.ts`, `portalPageStatus.ts`
- `src/components/portal/ui/PortalPageStatus.tsx`
- `src/components/portal/PortalPostJsonModal.tsx`, `PortalJsonCreateButton.tsx`, `PortalNotImplementedAction.tsx`
- Páginas em `src/pages/portal/*.tsx`
- Este documento

## 8. Validação

```bash
npm run build
```

Nenhuma chamada a `/health` no repositório.
