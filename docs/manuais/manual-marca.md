# Manual de Marca — Brechó Outra Vez

Guia prático para quem vai comunicar, criar, produzir ou publicar qualquer coisa com a marca.
Não é um documento corporativo. É o jeito certo de fazer.

---

## 1. LOGO

**Arquivo principal:** `assets/images/logo/logo.png`

### Versões disponíveis

| Versão | Quando usar |
|--------|-------------|
| **Cor** (padrão) | Sobre fundos claros — creme, branco, cinza claro |
| **Monocromático** | Impressão P&B, documentos, tampas de caixa |
| **Negativo** (branco) | Sobre fundos escuros ou vermelho sólido |

### Espaçamento mínimo

Sempre deixar ao redor do logo um espaço equivalente à altura da letra "B" do logotipo. Em nenhuma situação o logo deve estar colado em outra informação visual.

### Tamanho mínimo

- Digital: 100px de largura
- Impresso: 3cm de largura

Abaixo disso o logo perde leiturabilidade.

### O que NUNCA fazer com o logo

- Distorcer proporções (esticar ou comprimir)
- Aplicar filtros, sombras ou efeitos
- Mudar as cores para qualquer coisa que não seja uma das versões oficiais
- Usar a versão colorida sobre fundo escuro — use o negativo
- Usar a versão negativa sobre fundo claro — use a colorida
- Colocar sobre foto com muita informação visual onde o logo desaparece
- Recortar ou cobrir qualquer parte do logo

---

## 2. PALETA DE CORES

### As cores

**Vermelho Outra Vez** `#8B1C24` — variável CSS: `--cor-primaria`
- Uso: CTAs principais, hover de links, destaque de preço, detalhes de destaque
- Representa: paixão, curadoria, a emoção de descobrir algo especial
- Nunca use como cor de fundo em grandes áreas

**Dourado Suave** `#C5A059` — variável CSS: `--cor-destaque`
- Uso: ênfase em títulos (tag `<em>`), detalhes especiais, labels, ornamentos
- Representa: sofisticação, valor, seleção cuidadosa
- Use com parcimônia — é uma cor de acento, não de preenchimento

**Fundo Creme** `#FAF9F7` — variável CSS: `--cor-fundo`
- Uso: fundo principal da página e de cards
- Regra inegociável: NUNCA substituir por branco puro. O creme é o design.

**Fundo Alt** `#F2EFEC` — variável CSS: `--cor-fundo-alt`
- Uso: seções alternadas (sobre, como funciona), criar ritmo visual sem adicionar peso

**Texto Principal** `#1A1A1A` — variável CSS: `--cor-texto`
- Uso: todo texto de leitura, corpo de post, captions
- Nunca usar preto puro `#000000` — é duro demais para o posicionamento da marca

**Texto Suave** `#6B6560` — variável CSS: `--cor-texto-leve`
- Uso: subtítulos, datas, informações secundárias, metadados de peça

**Borda** `#E8E4E0` — variável CSS: `--cor-borda`
- Uso: divisores, bordas de cards, separadores sutis

### Aplicação por canal

**Instagram Feed e Reels**
- Vermelho + dourado como cores de destaque em cards e destaques de stories
- Nunca fundo vermelho em fotos de peça — a peça precisa ser a protagonista

**Instagram Stories**
- Fundo: `#FAF9F7` (creme) ou foto limpa com boa luz
- Texto: sempre escuro sobre fundo claro, nunca branco sobre foto sem contraste
- CTA: botão ou texto em vermelho `#8B1C24`

**WhatsApp Business**
- Mensagens em texto simples — sem formatação especial, sem cores
- Foto de perfil: logo em fundo creme claro

**Google Meu Negócio**
- Fotos: fundo neutro (preferencialmente creme ou branco)
- Posts: texto simples, sem sobreposição colorida nas imagens

**Documentos físicos e PDF**
- Vermelho, dourado e texto escuro
- Fundo branco ou creme — nunca fundo colorido em documentos formais

---

## 3. TIPOGRAFIA

### Títulos: Playfair Display

- Pesos disponíveis: 400 (normal), 600 (semibold)
- Onde usar: h1 (hero), h2 (seções), h3 (subseções), taglines, slides de carrossel no Instagram
- Tamanhos no site:
  - h1: `clamp(2rem, 5vw, 3.5rem)`
  - h2: `2rem`
  - h3: `1.5rem`
- Proibido: usar Playfair Display em texto corrido. Fica ilegível em tamanhos pequenos.

### Corpo: Inter

- Pesos disponíveis: 300 (light), 400 (regular), 500 (medium)
- Onde usar: todo texto de leitura, legendas, botões, menus, captions de Instagram, mensagens de WhatsApp
- Line-height mínimo: 1.6 (o site usa 1.7 — siga esse padrão)
- Tamanho mínimo digital: 14px

### Hierarquia obrigatória

| Nível | Elemento | Regra |
|-------|----------|-------|
| 1 | h1 | Só uma por página. Identifica o tema principal. |
| 2 | h2 | Seções principais. |
| 3 | h3 | Subseções e títulos de cards. |
| 4 | p | Texto corrido. Máximo 4-5 linhas por parágrafo. |

Nunca pule níveis da hierarquia só por estética. Se precisar de algo maior ou menor, ajuste o tamanho dentro do nível correto.

---

## 4. ESTILO FOTOGRÁFICO

### Fotos de peças

- **Fundo:** neutro — creme, branco off-white, madeira clara. Nunca fundo colorido.
- **Luz:** natural e difusa. NUNCA flash direto — estoura cores e cria sombras duras.
- **Ângulos obrigatórios por peça:**
  1. Foto geral (peça inteira, bem enquadrada)
  2. Foto de detalhe (tecido, costura, etiqueta, botão, estampa)
- **Proporção:** 1:1 para feed padrão ou 4:5 para feed vertical
- **Edição:** leve. Ajuste de brilho e temperatura se necessário — nunca filtros que alterem a cor real da peça. Quem vai comprar precisa ver a cor real.
- **Resolução mínima:** 1080x1080px para Instagram

### Fotos do espaço e equipe

- Luz natural sempre que possível
- Araras organizadas e fundo limpo
- Texturas e materiais em evidência (tecidos, madeira, metal das araras)
- Sem bagunça visível no fundo — produção mínima antes de fotografar

### O que NUNCA fazer em fotos

- Fundo colorido chamativo (azul, rosa, amarelo)
- Flash direto que estoura a imagem
- Filtros que distorcem cores reais da peça
- Colagem de 6-8 produtos em uma foto só
- Marca d'água pesada que atrapalha ver a peça
- Foto de roupa jogada em porta, cadeira ou cama sem intenção visual clara
- Foto desfocada ou com luz inconsistente

---

## 5. WHITESPACE — É O DESIGN

O Brechó Outra Vez usa o espaço em branco como elemento visual ativo. O vazio não é ausência de conteúdo — é a escolha de deixar o que importa respirar.

**No site:**
- Espaçamento entre seções: mínimo 72px (variável `--padding-secao`)
- Entre parágrafos: sempre respirar — nunca texto comprimido
- Um produto por card. Uma mensagem por seção.

**No Instagram:**
- Posts com muito espaço branco performam melhor para este posicionamento
- Nunca encher o frame com informação. Uma peça por post de apresentação.
- O vazio atrai o olhar para o que importa.

**Regra prática:** Se pareceu cheio demais, tire alguma coisa. Se ainda parece cheio, tire mais.

---

## 6. O QUE NAO FAZER

Lista de erros visuais proibidos. Sem exceção.

- Fundo colorido em posts de peças
- Filtros que mudam a cor real da peça
- Colagem de 6-8 produtos em um único post
- Fontes fora da paleta tipográfica (Comic Sans, Impact, qualquer fonte de impacto)
- CTA em letras maiúsculas gritantes ("COMPRE AGORA!!!")
- Stickers e GIFs animados em excesso nos stories
- Grade quebrada no Instagram (inconsistência visual de temperatura de cor ou enquadramento)
- Logo na versão errada sobre fundo que compromete leitura
- Fundo vermelho em grandes áreas de layout
- Texto branco sobre foto sem contraste suficiente
- Uso de `#000000` (preto puro) em qualquer texto

---

## 7. APLICACAO POR CANAL

### Instagram Feed

- Fundo das fotos de peça: creme ou branco neutro
- Consistência visual: mesma temperatura de cor em todas as fotos do feed
- Frequência sugerida: 4-5 posts/semana
- Captions: Inter 14px | Slides de carrossel: Playfair nos títulos

### Instagram Stories

- Fundo: `#FAF9F7` ou foto limpa com boa iluminação
- Texto: sempre legível — Inter, cor escura sobre fundo claro
- CTA: botão ou link em vermelho `#8B1C24`
- Stickers de enquete e pergunta: usar com moderação, quando fazem sentido

### WhatsApp Business

- Mensagens em texto simples — sem negrito forçado, sem emojis em excesso
- Tom: informal, como uma atendente que conhece moda e gosta de ajudar
- Foto de perfil: logo em fundo claro
- Catálogo: fotos de peças seguindo o padrão fotográfico deste manual

### Google Meu Negócio

- Foto de capa: interior da loja, limpo, bem iluminado
- Fotos de produtos: padrão fotográfico deste manual
- Posts: texto simples, 1 imagem, CTA para WhatsApp
- Responder todos os reviews — positivos e negativos
