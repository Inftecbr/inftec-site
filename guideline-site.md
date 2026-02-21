# INFTEC TECNOLOGIA  
## Arquitetura Digital para Negócios

---

# DOCUMENTO MASTER – DIRETRIZES TÉCNICAS E VISUAIS

Este documento define TODAS as regras obrigatórias do site institucional da INFTEC.

Nada deve ser implementado fora destas diretrizes.

---

# 1. POSICIONAMENTO

A INFTEC é:

Arquitetura digital para empresas que querem crescer com estrutura.

Não é:
- Agência de marketing
- Curso online
- Landing page agressiva
- Produto milagroso
- Freelancer tech

O site deve transmitir:

- Estrutura
- Método
- Autoridade
- Energia controlada
- Organização
- Crescimento sustentável

---

# 2. STACK

Frontend:
- React
- TypeScript
- Vite
- SPA

Deploy:
- Vercel

---

# 3. ESTRUTURA DE PASTAS

inftec-site/

public/
- favicon.ico
- robots.txt
- sitemap.xml
- og-image.png

src/
  assets/
    images/
      logo/inftec-logo.svg
      hero/dashboard-mockup.png
      graphics/efficiency-chart.svg
    icons/

  components/
    Navbar.tsx
    Footer.tsx
    Button.tsx
    SectionWrapper.tsx

  sections/
    Hero.tsx
    Tension.tsx
    Architecture.tsx
    Impact.tsx
    Competence.tsx
    CTA.tsx

  styles/
    variables.css
    globals.css
    animations.css

  App.tsx
  main.tsx

index.html
vite.config.ts
package.json

---

# 4. IDENTIDADE VISUAL

Fundo Principal: #0E1116  
Fundo Secundário: #151A22  
Fundo Alternado: #1B1F27  

Texto Principal: #E6E8EB  
Texto Secundário: #8F9AA6  

Cor Estratégica: #C05621  

Regras:

- Laranja usado apenas em:
  - Botões
  - Hover
  - Ícones estratégicos
  - Linhas de destaque
  - Elementos gráficos

- Nunca usar laranja como fundo dominante.
- Predominância visual escura obrigatória.

---

# 5. ESTRUTURA DA HOMEPAGE

Ordem obrigatória:

1. Hero
2. Tensão
3. Arquitetura
4. Modelo de Maturidade
5. Competência
6. CTA Final
7. Footer

Cada seção deve:

- Ter padding vertical de 120px (desktop)
- Ter padding vertical de 80px (mobile)
- Alternar fundo
- Usar container centralizado
- Nunca “escapar” visualmente para outra seção

---

# 6. CONTAINER GLOBAL (OBRIGATÓRIO)

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

Mobile:
padding: 0 16px;

Nenhum conteúdo pode encostar na borda da tela.

---

# 7. HERO

Layout Desktop:
- 50% texto
- 50% visual
- Altura mínima 90vh

Título:

Negócios crescem.  
Estruturas sustentam.

Subtítulo:

A INFTEC projeta arquiteturas digitais para empresas que querem crescer com previsibilidade e eficiência.

Botões:

Primário:
Quero estruturar meu crescimento

Secundário:
Conhecer o método

Regras Mobile:

- Layout coluna única
- Texto centralizado
- Botões largura 100%
- Imagem abaixo do texto
- Espaçamento mínimo 32px entre texto e imagem
- Headline reduz 20%

---

# 8. MENU MOBILE (OBRIGATÓRIO FUNCIONAR)

Deve funcionar abaixo de 1024px.

Comportamento obrigatório:

- Abrir ao clicar no ícone
- Fechar ao clicar em link
- Fechar ao clicar fora
- Fechar ao rolar página

Estilo:

- position: absolute
- top: 72px
- right: 16px
- width: calc(100% - 32px)
- max-width: 320px
- background: #151A22
- border-radius: 16px
- padding: 24px
- box-shadow forte
- flex-direction: column
- gap: 20px

Links:
- font-size mínimo 16px
- área clicável confortável

---

# 9. TENSÃO

Título:

Escalar sem estrutura é apostar no caos.

Lista com ícones obrigatórios.

Cada item deve ter:

- Ícone SVG 20px
- Cor #C05621
- margin-right 12px
- Texto alinhado verticalmente

Proibido bullet simples sem ícone.

---

# 10. ARQUITETURA (MÉTODO)

Grid Desktop:
3 colunas
2 linhas
gap 24px

Mobile:
1 coluna

Cards devem ter:

- Fundo #1B1F27
- Padding 32px desktop
- Padding 24px mobile
- Border sutil
- Hover com leve elevação
- Número grande no fundo com opacidade baixa

---

# 11. MODELO DE MATURIDADE (GRÁFICO)

Regras CRÍTICAS:

O SVG NÃO pode ter:

- width fixo
- height fixo
- px fixo

Deve ter:

- viewBox apenas
- width: 100%
- height: auto

Container gráfico:

Desktop:
- max-width 480px
- margin 0 auto

Mobile:
- width 100%
- gráfico acima do texto
- centralizado
- nunca alinhado à esquerda
- largura mínima visual 280px

Layout mobile:

- coluna única
- gráfico primeiro
- texto depois

Proibido gráfico minúsculo.

---

# 12. COMPETÊNCIA

Grid Desktop:
2 colunas

Mobile:
1 coluna

Itens com ícones obrigatórios.

Nunca lista simples sem reforço visual.

---

# 13. CTA FINAL

Título grande centralizado.

Botão:

Estruturar minha operação

Mobile:
Botão largura 100%

---

# 14. FOOTER

Deve conter:

INFTEC TECNOLOGIA LTDA  
CNPJ: 47.281.110/0001-32  
São Paulo – SP  
© 2026  

Estilo:

- Texto secundário
- Centralizado
- Border-top sutil
- Padding vertical 48px

---

# 15. RESPONSIVIDADE (OBRIGATÓRIA)

Breakpoints:

1024px:
- Menu vira hamburguer
- Grid 3 → 2

768px:
- Todas grids → 1
- Padding lateral 16px
- Botões largura 100%

480px:
- Headline -20%
- Espaçamento vertical -15%

Nenhum elemento pode:

- Ficar menor que 280px visualmente
- Grudar na lateral
- Quebrar layout
- Sobrepor texto

---

# 16. SEO

index.html deve conter:

<meta name="description" content="Arquitetura digital para empresas que querem crescer com estrutura e previsibilidade.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-site-verification" content="luQsmK5G-kMhaM8svwkPd1ePwu68hp1B6Mtrk1Kw7PA">

robots.txt:

User-agent: *
Allow: /
Sitemap: https://inftec.com.br/sitemap.xml

---

# 17. CHECKLIST FINAL

Antes de publicar:

✔ Menu mobile abre e fecha corretamente  
✔ Menu fecha ao clicar em link  
✔ Gráfico ocupa largura total no mobile  
✔ Ícones presentes nas listas  
✔ Seções claramente separadas  
✔ Texto nunca encosta nas bordas  
✔ Botões confortáveis no mobile  
✔ Nenhum elemento minúsculo  

---

# OBJETIVO FINAL

O visitante deve sentir:

- Estrutura
- Clareza
- Organização
- Energia controlada
- Profissionalismo

Nunca deve sentir:

- Amadorismo
- Layout quebrado
- Marketing exagerado
- Vibração infantil
- Desorganização

# INFTEC TECNOLOGIA TOPICO OPERACIONAL
## DOCUMENTO MASTER – HOME ESTÁVEL V1

============================================================
1. OBJETIVO DESTE DOCUMENTO
============================================================

Este documento define a engenharia completa da HOME da INFTEC.

Objetivo:
- Estabilidade visual
- Responsividade real
- Hierarquia clara
- Mobile funcional
- Zero improviso

Este documento NÃO trata de múltiplas páginas.
Foco absoluto na HOME.

============================================================
2. SISTEMA DE LAYOUT BASE
============================================================

2.1 Container Global

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}

Regra:
Nenhum conteúdo pode encostar na borda.

------------------------------------------------------------

2.2 Sistema de Espaçamento

Base de espaçamento: múltiplos de 8px.

Seções:
- Desktop: padding-top e bottom 120px
- Mobile: padding-top e bottom 80px

Componentes:
- Gap padrão grid: 24px
- Gap interno cards: 32px (desktop), 24px (mobile)
- Espaço entre título e subtítulo: 16px
- Espaço entre subtítulo e botão: 24px

============================================================
3. SISTEMA DE CORES
============================================================

Fundo Principal: #0E1116
Fundo Secundário: #151A22
Fundo Alternado: #1B1F27

Texto Principal: #E6E8EB
Texto Secundário: #8F9AA6

Cor Estratégica: #C05621

Regras:
- Alternar fundo a cada seção.
- Nunca repetir fundo em duas seções consecutivas.
- Laranja apenas em botões, ícones e destaques.

============================================================
4. SISTEMA DE TIPOGRAFIA
============================================================

H1:
- 48px desktop
- 36px tablet
- 28px mobile
- font-weight: 700
- line-height: 1.2

H2:
- 32px desktop
- 26px tablet
- 22px mobile

Texto padrão:
- 18px desktop
- 16px mobile
- line-height: 1.6

Regra:
Textos longos max-width: 720px.

============================================================
5. GRID RESPONSIVO
============================================================

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-3 {
    grid-template-columns: 1fr;
  }
}

Regra:
Nunca manter 2 colunas abaixo de 600px.

============================================================
6. NAVBAR E MENU MOBILE
============================================================

Navbar fixa:
- height: 72px
- position: fixed
- width: 100%

Menu Mobile:

Condições:
- Ativar abaixo de 1024px.
- Esconder menu horizontal.
- Mostrar botão hamburguer.

Painel Mobile:

.nav-mobile {
  position: absolute;
  top: 72px;
  right: 16px;
  width: calc(100% - 32px);
  max-width: 320px;
  background: #151A22;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

Comportamento obrigatório:
- Abrir ao clicar.
- Fechar ao clicar em link.
- Fechar ao clicar fora.
- Fechar ao scroll.

============================================================
7. HERO – ESPECIFICAÇÃO
============================================================

Layout Desktop:
- Flex horizontal
- Gap 60px
- Altura mínima 90vh

Layout Mobile:
- Flex coluna
- Texto centralizado
- Botões 100% largura
- Imagem abaixo
- Espaço mínimo 32px entre texto e imagem

Botão:

.btn {
  padding: 14px 28px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .btn {
    width: 100%;
  }
}

============================================================
8. SEÇÃO TENSÃO
============================================================

Layout:
- Coluna única
- Texto centralizado
- Lista com ícones

Ícones:
- SVG 20px
- Cor #C05621
- margin-right: 12px

Estrutura:

.icon-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

Proibido bullet simples.

============================================================
9. SEÇÃO ARQUITETURA
============================================================

Usar .grid-3

Cards:

.card {
  background: #1B1F27;
  padding: 32px;
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .card {
    padding: 24px;
  }
}

============================================================
10. SEÇÃO IMPACTO (GRÁFICO)
============================================================

SVG obrigatório:

- Apenas viewBox
- width: 100%
- height: auto
- max-width: 480px

Container:

.impact-chart {
  display: flex;
  justify-content: center;
  align-items: center;
}

Mobile:

- Layout coluna
- Gráfico acima
- Texto abaixo
- Gráfico nunca menor que 280px visualmente
- Nunca alinhado à esquerda

============================================================
11. SEÇÃO COMPETÊNCIA
============================================================

Grid 2 colunas desktop
1 coluna mobile

Itens com ícones obrigatórios.

============================================================
12. CTA FINAL
============================================================

Texto centralizado.
Botão largura automática desktop.
Botão largura total mobile.

============================================================
13. REGRAS ANTI-QUEBRA
============================================================

Proibido:
- width fixa em px para layout estrutural.
- height fixa para imagens principais.
- overflow escondido sem controle.
- grid 2 colunas abaixo de 600px.
- texto sem limite de largura.

Nenhum elemento pode:
- Ficar menor que 280px.
- Grudar na lateral.
- Sobrepor outro.

============================================================
14. CHECKLIST FINAL
============================================================

✔ Menu mobile abre e fecha corretamente
✔ Menu fecha ao clicar em link
✔ Menu fecha ao rolar
✔ Gráfico centralizado no mobile
✔ Nenhum elemento minúsculo
✔ Ícones aplicados nas listas
✔ Seções claramente separadas
✔ Layout testado em 375px
✔ Botões confortáveis no mobile

============================================================
FIM DO DOCUMENTO MASTER – HOME V1
============================================================