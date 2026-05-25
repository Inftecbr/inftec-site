# INFTEC Platform — mapa do frontend

- `config/` — domínios, navegação, metadados de plataforma (BFF, superfícies)
- `routes/` — rotas públicas vs portal (`/app`)
- `features/access-hub/` — modal de acesso (Entrar)
- `features/platform-hub/` — seções da página `/plataforma`
- `components/navigation/SiteHeader.tsx` — header do hub público
- `pages/public/` — páginas públicas adicionais
- `pages/portal/` — shell autenticado INFTEC

Legado em `pages/*.tsx` permanece até migração completa para `pages/public/`.
