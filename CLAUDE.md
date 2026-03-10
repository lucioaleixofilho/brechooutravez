# Brechó Outra Vez — Instruções Claude Code

## Negócio
Brechó feminino, Savassi BH. Site institucional + vitrine. SEM carrinho/pagamento.
Clientes contactam via WhatsApp: (31) 3324-3383

## Dados do negócio
- Instagram: @boutravez | Facebook: /boutravez
- Endereço: Av. do Contorno, 5690 - Loja B, Savassi, BH
- Horários: Seg-Sex 9h30-18h | Sáb 9h30-13h | Dom fechado
- WhatsApp: https://wa.me/5531933243383

## Identidade visual
- Vermelho: #C4161C | Amarelo: #FFD700 | Fundo: #FAF9F7 | Texto: #1A1A1A
- Títulos: Playfair Display | Corpo: Inter
- Logo: assets/images/logo/logo.png
- Estilo: ULTRA-MINIMALISTA. Muito espaço em branco. Menos é mais.

## Arquitetura
- index.html — one-page, âncoras: #hero #sobre #galeria #como-funciona #localizacao
- assets/css/style.css — todos os estilos, variáveis CSS no :root, mobile-first
- assets/js/main.js — menu hamburger, WhatsApp float
- assets/js/galeria.js — lê data/pecas.json, renderiza grid dinamicamente
- data/pecas.json — catálogo de peças (adicionar/remover peças aqui)
- admin/index.html — painel para adicionar peças com senha

## Schema de pecas.json
```json
[
  {
    "id": 1,
    "nome": "Blazer Anos 90",
    "preco": 89,
    "categoria": "roupas",
    "foto": "assets/images/galeria/galeria-1.jpg",
    "destaque": true
  }
]
```
Categorias válidas: "roupas" | "bolsas" | "sapatos" | "acessorios"

## Regras NUNCA violar
- Mobile-first sempre (max-width: 768px primeiro)
- Sem frameworks JS (React, Vue, etc.)
- Sem carrinho ou pagamento
- Imagens: max 200KB, sempre com alt descritivo para SEO
- Whitespace generoso — é o design
- SEO: todas as sections com id, h2, aria-label
- Testar no Chrome DevTools em 375px antes de qualquer commit

## APIs disponíveis
- kie.ai para imagens: KIE_API_KEY em C:\Users\lucio\.env
- Endpoint: POST https://api.kie.ai/api/v1/jobs/createTask
- Model: nano-banana-2

## Adicionar peça ao catálogo
Editar data/pecas.json seguindo o schema acima.
Ou usar o painel admin em /admin/ (senha: brecho2025)

## Hospedagem
Netlify — branch main = deploy automático
URL de produção: a definir
