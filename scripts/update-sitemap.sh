#!/bin/bash
# update-sitemap.sh — Atualiza sitemap.xml e llms.txt com artigos publicados até hoje
# Rodar sempre que um novo artigo "publicar" (a cada ~2 semanas)
# Uso: bash scripts/update-sitemap.sh

cd "$(dirname "$0")/.."

TODAY=$(date +%Y-%m-%d)

# Datas de publicação dos 35 artigos
declare -A DATES=(
  [1]="2025-09-14" [2]="2025-09-28" [3]="2025-10-12" [4]="2025-10-26"
  [5]="2025-11-09" [6]="2025-11-23" [7]="2025-12-07" [8]="2025-12-21"
  [9]="2026-01-04" [10]="2026-01-18" [11]="2026-03-15" [12]="2026-03-29"
  [13]="2026-04-12" [14]="2026-04-26" [15]="2026-05-10" [16]="2026-05-24"
  [17]="2026-06-07" [18]="2026-06-21" [19]="2026-07-05" [20]="2026-07-19"
  [21]="2026-08-02" [22]="2026-08-16" [23]="2026-08-30" [24]="2026-09-13"
  [25]="2026-09-27" [26]="2026-10-11" [27]="2026-10-25" [28]="2026-11-08"
  [29]="2026-11-22" [30]="2026-12-06" [31]="2026-12-20" [32]="2027-01-03"
  [33]="2027-01-17" [34]="2027-01-31" [35]="2027-02-14"
)

# Títulos dos artigos (para llms.txt)
declare -A TITLES=(
  [1]="Por que investir em moda circular e roupas usadas hoje?"
  [2]="Como identificar tecidos premium no garimpo em brechós"
  [3]="O Guia Prático da Consignação: como vender roupas em brechó"
  [4]="A volta do minimalismo autêntico nos brechós"
  [5]="Dicas essenciais para comprar Vintage"
  [6]="Moda sustentável em BH: o cenário de brechós na Savassi"
  [7]="Presente de Natal sustentável: peças de brechó"
  [8]="Como definir seu estilo pessoal com peças garimpadas"
  [9]="Tendências que voltaram: o que garimpar agora"
  [10]="Dicas essenciais para comprar Vintage em brechós"
  [11]="Como montar um guarda-roupa cápsula com peças de brechó"
  [12]="Marcas brasileiras de moda que valem o garimpo"
  [13]="Como cuidar de roupas de segunda mão para durar mais"
  [14]="Tendências de moda que nunca saem de estilo"
  [15]="O que é moda lenta e por que ela importa"
  [16]="Como usar acessórios para transformar um look básico"
  [17]="Blazer: a peça coringa que todo guarda-roupa precisa"
  [18]="Como combinar estampas sem errar"
  [19]="Roupas para o trabalho encontradas em brechós"
  [20]="A história da moda feminina nos anos 80 e 90"
  [21]="Como preparar suas roupas para consignação"
  [22]="Brechó vs fast fashion: o que os números dizem"
  [23]="Como garimpar sapatos em brechós: o que avaliar"
  [24]="Looks para o fim de semana montados com peças de brechó"
  [25]="O poder do vestido midi: versátil e atemporal"
  [26]="Como lavar e conservar peças delicadas"
  [27]="Moda consciente não é modinha: é uma virada cultural"
  [28]="Como identificar uma peça de qualidade pelo toque"
  [29]="Bolsas que valorizam qualquer look"
  [30]="O guarda-roupa da mulher moderna: menos peças, mais estilo"
  [31]="Como fotografar peças para consignação: dicas práticas"
  [32]="A volta do jeans vintage: como usar bem"
  [33]="Cores que combinam com tudo, e como usá-las"
  [34]="Como a moda circular beneficia a economia local"
  [35]="Savassi BH: o bairro da moda consciente em Belo Horizonte"
)

# --- Gerar sitemap.xml ---
cat > sitemap.xml << 'HEADER'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://brechooutravez.com.br/</loc>
    <lastmod>HOJE</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://brechooutravez.com.br/blog/</loc>
    <lastmod>HOJE</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
HEADER

sed -i "s/HOJE/$TODAY/g" sitemap.xml

PUBLISHED=0
for i in $(seq 1 35); do
  if [[ "${DATES[$i]}" < "$TODAY" || "${DATES[$i]}" == "$TODAY" ]]; then
    cat >> sitemap.xml << EOF
  <url>
    <loc>https://brechooutravez.com.br/blog/artigo-${i}.html</loc>
    <lastmod>${DATES[$i]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
EOF
    PUBLISHED=$((PUBLISHED + 1))
  fi
done

echo "</urlset>" >> sitemap.xml

# --- Atualizar llms.txt (seção Artigos do Blog) ---
# Remove seção existente de artigos e reescreve
if grep -q "## Artigos do Blog" llms.txt; then
  # Remove da linha "## Artigos do Blog" até o fim do arquivo
  sed -i '/^## Artigos do Blog/,$d' llms.txt
fi

echo "" >> llms.txt
echo "## Artigos do Blog" >> llms.txt
echo "" >> llms.txt

for i in $(seq 1 35); do
  if [[ "${DATES[$i]}" < "$TODAY" || "${DATES[$i]}" == "$TODAY" ]]; then
    echo "- [${TITLES[$i]}](https://brechooutravez.com.br/blog/artigo-${i}.html)" >> llms.txt
  fi
done

echo ""
echo "Atualizado! $PUBLISHED artigos publicados até $TODAY"
echo "Próximo artigo: $(for i in $(seq 1 35); do if [[ "${DATES[$i]}" > "$TODAY" ]]; then echo "artigo-${i} em ${DATES[$i]}"; break; fi; done)"
echo ""
echo "Para deploy: git add sitemap.xml llms.txt && git commit -m 'chore: atualizar sitemap e llms.txt' && git push"
