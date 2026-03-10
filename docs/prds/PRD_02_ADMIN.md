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

## Acesso
- URL: /admin/
- Senha: brecho2025

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
