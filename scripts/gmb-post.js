/**
 * gmb-post.js — Posta artigo do blog no Google Meu Negócio (Google Business Profile)
 *
 * Requer secrets no GitHub Actions:
 *   GMB_ACCOUNT_ID              → ex: accounts/1234567890
 *   GMB_LOCATION_ID             → ex: locations/0987654321
 *   GOOGLE_SERVICE_ACCOUNT_JSON → JSON da service account com permissão Business Profile API
 *   SITE_URL                    → URL base do site (ex: https://brechooutravez.com.br)
 *
 * Para obter GMB_ACCOUNT_ID e GMB_LOCATION_ID:
 *   1. Acesse console.cloud.google.com → APIs → Business Profile API
 *   2. GET https://mybusinessaccountmanagement.googleapis.com/v1/accounts
 *   3. GET https://mybusinessbusinessinformation.googleapis.com/v1/{account}/locations
 */

const { google } = require('googleapis');

// ── Dados dos artigos ──────────────────────────────────────────────────────────
const ARTICLES = [
  { n: 1,  date: '2025-09-14', title: 'Por que investir em moda circular e roupas usadas hoje?',                   slug: 'artigo-1'  },
  { n: 2,  date: '2025-09-28', title: 'Como identificar tecidos premium no garimpo em brechós',                    slug: 'artigo-2'  },
  { n: 3,  date: '2025-10-12', title: 'O Guia Prático da Consignação: Como vender roupas em brechó',               slug: 'artigo-3'  },
  { n: 4,  date: '2025-10-26', title: 'A volta do minimalismo autêntico nos brechós',                              slug: 'artigo-4'  },
  { n: 5,  date: '2025-11-09', title: 'Dicas essenciais para comprar Vintage',                                     slug: 'artigo-5'  },
  { n: 6,  date: '2025-11-23', title: 'Por que brechós de curadoria fazem diferença',                              slug: 'artigo-6'  },
  { n: 7,  date: '2025-12-07', title: 'Como identificar tecidos premium no garimpo em brechós',                    slug: 'artigo-7'  },
  { n: 8,  date: '2025-12-21', title: 'O Guia Prático da Consignação: Como vender roupas em brechó',               slug: 'artigo-8'  },
  { n: 9,  date: '2026-01-04', title: 'A volta do minimalismo autêntico nos brechós',                              slug: 'artigo-9'  },
  { n: 10, date: '2026-01-18', title: 'Dicas essenciais para comprar Vintage em brechós',                          slug: 'artigo-10' },
  { n: 11, date: '2026-03-15', title: 'Como montar um guarda-roupa cápsula com peças de brechó',                   slug: 'artigo-11' },
  { n: 12, date: '2026-03-29', title: 'Marcas brasileiras de moda que valem o garimpo',                            slug: 'artigo-12' },
  { n: 13, date: '2026-04-12', title: 'Como cuidar de roupas de segunda mão para durar mais',                      slug: 'artigo-13' },
  { n: 14, date: '2026-04-26', title: 'Tendências de moda que nunca saem de estilo',                               slug: 'artigo-14' },
  { n: 15, date: '2026-05-10', title: 'O que é moda lenta e por que ela importa',                                  slug: 'artigo-15' },
  { n: 16, date: '2026-05-24', title: 'Como usar acessórios para transformar um look básico',                      slug: 'artigo-16' },
  { n: 17, date: '2026-06-07', title: 'Blazer: a peça coringa que todo guarda-roupa precisa',                      slug: 'artigo-17' },
  { n: 18, date: '2026-06-21', title: 'Como combinar estampas sem errar',                                          slug: 'artigo-18' },
  { n: 19, date: '2026-07-05', title: 'Roupas para o trabalho encontradas em brechós',                             slug: 'artigo-19' },
  { n: 20, date: '2026-07-19', title: 'A história da moda feminina nos anos 80 e 90',                              slug: 'artigo-20' },
  { n: 21, date: '2026-08-02', title: 'Como preparar suas roupas para consignação',                                slug: 'artigo-21' },
  { n: 22, date: '2026-08-16', title: 'Brechó vs fast fashion: o que os números dizem',                            slug: 'artigo-22' },
  { n: 23, date: '2026-08-30', title: 'Como garimpar sapatos em brechós: o que avaliar',                           slug: 'artigo-23' },
  { n: 24, date: '2026-09-13', title: 'Looks para o fim de semana montados com peças de brechó',                   slug: 'artigo-24' },
  { n: 25, date: '2026-09-27', title: 'O poder do vestido midi: versátil e atemporal',                             slug: 'artigo-25' },
  { n: 26, date: '2026-10-11', title: 'Como lavar e conservar peças delicadas (seda, lã, linho, veludo)',          slug: 'artigo-26' },
  { n: 27, date: '2026-10-25', title: 'Moda consciente não é modinha: é uma virada cultural',                      slug: 'artigo-27' },
  { n: 28, date: '2026-11-08', title: 'Como identificar uma peça de qualidade pelo toque',                         slug: 'artigo-28' },
  { n: 29, date: '2026-11-22', title: 'Bolsas que valorizam qualquer look',                                        slug: 'artigo-29' },
  { n: 30, date: '2026-12-06', title: 'O guarda-roupa da mulher moderna: menos peças, mais estilo',                slug: 'artigo-30' },
  { n: 31, date: '2026-12-20', title: 'Como fotografar peças para consignação: dicas práticas',                    slug: 'artigo-31' },
  { n: 32, date: '2027-01-03', title: 'A volta do jeans vintage: como usar bem',                                   slug: 'artigo-32' },
  { n: 33, date: '2027-01-17', title: 'Cores que combinam com tudo — e como usá-las',                              slug: 'artigo-33' },
  { n: 34, date: '2027-01-31', title: 'Como a moda circular beneficia a economia local',                           slug: 'artigo-34' },
  { n: 35, date: '2027-02-14', title: 'Savassi BH: o bairro da moda consciente em Belo Horizonte',                 slug: 'artigo-35' },
];

// ── Encontrar artigo para publicar hoje ────────────────────────────────────────
function findArticleToPost() {
  const forceN = parseInt(process.env.FORCE_ARTICLE || '');
  if (!isNaN(forceN)) {
    const art = ARTICLES.find(a => a.n === forceN);
    if (art) { console.log(`[FORCE] Artigo ${forceN}: ${art.title}`); return art; }
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const window14 = new Date(today);
  window14.setDate(window14.getDate() - 14);

  // Artigo cuja data cai na janela dos últimos 14 dias
  const candidate = ARTICLES.find(a => {
    const d = new Date(a.date);
    return d >= window14 && d <= today;
  });

  if (!candidate) {
    console.log('Nenhum artigo para publicar nesta semana. Saindo sem ação.');
    process.exit(0);
  }
  return candidate;
}

// ── Postar no GMB ─────────────────────────────────────────────────────────────
async function postToGMB(article) {
  const { GMB_ACCOUNT_ID, GMB_LOCATION_ID, GOOGLE_SERVICE_ACCOUNT_JSON, SITE_URL } = process.env;

  if (!GMB_ACCOUNT_ID || !GMB_LOCATION_ID || !GOOGLE_SERVICE_ACCOUNT_JSON) {
    console.warn('⚠️  Secrets do GMB não configurados. Pulando postagem no Google Meu Negócio.');
    console.warn('   Configure GMB_ACCOUNT_ID, GMB_LOCATION_ID e GOOGLE_SERVICE_ACCOUNT_JSON nos secrets do repositório.');
    return;
  }

  const serviceAccount = JSON.parse(GOOGLE_SERVICE_ACCOUNT_JSON);
  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: ['https://www.googleapis.com/auth/business.manage'],
  });

  const authClient = await auth.getClient();
  const articleUrl = `${SITE_URL}/blog/${article.slug}.html`;

  // Google Business Profile API v4 — localPosts
  const endpoint = `https://mybusiness.googleapis.com/v4/${GMB_ACCOUNT_ID}/${GMB_LOCATION_ID}/localPosts`;
  const token = await authClient.getAccessToken();

  const body = {
    languageCode: 'pt-BR',
    summary: `${article.title}\n\nNovo artigo no blog do Brechó Outra Vez. Curadoria, moda circular e estilo no Savassi, BH.`,
    callToAction: {
      actionType: 'LEARN_MORE',
      url: articleUrl,
    },
    topicType: 'STANDARD',
  };

  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const result = await resp.json();

  if (!resp.ok) {
    console.error('Erro ao postar no GMB:', JSON.stringify(result, null, 2));
    process.exit(1);
  }

  console.log(`✅ Publicado no Google Meu Negócio: "${article.title}"`);
  console.log(`   URL: ${articleUrl}`);
  console.log(`   Post name: ${result.name}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const article = findArticleToPost();
  console.log(`📰 Artigo selecionado: [${article.date}] ${article.title}`);
  await postToGMB(article);
}

main().catch(err => {
  console.error('Erro fatal:', err);
  process.exit(1);
});
