# INFTEC TECNOLOGIA — DOCUMENTO MASTER DO SITE INSTITUCIONAL

Versão alinhada ao posicionamento **SaaS / Salefast** (2026).

Este documento é a fonte única de verdade para o site em `inftec.com.br`. Nada deve contradizer estas diretrizes.

---

## 1. Posicionamento

**A INFTEC é:** empresa de tecnologia que desenvolve e opera o **Salefast**, plataforma SaaS de inteligência comercial orientada a comportamento.

**A INFTEC não é (e o site não pode sugerir):**

- Consultoria ou “projetos sob medida”
- Software house / body shop
- Agência de marketing
- Automação genérica ou chatbot commodity
- Freelancer com CNPJ

**Produto:** Salefast — centraliza sinais comerciais, interpreta intenção nas conversas, organiza contexto omnichannel e prioriza ação do time comercial.

**Tom de copy:** plural corporativo (“a INFTEC”, “a plataforma”), objetivo, operacional, sem hype de IA.

**Proibido na copy:** primeira pessoa de consultor (“meu método”, “projeto comigo”), WhatsApp como CTA primário, gráficos de maturidade genéricos no hero.

---

## 2. Stack e deploy

| Camada | Tecnologia |
|--------|------------|
| UI | React 18, TypeScript, Vite |
| Estilo | Tailwind CSS 3, PostCSS |
| Motion | Framer Motion (sutil) |
| Rotas | React Router 6 |
| Deploy | Vercel (SPA + arquivos estáticos em `public/`) |

**App da plataforma (fora deste repo):** `https://app.salefast.com.br`

---

## 2.1 Arquitetura de portais (obrigatória)

| Domínio | Papel |
|---------|--------|
| `inftec.com.br` | Site institucional INFTEC (este repo) |
| `portal.inftec.com.br` | Portal administrativo INFTEC — login institucional |
| `salefast.com.br` | Site institucional/comercial do produto |
| `app.salefast.com.br` | App autenticado — clientes Salefast |

Constantes em `src/lib/constants.ts`: `URLS`, `COMPANY.portalUrl`, `PRODUCT.siteUrl`, `PRODUCT.appUrl`.

**Proibido:** botão genérico “Entrar”. Usar **Portal INFTEC**, **Site Salefast**, **App Salefast**.

**Header:** Portal INFTEC (ghost) + Conhecer Salefast (primary → salefast.com.br).

---

## 3. Arquitetura de páginas

| Rota | Página | Objetivo |
|------|--------|----------|
| `/` | Home | Produto + narrativa + prova (PlatformPreview) |
| `/produto` | Produto | Profundidade Salefast |
| `/solucoes` | Soluções | Verticais (imobiliárias, B2B, atendimento) |
| `/seguranca` | Segurança | LGPD, governança, engenharia |
| `/empresa` | Empresa | Razão social, missão SaaS |
| `/contato` | Contato | Demo via e-mail corporativo |
| `/privacidade` | Legal | Meta / enterprise |
| `/termos` | Legal | SaaS |
| `/cookies` | Legal | Consentimento |

Todas as rotas usam `Layout` (Header + Footer + MobileStickyCTA).

---

## 4. Header e CTAs

**Desktop:** Logo · Produto · Soluções · Segurança · Empresa · **Entrar** (ghost) · **Agendar demonstração** (primary → `/contato`)

**Mobile:** menu hambúrguer com mesmos links + Entrar + Agendar demonstração. Barra fixa inferior: **Entrar** + **Agendar demo**.

**Entrar:** sempre `https://app.salefast.com.br` (`PRODUCT.appUrl` em `src/lib/constants.ts`).

**Demonstração:** `/contato` com fluxo `mailto:contato@inftec.com.br` (assunto Demo Salefast). Não usar WhatsApp como conversão principal.

---

## 5. Home — seções (ordem fixa)

1. Hero (headline aprovada + PlatformPreview)
2. O problema
3. O que é o Salefast
4. Como funciona (pipeline operacional)
5. IA aplicada à operação
6. Solução para imobiliárias
7. Segurança e governança (teaser)
8. CTA final

**Hero — copy oficial:**

- Headline: *Priorize oportunidades reais antes que o lead esfrie.*
- Sub: *O Salefast centraliza sinais comerciais, interpreta intenção de compra nas conversas e organiza a operação para que times comerciais saibam onde agir agora.*
- CTAs: Agendar demonstração · Ver plataforma · Entrar

**Hero visual:** componente `PlatformPreview` (UI operacional). Proibido SVG de maturidade / dashboard consultoria.

---

## 6. Identidade visual

**Sensação:** dark premium enterprise (Linear / Vercel / Retool — inspirar, não copiar).

**Cores (Tailwind `theme.extend.colors`):**

- Fundos: `bg-deep`, `bg-primary`, `bg-secondary`, `bg-surface`
- Texto: `text-primary`, `text-secondary`, `text-muted`
- Accent CTA: `accent` (#c05621)
- Dados / sinais: `data` (#38bdf8)

**Tipografia:** Inter (UI), JetBrains Mono (scores, timestamps). Sem H1 uppercase agressivo.

**Proibido:** partículas, glow excessivo, ícones de cérebro/robô, estética agência.

---

## 7. Estrutura de pastas

```
src/
  components/
    layout/       Header, Footer, Layout, MobileStickyCTA
    platform/     PlatformPreview
    ui/           Button, Container (+ Section, SectionHeader)
    PageMeta.tsx, LegalLayout.tsx
  pages/          Uma página por rota
  sections/home/  HomeHero, HomeSections
  lib/constants.ts
  App.tsx, main.tsx, index.css
public/
  robots.txt, sitemap.xml, og-image.png, favicon.svg
```

Não manter CSS legado em `src/styles/` (removido). Tokens vivem em `tailwind.config.js` + `index.css`.

---

## 8. SEO e meta

- `PageMeta` em **todas** as páginas: `title`, `description`, `path` (canonical + `og:url`).
- `og:image` global: `https://inftec.com.br/og-image.png` (arquivo em `public/og-image.png`).
- `index.html`: defaults + Google verification.
- `public/sitemap.xml`: todas as rotas públicas.

---

## 9. Vercel / SPA

`vercel.json` reescreve para `index.html` exceto assets build, `og-image.png`, `favicon.svg`, `robots.txt`, `sitemap.xml`.

---

## 10. Footer obrigatório

- Razão social, CNPJ, cidade
- Links: produto, soluções, legal, contato
- E-mails: contato@, privacidade@, security@
- Referência ao app Salefast

---

## 11. Checklist pré-deploy

- [ ] `npm run build` sem erros
- [ ] Entrar → app.salefast.com.br (header desktop/mobile + sticky mobile)
- [ ] Nenhuma copy de consultoria / 1ª pessoa
- [ ] sitemap.xml e robots.txt acessíveis
- [ ] og-image.png existe em public/
- [ ] Páginas legais linkadas no footer
- [ ] Demo via /contato (e-mail), não WhatsApp primário

---

## 12. Evoluções externas ao repo

- Substituir `PlatformPreview` por screenshots reais do app (com anonimização).
- Formulário de demo (HubSpot/Calendly) no lugar de mailto.
- Banner de cookies funcional ligado a `/cookies`.
- Node 20+ no CI/Vercel (recomendado).

---

**Objetivo final:** quem visita conclui *“empresa séria com plataforma SaaS”* — não *“prestadora de serviços de TI”*.
