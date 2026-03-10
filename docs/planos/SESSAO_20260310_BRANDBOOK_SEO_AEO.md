# Sessão — Brandbook + SEO/AEO/AIO Brechó Outra Vez
**Data:** 2026-03-10
**Status:** Concluída (Fase 1 de 3)
**Próxima sessão:** Após NotebookLM deep research

---

## Contexto Inicial

Pedido do usuário: estudar o que foi feito de SEO/AIO/AEO no Sistema767, criar um brandbook e pré-lista para o Brechó Outra Vez, preparar uma ultra deep research no NotebookLM, e criar uma diretriz de brandbook completa.

---

## Decisões de Negócio

| Decisão | Escolha |
|---------|---------|
| Perfil Instagram | Dormente — estratégia do zero |
| Objetivos | Tráfego local + visitas físicas + consignação (tudo junto) |
| Posicionamento | Acessível com sofisticação + comunidade e afeto |
| Benchmark concorrentes | Brasil urbano: SP, RJ, Curitiba, POA |
| Entregável | Brandbook completo + kit de conteúdo (opção C) |
| Abordagem | Paralela: pesquisa de concorrentes + brandbook simultâneos |
| Sequência | Fase 1 (esta sessão) → Fase 2 (NotebookLM) → Fase 3 (kit refinado + implementação) |

---

## O Que Foi Explorado

### Sistema767 (SEO/AIO/AEO existente)
- **AEO Content Patterns** — 6 padrões AEO + 5 GEO patterns (content-patterns.md)
- **AI-SEO Skill** — 3 pilares: Structure, Authority, Presence (SKILL.md)
- **Google Meu Negócio Playbook** — 12 posts, 10 FAQs, estratégia de reviews (EP-02)
- **SEO Estúdio 767** — 8 frases canônicas, keywords primárias, proof points
- **Metodologia aplicável ao Brechó**: AEO patterns, FAQ schema, GMB strategy

### Brechó Outra Vez (site atual)
- Schema ClothingStore implementado (com endereço, coords, horários, sameAs)
- OG tags e Twitter Card configurados
- Keywords básicas nas meta tags
- **Ausentes:** robots.txt, sitemap.xml, FAQ schema, página FAQ dedicada
- 6 peças no catálogo (roupas 3, bolsas 1, sapatos 1, acessórios 1)

---

## Arquivos Criados

| Arquivo | Descrição |
|---------|-----------|
| `docs/brandbook/brandbook.md` | Brandbook completo: identidade, persona (Luciana + Camila), arquétipo (Cuidador + Explorador), tom de voz, mensagens por canal, paleta, hashtags, **30 ideias de posts**, **10 FAQs GMB**, **5 templates de legenda** |
| `docs/brandbook/pre-lista-seo.md` | 8 keywords primárias, 10 secundárias, 12 long-tail, 33 perguntas AEO, vocabulário de autoridade, 5 textos prontos (Sobre AEO-ready, FAQ schema JSON-LD, GMB, bio Instagram, taglines), recomendações técnicas |
| `docs/brandbook/benchmark-concorrentes.md` | Análise: Capricho à Toa SP (319K), Luz da Villa SP (76K), Peça Rara RJ (40K), Dig for Fashion CWB (98K), Pur Luxe CWB (61K) — dados de mercado, gaps, tendências |
| `docs/brandbook/HANDOFF-NOTEBOOKLM.md` | Guia passo a passo: o que subir no NotebookLM, 15 perguntas em 5 rodadas, o que fazer com os resultados |
| `docs/planos/2026-03-10-brandbook-seo-design.md` | Design doc da sessão (aprovado) |
| `.mcp.json` | MCP notebooklm configurado para este projeto |

---

## Insights de Mercado (benchmark)

- Setor cresce **+20%/ano**, R$24 bilhões em 2025
- Keywords em expansão: "brechó perto de mim" +175%, "brechó roupas usadas baratas" +128,6%
- **Gap crítico:** BH/Savassi tem pouca concorrência digital — ser o primeiro vale muito
- **Gap AEO:** Quase nenhum brechó brasileiro tem FAQ schema — quem fizer primeiro aparece nos AI Overviews
- **Gap de conteúdo:** Conteúdo educativo sobre curadoria e storytelling de consignação são subexplorados

---

## Posicionamento Definido

**Arquétipo:** Cuidador (principal) + Explorador (secundário)
**Tagline principal:** "Cada peça tem uma história."
**Persona principal:** Luciana, 28-48 anos, Savassi, gosto apurado, busca curadoria
**Persona secundária:** Camila, 30-55 anos, armário cheio, quer consignar sem esforço
**Tom:** Como uma amiga de bom gosto apresentando algo que encontrou e ficou apaixonada

---

## Pendências / Próximos Passos

### Fase 2 — NotebookLM (fazer agora)
- [ ] Reiniciar Claude Code para ativar MCP notebooklm (`.mcp.json` criado)
- [ ] Fazer `/nlm login`
- [ ] Subir arquivos no NotebookLM (brandbook + pre-lista + benchmark + index.html)
- [ ] Rodar as 15 perguntas em 5 rodadas (ver HANDOFF-NOTEBOOKLM.md)
- [ ] Salvar outputs em `docs/brandbook/notebooklm-outputs.md`

### Fase 3 — Implementação (após NotebookLM)
- [ ] Adicionar FAQ schema JSON-LD ao `index.html`
- [ ] Criar `robots.txt`
- [ ] Criar `sitemap.xml`
- [ ] Atualizar seção "Sobre" com texto AEO-ready
- [ ] Configurar Google Meu Negócio com textos otimizados
- [ ] Criar bio otimizada no Instagram @boutravez
- [ ] Gerar calendário editorial mês 1 Instagram
- [ ] Commit e deploy no Netlify (branch main)

---

## Arquivos Tocados

```
BRECHOWEBSITE/
├── .mcp.json                                         ← NOVO
└── docs/
    ├── brandbook/
    │   ├── brandbook.md                              ← NOVO
    │   ├── pre-lista-seo.md                          ← NOVO
    │   ├── benchmark-concorrentes.md                 ← NOVO
    │   └── HANDOFF-NOTEBOOKLM.md                     ← NOVO
    └── planos/
        ├── 2026-03-10-brandbook-seo-design.md        ← NOVO
        └── SESSAO_20260310_BRANDBOOK_SEO_AEO.md      ← NOVO (este arquivo)
```
