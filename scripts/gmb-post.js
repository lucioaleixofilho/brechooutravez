/**
 * gmb-post.js — Posta artigo do blog no Google Meu Negócio
 *
 * Secrets necessários no GitHub Actions:
 *   GOOGLE_CLIENT_ID
 *   GOOGLE_CLIENT_SECRET
 *   GOOGLE_REFRESH_TOKEN
 *   SITE_URL (ex: https://brechooutravez.com.br)
 */

const https = require('https');

// ── Artigos ────────────────────────────────────────────────────────────────────
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

// ── Helpers HTTP ───────────────────────────────────────────────────────────────
function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

// ── OAuth: obter access token via refresh token ────────────────────────────────
async function getAccessToken() {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
    throw new Error('Secrets GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET e GOOGLE_REFRESH_TOKEN não configurados.');
  }

  const body = new URLSearchParams({
    client_id:     GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    refresh_token: GOOGLE_REFRESH_TOKEN,
    grant_type:    'refresh_token',
  }).toString();

  const res = await httpsRequest({
    hostname: 'oauth2.googleapis.com',
    path: '/token',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) },
  }, body);

  if (!res.body.access_token) throw new Error('Falha ao obter access_token: ' + JSON.stringify(res.body));
  return res.body.access_token;
}

// ── GMB: buscar account e location automaticamente ────────────────────────────
async function getGmbIds(token) {
  // Busca accounts
  const accRes = await httpsRequest({
    hostname: 'mybusinessaccountmanagement.googleapis.com',
    path: '/v1/accounts',
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  const accounts = accRes.body.accounts;
  if (!accounts || accounts.length === 0) throw new Error('Nenhuma conta GMB encontrada para este usuário.');

  const accountName = accounts[0].name;
  console.log('Conta GMB:', accountName);

  // Busca locations
  const locRes = await httpsRequest({
    hostname: 'mybusinessbusinessinformation.googleapis.com',
    path: `/v1/${accountName}/locations?readMask=name,title`,
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  const locations = locRes.body.locations;
  if (!locations || locations.length === 0) throw new Error('Nenhuma localização GMB encontrada.');

  const locationName = locations[0].name;
  console.log('Localização GMB:', locationName, '|', locations[0].title);
  return { accountName, locationName };
}

// ── Artigo a publicar ─────────────────────────────────────────────────────────
function findArticle() {
  const forceN = parseInt(process.env.FORCE_ARTICLE || '');
  if (!isNaN(forceN)) {
    const art = ARTICLES.find(a => a.n === forceN);
    if (art) { console.log(`[FORCE] Artigo ${forceN}`); return art; }
  }

  const today = new Date(); today.setHours(0, 0, 0, 0);
  const window14 = new Date(today); window14.setDate(window14.getDate() - 14);

  const candidate = ARTICLES.find(a => {
    const d = new Date(a.date);
    return d >= window14 && d <= today;
  });

  if (!candidate) {
    console.log('Nenhum artigo para publicar esta semana. Nenhuma ação necessária.');
    process.exit(0);
  }
  return candidate;
}

// ── Postar no GMB ─────────────────────────────────────────────────────────────
async function main() {
  const article = findArticle();
  const siteUrl = process.env.SITE_URL || 'https://brechooutravez.com.br';
  const articleUrl = `${siteUrl}/blog/${article.slug}.html`;

  console.log(`📰 Publicando: [${article.date}] ${article.title}`);
  console.log(`🔗 URL: ${articleUrl}`);

  const token = await getAccessToken();
  const { locationName } = await getGmbIds(token);

  const postBody = JSON.stringify({
    languageCode: 'pt-BR',
    summary: `${article.title}\n\nNovo artigo no blog do Brechó Outra Vez — curadoria, moda circular e estilo no Savassi, BH.`,
    callToAction: { actionType: 'LEARN_MORE', url: articleUrl },
    topicType: 'STANDARD',
  });

  const endpoint = `/v4/${locationName}/localPosts`;
  const res = await httpsRequest({
    hostname: 'mybusiness.googleapis.com',
    path: endpoint,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postBody),
    },
  }, postBody);

  if (res.status !== 200) {
    console.error('❌ Erro ao postar:', JSON.stringify(res.body, null, 2));
    process.exit(1);
  }

  console.log(`✅ Publicado com sucesso! Post: ${res.body.name}`);
}

main().catch(err => { console.error('Erro fatal:', err.message); process.exit(1); });
