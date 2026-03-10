# Sessão — Brandbook, Manuais, SEO/AEO/AIO, Consignação e API
**Data:** 2026-03-10
**Status:** Concluída (Fase 2 de 3)
**Commit:** `bb26a8a`

---

## O Que Foi Feito

### PRDs (docs/prds/)
| Arquivo | Conteúdo |
|---------|---------|
| PRD_00_BRECHO_GERAL.md | PRD mestre: arquitetura, módulos, princípios invioláveis |
| PRD_01_VITRINE.md | Vitrine pública: seções, schema de peça, API, SEO |
| PRD_02_ADMIN.md | Painel admin, limitações, integração futura Minha Lojita |
| PRD_03_MARKETING_SEO.md | Estratégia completa: marketing, SEO, AEO, AIO |

### Manuais (docs/manuais/)
| Arquivo | Conteúdo |
|---------|---------|
| manual-marca.md | Logo, paleta #8B1C24 + #C5A059, tipografia, estilo fotográfico, whitespace |
| manual-comunicacao.md | Personas, 4 dimensões de tom, palavras obrigatórias/proibidas, templates WhatsApp |
| manual-marketing.md | 10 formatos Instagram + 30 hooks, hashtags, TikTok, GMB, calendário semanal |
| seo-aeo-aio-brecho.md | Keywords, 10 Atomic Answers, AIO/GEO, KPIs, monitoramento mensal |

### SEO Técnico
- `robots.txt` — AI bots permitidos (GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended, Bingbot)
- `sitemap.xml` — 6 URLs incluindo #consignacao
- `llms.txt` — guia semântico para LLMs, padrão 2026
- `index.html`:
  - Title: "Brechó Outra Vez — Brechó Feminino de Curadoria no Savassi, BH"
  - Meta description otimizada com endereço + consignação
  - FAQPage JSON-LD (10 perguntas AEO, 40-60 palavras cada)
  - HowTo JSON-LD (embutido na seção consignação via microdata)
  - Texto Sobre atualizado: "O brechó de curadoria do Savassi" (claim proprietário)
  - Nav e footer: link "Consignação" adicionado

### Site — Seção Consignação
- `index.html` — seção `#consignacao` com:
  - 4 passos (HowTo schema via microdata): trazer → avaliar → definir preço → receber 50%
  - Critérios: aceito vs não aceito (dois blocos visuais)
  - FAQ accordion (5 perguntas com `<details>/<summary>`)
  - CTA WhatsApp com mensagem pré-formatada
- `style.css` — estilos completos, mobile-first, responsivo 768px

### API e Galeria
- `netlify/functions/produtos.js` — GET /api/produtos com filtros ?categoria e ?destaque, CORS *
- `netlify.toml` — redirect /api/produtos → /.netlify/functions/produtos
- `galeria.js` — suporte a `window.MINHA_LOJITA_API` com duplo fallback (/api/produtos → data/pecas.json)
- `data/pecas.json` — schema expandido: tamanho, cor, material, condição, consignado, ativo, fonte, criado_em

---

## Arquivos Modificados

```
BRECHOWEBSITE/
├── index.html                                    ← MODIFICADO (title, meta, FAQ schema, #consignacao, nav)
├── assets/css/style.css                          ← MODIFICADO (+206 linhas CSS consignação)
├── assets/js/galeria.js                          ← MODIFICADO (window.MINHA_LOJITA_API + fallback duplo)
├── data/pecas.json                               ← MODIFICADO (schema expandido)
├── robots.txt                                    ← NOVO
├── sitemap.xml                                   ← NOVO
├── llms.txt                                      ← NOVO
├── netlify.toml                                  ← NOVO
├── netlify/
│   └── functions/
│       └── produtos.js                           ← NOVO
└── docs/
    ├── manuais/
    │   ├── manual-marca.md                       ← NOVO
    │   ├── manual-comunicacao.md                 ← NOVO
    │   ├── manual-marketing.md                   ← NOVO
    │   └── seo-aeo-aio-brecho.md                 ← NOVO
    └── prds/
        ├── PRD_00_BRECHO_GERAL.md                ← NOVO
        ├── PRD_01_VITRINE.md                     ← NOVO
        ├── PRD_02_ADMIN.md                       ← NOVO
        └── PRD_03_MARKETING_SEO.md               ← NOVO
```

---

## Pendências / Próximos Passos

### Imediato
- [ ] Push para main → deploy automático Netlify
- [ ] Validar FAQ schema: `search.google.com/test/rich-results`
- [ ] Validar robots.txt: `search.google.com/search-console/robots-tester`
- [ ] Confirmar llms.txt acessível em `/llms.txt`

### Google Meu Negócio (requer acesso ao painel)
- [ ] Atualizar descrição (ver `docs/prds/PRD_03_MARKETING_SEO.md`)
- [ ] Publicar 10 FAQs
- [ ] Adicionar fotos (mínimo 20)
- [ ] Iniciar campanha de reviews

### Instagram @boutravez (requer acesso à conta)
- [ ] Atualizar bio com claim + tagline
- [ ] Publicar primeiros 3 posts seguindo manual-marketing.md
- [ ] Criar destaques: "Peças", "Consignação", "Sobre"

### Fase 3 — Futuro (Minha Lojita)
- [ ] Integrar: setar `window.MINHA_LOJITA_API` em index.html
- [ ] Remover placeholder netlify/functions/produtos.js quando API externa estiver pronta
- [ ] Automatizar publicação Instagram/TikTok via Minha Lojita
