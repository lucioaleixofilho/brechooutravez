# Brechó Outra Vez — Brandbook, Manuais, SEO/AEO/AIO, Consignação e API

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformar o material de brandbook/pesquisa já criado em manuais formais, PRDs, seção de consignação no site, endpoint de API preparado para o Minha Lojita, e implementação técnica completa de SEO/AEO/AIO.

**Architecture:** Site estático (HTML/CSS/JS vanilla) hospedado no Netlify. Documentação em `docs/`. Netlify Functions para API serverless. O "Minha Lojita" é sistema externo futuro — site prepara endpoint com fallback para `pecas.json` local.

**Tech Stack:** HTML5 vanilla, CSS vanilla, JS vanilla, Netlify Functions (Node.js), JSON, Schema.org JSON-LD

---

## Fontes de verdade para este plano

Antes de executar qualquer task, ler:
- `docs/brandbook/brandbook.md` — identidade, persona, tom de voz, kit de conteúdo
- `docs/brandbook/notebooklm-outputs.md` — keywords, perguntas AEO, hooks Instagram, GMB
- `docs/brandbook/benchmark-concorrentes.md` — dados de mercado, gaps
- `index.html` — estrutura atual do site
- `assets/css/style.css` — variáveis CSS existentes (usar sempre)
- `data/pecas.json` — schema atual do catálogo

---

## TASK 1 — PRDs do projeto (4 arquivos)

**Files:**
- Create: `docs/prds/PRD_00_BRECHO_GERAL.md`
- Create: `docs/prds/PRD_01_VITRINE.md`
- Create: `docs/prds/PRD_02_ADMIN.md`
- Create: `docs/prds/PRD_03_MARKETING_SEO.md`

**Step 1: Criar pasta prds**
```bash
mkdir -p docs/prds
```

**Step 2: Criar PRD_00_BRECHO_GERAL.md**

Conteúdo mínimo obrigatório (seguir convenção Sistema767):

```markdown
# PRD_00 — BRECHÓ OUTRA VEZ

> Brechó feminino de curadoria | Stack: HTML/CSS/JS vanilla, Netlify | Objetivo: vitrine + consignação

## Visão Geral
Site institucional one-page para o Brechó Outra Vez, brechó feminino de curadoria no Savassi, BH.
Sem carrinho ou pagamento. Clientes contactam via WhatsApp. Catálogo gerenciado via pecas.json
e futuramente pelo sistema Minha Lojita.

## Módulos

| Código | Área | Status |
|--------|------|--------|
| PRD_01 | VITRINE PÚBLICA | ✅ Ativo |
| PRD_02 | ADMIN | ✅ Ativo |
| PRD_03 | MARKETING / SEO / AEO | 🟡 Em evolução |

## Convenção de Numeração
- PRD_00 = Geral/Sistema
- PRD_01 = Vitrine Pública
- PRD_02 = Admin
- PRD_03 = Marketing/SEO/AEO
- Submódulos futuros: PRD_03.1_GMB, PRD_03.2_INSTAGRAM

## Arquitetura
- **Frontend:** HTML5 + CSS vanilla (mobile-first) + JS vanilla. Zero frameworks.
- **Dados:** data/pecas.json (local) → futuramente Minha Lojita API
- **Admin:** admin/index.html com senha simples
- **Hospedagem:** Netlify (branch main = deploy automático)
- **API:** Netlify Functions em netlify/functions/produtos.js
- **Futuro:** window.MINHA_LOJITA_API substitui fetch local em galeria.js

## Princípios NUNCA violar
1. Mobile-first sempre (max-width: 768px primeiro)
2. Sem frameworks JS (React, Vue, etc.)
3. Sem carrinho ou pagamento
4. Imagens: max 200KB, sempre com alt descritivo para SEO
5. Whitespace generoso — é o design
6. SEO: todas as sections com id, h2, aria-label
7. Testar no Chrome DevTools em 375px antes de qualquer commit

## Features Implementadas

### Vitrine (PRD_01)
- ✅ index.html — one-page com #hero #sobre #galeria #como-funciona #localizacao
- ✅ assets/css/style.css — mobile-first, variáveis CSS
- ✅ assets/js/galeria.js — galeria dinâmica com filtros e lightbox
- ✅ assets/js/main.js — menu hamburger, scroll effects, parallax
- ✅ Schema markup: ClothingStore, OpeningHours, geo-coords
- ✅ OG tags, Twitter Card, meta tags SEO
- ✅ 6 imagens IA (hero, sobre, galeria x6, og-image)

### Admin (PRD_02)
- ✅ admin/index.html — CRUD de peças + export JSON

### SEO/AEO (PRD_03)
- ✅ Schema ClothingStore completo
- ⏳ robots.txt
- ⏳ sitemap.xml
- ⏳ llms.txt
- ⏳ FAQPage schema JSON-LD
- ⏳ Seção consignação (#consignacao)
- ⏳ Netlify Function GET /api/produtos

## Integrações Externas
- WhatsApp: wa.me/5531933243383
- Google Maps embed
- Google Fonts: Playfair Display + Inter
- Futuro: Minha Lojita API (window.MINHA_LOJITA_API)
- Futuro: Google Meu Negócio (via Google Business Profile API)

## Dados do Negócio
- Endereço: Av. do Contorno, 5690 - Loja B, Savassi, BH
- Horários: Seg-Sex 10h-18h | Sáb 10h-13h | Dom fechado
- WhatsApp: (31) 3324-3383
- Instagram: @boutravez | Facebook: /boutravez
- Consignação: 50/50 (cliente / brechó)
- Prazo consignação: 90 dias
- Público: mulheres 25-55 anos, classe B e C

## Status (2026-03-10)
- Coverage: 70% (vitrine core completa, SEO técnico pendente)
- Deployável: Sim (vitrine funcional)
- Próxima milestone: SEO técnico + consignação + API
```

**Step 3: Criar PRD_01_VITRINE.md**

```markdown
# PRD_01 — VITRINE PÚBLICA

> One-page estática | HTML/CSS/JS vanilla | Netlify | Mobile-first

## Visão Geral
Vitrine pública do Brechó Outra Vez. One-page com 6 seções + consignação (nova).
Galeria dinâmica carregada de JSON. Nenhum carrinho, nenhum pagamento.
Integração futura com Minha Lojita via window.MINHA_LOJITA_API.

## Seções

| ID | Seção | Status |
|----|-------|--------|
| #hero | Hero com CTA | ✅ |
| #sobre | História da marca | ✅ |
| #galeria | Galeria dinâmica com filtros | ✅ |
| #como-funciona | Cards informativos | ✅ |
| #consignacao | Passo a passo consignação | ⏳ |
| #localizacao | Mapa + endereço + horários | ✅ |

## Schema de Peça (data/pecas.json)
```json
{
  "id": 1,
  "nome": "string",
  "preco": 89,
  "categoria": "roupas|bolsas|sapatos|acessorios",
  "foto": "assets/images/galeria/galeria-1.jpg",
  "destaque": true,
  "tamanho": "PP|P|M|G|GG|único",
  "cor": "string",
  "material": "string",
  "condicao": "impecável|leve uso|vintage",
  "consignado": false,
  "ativo": true,
  "fonte": "local|minha-lojita",
  "criado_em": "YYYY-MM-DD"
}
```

## API Endpoint
- Atual: fetch('data/pecas.json') em galeria.js
- Futuro: GET /api/produtos?categoria=X via Netlify Function
- Configuração: const API_URL = window.MINHA_LOJITA_API || '/api/produtos'

## SEO/AEO Implementado
- ✅ Schema ClothingStore com endereço, coords, horários
- ✅ OG tags (Facebook, Twitter)
- ⏳ FAQPage JSON-LD (20 perguntas AEO)
- ⏳ HowTo schema na seção consignação
- ⏳ robots.txt com AI bots permitidos
- ⏳ sitemap.xml
- ⏳ llms.txt

## Arquivos
- index.html — estrutura e conteúdo
- assets/css/style.css — estilos (variáveis no :root)
- assets/js/main.js — menu, scroll, parallax
- assets/js/galeria.js — galeria dinâmica
- data/pecas.json — catálogo de peças
- robots.txt — a criar
- sitemap.xml — a criar
- llms.txt — a criar

## Status (2026-03-10)
- Coverage: 85% (falta consignação + SEO técnico)
- Deployável: Sim
```

**Step 4: Criar PRD_02_ADMIN.md**

```markdown
# PRD_02 — ADMIN

> Painel de gestão de peças | HTML/CSS/JS inline | Senha simples

## Visão Geral
Painel admin para a proprietária gerenciar o catálogo de peças.
Sem backend. Login client-side com senha. Export de JSON para atualizar o repositório.
Futuramente substituído ou complementado pelo Minha Lojita.

## Features

| Feature | Status |
|---------|--------|
| Login com senha | ✅ |
| Adicionar peça (nome, preço, categoria, foto) | ✅ |
| Listar peças com miniatura | ✅ |
| Remover peça | ✅ |
| Export pecas.json (download) | ✅ |
| Integração Minha Lojita | ⏳ |

## Arquivos
- admin/index.html — tudo inline (HTML + CSS + JS)

## Limitações Conhecidas
- Senha em plaintext no cliente (aceitável para uso interno)
- Sem persistência (exportar JSON manualmente e commitar)
- Sem upload de imagem (usar caminho de arquivo)

## Integração Futura (Minha Lojita)
Quando o Minha Lojita estiver pronto:
- Admin pode consumir API do Minha Lojita em vez de pecas.json local
- Foto cadastrada no Minha Lojita → aparece no site automaticamente
- Sem necessidade de export/commit manual

## Status (2026-03-10)
- Coverage: 100% das features planejadas
- Deployável: Sim
```

**Step 5: Criar PRD_03_MARKETING_SEO.md**

```markdown
# PRD_03 — MARKETING / SEO / AEO / AIO

> Presença digital | SEO local + AEO + AIO | Instagram + TikTok + GMB

## Visão Geral
Estratégia completa de presença digital para o Brechó Outra Vez.
Objetivo triplo: tráfego local + visitas físicas + consignação.
Posicionamento: "O brechó de curadoria do Savassi".

## Módulos

| Código | Área | Status |
|--------|------|--------|
| 03.1 | SEO Técnico | ⏳ |
| 03.2 | AEO (FAQ + Schema) | ⏳ |
| 03.3 | AIO / GEO (llms.txt + bots) | ⏳ |
| 03.4 | Google Meu Negócio | ⏳ |
| 03.5 | Instagram | ⏳ |
| 03.6 | TikTok | ⏳ |

## Documentação

| Arquivo | Descrição | Status |
|---------|-----------|--------|
| docs/manuais/manual-marca.md | Logo, cores, tipografia, foto | ⏳ |
| docs/manuais/manual-comunicacao.md | Tom de voz, palavras DO/NÃO | ⏳ |
| docs/manuais/manual-marketing.md | Instagram, TikTok, GMB, calendário | ⏳ |
| docs/manuais/seo-aeo-aio-brecho.md | Estratégia SEO/AEO/AIO completa | ⏳ |
| docs/brandbook/brandbook.md | Brandbook base | ✅ |
| docs/brandbook/notebooklm-outputs.md | Deep research NotebookLM | ✅ |
| docs/brandbook/benchmark-concorrentes.md | Análise de concorrentes | ✅ |

## Keywords Prioritárias
### Primárias (alta intenção local)
- brechó savassi
- brechó belo horizonte
- brechó feminino bh
- consignação de roupas bh
- brechó curadoria bh

### Long-tail (alta conversão)
- brechó feminino curadoria savassi bh
- como consignar roupas em bh
- brechó aceita consignação savassi

## 3 Mensagens-Chave (repetir em TODOS os canais)
1. "O brechó de curadoria do Savassi"
2. "Cada peça tem uma história"
3. "Damos uma nova vida às suas peças" (consignação afetiva)

## AEO — 20 Perguntas Prioritárias
Ver: docs/brandbook/notebooklm-outputs.md (Q3)

## AIO — Bots Permitidos (robots.txt)
GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended, Bingbot

## KPIs
- Share of Synthesis local: >15%
- AIO Impression Share: crescente
- Reviews GMB: 15 em Q1 2026 (média 4.7+)
- Seguidores Instagram: crescimento mensal
- Mensagens WhatsApp oriundas do site: rastrear via UTM

## Status (2026-03-10)
- Coverage: 20% (brandbook e research prontos, implementação pendente)
- Deployável: Sim (documentação)
- Próxima milestone: manuais + SEO técnico no site
```

**Step 6: Commit**
```bash
git add docs/prds/
git commit -m "docs: PRDs do projeto Brechó Outra Vez (PRD_00 ao PRD_03)"
```

---

## TASK 2 — Manual de Marca

**Files:**
- Create: `docs/manuais/manual-marca.md`

**Step 1: Criar pasta manuais**
```bash
mkdir -p docs/manuais
```

**Step 2: Criar manual-marca.md**

Conteúdo obrigatório (enxuto, prático, sem burocracia):

```markdown
# Manual de Marca — Brechó Outra Vez
**Versão:** 1.0 | **Data:** 2026-03-10 | **Público:** proprietária + colaboradores

---

## 1. IDENTIDADE

**Nome:** Brechó Outra Vez
**Handle:** @boutravez
**Tagline principal:** "Cada peça tem uma história."
**Claim de posicionamento:** O brechó de curadoria do Savassi.

---

## 2. LOGO

**Arquivo:** assets/images/logo/logo.png

### Usos corretos
- Fundo branco (#FFFFFF) ou off-white (#FAF9F7)
- Tamanho mínimo: 120px de largura
- Espaçamento mínimo ao redor: 16px de cada lado
- Versão colorida: uso principal em fundo claro
- Versão monocromática (#1A1A1A): use em fundos com baixo contraste

### Usos PROIBIDOS
- Não distorcer as proporções
- Não aplicar filtros ou sombras sobre o logo
- Não usar em fundo vermelho (#C4161C) — baixo contraste
- Não colocar sobre foto sem overlay

---

## 3. PALETA DE CORES

| Nome | Hex | Uso |
|------|-----|-----|
| Vermelho Brechó | `#C4161C` | CTAs, destaques, botões principais |
| Dourado | `#FFD700` | Acentos, badges, detalhes especiais |
| Off-white Principal | `#FAF9F7` | Background principal do site e materiais |
| Off-white Alt | `#F2EFEC` | Seções alternadas, cards |
| Texto Principal | `#1A1A1A` | Corpo de texto |
| Texto Leve | `#6B6560` | Legendas, metadados, preços secundários |
| Borda | `#E8E4E0` | Divisores, bordas de card |
| Verde WhatsApp | `#25D366` | Exclusivo para botão WhatsApp |

### Regras de uso por canal
- **Instagram feed:** off-white como fundo de fotos de peça, vermelho nos CTAs dos stories
- **Stories:** fundo off-white ou foto de peça; texto em #1A1A1A; CTA em vermelho
- **Google Meu Negócio:** fotos com fundo neutro (bege, branco, cinza claro)
- **WhatsApp:** comunicação em texto puro; sem design elaborado

---

## 4. TIPOGRAFIA

| Fonte | Uso | Peso | Onde usar |
|-------|-----|------|-----------|
| Playfair Display | Títulos, headlines | 400 (Regular), 600 (SemiBold) | Nomes de seções, títulos de posts |
| Inter | Corpo, legendas, botões | 300 (Light), 400 (Regular), 500 (Medium) | Texto corrido, preços, legendas |

### Hierarquia de tamanhos (referência site)
- H1 (título principal): 48-64px desktop / 36-42px mobile
- H2 (título de seção): 32-40px desktop / 28-32px mobile
- H3 (subtítulo): 20-24px
- Corpo: 16-17px
- Legenda: 13-14px

### Instagram
- Fonte Playfair para texto sobreposto em fotos
- Inter para legendas e stories de texto
- Nunca usar Comic Sans, fontes decorativas genéricas

---

## 5. ESTILO FOTOGRÁFICO

### Foto de peça (obrigatório)
- **Fundo:** parede branca ou bege, madeira natural clara, tecido liso neutro
- **Luz:** natural, lateral, de janela. Sem flash direto.
- **Ângulos obrigatórios por peça:**
  1. Peça inteira (na arara ou deitada)
  2. Detalhe close-up (tecido, botão, etiqueta, acabamento)
- **Proporção:** 1:1 (quadrado) para feed, 4:5 para feed mobile, 9:16 para stories/reels
- **Edição:** leve apenas — corrigir exposição e balanço de branco. Preservar cores reais.

### O que NUNCA fazer em fotos
- Filtros pesados (vintage forçado, desbotado exagerado)
- Fundo bagunçado ou com elementos distrativos
- Flash frontal direto (cria reflexo e mata textura)
- Colagens com múltiplas peças em layout caótico
- Texto sobreposto em excesso sobre a peça

### Fotos de loja e bastidores
- Luz natural sempre que possível
- Araras organizadas, espaçadas
- Ambiente limpo — o espaço em branco é parte do design
- Cores neutras predominando

---

## 6. ESPAÇAMENTO E WHITESPACE

O espaço em branco É o design. Não é ausência de conteúdo — é a identidade da marca.

**Regras:**
- Posts Instagram: nunca cobrir mais de 60% da área com texto/elementos
- Não acumular mais de 3 elementos visuais em uma composição
- Margens generosas em materiais impressos (mínimo 20mm)
- Stories: máximo 3-4 elementos por tela

---

## 7. APLICAÇÃO POR CANAL

### Instagram Feed
- Fundo neutro ou foto de peça bem lit
- Texto em Playfair para frases curtas de impacto
- CTA em vermelho (#C4161C) quando sobreposto

### Instagram Stories
- Fundo: off-white (#FAF9F7) ou foto de peça
- Texto: Inter Regular/Medium em #1A1A1A
- Botão CTA: caixa vermelha (#C4161C) com texto branco
- Stickers: apenas native do Instagram (sem stickers de terceiros genéricos)

### Google Meu Negócio
- Fotos com fundo neutro
- Sem texto sobreposto em fotos de produto
- Fotos do espaço físico: ambiente organizado e limpo

### WhatsApp
- Comunicação em texto puro
- Logo apenas quando enviar material formal (proposta, cardápio)
- Tom pessoal — não enviar mensagens com excesso de emojis

---

## 8. O QUE NUNCA FAZER (RESUMO)

| Proibido | Por quê |
|----------|---------|
| Logo distorcido | Destrói a identidade |
| Fundo bagunçado em foto de peça | Tira foco do produto |
| Filtros pesados Instagram | Distorce cores reais |
| Texto em vermelho (#C4161C) sobre fundo vermelho | Ilegível |
| Fontes decorativas genéricas | Quebra identidade visual |
| Flash direto nas fotos | Destrói textura do tecido |
| Mais de 3 hashtags temáticas sem localização | Reduz alcance local |
| Postar sem CTA | Oportunidade desperdiçada |
```

**Step 3: Commit**
```bash
git add docs/manuais/manual-marca.md
git commit -m "docs: manual de marca Brechó Outra Vez v1.0"
```

---

## TASK 3 — Manual de Comunicação

**Files:**
- Create: `docs/manuais/manual-comunicacao.md`

**Step 1: Criar manual-comunicacao.md**

Conteúdo obrigatório:

```markdown
# Manual de Comunicação — Brechó Outra Vez
**Versão:** 1.0 | **Data:** 2026-03-10 | **Público:** proprietária + atendimento

---

## 1. PARA QUEM FALAMOS

### Persona Primária — "A Luciana"
- Mulher, 28-48 anos
- Classe B ou C, mora ou trabalha no Savassi/Lourdes/Funcionários
- Tem gosto apurado, não quer gastar preço de grife
- Sabe diferenciar tecido bom de ruim
- Já foi a brechó ruim e ficou desapontada
- Quer encontrar algo que ninguém mais vai ter

### Persona Secundária — "A Camila"
- Mulher, 30-55 anos
- Armário cheio de roupas boas que não usa mais
- Quer "limpar o armário" sem esforço
- Não tem tempo para vender no Instagram pessoal
- Quer confiança: saber que a loja vai cuidar bem das peças

### O que isso significa na prática
- Falar como se fosse uma amiga com bom gosto — não como uma loja
- Não tratar cliente de brechó como "orçamento baixo"
- Respeitar a inteligência de quem está comprando
- Para a Camila: transmitir confiança e praticidade, não burocracia

---

## 2. TOM DE VOZ

**Em uma frase:** Fala como uma amiga de bom gosto que te apresenta algo que ela encontrou e ficou apaixonada.

### 4 Dimensões

| Dimensão | Somos | NÃO somos |
|----------|-------|-----------|
| **Calor** | Acolhedores, afetivos, próximos | Distantes, formais, corporativos |
| **Curadoria** | Confiantes, explicamos o porquê | Arrogantes, elitistas, exclusivos |
| **Leveza** | Bem-humorados, leves, com personalidade | Forçados, meme sem contexto |
| **Consciência** | Sustentabilidade como valor real | Greenwashing, discurso vazio |

---

## 3. PALAVRAS OBRIGATÓRIAS
Usar naturalmente — não forçar, mas preferir sempre que possível:

- **encontrar, descobrir, achar** — a emoção da descoberta
- **curadoria, selecionada, escolhida a dedo** — o diferencial
- **história, memória, vida** — o valor emocional da peça
- **nova dona, novo lar** — o ato de consignar/circular
- **ciclo, circular** — moda consciente
- **qualidade, tecido bom, acabamento** — sofisticação acessível
- **Savassi, BH, aqui** — ancoragem local

---

## 4. PALAVRAS PROIBIDAS
Nunca usar — passam mensagem errada para o público B/C com gosto apurado:

| Palavra proibida | Por que evitar | Use em vez disso |
|-----------------|---------------|------------------|
| barato | Tom de mercado popular, deprecia a curadoria | preço acessível, preço justo, preço que surpreende |
| usada | Deprecia a peça | de segunda mão, com história, circular, vintage |
| sebo | Jamais | — |
| promoção relâmpago | Tom de varejo popular | — |
| oferta imperdível | Cria ansiedade artificial, não nosso estilo | — |
| corre | Pressão desnecessária | chama no direct, manda mensagem |
| últimas unidades | Gatilho de escassez falso | ainda tem, manda perguntar |
| produto | Faz a peça parecer genérica | peça, item, achado |
| loja | Pode usar, mas preferir | brechó, espaço, acervo |

---

## 5. EXEMPLOS POR CANAL

### Instagram — Post de produto
❌ "Nova peça disponível! Vestido floral anos 70 por R$85. Corre!"
✅ "Chegou ela. Vestido floral anos 70, tecido leve, cinturinha marcada. R$85 e ainda tem etiqueta. Manda mensagem antes que outra Luciana apareça aqui."

### Instagram — Post de consignação
❌ "Aceitamos consignação! Entre em contato!"
✅ "Tem peças boas paradas no armário? A gente encontra uma nova dona pra elas — você limpa o espaço e ainda recebe. Sem esforço, sem drama."

### Instagram — Manifesto
❌ "A gente ama moda sustentável!"
✅ "Brechó não é segunda opção. É a primeira escolha de quem sabe o que procura."

### WhatsApp — Resposta de disponibilidade
❌ "Boa tarde! A peça ainda está disponível. Pode vir até nossa loja."
✅ "Oi! Ainda está sim 🙂 Pode vir qualquer hora até às 18h (sáb até 13h). Te espero aqui no Savassi."

### WhatsApp — Resposta de preço
❌ "O preço é R$85, parcelamos em até 3x."
✅ "R$85! E olha — é um tecido impecável, tá em perfeito estado. Chama aqui que a gente conversa."

### Google Meu Negócio — Resposta de review positivo
❌ "Obrigada pela avaliação! Volte sempre."
✅ "Que alegria ler isso! Adoramos quando a peça encontra a dona certa. Te esperamos de volta quando quiser garimpar mais 🙂"

---

## 6. TEMPLATES DE RESPOSTA RÁPIDA (WhatsApp)

### Situação 1: Pergunta de disponibilidade
"Oi [nome se souber]! [Peça X] ainda está sim 🙂 Pode vir ver qualquer hora até às 18h (sábados até 13h). Precisa de mais alguma informação?"

### Situação 2: Pergunta de preço
"[Peça X] está por R$[valor]! [Adicionar 1 detalhe de qualidade: 'está em ótimo estado / tecido impecável / nunca usada']. Quer passar aqui pra ver de perto?"

### Situação 3: Interesse em consignação
"Que ótimo! A gente adora receber peças com história 🙂 Pode trazer qualquer dia da semana (seg-sex 10h-18h, sáb 10h-13h). Avaliamos juntas, definimos o preço e quando vender você recebe 50%. Tem alguma dúvida sobre como funciona?"

### Situação 4: Pergunta de horário
"Funcionamos de segunda a sexta das 10h às 18h e sábados das 10h às 13h. Domingo fechado. Estamos na Av. do Contorno, 5690 - Loja B, Savassi. Qualquer dúvida é só chamar aqui!"

### Situação 5: Como chegar
"Fica na Av. do Contorno, 5690 - Loja B, Savassi, BH! Bem perto do [referência local se souber]. Você vindo de [X], [indicação simples]. Qualquer coisa me chama que te ajudo a encontrar 🙂"

---

## 7. ADAPTAÇÃO POR CLASSE (B e C)

O público B e C do Savassi tem gosto apurado e valorizará curadoria, mas é sensível a preço. A comunicação deve:

**Fazer:**
- Mencionar qualidade ANTES do preço ("Tecido impecável. R$85.")
- Destacar o valor da descoberta ("você não vai ver igual em ninguém")
- Usar o preço como surpresa positiva, não como argumento principal
- Ser direta e sem rodeios — sem excesso de adjetivos

**Evitar:**
- Tom excessivamente sofisticado que intimida
- Referências culturais de classe A (grifes internacionais, viagens, restaurantes caros)
- Excesso de anglicismos (thrift, second-hand) — usar português natural
- Discurso de sustentabilidade muito elaborado — falar em "peça que dura" em vez de "impacto ambiental"

---

## 8. COMO USAR EMOJIS

**Instagram:** sim, com moderação. Máximo 2-3 por legenda. Preferir: 🙂 ✦ ♡ ✿
**WhatsApp:** sim, com calor humano. 🙂 👋 são bem-vindos
**Google Meu Negócio:** não usar emojis nas respostas de review

---

## 9. CHECKLIST ANTES DE PUBLICAR

- [ ] Tom está de amiga, não de loja?
- [ ] Tem alguma palavra proibida?
- [ ] A peça foi descrita com pelo menos 1 detalhe de qualidade?
- [ ] Tem CTA claro (manda mensagem / vem ver / chama no direct)?
- [ ] Para posts de consignação: está focando no benefício, não só no processo?
```

**Step 2: Commit**
```bash
git add docs/manuais/manual-comunicacao.md
git commit -m "docs: manual de comunicação Brechó Outra Vez v1.0"
```

---

## TASK 4 — Manual de Marketing

**Files:**
- Create: `docs/manuais/manual-marketing.md`

**Step 1: Criar manual-marketing.md**

Estrutura: Instagram + TikTok + GMB + Calendário 4 semanas.

```markdown
# Manual de Marketing — Brechó Outra Vez
**Versão:** 1.0 | **Data:** 2026-03-10 | **Canais:** Instagram, TikTok, Google Meu Negócio

---

## 1. ESTRATÉGIA GERAL

**Objetivo triplo:** tráfego local + visitas físicas + consignação
**Claim a repetir em TODOS os canais:** "O brechó de curadoria do Savassi"

### 3 Mensagens-Chave (nunca parar de repetir)
1. **"O brechó de curadoria do Savassi"** — autoridade local (ninguém mais tem esse claim em BH)
2. **"Cada peça tem uma história"** — tagline que diferencia do brechó genérico
3. **"Damos uma nova vida às suas peças"** — consignação com alma, não só processo

---

## 2. INSTAGRAM (@boutravez)

### 3 Pilares de Conteúdo
| Pilar | % do conteúdo | Objetivo |
|-------|--------------|---------|
| **PEÇAS** | 50% | Mostrar curadoria, gerar desejo, converter em visita |
| **BASTIDORES** | 30% | Construir confiança, humanizar marca |
| **COMUNIDADE** | 20% | Prova social, engajamento, lealdade |

### Frequência
- **Feed:** 4-5 posts/semana (segunda, quarta, quinta, sexta + sábado opcional)
- **Stories:** todos os dias em horário comercial (mínimo 3-5 por dia)
- **Reels:** 2x/semana (segunda e quinta idealmente)

### 10 Formatos de Conteúdo + Hooks

**1. Carrossel "Como usar" (SAVES altos)**
Mostra 3 formas de usar a mesma peça.
- "Uma mesma peça, três ocasiões diferentes. Qual versão tem mais a sua cara?"
- "A mágica de um bom blazer é que ele multiplica as opções do seu guarda-roupa."
- "Para quem acha que não sabe combinar estampa: arrasta pro lado."

**2. Reels "O que chegou essa semana" (COMPARTILHAMENTOS + 'quero!')**
Vídeo curto mostrando novidades da semana.
- "Aquele momento da semana que a gente mais ama: olha o que acabou de chegar nas nossas araras."
- "Prepara o coração: a seleção dessa semana aqui no Savassi está impecável."
- "Chegaram elas. Manda mensagem antes que outra cliente chegue primeiro."

**3. Bastidores "O que não passa na curadoria" (CONFIANÇA)**
Mostra o que é rejeitado e por quê — educa e gera confiança.
- "Curadoria não é só sobre o que a gente escolhe. É sobre o que a gente deixa de fora."
- "Por que essa peça não entrou no Brechó Outra Vez? Vem entender nossos critérios."
- "Não é sobre a grife, é sobre a qualidade."

**4. Close em detalhes "Tecido bom você reconhece" (SAVES)**
Macro da textura, botões, costura, acabamento.
- "Tecido bom você reconhece no toque. E olha o caimento dessa peça..."
- "Sabe aquela costura feita para durar uma vida inteira? A gente encontrou."
- "Fast fashion cansa, né? Vem ver de perto o acabamento dessa peça."

**5. Storytelling "A peça que quase ficou pra mim" (COMENTÁRIOS afetivos)**
Tom pessoal — humaniza a dona do brechó.
- "Confesso: essa foi a peça que eu quase não coloquei na arara e levei pro meu armário."
- "Cada peça traz uma memória. E a história que vamos contar hoje é especial."
- "Quando chega uma raridade dessas, a gente até comemora aqui na loja."

**6. Consignação com storytelling (COMPARTILHAMENTOS)**
Foca no ato generoso, não no processo.
- "Tem roupas boas paradas no armário? A gente encontra uma nova dona para elas."
- "Consignar é um ato de carinho: deixar aquela peça viver uma nova história."
- "Limpar o espaço, fazer a moda circular e ainda receber por isso. Sem drama."

**7. Manifesto "Por que brechó?" (ENGAJAMENTO de nicho)**
Posts de causa e valores.
- "O guarda-roupa mais consciente é aquele que já existe."
- "Estilo sofisticado sem o preço de grife e sem pesar no planeta. Sim, é possível."
- "Repetir roupa não é o problema. O problema é comprar uma peça que dura duas lavagens."

**8. Transformação "Como usar vintage hoje" (SAVES + shares)**
Mostra mix de época com looks atuais.
- "Como trazer uma peça dos anos 90 direto para o seu look de trabalho de hoje."
- "O segredo de um armário com personalidade? Misturar as épocas."
- "Você não precisa parecer que saiu de um filme de época para usar garimpos incríveis."

**9. FAQ Comunitário (AEO + reduz fricção)**
Responde dúvidas reais em formato carousel.
- "'Vocês aceitam qualquer marca na consignação?' Essa é a pergunta que mais recebemos."
- "Tudo o que você sempre quis saber sobre como funciona nosso brechó."
- "Primeira vez comprando de segunda mão? Separei as 3 dúvidas mais comuns."

**10. Gatilho de surpresa preço/qualidade (DIRECT imediato)**
Destaca o valor sem dizer "barato".
- "Aquela peça com caimento perfeito que você não vai acreditar quando vir o preço."
- "R$X e ainda está com etiqueta. Manda mensagem antes que alguém leve."
- "Encontrar uma peça dessas é bom. Encontrar por um preço justo? É curadoria."

### Fórmula de Hashtags (9-13 por post)

**Cluster A — Localização (sempre usar 3-4):**
`#brechosavassi #brechobh #brechominasgerais #savassi #savassibh #modabh`

**Cluster B — Produto (variar 3-4 por post):**
`#brechofeminino #modavintage #modacircular #consignacaobh #roupasvintage #thriftstore`

**Cluster C — Nicho (usar 2-3):**
`#brechocuradoria #slowfashion #secondhand #modaconsciente #thrifting`

**Cluster D — Comunidade (1-2, quando relevante):**
`#novadona #armariocircular #modaafavel #roupaquetempropósito`

### 5 Templates de Legenda

**Template 1 — PEÇA NOVA:**
```
[NOME DA PEÇA em caps] ✦

[1 frase sobre a peça: o que é, quando foi feita, por que é especial]
[1 frase sobre qualidade ou detalhe que fez ela ser selecionada]

R$ [PREÇO]. [Tamanho se relevante].
[CTA: "Chama no direct." ou "Manda mensagem."]

#brechosavassi #brechobh #[categoria]
```

**Template 2 — BASTIDORES:**
```
[O QUE ESTÁ ACONTECENDO — direto]

[1-2 frases sobre o processo ou porquê]

[CTA: convidar a vir, a mandar mensagem, a acompanhar]

#brechosavassi #curadoriafeminina #bastidores
```

**Template 3 — CONSIGNAÇÃO:**
```
[GANCHO: fala com quem tem armário cheio]

[Explica o problema que resolve]

1. [Passo 1 simples]
2. [Passo 2 simples]
3. [Passo 3 simples]

[CTA: WhatsApp ou vem à loja]

#consignacaobh #brechosavassi #armariocircular
```

**Template 4 — MANIFESTO:**
```
[DECLARAÇÃO DE VALOR — sem rodeios]

[Desenvolve em 2-3 frases]

[Conecta com quem a marca serve]

[Nenhum CTA — post de construção de marca]

#modaconsciente #brechosavassi #slowfashion
```

**Template 5 — PROVA SOCIAL:**
```
[DETALHE AFETIVO — o que aconteceu]

[O que isso representa para a marca — sem exagero]

[Convite aberto para a comunidade]

#brechosavassi #brechobh #novadona
```

### Checklist Pré-Post
- [ ] Foto com fundo neutro e luz natural?
- [ ] Tom está de amiga, não de loja?
- [ ] Tem alguma palavra proibida? (ver manual de comunicação)
- [ ] Tem detalhe de qualidade mencionado?
- [ ] Tem CTA?
- [ ] Hashtags: 3-4 localização + 3-4 produto + 2-3 nicho?
- [ ] Stories de teaser programados para o mesmo dia?

---

## 3. TIKTOK

### Por que TikTok para o brechó
- Algoritmo não depende de seguidores — qualquer vídeo pode viralizar
- Público 25-45 anos está crescendo no TikTok
- Conteúdo de moda e brechó performam bem organicamente
- Complementa o Instagram sem duplicar esforço (mesmo vídeo, formatos diferentes)

### 4 Tipos de Conteúdo que Funcionam

**1. Tendência + Vintage:**
Usar áudio trending e mostrar como peça vintage se encaixa na tendência atual.
- "POV: você entrou num brechó de curadoria"
- Mostrar peças da moda atual que o brechó tem (ex: se blazer oversized está em alta)

**2. Educação Rápida (15-30s):**
- "5 sinais que é uma peça de qualidade"
- "Como diferenciar lã de acrílico em 10 segundos"
- "3 tipos de costura que duram vs 3 que desfiam"

**3. Storytelling Rápido:**
- "Essa blusa foi parar aqui porque..." (história da peça)
- "Acervo da semana: 15 peças chegaram, 6 passaram"
- "Cliente voltou semanas depois usando a peça que comprou aqui"

**4. Bastidores com Transição:**
- Mostrar lote chegando → seleção → peças aprovadas na arara
- Timelapse de organização da loja
- Antes/depois de uma peça sendo higienizada

### Regras TikTok
- **Primeiros 3 segundos são tudo:** mostrar a peça ou o resultado ANTES da explicação
- **Áudios trending:** usar sons virais, não precisa dançar
- **Texto na tela:** sempre adicionar legenda (muitos assistem sem som)
- **Duração ideal:** 15-45 segundos para conteúdo educativo; até 60s para storytelling
- **Frequência:** 3-5 vídeos/semana (TikTok recompensa consistência)

### Hashtags TikTok
`#brechobh #brechosavassi #modacircular #thriftstore #slowfashion #vintage #modafeminina #brechofeminino`

---

## 4. GOOGLE MEU NEGÓCIO

### 5 Ações Prioritárias
1. **Configurar perfil completo:** nome exato, endereço, horários, fotos, categoria "Loja de roupas usadas"
2. **Descrição otimizada** com keywords: "Brechó feminino de curadoria no Savassi, Belo Horizonte..."
3. **Publicar 2-3 posts/semana** (novidades + FAQ + educativo)
4. **Colher reviews ativamente** — pedir para clientes satisfeitas
5. **Responder TODOS os reviews** — positivos e negativos

### Descrição GMB (copiar exato):
> "Brechó feminino de curadoria no Savassi, Belo Horizonte. Roupas, bolsas, sapatos e acessórios selecionados a dedo — só entra o que tem qualidade e vale a pena. Peças a partir de R$10. Aceitamos consignação: traga suas peças, avaliamos juntos, e quando vendem você recebe 50%. Av. do Contorno, 5690 - Loja B, Savassi, BH. Seg-Sex 10h-18h | Sáb 10h-13h."

### 3 Tipos de Post GMB (2-3x/semana)
1. **Novidades:** foto de peça nova + breve descrição + preço
2. **FAQ:** responder 1 dúvida real ("Como funciona a consignação?")
3. **Educativo sobre curadoria:** o que passa/não passa na seleção

### Script de Pedido de Review (WhatsApp)
Enviar 1-2 dias após a venda/entrega:

*"Oi [nome]! Esperamos que você esteja adorando [a peça / o que encontrou]. Ficaria muito feliz se você pudesse deixar uma avaliaçãozinha lá no Google Meu Negócio — ajuda muito a gente a aparecer pra mais pessoas e continuar com o brechó. É rapidinho! [link do GMB] Obrigada de coração 🙂"*

### Meta de Reviews
- Q1 2026: 15 reviews (média 4.7+)
- Q2 2026: 30 reviews (média 4.8+)

---

## 5. CALENDÁRIO EDITORIAL — 4 SEMANAS

### Semana 1 — Apresentação e Fundação
| Dia | Formato | Pilar | Tema |
|-----|---------|-------|------|
| Segunda | Post feed | Peça | "Chegou ela" — primeira peça da semana |
| Terça | Stories | Bastidores | Organização da arara |
| Quarta | Reels | Bastidores | "Como fazemos a curadoria" |
| Quinta | Post feed | Peça | Close em detalhe — tecido/acabamento |
| Sexta | Post feed | Comunidade | Manifesto "Por que brechó?" |
| Sábado | Stories | Peças | Novidades do sábado |

### Semana 2 — Consignação
| Dia | Formato | Pilar | Tema |
|-----|---------|-------|------|
| Segunda | Post feed | Peça | "O que chegou essa semana" (carousel) |
| Terça | Stories | Bastidores | Chegada de lote |
| Quarta | Reels | Peça | Mix "como usar" |
| Quinta | Post feed | Comunidade | Consignação com storytelling |
| Sexta | Post feed | Peça | Gatilho de surpresa — preço/qualidade |
| GMB | Post | FAQ | "Como funciona a consignação?" |

### Semana 3 — Educação e Autoridade
| Dia | Formato | Pilar | Tema |
|-----|---------|-------|------|
| Segunda | Post feed | Peça | "Peça com história" |
| Terça | Stories | Bastidores | "O que não passa na curadoria" |
| Quarta | Reels | Educação | "5 sinais de peça de qualidade" |
| Quinta | Post feed | Peça | Transformação "antes e depois do armário" |
| Sexta | Post feed | Comunidade | FAQ: dúvidas reais |
| GMB | Post | Novidade | Novidades da semana |

### Semana 4 — Comunidade e Reviews
| Dia | Formato | Pilar | Tema |
|-----|---------|-------|------|
| Segunda | Post feed | Peça | "O que chegou essa semana" |
| Terça | Stories | Bastidores | Personalidade da dona — "a peça que quase ficou pra mim" |
| Quarta | Reels | Comunidade | Cliente feliz (com permissão) |
| Quinta | Post feed | Peça | Close em detalhe — bolsa ou sapato |
| Sexta | Post feed | Comunidade | Manifesto de mês |
| WhatsApp | Mensagem | Reviews | Pedir reviews para clientes recentes |

---

## 6. MÉTRICAS PARA ACOMPANHAR

| Métrica | Canal | Meta inicial | Como medir |
|---------|-------|-------------|-----------|
| Seguidores | Instagram | +50/mês | Instagram Insights |
| Alcance | Instagram | crescente | Instagram Insights |
| Mensagens WhatsApp | WhatsApp | rastrear origem | Perguntar "como nos encontrou?" |
| Reviews GMB | Google | 15 em 6 semanas | GMB painel |
| Aparência em buscas | Google | "brechó savassi" p.1 | GSC + busca manual |
| Aparência em AI | ChatGPT/Gemini | citação em 90 dias | teste manual mensal |
```

**Step 2: Commit**
```bash
git add docs/manuais/manual-marketing.md
git commit -m "docs: manual de marketing Brechó Outra Vez v1.0"
```

---

## TASK 5 — Manual SEO/AEO/AIO

**Files:**
- Create: `docs/manuais/seo-aeo-aio-brecho.md`

**Step 1: Criar seo-aeo-aio-brecho.md**

Documento estratégico específico para o brechó, importando boas práticas do Sistema767:

```markdown
# Estratégia SEO / AEO / AIO — Brechó Outra Vez
**Versão:** 1.0 | **Data:** 2026-03-10
**Baseado em:** pesquisa NotebookLM + boas práticas Sistema767 (80_INTELIGENCIA)

---

## 1. VISÃO GERAL DO QUADRANTE DE VISIBILIDADE 2026

| Pilar | Otimiza para | Drivers Principais | Prioridade Brechó |
|-------|-------------|-------------------|-------------------|
| **SEO** | Tráfego orgânico (links azuis) | Técnica, schema, mobile | Base fundamental |
| **AEO** | Zero-click, featured snippets, voz | FAQ schema, Answer-First, 40-60 words | Alta |
| **AIO/GEO** | Citações em ChatGPT/Perplexity/Gemini | Citation Velocity, llms.txt | Média (crescente) |
| **SEO Local** | Google Maps + AI Overviews locais | GMB, reviews, endereço consistente | CRÍTICA |

---

## 2. SEO LOCAL (PRIORIDADE MÁXIMA)

### Claim proprietário
**"O brechó de curadoria do Savassi"** — nenhum concorrente em BH reivindicou isso digitalmente.
Usar essa frase exata na bio do Instagram, descrição do GMB e seção "Sobre" do site.

### Keywords por intenção

**Primárias — alta intenção local:**
- brechó savassi (comprar/visitar)
- brechó belo horizonte (comprar/visitar)
- brechó feminino bh (comprar)
- brechó perto de mim bh (visitar) — +175% crescimento
- brechó feminino savassi (comprar/visitar)
- consignação de roupas bh (consignar)
- consignação savassi (consignar)
- brechó curadoria bh (comprar)

**Secundárias — produto específico:**
- brechó bolsas bh | brechó sapatos bh | brechó acessórios bh
- roupas femininas usadas bh | segunda mão feminino bh

**Long-tail — alta conversão:**
- brechó feminino curadoria savassi bh
- como consignar roupas em bh
- brechó aceita consignação savassi
- brechó blazer feminino bh | brechó vestido vintage bh

### Vocabulário de autoridade (usar naturalmente nos textos)
curadoria de moda, circularidade na moda, economia circular, moda de segunda mão,
slow fashion, garimpo de roupas, peças únicas, vestuário consignado, brechó premium

### Checklist SEO técnico
- [x] Schema ClothingStore com endereço, coords, horários
- [x] OG tags e Twitter Card
- [ ] robots.txt (criar — TASK 6)
- [ ] sitemap.xml (criar — TASK 6)
- [ ] llms.txt (criar — TASK 6)
- [ ] FAQPage schema JSON-LD (criar — TASK 6)
- [ ] Title otimizado: "Brechó Outra Vez — Brechó Feminino de Curadoria no Savassi, BH"
- [ ] Meta description: 160 chars com keywords principais

---

## 3. AEO — ANSWER ENGINE OPTIMIZATION

### O que é AEO
Otimização de conteúdo para ser selecionado por motores de resposta (Google AI Overviews,
ChatGPT, Perplexity). Diferente de SEO: não ranqueia, é **citado**.

### Por que é urgente para o brechó
Quase nenhum brechó no Brasil tem FAQ schema implementado.
**Quem fizer primeiro domina os AI Overviews locais em BH.**

### Formato Atomic Answer (obrigatório)
Cada resposta de FAQ deve ter: **40-60 palavras**, estrutura direta, autossuficiente.

```
Estrutura:
1. Resposta direta em negrito (1 frase)
2. Contexto (1-2 frases)
3. Dado específico ou CTA
Total: 40-60 palavras
```

### 20 Perguntas AEO Prioritárias

**Grupo 1 — Compra e Qualidade (Persona Luciana)**

**Q1: O que é um brechó de curadoria?**
**Um brechó de curadoria seleciona as peças antes de colocá-las à venda.** Só entra o que tem qualidade, bom estado e valor real. Diferente de brechós tradicionais, o trabalho de garimpo já foi feito. No Brechó Outra Vez (Savassi, BH), cada peça é avaliada individualmente antes de chegar à arara.
*(52 palavras)*

**Q2: Onde tem brechó feminino de curadoria no Savassi, BH?**
**O Brechó Outra Vez é um brechó feminino de curadoria no Savassi, Belo Horizonte.** Ficamos na Av. do Contorno, 5690 - Loja B. Trabalhamos com roupas, bolsas, sapatos e acessórios selecionados a dedo, além de consignação. Seg-Sex 10h-18h | Sáb 10h-13h.
*(46 palavras)*

**Q3: Como diferenciar roupa boa de ruim no brechó?**
**Observe o tecido, a costura e o caimento.** Tecidos naturais (lã, algodão, seda) têm toque diferenciado. Costuras duplas e reforçadas indicam durabilidade. Caimento que mantém forma após lavar é sinal de qualidade. No Brechó Outra Vez, só selecionamos peças que passam nesses critérios.
*(45 palavras)*

**Q4: Com que frequência chegam peças novas no brechó?**
**Peças novas chegam toda semana no Brechó Outra Vez.** O volume varia conforme as consignações recebidas, mas há sempre novidades. Siga o @boutravez no Instagram para ver assim que chegam — publicamos semanalmente as novidades da seleção.
*(38 palavras)*

**Q5: O brechó tem roupas plus size?**
**Quando chegam peças em tamanhos maiores e com qualidade, elas entram no estoque.** A disponibilidade varia — vale chamar no WhatsApp (31) 3324-3383 para verificar o seu tamanho antes de vir. Sempre buscamos ampliar a diversidade de tamanhos no acervo.
*(43 palavras)*

**Grupo 2 — Consignação (Persona Camila)**

**Q6: Como funciona a consignação de roupas no Brechó Outra Vez?**
**Você traz suas peças para avaliação, definimos o preço juntas e dividimos 50/50 quando vende.** Trabalhamos com roupas na moda, limpas e sem defeitos — sem restrição de marca. As peças ficam 90 dias; se não venderem, você retira. Recebimento em até 7 dias úteis após a venda.
*(48 palavras)*

**Q7: Quais roupas o brechó aceita para consignação?**
**Aceitamos roupas, bolsas, sapatos e acessórios femininos que estejam na moda, vendáveis, limpos e sem defeitos.** Avaliamos qualquer marca — o critério é a qualidade e o estado da peça, não o rótulo. Manchas permanentes, rasgos e desgaste excessivo não são aceitos.
*(43 palavras)*

**Q8: Quanto recebo pela consignação no brechó?**
**A divisão é 50% para você e 50% para o brechó.** O preço de venda é definido juntas na avaliação. Quando a peça vende, você recebe sua parte em até 7 dias úteis. Sem taxa de cadastro ou cobrança antecipada.
*(42 palavras)*

**Q9: Posso retirar minha peça se não vender?**
**Sim, você pode retirar a peça a qualquer momento.** O prazo padrão de consignação é 90 dias. Após esse período, entre em contato para combinar a retirada ou decidir o que fazer com a peça. Basta nos chamar no WhatsApp (31) 3324-3383.
*(43 palavras)*

**Q10: O brechó aceita doações de roupas?**
**Trabalhamos com consignação, não com doações.** Assim, você mantém direito sobre suas peças e recebe 50% do valor quando vendem. Se preferir não retirar peças não vendidas após 90 dias, podemos conversar sobre as opções. Entre em contato pelo WhatsApp (31) 3324-3383.
*(44 palavras)*

**Grupo 3 — Sustentabilidade e Higiene**

**Q11: Por que comprar em brechó é melhor para o meio ambiente?**
**A indústria da moda é a segunda maior poluidora do planeta — comprar de segunda mão reduz esse impacto diretamente.** Cada peça reaproveitada é uma a menos no lixo. O mercado de revenda de roupas deve movimentar R$24 bilhões no Brasil em 2025, crescendo 20% ao ano.
*(47 palavras)*

**Q12: As roupas do brechó são higienizadas?**
**Selecionamos apenas peças que chegam em bom estado de higiene, e peças que precisam de cuidado passam por processo de limpeza antes de entrar no acervo.** Roupas com manchas permanentes ou odores não são aceitas na consignação. O padrão de higiene é critério obrigatório de curadoria.
*(48 palavras)*

**Grupo 4 — Localização e Praticidade**

**Q13: Onde fica o Brechó Outra Vez?**
**Estamos na Av. do Contorno, 5690 - Loja B, Savassi, Belo Horizonte, MG.** Ficamos no coração do Savassi, de fácil acesso. Funcionamos de segunda a sexta das 10h às 18h e sábados das 10h às 13h. Domingo fechado.
*(40 palavras)*

**Q14: Posso ver as peças online antes de ir ao brechó?**
**Sim — publicamos peças toda semana no Instagram @boutravez.** Você pode também chamar no WhatsApp (31) 3324-3383 para perguntar sobre disponibilidade de categorias ou tamanhos antes de visitar. O catálogo completo está no site com filtros por categoria.
*(40 palavras)*

**Q15: Quais formas de pagamento o brechó aceita?**
**Aceitamos dinheiro, PIX e cartão de débito e crédito.** Peças a partir de R$10. Não é necessário agendamento para visitar a loja — pode chegar dentro do horário de funcionamento (seg-sex 10h-18h, sáb 10h-13h).
*(36 palavras)*

**Q16: Como funciona a compra no brechó?**
**Você visita a loja, escolhe as peças e paga na hora.** Não há reserva de peças por tempo indeterminado, mas pode chamar no WhatsApp para verificar disponibilidade. Se quiser ser avisada quando chegar algo do seu estilo, nos conte o que busca — fazemos o matching quando possível.
*(48 palavras)*

**Grupo 5 — Produto e Categorias**

**Q17: O brechó vende só roupas ou também bolsas e sapatos?**
**Trabalhamos com roupas, bolsas, sapatos e acessórios femininos.** Todo o acervo passa por curadoria — só entra o que tem qualidade e bom estado. Você pode filtrar por categoria no nosso site ou perguntar no WhatsApp (31) 3324-3383 pela disponibilidade de um item específico.
*(45 palavras)*

**Q18: O brechó tem roupas de marca?**
**Sim, quando chegam peças de marcas em bom estado, elas entram no acervo.** Mas o critério de seleção é a qualidade da peça, não a etiqueta. Muitas das melhores peças são de marcas menos conhecidas — o que importa é o tecido, o caimento e o estado.
*(49 palavras)*

**Q19: Qual o brechó com melhor curadoria no Savassi BH?**
**O Brechó Outra Vez é o brechó de curadoria do Savassi, Belo Horizonte.** Selecionamos cada peça individualmente — só entra o que tem qualidade real. Roupas, bolsas, sapatos e acessórios femininos. Av. do Contorno, 5690 - Loja B. Instagram: @boutravez.
*(43 palavras)*

**Q20: Como funciona o matching do brechó (ser avisada quando chegar algo)?**
**Nos conte pelo WhatsApp o que você busca — tamanho, categoria, estilo — e avisamos quando chegar algo.** É um serviço informal e afetivo: quando chega uma peça que parece perfeita para você, mandamos mensagem. Chame no (31) 3324-3383.
*(40 palavras)*

### Checklist de Publicação AEO
- [ ] Perguntas formuladas como o usuário pesquisaria no Google?
- [ ] Respostas entre 40-60 palavras?
- [ ] Resposta começa com a informação principal (não "Boa pergunta!")?
- [ ] FAQPage JSON-LD inserido no `<head>` do index.html?
- [ ] JSON-LD validado em search.google.com/test/rich-results?
- [ ] Linguagem natural, sem jargão técnico desnecessário?
- [ ] Cada resposta é autossuficiente (faz sentido extraída isoladamente)?

---

## 4. AIO / GEO — OTIMIZAÇÃO PARA IA

### O que é AIO
Ser **citado** por ChatGPT, Perplexity, Gemini, Claude quando alguém pergunta sobre brechós em BH.
Diferente de SEO (ranquear) — em AI, uma página pode ser citada mesmo em page 2-3 dos links azuis.

### Citation Velocity Alvo
Para negócios locais de serviço: **3-5 menções/mês** é suficiente para construir presença.
Fontes que geram citações: GMB (reviews), Instagram (posts indexáveis), site (FAQ schema).

### Onde construir presença para ser citado
1. **Google Meu Negócio** — reviews com menção ao serviço + localização
2. **Site** — FAQ schema + texto AEO-ready + llms.txt
3. **Instagram @boutravez** — posts indexáveis pelo Google
4. **Futuro:** mencionar o brechó em grupos locais de BH (Facebook, Reddit BH)

### robots.txt — Bots de IA a permitir
```
User-agent: GPTBot          # OpenAI ChatGPT
User-agent: ChatGPT-User    # ChatGPT browsing
User-agent: PerplexityBot   # Perplexity
User-agent: ClaudeBot       # Anthropic Claude
User-agent: anthropic-ai    # Anthropic (alternativo)
User-agent: Google-Extended # Google Gemini + AI Overviews
User-agent: Bingbot         # Microsoft Copilot (usa Bing; ChatGPT também usa)
Allow: /
```

**Atenção:** ChatGPT usa Bing para buscas locais. Visibilidade em Bing = visibilidade em ChatGPT.

### llms.txt — Guia para LLMs
Arquivo Markdown na raiz do site que serve como "mapa semântico" para agentes de IA.
Adotado por Anthropic (Claude), Perplexity (crescente), Cursor, outros.
**Não é robots.txt** — é um guia de compreensão, não de permissão.

### Princípios GEO (de Princeton KDD 2024)
| Técnica | Boost visibilidade | Como aplicar |
|---------|:------------------:|-------------|
| Citar fontes | +40% | Mencionar dados do setor (R$24bi, +20%/ano) |
| Adicionar estatísticas | +37% | Números específicos nos textos |
| Citações de especialistas | +30% | "Segundo estudos do setor..." |
| Tom autoritativo | +25% | Linguagem confiante, clara |
| Keyword stuffing | **-10%** | NUNCA fazer |

### KPIs de Monitoramento AIO
| Métrica | Target | Como verificar |
|---------|--------|----------------|
| Share of Synthesis local | >15% | Perguntar "brechó curadoria savassi" ao ChatGPT/Gemini mensalmente |
| Aparece em AI Overview Google | Sim | Buscar "brechó savassi" no Chrome em modo incógnito |
| Citação Perplexity | Sim | Perguntar "onde comprar roupa de segunda mão em bh" |
| Reviews GMB (autoridade local) | 15 em Q1 | Painel GMB |

---

## 5. POR PLATAFORMA

### Google Search + AI Overviews
- Foco: E-E-A-T + FAQPage schema + topical authority
- Topical clusters: consignação, curadoria feminina, moda circular BH, brechó savassi
- Meta description com keyword local na primeira frase
- Structured data: ClothingStore + FAQPage + LocalBusiness (já tem base)

### Instagram (@boutravez)
- Conteúdo educativo sobre curadoria = topical authority
- Hashtags locais = sinal geográfico para o Google
- Alta taxa de engajamento = sinal de autoridade (para Google AI Overviews)
- Legenda com keywords naturais (não stuffing)

### TikTok
- Conteúdo indexado pelo Google (TikTok pages aparecem em buscas)
- Tendências + vintage = keywords emergentes
- Educar sobre qualidade = diferencial vs. concorrentes

### ChatGPT / Perplexity
- Dependem de Bing (Copilot) e do próprio index
- GMB bem configurado + reviews = principal alavanca para buscas locais
- Conteúdo citável: dados específicos, respostas diretas, localização clara
- llms.txt ajuda agentes de IA a entender o site

---

## 6. CRONOGRAMA DE IMPLEMENTAÇÃO

### Imediato (esta sessão)
- [ ] robots.txt com AI bots permitidos
- [ ] sitemap.xml
- [ ] llms.txt
- [ ] FAQPage JSON-LD (20 perguntas acima)
- [ ] Atualizar title + meta description
- [ ] Atualizar texto "Sobre" com linguagem AEO-ready

### Semana 1
- [ ] Configurar Google Meu Negócio com descrição otimizada
- [ ] Publicar 5 FAQs no GMB
- [ ] Publicar primeiros posts Instagram com hashtags locais

### Semana 2-4
- [ ] Pedir reviews ativamente (script WhatsApp)
- [ ] 2-3 posts GMB por semana
- [ ] Testar aparência em AI: buscar "brechó savassi" no Google AI Overviews

### 90 dias
- [ ] Verificar aparência em ChatGPT ("brechó curadoria savassi bh")
- [ ] Verificar aparência em Perplexity ("onde comprar roupa de segunda mão em belo horizonte")
- [ ] Avaliar keywords que estão convertendo (via GMB insights + perguntar clientes)
```

**Step 2: Commit**
```bash
git add docs/manuais/seo-aeo-aio-brecho.md
git commit -m "docs: estratégia SEO/AEO/AIO Brechó Outra Vez v1.0"
```

---

## TASK 6 — SEO Técnico no Site (robots.txt, sitemap.xml, llms.txt, FAQ schema, meta tags)

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`
- Create: `llms.txt`
- Modify: `index.html` — `<title>`, meta description, FAQ schema JSON-LD, texto seção "Sobre"

**Step 1: Criar robots.txt**

```
User-agent: *
Allow: /

# AI Bots — permitir para visibilidade em AI Overviews e LLMs
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://boutravez.netlify.app/sitemap.xml
```

**Step 2: Criar sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://boutravez.netlify.app/</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://boutravez.netlify.app/#sobre</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://boutravez.netlify.app/#galeria</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://boutravez.netlify.app/#consignacao</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://boutravez.netlify.app/#como-funciona</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://boutravez.netlify.app/#localizacao</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://boutravez.netlify.app/data/pecas.json</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

**Step 3: Criar llms.txt**

```markdown
# Brechó Outra Vez
> Brechó feminino de curadoria no Savassi, Belo Horizonte, MG. Roupas, bolsas, sapatos e acessórios femininos selecionados a dedo. Consignação 50/50. O brechó de curadoria do Savassi.

## Identidade
- Nome: Brechó Outra Vez
- Handle: @boutravez (Instagram e Facebook)
- Endereço: Av. do Contorno, 5690 - Loja B, Savassi, Belo Horizonte, MG
- WhatsApp: (31) 3324-3383
- Horários: Segunda a sexta 10h-18h | Sábado 10h-13h | Domingo fechado

## Sobre o Brechó
- [Sobre](/index.html#sobre): História, missão e posicionamento da marca
- [Como funciona](/index.html#como-funciona): Processo de compra e consignação

## Catálogo
- [Galeria de peças](/index.html#galeria): Peças disponíveis filtradas por categoria (roupas, bolsas, sapatos, acessórios)
- [API de produtos](/api/produtos): JSON com catálogo completo — suporta ?categoria=roupas

## Consignação
- [Como consignar](/index.html#consignacao): Passo a passo da consignação 50/50 — o que aceitamos, prazo, como receber
- Critérios: roupas na moda, vendáveis, limpas, sem defeitos. Prazo 90 dias. Divisão 50/50.

## Localização e Contato
- [Endereço e horários](/index.html#localizacao): Av. do Contorno, 5690 - Loja B, Savassi, BH

## Perguntas Frequentes
Respostas completas disponíveis via FAQPage schema no site principal.
Principais temas: consignação, curadoria, qualidade de peças, horários, formas de pagamento.
```

**Step 4: Atualizar `<title>` e meta description no index.html**

Localizar no `<head>`:
```html
<title>...</title>
<meta name="description" content="...">
```

Substituir por:
```html
<title>Brechó Outra Vez — Brechó Feminino de Curadoria no Savassi, BH</title>
<meta name="description" content="Brechó feminino de curadoria no Savassi, Belo Horizonte. Roupas, bolsas, sapatos e acessórios selecionados a dedo. Consignação 50/50. Av. do Contorno, 5690. Seg-Sex 10h-18h.">
```

**Step 5: Adicionar FAQPage JSON-LD ao index.html**

Inserir antes do `</head>`, após os schemas existentes:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é um brechó de curadoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Um brechó de curadoria seleciona as peças antes de colocá-las à venda — só entra o que tem qualidade, bom estado e valor real. Diferente de brechós tradicionais, o trabalho de garimpo já foi feito. No Brechó Outra Vez (Savassi, BH), cada peça é avaliada individualmente antes de chegar à arara."
      }
    },
    {
      "@type": "Question",
      "name": "Onde fica o Brechó Outra Vez no Savassi BH?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Brechó Outra Vez fica na Av. do Contorno, 5690 - Loja B, Savassi, Belo Horizonte, MG. Funcionamos de segunda a sexta das 10h às 18h e sábados das 10h às 13h. Domingo fechado. WhatsApp: (31) 3324-3383."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona a consignação no Brechó Outra Vez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você traz suas peças para avaliação, definimos o preço juntas e dividimos 50/50 quando vende. Aceitamos roupas na moda, vendáveis, limpas e sem defeitos — sem restrição de marca. As peças ficam 90 dias; se não venderem, você retira. Recebimento em até 7 dias úteis após a venda."
      }
    },
    {
      "@type": "Question",
      "name": "Quais roupas o brechó aceita para consignação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aceitamos roupas, bolsas, sapatos e acessórios femininos que estejam na moda, vendáveis, limpos e sem defeitos. Avaliamos qualquer marca — o critério é a qualidade e o estado da peça, não o rótulo. Manchas permanentes, rasgos e desgaste excessivo não são aceitos."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto recebo pela consignação no brechó?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A divisão é 50% para você e 50% para o brechó. O preço de venda é definido juntas na avaliação. Quando a peça vende, você recebe sua parte em até 7 dias úteis. Sem taxa de cadastro ou cobrança antecipada."
      }
    },
    {
      "@type": "Question",
      "name": "Posso retirar minha peça do brechó se não vender?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, você pode retirar a peça a qualquer momento. O prazo padrão de consignação é 90 dias. Após esse período, entre em contato para combinar a retirada ou decidir o que fazer com a peça. Basta nos chamar no WhatsApp (31) 3324-3383."
      }
    },
    {
      "@type": "Question",
      "name": "Quais formas de pagamento o brechó aceita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aceitamos dinheiro, PIX e cartão de débito e crédito. Peças a partir de R$10. Não é necessário agendamento para visitar a loja — pode chegar dentro do horário de funcionamento: segunda a sexta das 10h às 18h, sábados das 10h às 13h."
      }
    },
    {
      "@type": "Question",
      "name": "Com que frequência chegam peças novas no brechó?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peças novas chegam toda semana no Brechó Outra Vez. O volume varia conforme as consignações recebidas, mas há sempre novidades. Siga o @boutravez no Instagram para ver as novidades assim que chegam — publicamos semanalmente a seleção da semana."
      }
    },
    {
      "@type": "Question",
      "name": "O brechó vende bolsas, sapatos e acessórios também?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, trabalhamos com roupas, bolsas, sapatos e acessórios femininos. Todo o acervo passa por curadoria — só entra o que tem qualidade e bom estado. Você pode filtrar por categoria no site ou perguntar no WhatsApp (31) 3324-3383 pela disponibilidade de um item específico."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o melhor brechó de curadoria do Savassi em BH?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Brechó Outra Vez é o brechó de curadoria do Savassi, Belo Horizonte. Selecionamos cada peça individualmente — só entra o que tem qualidade real. Roupas, bolsas, sapatos e acessórios femininos. Av. do Contorno, 5690 - Loja B. Instagram: @boutravez."
      }
    }
  ]
}
</script>
```

**Step 6: Atualizar texto da seção "Sobre" no index.html**

Localizar a seção `#sobre` e garantir que o texto principal siga o padrão AEO-ready (answer-first, vocabulário de autoridade). O texto deve iniciar com a resposta direta:

```html
<!-- Texto principal da seção sobre — AEO-ready -->
<p>O Brechó Outra Vez é o brechó feminino de curadoria do Savassi, Belo Horizonte. Selecionamos roupas, bolsas, sapatos e acessórios a dedo — só entra o que tem qualidade, bom estado e valor real.</p>
<p>Cada peça tem uma história. E a nossa missão é encontrar a nova dona certa para ela.</p>
```

**Step 7: Verificar e commitar**
```bash
# Verificar se os arquivos foram criados
ls robots.txt sitemap.xml llms.txt

# Abrir index.html no browser e testar em 375px (Chrome DevTools)

# Commit
git add robots.txt sitemap.xml llms.txt index.html
git commit -m "feat: SEO técnico — robots.txt, sitemap.xml, llms.txt, FAQPage schema, meta tags AEO"
```

---

## TASK 7 — Seção de Consignação no Site

**Files:**
- Modify: `index.html` — adicionar seção `#consignacao` e link no menu
- Modify: `assets/css/style.css` — estilos da seção

**Step 1: Adicionar link "Consignação" no menu de navegação**

Localizar no `index.html` a `<nav>` com os links e adicionar:
```html
<a href="#consignacao" class="nav-link">Consignação</a>
```
Inserir após o link "Como Funciona" e antes de "Localização".

**Step 2: Adicionar seção #consignacao ao index.html**

Inserir após a seção `#como-funciona` e antes de `#localizacao`:

```html
<!-- ==================== CONSIGNAÇÃO ==================== -->
<section id="consignacao" aria-label="Consignação de roupas">
  <div class="container">
    <div class="secao-header">
      <h2>Consignação</h2>
      <p class="secao-subtitulo">Dê uma nova vida às suas peças — e receba por isso</p>
    </div>

    <p class="consignacao-intro">
      Tem roupas boas paradas no armário? A gente encontra uma nova dona para elas.
      Sem esforço, sem drama. Você cuida das peças que ama — a gente cuida do resto.
    </p>

    <!-- Passos -->
    <div class="consignacao-passos">
      <div class="consignacao-passo">
        <span class="passo-numero">01</span>
        <h3>Você traz as peças</h3>
        <p>Traga suas roupas, bolsas, sapatos ou acessórios para avaliação. Segunda a sexta das 10h às 18h, sábados das 10h às 13h.</p>
      </div>
      <div class="consignacao-passo">
        <span class="passo-numero">02</span>
        <h3>Avaliamos juntas</h3>
        <p>Analisamos a qualidade, o estado e o valor de mercado de cada peça. Só aceitamos o que está na moda, vendável, limpo e sem defeitos.</p>
      </div>
      <div class="consignacao-passo">
        <span class="passo-numero">03</span>
        <h3>Definimos o preço</h3>
        <p>Você e a gente definimos o preço juntas. A divisão é justa: <strong>50% para você, 50% para o brechó</strong>. Sem taxa de cadastro.</p>
      </div>
      <div class="consignacao-passo">
        <span class="passo-numero">04</span>
        <h3>Você recebe</h3>
        <p>Quando a peça vende, você recebe em até 7 dias úteis. As peças ficam 90 dias — se não venderem, você retira ou decide o que fazer.</p>
      </div>
    </div>

    <!-- O que aceitamos -->
    <div class="consignacao-criterios">
      <div class="criterio criterio-aceito">
        <h3>O que aceitamos</h3>
        <ul>
          <li>Roupas na moda e vendáveis</li>
          <li>Peças limpas e sem defeitos</li>
          <li>Bolsas, sapatos e acessórios femininos</li>
          <li>Qualquer marca — o critério é a qualidade</li>
        </ul>
      </div>
      <div class="criterio criterio-nao-aceito">
        <h3>O que não aceitamos</h3>
        <ul>
          <li>Manchas permanentes ou odores</li>
          <li>Rasgos ou desgaste excessivo</li>
          <li>Peças muito fora de moda</li>
          <li>Roupas úmidas ou sem limpeza prévia</li>
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="consignacao-cta">
      <p>Pronta para começar? Chama a gente no WhatsApp — a gente responde rápido.</p>
      <a
        href="https://wa.me/5531933243383?text=Oi%21+Tenho+interesse+em+consignar+algumas+pe%C3%A7as+no+brech%C3%B3.+Pode+me+explicar+como+funciona%3F"
        class="btn btn-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa sobre consignação no WhatsApp"
      >
        Quero consignar
      </a>
    </div>

    <!-- FAQ consignação (com schema HowTo no JSON-LD) -->
    <div class="consignacao-faq">
      <h3>Dúvidas frequentes</h3>
      <details class="faq-item">
        <summary>Precisa agendar para trazer as peças?</summary>
        <p>Não precisa de agendamento. Pode chegar a qualquer hora dentro do horário de funcionamento: segunda a sexta das 10h às 18h, sábados das 10h às 13h. Se quiser garantir atendimento exclusivo, pode nos avisar pelo WhatsApp antes.</p>
      </details>
      <details class="faq-item">
        <summary>Qual o prazo para as peças ficarem na loja?</summary>
        <p>As peças ficam 90 dias na loja. Após esse período, você pode retirar as peças não vendidas ou decidir o que fazer com elas. Você também pode retirar a qualquer momento antes do prazo, basta nos avisar.</p>
      </details>
      <details class="faq-item">
        <summary>Como recebo o dinheiro das peças vendidas?</summary>
        <p>Quando sua peça vende, entramos em contato para combinar o pagamento. Fazemos o repasse em até 7 dias úteis após a venda, via PIX ou dinheiro — como preferir.</p>
      </details>
      <details class="faq-item">
        <summary>Posso consignar sem marca famosa?</summary>
        <p>Sim! O critério não é a marca — é a qualidade da peça. Muitas das melhores peças do nosso acervo são de marcas menos conhecidas. O que importa é o tecido, o caimento, o estado e se é algo que as nossas clientes vão querer.</p>
      </details>
      <details class="faq-item">
        <summary>E se minha peça não vender nos 90 dias?</summary>
        <p>Você nos avisa e vem retirar a peça. Não há nenhuma cobrança se a peça não vender. Se preferir, podemos conversar sobre outras opções para a peça após o prazo.</p>
      </details>
    </div>
  </div>
</section>
```

**Step 3: Adicionar HowTo schema JSON-LD ao index.html**

Inserir junto com os outros schemas no `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como fazer consignação de roupas no Brechó Outra Vez",
  "description": "Passo a passo para consignar roupas, bolsas e acessórios femininos no Brechó Outra Vez, no Savassi, Belo Horizonte. Divisão 50/50, prazo de 90 dias.",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Trazer as peças para avaliação",
      "text": "Leve suas roupas, bolsas, sapatos ou acessórios ao Brechó Outra Vez (Av. do Contorno, 5690 - Loja B, Savassi, BH) de segunda a sexta das 10h às 18h ou sábados das 10h às 13h. Não precisa de agendamento."
    },
    {
      "@type": "HowToStep",
      "name": "Avaliação conjunta",
      "text": "Você e a proprietária avaliam juntas a qualidade, estado e valor de mercado de cada peça. São aceitas peças na moda, limpas e sem defeitos, de qualquer marca."
    },
    {
      "@type": "HowToStep",
      "name": "Definir o preço juntas",
      "text": "O preço de venda é definido em conjunto. A divisão é 50% para você e 50% para o brechó. Sem taxa de cadastro ou cobrança antecipada."
    },
    {
      "@type": "HowToStep",
      "name": "Receber quando a peça vender",
      "text": "Quando a peça vende, você recebe em até 7 dias úteis via PIX ou dinheiro. As peças ficam 90 dias na loja. Se não venderem, você pode retirar a qualquer momento."
    }
  ]
}
</script>
```

**Step 4: Adicionar CSS da seção consignação ao style.css**

Adicionar ao final do arquivo:

```css
/* ==================== CONSIGNAÇÃO ==================== */
#consignacao {
  padding: var(--padding-secao);
  background: var(--cor-fundo-alt);
}

.consignacao-intro {
  font-size: 1.125rem;
  color: var(--cor-texto-leve);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  text-align: center;
  line-height: 1.7;
}

.consignacao-passos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin: var(--spacing-xl) 0;
}

.consignacao-passo {
  background: var(--cor-fundo);
  padding: 2rem;
  border-radius: var(--radius);
  position: relative;
}

.passo-numero {
  font-family: var(--fonte-titulo);
  font-size: 2.5rem;
  color: var(--cor-primaria);
  opacity: 0.15;
  display: block;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.consignacao-passo h3 {
  font-family: var(--fonte-titulo);
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--cor-texto);
}

.consignacao-passo p {
  font-size: 0.9375rem;
  color: var(--cor-texto-leve);
  line-height: 1.6;
}

.consignacao-criterios {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: var(--spacing-xl) 0;
}

@media (max-width: 768px) {
  .consignacao-criterios {
    grid-template-columns: 1fr;
  }
}

.criterio {
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
}

.criterio h3 {
  font-family: var(--fonte-titulo);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.criterio ul {
  list-style: none;
  padding: 0;
}

.criterio ul li {
  padding: 0.4rem 0;
  font-size: 0.9375rem;
  color: var(--cor-texto-leve);
  padding-left: 1.25rem;
  position: relative;
}

.criterio-aceito {
  background: var(--cor-fundo);
  border-left: 3px solid var(--cor-primaria);
}

.criterio-aceito h3 {
  color: var(--cor-primaria);
}

.criterio-aceito ul li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--cor-primaria);
  font-size: 0.875rem;
}

.criterio-nao-aceito {
  background: var(--cor-fundo);
  border-left: 3px solid var(--cor-borda);
}

.criterio-nao-aceito h3 {
  color: var(--cor-texto-leve);
}

.criterio-nao-aceito ul li::before {
  content: "×";
  position: absolute;
  left: 0;
  color: var(--cor-texto-leve);
  font-size: 0.875rem;
}

.consignacao-cta {
  text-align: center;
  margin: var(--spacing-xl) 0;
}

.consignacao-cta p {
  color: var(--cor-texto-leve);
  margin-bottom: 1.5rem;
}

.consignacao-faq {
  max-width: 680px;
  margin: 0 auto;
}

.consignacao-faq h3 {
  font-family: var(--fonte-titulo);
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--cor-texto);
}

.faq-item {
  border-bottom: 1px solid var(--cor-borda);
  padding: 1rem 0;
}

.faq-item summary {
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--cor-texto);
  font-size: 0.9375rem;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: "+";
  font-size: 1.25rem;
  color: var(--cor-primaria);
  flex-shrink: 0;
}

.faq-item[open] summary::after {
  content: "−";
}

.faq-item p {
  margin-top: 0.75rem;
  color: var(--cor-texto-leve);
  font-size: 0.9375rem;
  line-height: 1.65;
}
```

**Step 5: Testar em 375px**

Abrir Chrome DevTools > Toggle Device Toolbar > selecionar 375px.
Verificar:
- Passos empilham em 1 coluna
- Critérios empilham em 1 coluna
- Botão WhatsApp está visível e clicável
- FAQ accordion abre/fecha corretamente

**Step 6: Commit**
```bash
git add index.html assets/css/style.css
git commit -m "feat: seção consignação — passo a passo, critérios, FAQ accordion, HowTo schema"
```

---

## TASK 8 — API de Produtos (Netlify Functions + schema expandido)

**Files:**
- Modify: `data/pecas.json` — expandir schema com campos para Minha Lojita
- Create: `netlify/functions/produtos.js` — Netlify Function serverless
- Create: `netlify.toml` — configuração do Netlify
- Modify: `assets/js/galeria.js` — preparar para API externa com fallback

**Step 1: Expandir data/pecas.json**

Adicionar novos campos a cada peça (manter todos os campos existentes, apenas adicionar):

```json
[
  {
    "id": 1,
    "nome": "Vestido Floral Anos 70",
    "preco": 85,
    "categoria": "roupas",
    "foto": "assets/images/galeria/galeria-1.jpg",
    "destaque": true,
    "tamanho": "M",
    "cor": "floral multicolorido",
    "material": "viscose",
    "condicao": "impecável",
    "consignado": false,
    "ativo": true,
    "fonte": "local",
    "criado_em": "2026-03-10"
  },
  {
    "id": 2,
    "nome": "Bolsa de Couro Caramelo",
    "preco": 120,
    "categoria": "bolsas",
    "foto": "assets/images/galeria/galeria-2.jpg",
    "destaque": true,
    "tamanho": "único",
    "cor": "caramelo",
    "material": "couro legítimo",
    "condicao": "leve uso",
    "consignado": true,
    "ativo": true,
    "fonte": "local",
    "criado_em": "2026-03-10"
  },
  {
    "id": 3,
    "nome": "Scarpin Nude Clássico",
    "preco": 65,
    "categoria": "sapatos",
    "foto": "assets/images/galeria/galeria-3.jpg",
    "destaque": false,
    "tamanho": "37",
    "cor": "nude",
    "material": "couro sintético",
    "condicao": "impecável",
    "consignado": false,
    "ativo": true,
    "fonte": "local",
    "criado_em": "2026-03-10"
  },
  {
    "id": 4,
    "nome": "Blusa de Seda Estampada",
    "preco": 55,
    "categoria": "roupas",
    "foto": "assets/images/galeria/galeria-4.jpg",
    "destaque": false,
    "tamanho": "P",
    "cor": "estampado azul e branco",
    "material": "seda",
    "condicao": "impecável",
    "consignado": true,
    "ativo": true,
    "fonte": "local",
    "criado_em": "2026-03-10"
  },
  {
    "id": 5,
    "nome": "Blazer Xadrez Alfaiataria",
    "preco": 110,
    "categoria": "roupas",
    "foto": "assets/images/galeria/galeria-5.jpg",
    "destaque": true,
    "tamanho": "M",
    "cor": "xadrez preto e branco",
    "material": "lã mista",
    "condicao": "impecável",
    "consignado": false,
    "ativo": true,
    "fonte": "local",
    "criado_em": "2026-03-10"
  },
  {
    "id": 6,
    "nome": "Kit Acessórios Vintage",
    "preco": 40,
    "categoria": "acessorios",
    "foto": "assets/images/galeria/galeria-6.jpg",
    "destaque": false,
    "tamanho": "único",
    "cor": "dourado e marrom",
    "material": "metal e couro",
    "condicao": "vintage",
    "consignado": false,
    "ativo": true,
    "fonte": "local",
    "criado_em": "2026-03-10"
  }
]
```

**Step 2: Criar netlify/functions/produtos.js**

```bash
mkdir -p netlify/functions
```

```javascript
// netlify/functions/produtos.js
// API de produtos do Brechó Outra Vez
//
// Endpoints:
//   GET /api/produtos                    → todos os produtos ativos
//   GET /api/produtos?categoria=roupas   → filtra por categoria
//   GET /api/produtos?destaque=true      → só destaques
//   GET /api/produtos?categoria=roupas&destaque=true → combinado
//
// TODO: quando Minha Lojita estiver pronto, substituir a leitura
// do pecas.json local por um fetch na API externa:
//   const MINHA_LOJITA_API = process.env.MINHA_LOJITA_API_URL;
//   const response = await fetch(`${MINHA_LOJITA_API}/produtos`);
//   const pecas = await response.json();

const path = require('path');
const fs = require('fs');

exports.handler = async (event) => {
  // CORS headers para o Minha Lojita consumir de qualquer domínio
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Preflight OPTIONS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ erro: 'Método não permitido' }),
    };
  }

  try {
    // Ler pecas.json local (placeholder até Minha Lojita estar pronto)
    const filePath = path.join(__dirname, '../../data/pecas.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    let pecas = JSON.parse(raw);

    // Filtrar apenas peças ativas
    pecas = pecas.filter(p => p.ativo !== false);

    // Aplicar filtros da query string
    const params = event.queryStringParameters || {};

    if (params.categoria) {
      pecas = pecas.filter(p => p.categoria === params.categoria);
    }

    if (params.destaque !== undefined) {
      const destaque = params.destaque === 'true';
      pecas = pecas.filter(p => p.destaque === destaque);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(pecas),
    };
  } catch (err) {
    console.error('Erro ao ler pecas.json:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ erro: 'Erro interno ao carregar produtos' }),
    };
  }
};
```

**Step 3: Criar netlify.toml**

```toml
[build]
  functions = "netlify/functions"

[[redirects]]
  from = "/api/produtos"
  to = "/.netlify/functions/produtos"
  status = 200

[[redirects]]
  from = "/api/produtos/*"
  to = "/.netlify/functions/produtos/:splat"
  status = 200
```

**Step 4: Atualizar assets/js/galeria.js**

Localizar a linha que faz `fetch('data/pecas.json')` e substituir pela versão com fallback:

```javascript
// No topo do arquivo (antes de qualquer função), adicionar:
// Configuração da fonte de dados
// window.MINHA_LOJITA_API pode ser definido antes de galeria.js ser carregado
// para apontar para a API externa do Minha Lojita.
// Enquanto não estiver pronto, usa /api/produtos (Netlify Function)
// com fallback para pecas.json local.
const PRODUTOS_API = window.MINHA_LOJITA_API
  ? `${window.MINHA_LOJITA_API}/produtos`
  : '/api/produtos';

// Substituir o fetch original:
// ANTES: fetch('data/pecas.json')
// DEPOIS: (ver função abaixo)

async function carregarPecas() {
  try {
    // Tentar API principal
    const res = await fetch(PRODUTOS_API);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('API indisponível, usando fallback local:', err.message);
    // Fallback para pecas.json local (desenvolvimento ou API offline)
    const res = await fetch('data/pecas.json');
    return await res.json();
  }
}
```

**Instrução de aplicação:** No `galeria.js`, localizar onde é feito o fetch do JSON e substituir pela função `carregarPecas()` acima. A lógica de renderização dos cards e filtros permanece idêntica — apenas a fonte de dados muda.

**Step 5: Testar localmente**

```bash
# Instalar Netlify CLI se não tiver
npm install -g netlify-cli

# Rodar dev server com functions
netlify dev

# Testar endpoints
curl http://localhost:8888/api/produtos
curl "http://localhost:8888/api/produtos?categoria=roupas"
curl "http://localhost:8888/api/produtos?destaque=true"
```

Verificar:
- GET /api/produtos retorna array com todas as 6 peças ativas
- GET /api/produtos?categoria=roupas retorna apenas roupas
- GET /api/produtos?destaque=true retorna apenas destaques
- Header `Access-Control-Allow-Origin: *` presente na resposta
- Galeria ainda carrega normalmente com fallback

**Step 6: Commit**
```bash
git add data/pecas.json netlify/functions/produtos.js netlify.toml assets/js/galeria.js
git commit -m "feat: API GET /api/produtos (Netlify Function) + schema expandido + galeria com fallback"
```

---

## TASK 9 — Commit Final e Verificação

**Step 1: Verificação completa**

```bash
# Checar todos os arquivos criados
ls docs/prds/
ls docs/manuais/
ls robots.txt sitemap.xml llms.txt
ls netlify/functions/produtos.js netlify.toml

# Verificar git status
git status

# Abrir site em 375px (Chrome DevTools):
# - Seção consignação responsiva?
# - FAQ accordion funciona?
# - Galeria carrega?
# - Menu tem link "Consignação"?
```

**Step 2: Validar FAQ schema**

1. Abrir https://search.google.com/test/rich-results
2. Colar a URL do site ou o HTML do `<head>`
3. Verificar que FAQPage é reconhecido sem erros

**Step 3: Verificar robots.txt**

Abrir `https://seusite.netlify.app/robots.txt` após deploy e confirmar que o arquivo está acessível.

**Step 4: Verificar llms.txt**

Abrir `https://seusite.netlify.app/llms.txt` após deploy.

**Step 5: Commit final (se houver arquivos pendentes)**
```bash
git add .
git status  # revisar o que vai ser commitado
git commit -m "chore: arquivos finais — verificação e ajustes"
```

**Step 6: Push e deploy**
```bash
git push origin master
# Aguardar Netlify deploy automático (branch main ou master conforme configuração)
```

---

## Resumo dos Entregáveis

| Arquivo | Tipo | Status esperado |
|---------|------|-----------------|
| `docs/prds/PRD_00_BRECHO_GERAL.md` | PRD mestre | ✅ criado |
| `docs/prds/PRD_01_VITRINE.md` | PRD vitrine | ✅ criado |
| `docs/prds/PRD_02_ADMIN.md` | PRD admin | ✅ criado |
| `docs/prds/PRD_03_MARKETING_SEO.md` | PRD marketing | ✅ criado |
| `docs/manuais/manual-marca.md` | Manual marca | ✅ criado |
| `docs/manuais/manual-comunicacao.md` | Manual comunicação | ✅ criado |
| `docs/manuais/manual-marketing.md` | Manual marketing | ✅ criado |
| `docs/manuais/seo-aeo-aio-brecho.md` | Estratégia SEO/AEO/AIO | ✅ criado |
| `robots.txt` | SEO técnico | ✅ criado |
| `sitemap.xml` | SEO técnico | ✅ criado |
| `llms.txt` | AIO/GEO | ✅ criado |
| `index.html` | Site | ✅ atualizado (title, meta, FAQPage schema, HowTo schema, seção consignação, link nav) |
| `assets/css/style.css` | Site | ✅ atualizado (estilos consignação) |
| `data/pecas.json` | Dados | ✅ atualizado (schema expandido) |
| `netlify/functions/produtos.js` | API | ✅ criado |
| `netlify.toml` | Config | ✅ criado |
| `assets/js/galeria.js` | Site | ✅ atualizado (API URL + fallback) |
