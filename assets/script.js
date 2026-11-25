// Tema claro/escuro: segue o sistema, e o botão grava a escolha da pessoa.
const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-toggle__icon');

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateThemeIcon() {
  themeIcon.textContent = currentTheme() === 'dark' ? '☀️' : '🌙';
}

themeButton.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('tema', next); } catch (e) { /* ignora */ }
  updateThemeIcon();
});
updateThemeIcon();

// Menu no celular
const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('menu--open', !open);
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('menu--open');
  }
});

// Destaca no menu a seção que está na tela
const links = [...menu.querySelectorAll('a[href^="#"]')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach((link) => {
  const section = document.querySelector(link.getAttribute('href'));
  if (section) observer.observe(section);
});

// Animação suave de entrada dos blocos
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.section .container').forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

document.getElementById('ano').textContent = new Date().getFullYear();
