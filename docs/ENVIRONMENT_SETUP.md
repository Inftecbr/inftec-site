# Configuração de ambiente (Vite + Portal INFTEC)

## Arquivos

| Arquivo | Commitar? | Função |
|---------|-----------|--------|
| `.env.example` | Sim | Modelo com placeholders — **sem** Client ID real |
| `.env.local` | **Não** (`.gitignore`) | Valores da sua máquina / dev local |
| `.env.development` / `.env.production` | Opcional | Overrides por mode (não usados hoje) |

O Vite **não** lê variáveis sem prefixo `VITE_` no frontend. Nunca coloque Client Secret ou API Key aqui.

## Criar `.env.local` rapidamente

```bash
npm run env:setup
```

Cria `.env.local` a partir de `scripts/env-local-template.txt` **somente se o arquivo não existir** (não sobrescreve seu Client ID).

## Variáveis obrigatórias (Auth0)

| Variável | Exemplo local | Descrição |
|----------|---------------|-----------|
| `VITE_AUTH0_DOMAIN` | `prod-inftec-saas.us.auth0.com` | Host do tenant (**sem** `https://`) |
| `VITE_AUTH0_CLIENT_ID` | *(Auth0 Dashboard)* | Client ID da SPA **Inftec Portal** |
| `VITE_AUTH0_AUDIENCE` | `https://api.saas.inftec.com` | Identifier da API **Inftec SaaS API** |
| `VITE_AUTH0_CALLBACK_PATH` | `/app` | Path do callback (`redirect_uri = origin + path`) |

## Variáveis recomendadas (API portal)

| Variável | Exemplo local |
|----------|---------------|
| `VITE_API_BASE_URL` | `http://localhost:5000` |
| `VITE_INFTEC_PORTAL_SWAGGER_URL` | `http://localhost:5000/swagger/inftec-portal/swagger.json` |

## Preencher Client ID

1. Auth0 Dashboard → **Applications** → **Inftec Portal** (tipo **Single Page Application**).
2. Copie **Client ID** (não confundir com o Identifier da API `https://api.saas.inftec.com`).
3. Cole em `.env.local`:
   ```env
   VITE_AUTH0_CLIENT_ID=seu_client_id_aqui
   ```
4. **Pare e suba de novo** o dev server: `npm run dev`.

O Vite embute `import.meta.env` na **subida** do servidor. Hot reload **não** recarrega `.env.local`.

### Não aparece no Explorer do Cursor?

`.env.local` está no **`.gitignore`**, e o Cursor **oculta** arquivos ignorados por padrão.

- **Abrir direto:** `Ctrl+P` → digite `.env.local` → Enter  
- **Ou terminal:** `notepad .env.local` (na pasta `inftec-site`)  
- **Caminho completo:** `C:\INFTEC-PROJECTS\Site-Institucional\inftec-site\.env.local`  
- Este repo inclui `.vscode/settings.json` com `"explorer.excludeGitIgnore": false` para o arquivo aparecer na árvore após recarregar a janela.

## Como saber se o env carregou

- **Console do browser (dev):** mensagem `[env] Auth0: variáveis obrigatórias presentes` ou lista do que falta.
- **`/app` sem login:** painel **Configuração carregada (Vite)** com domain, audience, Client ID mascarado.
- **`/app/dashboard` (autenticado):** mesma seção de diagnóstico no final da página.

Se `Client ID` aparecer como `(não definido — preencha .env.local)`, o Auth0 **não** inicia redirect.

## Rodar local

```bash
npm run env:setup   # se ainda não tiver .env.local
# editar .env.local → VITE_AUTH0_CLIENT_ID
npm run dev
```

Site: `http://localhost:3000` (ou `3001` se 3000 ocupada).  
API: `http://localhost:5000`.

## Auth0 (checklist rápido)

Callback URLs devem incluir `http://localhost:3000/app`, `http://localhost:3001/app` e `https://inftec.com.br/app`.  
Detalhes: [PORTAL-AUTH-API.md](./PORTAL-AUTH-API.md).

## Problemas comuns

| Sintoma | Causa | Ação |
|---------|--------|------|
| Clicou Portal e nada acontece | `VITE_AUTH0_CLIENT_ID` vazio | Preencher + reiniciar Vite |
| Console: variáveis ausentes | Sem `.env.local` ou vazio | `npm run env:setup` + editar |
| Alterou `.env` mas não mudou | Hot reload | Reiniciar `npm run dev` |
| Callback mismatch | Porta errada no Auth0 | Cadastrar `/app` na porta que o Vite usa |
| Audience / 401 na API | Identifier errado | `VITE_AUTH0_AUDIENCE=https://api.saas.inftec.com` |

## Causa raiz típica

Sem `.env.local` funcional (ou sem **Client ID**), `validateRequiredEnv()` falha, o `Auth0Provider` **não monta** e `loginToPortal()` não redireciona — o app parecia “silenciosamente não configurado”. O frontend agora exibe erro explícito e diagnóstico em `/app`.

## Produção

Defina as mesmas `VITE_*` no painel da Vercel (ou CI) no **build**. Não commitar `.env.local`.
