# Portal INFTEC — Auth0 e API

Guia para login Auth0 e consumo da API **INFTEC Portal** (somente endpoints do Swagger filtrado).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Local | Produção |
|----------|--------|----------|
| `VITE_AUTH0_DOMAIN` | `prod-inftec-saas.us.auth0.com` (sem `https://`) | idem |
| `VITE_AUTH0_CLIENT_ID` | Client ID da SPA **Inftec Portal** (não o Identifier da API) | idem |
| `VITE_AUTH0_AUDIENCE` | `https://api.saas.inftec.com` (API **Inftec SaaS API**) | idem |
| `VITE_AUTH0_CALLBACK_PATH` | `/app` | `/app` |
| `VITE_API_BASE_URL` | `http://localhost:5000` | `https://api.inftec.com.br` |
| `VITE_INFTEC_PORTAL_SWAGGER_URL` | `http://localhost:5000/swagger/inftec-portal/swagger.json` | `https://api.inftec.com.br/swagger/inftec-portal/swagger.json` |

**Nunca** commitar segredos. O frontend SPA usa apenas domain, client id e audience (sem client secret).

Reinicie o Vite após alterar `.env.local` (variáveis `VITE_*` só são lidas na subida do servidor).

### API Auth0 (Resource Server)

- **Name:** Inftec SaaS API  
- **Identifier / Audience:** `https://api.saas.inftec.com`  
- **Signing Algorithm:** RS256  

O frontend **não** usa Client Secret nem API Key.

## Configuração Auth0 (Dashboard da aplicação SPA)

**Allowed Callback URLs:**

```
http://localhost:3000/app
http://localhost:3001/app
https://inftec.com.br/app
```

**Allowed Logout URLs:**

```
http://localhost:3000/
http://localhost:3001/
https://inftec.com.br/
```

**Allowed Web Origins:**

```
http://localhost:3000
http://localhost:3001
https://inftec.com.br
```

**Allowed Origins (CORS), se aplicável:**

```
http://localhost:3000
http://localhost:3001
https://inftec.com.br
```

Tipo de aplicação: **Single Page Application**. Grant: Authorization Code + PKCE.

## CORS — API local

A API em `http://localhost:5000` deve permitir origem do Vite:

- `http://localhost:3000`
- `http://localhost:3001`

Configure CORS no backend ASP.NET (ou equivalente) para desenvolvimento. **Não** use proxy inseguro no frontend para contornar CORS.

## Testar localmente

1. Subir a API: [Swagger INFTEC Portal](http://localhost:5000/swagger/index.html?urls.primaryName=INFTEC+Portal)
2. `npm run dev` — anote a porta (3000 ou 3001)
3. Abrir o site → **Entrar** → **Portal INFTEC**
4. Login Auth0 → retorno em `/app` → redirect para `/app/dashboard`
5. **Testar API Portal INFTEC** — chama `GET /usuarios` ou `GET /plans`

## Produção

- Site: `https://inftec.com.br`
- Callback Auth0: `https://inftec.com.br/app`
- Defina `VITE_API_BASE_URL` e variáveis Auth0 no ambiente de build (Vercel)

## Endpoints usados (INFTEC Portal)

Rotas centralizadas em `src/lib/api/endpoints.ts` e services em `src/services/inftecPortal/`.

- Users: `GET/POST /usuarios`, `PATCH .../bloquear`, `PATCH .../desbloquear`
- Tenants: `POST /tenants`, `GET/POST /tenants/plan`
- Plans / features / plan-features
- Subscriptions, billing, integrations Meta

Não consumir War Room, Salefast Operation, behavioral, technical, deprecated, legacy ou internal.

## Erros comuns

| Sintoma | Causa provável | Solução |
|---------|----------------|---------|
| Tela preta no site | Router/erro JS | Console do browser; garantir `BrowserRouter` |
| Auth0 `callback mismatch` | Callback URL não cadastrada | Incluir `http://localhost:PORT/app` no Auth0 |
| Login ok, API 401/403 | Audience/scopes/API | Alinhar `VITE_AUTH0_AUDIENCE` com API; mensagem no dashboard |
| “API local não encontrada…” | API off ou URL errada | Subir API; conferir `VITE_API_BASE_URL` |
| CORS no browser | API sem origem Vite | CORS no backend para 3000/3001 |
| Auth0 não configurado | `.env.local` vazio ou sem Client ID | Preencher domain + **Client ID da SPA** + audience; reiniciar Vite |
| Clicou Portal e nada acontece | `VITE_AUTH0_CLIENT_ID` vazio | `Auth0Provider` não monta — veja lista em `/app` |
| `Callback URL mismatch` | Porta ou path errado no Auth0 | Cadastrar `http://localhost:PORT/app` (3000 **e** 3001) |
| `unauthorized_client` | App não é SPA ou client id errado | Usar application **Inftec Portal** (Single Page Application) |
| `Service not found` / audience | Audience incorreto | `VITE_AUTH0_AUDIENCE=https://api.saas.inftec.com` |

## Arquitetura no código

- `src/lib/auth/` — config Auth0, `useAccessToken`
- `src/components/auth/` — provider, `ProtectedRoute`, login/logout, `UserMenu`
- `src/lib/api/` — client HTTP autorizado (somente portal)
- `src/hooks/usePortalApiClient.ts` — usar **apenas** em páginas `/app/*`
