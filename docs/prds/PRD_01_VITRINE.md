# PRD_01 — VITRINE PÚBLICA

> One-page estática | HTML/CSS/JS vanilla | Netlify | Mobile-first

## Visão Geral
Vitrine pública do Brechó Outra Vez. One-page com 7 seções (incluindo consignação).
Galeria dinâmica carregada de JSON. Nenhum carrinho, nenhum pagamento.
Integração futura com Minha Lojita via window.MINHA_LOJITA_API.

## Seções

| ID | Seção | Status |
|----|-------|--------|
| #hero | Hero com CTA | ✅ |
| #sobre | História da marca (texto AEO-ready) | ✅ |
| #galeria | Galeria dinâmica com filtros | ✅ |
| #como-funciona | Cards informativos | ✅ |
| #consignacao | Passo a passo consignação 50/50 | ✅ |
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
- Atual: const PRODUTOS_API = window.MINHA_LOJITA_API ? `${window.MINHA_LOJITA_API}/produtos` : '/api/produtos'
- Fallback: data/pecas.json se /api/produtos falhar
- Netlify Function: netlify/functions/produtos.js

## SEO/AEO Implementado
- ✅ Schema ClothingStore com endereço, coords, horários
- ✅ OG tags (Facebook, Twitter)
- ✅ FAQPage JSON-LD (10 perguntas AEO)
- ✅ HowTo schema na seção consignação
- ✅ robots.txt com AI bots permitidos
- ✅ sitemap.xml
- ✅ llms.txt
- ✅ Title: "Brechó Outra Vez — Brechó Feminino de Curadoria no Savassi, BH"
- ✅ Meta description otimizada com endereço + consignação

## Arquivos
- index.html — estrutura e conteúdo
- assets/css/style.css — estilos (variáveis no :root)
- assets/js/main.js — menu, scroll, parallax
- assets/js/galeria.js — galeria dinâmica com API fallback
- data/pecas.json — catálogo de peças (schema expandido)
- robots.txt — AI bots permitidos
- sitemap.xml — todas as âncoras
- llms.txt — guia semântico para LLMs

## Consignação (50/50)
- Cliente traz peças (seg-sex 9h30-18h)
- Avaliação conjunta: qualidade, estado, valor
- Prazo: 90 dias na loja
- Split: 50% cliente, 50% brechó
- Pagamento: até 7 dias úteis após venda
- O que aceita: roupas vendáveis, limpas, sem defeitos
- O que não aceita: manchas, rasgos, desgaste excessivo, muito fora de moda

## Status (2026-03-10)
- Coverage: 100%
- Deployável: Sim
