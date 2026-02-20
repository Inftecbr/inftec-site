# INFTEC TECNOLOGIA
## Tecnologia com estrutura. Crescimento com direção.

---

# 1. OBJETIVO DO PROJETO

Criar um site institucional premium, sofisticado e profissional que transmita:

- Competência técnica
- Estrutura
- Responsabilidade
- Confiabilidade
- Crescimento sustentável

O site deve demonstrar profundidade estratégica, não superficialidade comercial.

Deve parecer uma empresa estruturada, não uma agência genérica.

---

# 2. STACK TECNOLÓGICA

Frontend:
- React
- TypeScript
- Vite
- SPA (Single Page Application)

Deploy:
- Vercel

Código organizado e preparado para futura expansão.

---

# 3. ESTRUTURA DE PASTAS

inftec-site/
│
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo/
│   │   │   │   ├── inftec-logo.svg
│   │   │   │   ├── inftec-logo-dark.svg
│   │   │   │   └── inftec-logo-mark.svg
│   │   │   │
│   │   │   ├── hero/
│   │   │   │   └── dashboard-mockup.png
│   │   │   │
│   │   │   ├── graphics/
│   │   │   │   └── efficiency-chart.svg
│   │   │   │
│   │   │   └── backgrounds/
│   │   │       └── subtle-grid.svg
│   │   │
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SectionWrapper.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solutions.tsx
│   │   ├── Impact.tsx
│   │   ├── Competence.tsx
│   │   └── Contact.tsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
└── vite.config.ts

---

# 3.1 ARQUITETURA DE SEÇÕES (OBRIGATÓRIO)

Cada seção deve ser um arquivo isolado dentro de:

src/sections/

Cada seção deve conter:

- Um <section>
- Fundo explícito
- Padding vertical mínimo de 120px
- Container interno com max-width 1200px
- Margin: 0 auto
- Padding lateral mínimo de 24px

Nenhuma seção pode compartilhar background com a anterior.

---

# REGRA DE FUNDO POR SEÇÃO

Hero → var(--color-bg-primary)  
Problem → var(--color-bg-secondary)  
Solutions → var(--color-bg-primary)  
Impact → var(--color-bg-secondary)  
Competence → var(--color-bg-primary)  
Contact → var(--color-bg-secondary)  

Alternância obrigatória.

---

# 4. IDENTIDADE VISUAL

## Fundo Principal
#0E1116

## Fundo Secundário
#1B1F27

## Texto Principal
#E6E8EB

## Texto Secundário
#8F9AA6

## Destaque Estratégico
#C05621

Uso da cor de destaque apenas em:

- Botões
- Hover
- Elementos estratégicos
- Linha do gráfico

Nunca exagerar.

---

# 5. VARIÁVEIS CSS

Arquivo: styles/variables.css

:root {
  --color-bg-primary: #0E1116;
  --color-bg-secondary: #1B1F27;
  --color-text-primary: #E6E8EB;
  --color-text-secondary: #8F9AA6;
  --color-accent: #C05621;
}

---

# 6. ESTRUTURA DA PÁGINA

---

## HERO SECTION

Layout 50/50

Texto:

INFTEC  
TECNOLOGIA  

Estruturamos tecnologia para empresas que querem crescer com previsibilidade.

Transformamos operações manuais e desorganizadas em sistemas digitais eficientes, automatizados e mensuráveis.

[ Fale conosco ]  
[ Conheça nossa abordagem ]

Imagem:

Mockup escuro sofisticado de dashboard.
Nada genérico.
Nada banco de imagem clichê.

---

## SEÇÃO 2 – O PROBLEMA

Título:
Crescer sem estrutura é crescer no escuro.

- Processos desorganizados
- Falta de controle de dados
- Baixa previsibilidade
- Retrabalho
- Decisões baseadas em tentativa e erro

---

## SEÇÃO 3 – A ABORDAGEM

Título:
Estrutura antes de escala.

Organizamos:

- Fluxos operacionais
- Integrações
- Dados
- Automação
- Indicadores de performance

---

## SEÇÃO 4 – IMPACTO ESTRUTURAL

Layout obrigatório:
Grid 2 colunas equilibradas.

Título:
Crescimento precisa ser estruturado antes de ser acelerado.

Subtítulo:
Não prometemos números mágicos. Estrutura gera evolução consistente.

Coluna esquerda:

- Redução de retrabalho
- Processos padronizados
- Dados centralizados
- Clareza de indicadores
- Base pronta para escalar

Texto final:

Organização gera previsibilidade.  
Previsibilidade sustenta crescimento.

Coluna direita:

Arquivo:
src/assets/images/graphics/efficiency-chart.svg

### SVG BASE

```svg
<svg width="480" height="300" viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="480" height="300" rx="16" fill="#151A22"/>
  <line x1="60" y1="40" x2="60" y2="240" stroke="#2A3038"/>
  <line x1="60" y1="240" x2="440" y2="240" stroke="#2A3038"/>

  <polyline 
    fill="none"
    stroke="#C05621"
    stroke-width="3"
    points="60,220 130,200 200,170 270,150 340,135 410,120"
  />

  <circle cx="60" cy="220" r="4" fill="#C05621"/>
  <circle cx="130" cy="200" r="4" fill="#C05621"/>
  <circle cx="200" cy="170" r="4" fill="#C05621"/>
  <circle cx="270" cy="150" r="4" fill="#C05621"/>
  <circle cx="340" cy="135" r="4" fill="#C05621"/>
  <circle cx="410" cy="120" r="4" fill="#C05621"/>

  <text x="60" y="25" fill="#E6E8EB" font-size="14" font-weight="600">
    Evolução da Maturidade Operacional
  </text>
</svg>