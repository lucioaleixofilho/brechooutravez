# Design Doc — Brandbook + SEO/AEO/AIO Brechó Outra Vez
**Data:** 2026-03-10
**Status:** Aprovado
**Autor:** Claude Code (brainstorming session)

---

## Contexto

O Brechó Outra Vez é um brechó feminino de curadoria no Savassi, BH. Tem site funcional com SEO básico implementado (schema ClothingStore, OG tags, meta tags), mas sem brandbook formal, sem estratégia AEO/AIO, e perfil Instagram dormente.

## Objetivos

1. **Tráfego local** — aparecer quando alguém busca "brechó savassi", "brechó BH", "brechó perto de mim"
2. **Visitas físicas + WhatsApp** — converter buscas e posts em movimento na loja
3. **Consignação** — atrair mulheres para trazerem peças e aumentar estoque

## Posicionamento Definido

**Duplo diferencial:**
- **Acessível com sofisticação** — estilo de Savassi sem pagar preço de grife
- **Comunidade e afeto** — o brechó como ponto de encontro, as clientes como amigas

## Abordagem

Paralela: pesquisa de concorrentes + brandbook simultâneos, depois kit de conteúdo.

---

## Entregáveis

### FASE 1 (esta sessão)

| Arquivo | Destino | Descrição |
|---------|---------|-----------|
| `brandbook.md` | `docs/brandbook/` | Brandbook completo |
| `pre-lista-seo.md` | `docs/brandbook/` | Keywords, perguntas AEO, gaps vs concorrentes |
| `kit-conteudo.md` | `docs/brandbook/` | 30 ideias posts + 10 FAQs + 5 templates legenda |

### FASE 2 (NotebookLM — executar manualmente)

Fazer upload dos arquivos gerados na Fase 1 + conteúdo do index.html + perfis de concorrentes identificados. Usar para deep research de:
- Palavras-chave de alta intenção
- Perguntas que clientes realmente fazem
- Textos otimizados para AI Overviews
- Recomendações para Instagram, Google Meu Negócio, site

### FASE 3 (após NotebookLM)

Com os outputs da pesquisa, refinar:
- Kit de conteúdo com keywords reais
- FAQs enriquecidas com linguagem natural dos clientes
- Templates de legenda com AEO baked in

---

## Estrutura do Brandbook

1. **Identidade de Marca** — nome, tagline, posicionamento, proposta de valor
2. **Persona da Cliente** — quem é ela, o que busca, como fala
3. **Arquétipo de Marca** — qual personagem a marca encarna
4. **Tom de Voz** — como falamos, palavras que usamos/evitamos
5. **Mensagens-Chave por Canal** — Instagram, Google Meu Negócio, site, WhatsApp
6. **Paleta e Visual** — cores, fontes, estilo de foto confirmados
7. **Hashtag Strategy** — clusters de hashtags por tipo de post
8. **Kit de Conteúdo** — 30 ideias + 10 FAQs + 5 templates

---

## Referências Usadas

- Metodologia AEO do Sistema767 (`ai-seo` SKILL.md, `content-patterns.md`)
- Playbook GMB do Sistema767 (EP-02_GOOGLE_MEU_NEGOCIO.md)
- Site atual: index.html (schema, textos, OG tags já implementados)
- Benchmark: brechós SP/RJ/Curitiba/POA (pesquisa paralela)
