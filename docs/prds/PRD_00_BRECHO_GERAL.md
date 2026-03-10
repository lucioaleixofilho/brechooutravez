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
- ✅ index.html — one-page com #hero #sobre #galeria #como-funciona #consignacao #localizacao
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
- ✅ robots.txt com AI bots permitidos
- ✅ sitemap.xml
- ✅ llms.txt
- ✅ FAQPage JSON-LD (10 perguntas AEO)
- ✅ HowTo schema (consignação)
- ✅ Seção consignação (#consignacao)
- ✅ Netlify Function GET /api/produtos

## Integrações Externas
- WhatsApp: wa.me/5531933243383
- Google Maps embed
- Google Fonts: Playfair Display + Inter
- Futuro: Minha Lojita API (window.MINHA_LOJITA_API)
- Futuro: Google Meu Negócio (via Google Business Profile API)

## Dados do Negócio
- Endereço: Av. do Contorno, 5690 - Loja B, Savassi, BH
- Horários: Seg-Sex 9h30-18h | Sáb 9h30-13h | Dom fechado
- WhatsApp: (31) 3324-3383
- Instagram: @boutravez | Facebook: /boutravez
- Consignação: 50/50 (cliente / brechó)
- Prazo consignação: 90 dias
- Público: mulheres 25-55 anos, classe B e C

## Status (2026-03-10)
- Coverage: 100%
- Deployável: Sim
- Próxima milestone: Integração Minha Lojita
