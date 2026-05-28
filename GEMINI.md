# websiteBrecho — Gemini CLI instructions

Este projeto usa o **VERUS hook** para contexto progressivo.
NÃO cole conteúdo factual aqui — a wiki é a fonte da verdade.
Conteúdo factual é injetado em camadas L1→L4 pelo hook e ferramentas MCP.

## Áreas relevantes da wiki

estudio767/brecho, dev/websiteBrecho

## Stack rápida

Next.js + Vercel

## Comandos úteis

pnpm dev, vercel deploy

## Ferramentas MCP disponíveis

- `verus_search "query"` — busca na wiki (use graph=True para multi-hop)
- `verus_drill "topic"` — drill-down em tópico específico (L3, 500-1k tok)
- `verus_index "area"` — lista páginas de uma área da wiki
- `verus_read "area" "topic"` — lê página completa da wiki
- `verus_recent days=7` — eventos brutos recentes (L4, 2k+ tok)
- `verus_context "cwd"` — contexto do projeto ativo (decisões, TODOs, gotchas)

## Onde encontrar mais

- Wiki INDEX: `G:/Meu Drive/VERUS/_wiki/INDEX.md`
- Hot priorities: `G:/Meu Drive/VERUS/_wiki/hot.md`

> Esta página é gerada por `scripts/sync_ai_configs.py` — edits manuais acima do footer são sobrescritos.
> Conteúdo custom (anti-patterns, workflows) deve ficar ABAIXO deste footer.
> Override edits manuais: `CLAUDE_MD_EDIT=1 git commit ...`
