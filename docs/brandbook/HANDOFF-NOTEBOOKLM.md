# HANDOFF — NotebookLM Ultra Deep Research
**Brechó Outra Vez | Data:** 2026-03-10

---

## O QUE FAZER NESTA SESSÃO

Você vai alimentar o NotebookLM com os documentos abaixo e fazer uma deep research para extrair palavras-chave reais, perguntas dos clientes, textos otimizados e recomendações concretas para Instagram, Google Meu Negócio e site.

---

## ARQUIVOS PARA FAZER UPLOAD NO NOTEBOOKLM

### Obrigatórios (já prontos)
- [ ] `docs/brandbook/brandbook.md` — identidade, tom de voz, persona, kit de conteúdo
- [ ] `docs/brandbook/pre-lista-seo.md` — keywords, perguntas AEO, textos otimizados
- [ ] `docs/brandbook/benchmark-concorrentes.md` — análise de mercado e concorrentes

### Adicionais (coletar manualmente)
- [ ] Conteúdo completo do `index.html` (copiar o texto/HTML para um .txt)
- [ ] Print ou texto da bio do Instagram @boutravez
- [ ] 5-10 últimas legendas de posts do Instagram @boutravez (se houver)
- [ ] Print do Google Meu Negócio (se já configurado)
- [ ] Screenshots de 3 concorrentes: @caprichoatoa, @pecarara.rj.ipanema, @digforfashioncuritiba

---

## PERGUNTAS PARA FAZER NO NOTEBOOKLM

Cole essas perguntas uma por vez, nesta ordem:

### RODADA 1 — Keywords e Buscas
```
1. Com base nos documentos, quais são as 20 palavras-chave de maior intenção de compra para um brechó feminino de curadoria em Belo Horizonte, especialmente no Savassi? Organize por: primárias (alta intenção local), secundárias (produto específico), long-tail (alta conversão).

2. Quais palavras-chave e termos os concorrentes identificados (Capricho à Toa, Peça Rara, Dig for Fashion) estão usando que o Brechó Outra Vez ainda não usa? Quais são os gaps de keyword?

3. Quais são os termos de busca relacionados à consignação de roupas que uma pessoa usaria antes de decidir levar peças para um brechó? Liste os 10 mais prováveis.
```

### RODADA 2 — Perguntas dos Clientes (AEO)
```
4. Com base no perfil da persona "Luciana" (28-48 anos, Savassi, gosto apurado, busca curadoria), quais são as 15 perguntas que ela mais faria ao Google ou a uma IA sobre brechós em BH? Inclua perguntas sobre compra, consignação, qualidade e localização.

5. Quais perguntas aparecem com mais frequência nas avaliações e comentários de brechós nas redes sociais e Google? O que os clientes querem saber antes de visitar um brechó de curadoria?

6. Quais perguntas frequentes sobre moda circular, slow fashion e sustentabilidade são mais buscadas por mulheres entre 28-48 anos em capitais brasileiras?
```

### RODADA 3 — Conteúdo Instagram
```
7. Com base no posicionamento "acessível com sofisticação + comunidade e afeto" e nos dados de concorrentes, quais são os 10 tipos de post do Instagram que geram mais engajamento (saves, compartilhamentos, comentários) para brechós femininos de curadoria no Brasil?

8. Quais hooks (primeiras frases de legenda) funcionam melhor para posts de produto em brechós? Sugira 10 variações baseadas nos documentos e no que funcionou para os concorrentes.

9. Que tipos de Reels os brechós brasileiros mais bem-sucedidos publicam? Descreva os 5 formatos com mais visualizações e por que funcionam.
```

### RODADA 4 — Google Meu Negócio
```
10. Para otimizar a presença no Google Meu Negócio de um brechó feminino de curadoria no Savassi BH, quais são as 5 ações mais impactantes que devemos tomar primeiro?

11. Quais são as perguntas mais comuns que aparecem no Google Meu Negócio de brechós? Como devemos responder para aparecer nos AI Overviews do Google?

12. Quais categorias de posts no Google Meu Negócio (novidades, oferta, evento, produto) geram mais cliques e conversões para negócios locais de moda?
```

### RODADA 5 — Textos e Copy
```
13. Com base no brandbook e nos dados de mercado, reescreva a seção "Sobre" do site do Brechó Outra Vez de forma otimizada para AEO — deve responder naturalmente perguntas como "o que é o Brechó Outra Vez?", "onde fica?", "como funciona a consignação?".

14. Crie 5 versões de bio para o Instagram do Brechó Outra Vez, cada uma com foco diferente: (a) localização + curadoria, (b) consignação, (c) sustentabilidade, (d) comunidade, (e) preço + qualidade.

15. Com base nos dados de benchmark e no posicionamento definido, quais são as 3 mensagens-chave que o Brechó Outra Vez deve repetir consistentemente em todos os canais para construir autoridade de marca?
```

---

## O QUE FAZER COM OS RESULTADOS

Após a deep research no NotebookLM:

1. **Exportar as respostas** em um arquivo `notebooklm-outputs.md`
2. **Trazer de volta para o Claude Code** para:
   - Atualizar `brandbook.md` com as keywords confirmadas
   - Atualizar `pre-lista-seo.md` com perguntas AEO reais
   - Enriquecer o kit de conteúdo com os hooks e formatos identificados
   - Implementar FAQ schema no `index.html`
   - Criar `sitemap.xml` e `robots.txt`
   - Configurar Google Meu Negócio com textos otimizados
   - Gerar calendário editorial do Instagram para o primeiro mês

---

## ESTRUTURA DE ARQUIVOS CRIADOS

```
BRECHOWEBSITE/
└── docs/
    └── brandbook/
        ├── brandbook.md                  ✅ Brandbook completo + kit de conteúdo
        ├── pre-lista-seo.md              ✅ Keywords + perguntas AEO + textos otimizados
        ├── benchmark-concorrentes.md     ✅ Análise de mercado + concorrentes SP/RJ/CWB/POA
        └── HANDOFF-NOTEBOOKLM.md        ✅ Este arquivo — guia para a sessão NotebookLM
```

---

## CONTEXTO DO NEGÓCIO (resumo para a sessão NotebookLM)

**Nome:** Brechó Outra Vez
**Handle:** @boutravez
**Localização:** Av. do Contorno, 5690 - Loja B, Savassi, Belo Horizonte MG
**Horário:** Seg-Sex 10h-18h | Sáb 10h-13h
**WhatsApp:** (31) 8403-2616
**Serviço:** Brechó feminino de curadoria + consignação
**Posicionamento:** Acessível com sofisticação + comunidade e afeto
**Tagline:** "Cada peça tem uma história."
**Preços:** A partir de R$10
**Categorias:** Roupas, bolsas, sapatos, acessórios femininos
**Perfil Instagram:** Dormente — estratégia do zero
**Google Meu Negócio:** A configurar/otimizar
**Site:** One-page institucional (index.html), sem e-commerce
**Objetivo:** Tráfego local + visitas físicas + consignação
