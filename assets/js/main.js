/**
 * main.js — Menu hamburger e comportamento do header.
 * Brechó Outra Vez
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ── Menu hamburger ───────────────────────────────────
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const estaAberto = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(estaAberto));
    });

    // Fechar ao clicar num link do menu
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Sombra no header ao rolar ────────────────────────
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // estado inicial
  }

  // ── Editorial Parallax & Reveal ──────────────────────
  const heroImg = document.querySelector('.hero-image');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroImg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
      }
    }, { passive: true });
  }

  const revealElements = document.querySelectorAll('.sobre-grid, .galeria .container > *, .cards-grid .card, .localizacao-grid');
  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

});
