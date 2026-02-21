# INFTEC TECNOLOGIA  
## Arquitetura digital para negócios que querem crescer com estrutura.

---

# 1. POSICIONAMENTO

A INFTEC não é agência.  
Não é curso.  
Não é freelancer.  
Não é produto milagroso.

A INFTEC é:

> Arquitetura digital para empresas que querem crescer com previsibilidade, organização e escala sustentável.

O site deve transmitir:

- Estrutura
- Método
- Autoridade
- Energia controlada
- Maturidade técnica
- Crescimento sustentável

Nunca deve parecer:

- Infoproduto
- Landing page agressiva
- Agência vibrante
- Promessa exagerada
- Marketing vazio

---

# 2. STACK TECNOLÓGICA

Frontend:
- React
- TypeScript
- Vite
- SPA (Single Page Application)

Deploy:
- Vercel

Build:
npm run build

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
      logo/
        inftec-logo.svg
      hero/
        dashboard-mockup.png
      graphics/
        efficiency-chart.svg

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
    globals.css
    variables.css
    animations.css

  App.tsx
  main.tsx

index.html
package.json
vite.config.ts

---

# 4. IDENTIDADE VISUAL

Fundo principal: #0E1116  
Fundo secundário: #151A22  
Fundo alternativo: #1B1F27  

Texto principal: #E6E8EB  
Texto secundário: #8F9AA6  

Cor estratégica (destaque): #C05621  

Regras:

- A cor estratégica só pode ser usada em:
  - Botões primários
  - Hover states
  - Elementos gráficos
  - Linhas de destaque
  - Pequenos detalhes

- Nunca usar o laranja como fundo dominante.
- O site deve manter predominância escura.

---

# 5. ESTRUTURA DA PÁGINA

A homepage deve seguir esta ordem EXATA:

1. Hero
2. Tensão (Problema)
3. Arquitetura (Método)
4. Modelo de Maturidade (Impacto)
5. Competência
6. Chamada Estratégica Final
7. Footer

Cada seção deve ter:

- Espaçamento vertical mínimo de 120px no desktop
- Alternância clara de fundo para evitar “seções misturadas”
- Container com max-width 1200px
- Texto com max-width 720px

---

# 6. HERO

Layout Desktop:
- 50% texto
- 50% visual
- Altura mínima: 90vh
- Alinhamento vertical central

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

Visual:
- Dashboard escuro
- Linha de crescimento animada
- Glow laranja extremamente sutil no fundo

Mobile:
- Layout 1 coluna
- Texto centralizado
- Botões largura 100%
- Imagem abaixo do texto
- Padding lateral 16px

---

# 7. TENSÃO (PROBLEMA)

Fundo mais profundo (#0E1116).

Título:

Escalar sem estrutura é apostar no caos.

Lista vertical:

- Processos manuais limitam crescimento
- Dados descentralizados impedem decisões
- Falta de integração gera retrabalho
- Crescimento sem previsibilidade corrói margem

Texto final:

Antes de acelerar, é preciso organizar.

Layout:
- Coluna única
- Texto centralizado com limite de largura
- Espaço vertical generoso entre itens

Mobile:
- Manter coluna única
- Reduzir padding vertical para 80px

---

# 8. ARQUITETURA (MÉTODO INFTEC)

Fundo alternativo (#151A22).

Título:

Crescimento exige arquitetura.

Grid Desktop:
- 3 colunas
- 2 linhas
- Gap 24px

Cards:

01 — Mapeamento operacional  
02 — Integração estratégica  
03 — Organização de dados  
04 — Automação crítica  
05 — Indicadores claros  
06 — Base preparada para escala  

Cada card deve ter:
- Fundo #1B1F27
- Border sutil
- Padding 32px
- Hover com leve elevação
- Número grande com opacidade baixa no fundo

Mobile:
- 1 coluna
- Cards largura total
- Padding interno reduzido para 24px

---

# 9. MODELO DE MATURIDADE (IMPACTO)

Fundo secundário (#151A22).

Layout Desktop:
- 60% gráfico
- 40% texto

Título:

Crescimento sustentável segue padrão.

Texto:

Empresas estruturadas evoluem por maturidade operacional, não por tentativa e erro.

Pilares:

Arquitetura  
Previsibilidade  
Escala  

O gráfico deve:
- Ser SVG responsivo (sem width/height fixos)
- Usar apenas viewBox
- Nunca quebrar o layout
- Nunca ultrapassar 420px de largura máxima

Mobile:
- Layout 1 coluna
- Gráfico acima
- Texto abaixo
- Centralizar gráfico

---

# 10. COMPETÊNCIA

Fundo principal (#0E1116).

Título:

Arquitetura aplicada com responsabilidade.

Grid Desktop:
- 2 colunas
- Gap 24px

Itens:

- Desenvolvimento sob medida
- Arquitetura escalável
- Integração entre plataformas
- Automação orientada a performance

Estilo:
- Blocos minimalistas
- Ícones discretos
- Sem exagero visual

Mobile:
- 1 coluna
- Blocos largura total

---

# 11. CTA FINAL

Fundo preto profundo (#0E1116).

Título grande:

Se sua empresa quer crescer, ela precisa estar preparada para isso.

Botão:

Estruturar minha operação

Layout:
- Centralizado
- Botão com largura automática no desktop
- Largura 100% no mobile

---

# 12. FOOTER

Deve conter:

INFTEC TECNOLOGIA LTDA  
CNPJ: 47.281.110/0001-32  
São Paulo – SP  
© 2026  

Estilo:
- Texto secundário
- Centralizado
- Padding vertical 48px
- Border-top sutil

---

# 13. RESPONSIVIDADE (OBRIGATÓRIO)

Breakpoints:

1024px:
- Grid 3 colunas vira 2
- Navbar vira hamburguer

768px:
- Todas grids viram 1 coluna
- Padding lateral 16px
- Botões 100% largura

480px:
- Headline reduz 20%
- Espaçamento vertical reduz 15%
- Cards padding reduz 20%

---

# 14. MENU MOBILE

Deve:

- Usar estado (useState)
- Adicionar classe .open
- Fechar ao clicar em link
- Fundo sólido escuro
- Border-radius 12px
- Sombra forte
- Links empilhados verticalmente

---

# 15. SEO BÁSICO

index.html deve conter:

<meta name="description" content="Arquitetura digital para empresas que querem crescer com estrutura e previsibilidade.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-site-verification" content="luQsmK5G-kMhaM8svwkPd1ePwu68hp1B6Mtrk1Kw7PA">

robots.txt:

User-agent: *
Allow: /
Sitemap: https://inftec.com.br/sitemap.xml

sitemap.xml deve conter a URL da home.

---

# 16. OBJETIVO FINAL

O visitante deve sentir:

- Energia controlada
- Estrutura
- Método
- Confiança
- Clareza
- Direção estratégica

Nunca deve sentir:

- Pressão
- Exagero
- Vibração infantil
- Marketing vazio
- Promessas irreais