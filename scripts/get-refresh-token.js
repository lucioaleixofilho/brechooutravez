/**
 * get-refresh-token.js — Script de uso único para gerar o refresh token OAuth.
 *
 * Uso:
 *   CLIENT_ID=xxx CLIENT_SECRET=yyy node scripts/get-refresh-token.js
 *
 * Ou edite as constantes abaixo temporariamente (NÃO commite com credenciais reais).
 */

const http  = require('http');
const https = require('https');

const CLIENT_ID     = process.env.CLIENT_ID     || 'SEU_CLIENT_ID_AQUI';
const CLIENT_SECRET = process.env.CLIENT_SECRET || 'SEU_CLIENT_SECRET_AQUI';
const REDIRECT_URI  = 'http://localhost:3001';
const SCOPE         = 'https://www.googleapis.com/auth/business.manage';

const authUrl =
  `https://accounts.google.com/o/oauth2/auth` +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&response_type=code` +
  `&scope=${encodeURIComponent(SCOPE)}` +
  `&access_type=offline` +
  `&prompt=consent`;

console.log('\n=== Abrindo navegador para autenticação... ===');
console.log('\nSe não abrir automaticamente, acesse:\n');
console.log(authUrl + '\n');

const { exec } = require('child_process');
exec(`start "" "${authUrl}"`);

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost:3001');
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    res.end(`<h2>Erro: ${error}</h2>`);
    server.close();
    process.exit(1);
  }

  if (!code) { res.end('<p>Aguardando...</p>'); return; }

  res.end('<h2>✅ Autorizado! Feche esta aba e volte ao terminal.</h2>');
  server.close();

  const body = new URLSearchParams({
    code, client_id: CLIENT_ID, client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI, grant_type: 'authorization_code',
  }).toString();

  const req2 = https.request({
    hostname: 'oauth2.googleapis.com', path: '/token', method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) },
  }, (res2) => {
    let data = '';
    res2.on('data', c => data += c);
    res2.on('end', () => {
      const json = JSON.parse(data);
      if (json.error) { console.error('❌ Erro:', json.error, json.error_description); return; }
      console.log('\n✅ SUCESSO! Adicione no GitHub → Settings → Secrets → Actions:\n');
      console.log('GOOGLE_CLIENT_ID     =', CLIENT_ID);
      console.log('GOOGLE_CLIENT_SECRET =', CLIENT_SECRET);
      console.log('GOOGLE_REFRESH_TOKEN =', json.refresh_token);
    });
  });
  req2.write(body);
  req2.end();
});

server.listen(3001, () => console.log('Aguardando na porta 3001...\n'));
