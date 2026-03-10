/**
 * galeria.js — Carrega data/pecas.json e renderiza o grid com filtros e lightbox.
 * Brechó Outra Vez
 */

'use strict';

const FORMATADOR_BRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

// Carrega o JSON de peças
async function carregarPecas() {
  try {
    const resp = await fetch('data/pecas.json');
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return await resp.json();
  } catch (err) {
    console.warn('[galeria] Falha ao carregar peças:', err.message);
    return [];
  }
}

// Cria o card de uma peça
function criarCardPeca(peca) {
  const article = document.createElement('article');
  article.className = 'peca-card';
  article.dataset.categoria = peca.categoria;
  article.setAttribute('role', 'button');
  article.setAttribute('tabindex', '0');
  article.setAttribute('aria-label', `${peca.nome} — ${FORMATADOR_BRL.format(peca.preco)}`);

  const precoFormatado = FORMATADOR_BRL.format(peca.preco);
  const categoriaLabel = {
    roupas: 'Roupas',
    bolsas: 'Bolsas',
    sapatos: 'Sapatos',
    acessorios: 'Acessórios'
  }[peca.categoria] || peca.categoria;

  article.innerHTML = `
    <img
      class="peca-card-img"
      src="${peca.foto}"
      alt="${peca.nome}"
      loading="lazy"
      onerror="this.closest('.peca-card').classList.add('img-erro')"
    />
    <div class="peca-info">
      <span class="peca-categoria">${categoriaLabel}</span>
      <h3 class="peca-nome">${peca.nome}</h3>
      <p class="peca-preco">${precoFormatado}</p>
    </div>
  `;

  const abrirLightbox = () => mostrarLightbox(peca.foto, peca.nome);
  article.addEventListener('click', abrirLightbox);
  article.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      abrirLightbox();
    }
  });

  return article;
}

// Renderiza o grid com base no filtro
function renderizarGrid(pecas, filtro) {
  const grid = document.getElementById('galeria-grid');
  if (!grid) return;

  const filtradas = filtro === 'todos'
    ? pecas
    : pecas.filter(p => p.categoria === filtro);

  grid.innerHTML = '';

  if (filtradas.length === 0) {
    const vazio = document.createElement('p');
    vazio.className = 'galeria-vazia';
    vazio.textContent = 'Nenhuma peça disponível nessa categoria no momento.';
    grid.appendChild(vazio);
    return;
  }

  const frag = document.createDocumentFragment();
  filtradas.forEach(p => frag.appendChild(criarCardPeca(p)));
  grid.appendChild(frag);
}

// Lightbox
function mostrarLightbox(src, alt) {
  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('.lightbox-img');
  img.src = src;
  img.alt = alt;
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  lb.querySelector('.lightbox-close').focus();
}

function fecharLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb || lb.hidden) return;
  lb.hidden = true;
  document.body.style.overflow = '';
  const img = lb.querySelector('.lightbox-img');
  img.src = '';
  img.alt = '';
}

// Inicialização
async function initGaleria() {
  const pecas = await carregarPecas();
  let filtroAtivo = 'todos';

  renderizarGrid(pecas, filtroAtivo);

  // Filtros
  const botoesFiltro = document.querySelectorAll('.filtro-btn');
  botoesFiltro.forEach(btn => {
    btn.addEventListener('click', () => {
      filtroAtivo = btn.dataset.filtro;

      botoesFiltro.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      renderizarGrid(pecas, filtroAtivo);
    });
  });

  // Lightbox — fechar por botão
  const btnFechar = document.querySelector('.lightbox-close');
  btnFechar?.addEventListener('click', fecharLightbox);

  // Lightbox — fechar clicando no fundo
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) fecharLightbox();
  });

  // Lightbox — fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharLightbox();
  });
}

document.addEventListener('DOMContentLoaded', initGaleria);
