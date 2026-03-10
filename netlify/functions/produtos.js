/**
 * GET /api/produtos — Netlify Function
 * Retorna produtos ativos de pecas.json (placeholder até o Minha Lojita estar pronto)
 *
 * Filtros disponíveis:
 *   ?categoria=roupas|bolsas|sapatos|acessorios
 *   ?destaque=true
 *
 * TODO: quando o Minha Lojita estiver pronto, substituir o fetch local
 *       por um fetch da API externa: fetch(process.env.MINHA_LOJITA_API_URL + '/produtos')
 */

const path = require('path');
const fs = require('fs');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const pecasPath = path.join(__dirname, '..', '..', 'data', 'pecas.json');
    const raw = fs.readFileSync(pecasPath, 'utf-8');
    let produtos = JSON.parse(raw);

    // Filtrar apenas ativos
    produtos = produtos.filter(p => p.ativo !== false);

    // Filtro por categoria
    const { categoria, destaque } = event.queryStringParameters || {};
    if (categoria) {
      produtos = produtos.filter(p => p.categoria === categoria);
    }

    // Filtro por destaque
    if (destaque === 'true') {
      produtos = produtos.filter(p => p.destaque === true);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(produtos)
    };
  } catch (err) {
    console.error('[produtos] Erro ao ler pecas.json:', err.message);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Erro interno ao carregar produtos' })
    };
  }
};
