// Carta Misteriosa: cada palavra vira um "recorte" com estilo, tamanho, rotação e inclinação aleatórios.
const GRUPOS = {
  estilo: ['newspaper', 'magazine1', 'magazine2', 'papel-creme', 'papel-amarelo', 'papel-rosa'],
  tamanho: ['medium', 'big', 'reallybig'],
  rotacao: ['rotateleft', 'rotateright', 'sem-rotacao'],
  inclinacao: ['skewleft', 'skewright', 'sem-inclinacao'],
};

const form = document.getElementById('form-carta');
const entrada = document.getElementById('carta-texto');
const carta = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
const vazia = document.getElementById('mensagem-vazia');
const botaoEmbaralhar = document.getElementById('embaralhar');
const botaoCopiar = document.getElementById('copiar');

const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

function estilizar(recorte) {
  recorte.className = ['recorte', ...Object.values(GRUPOS).map(sortear)].join(' ');
}

function gerarCarta(frase) {
  carta.innerHTML = '';
  const palavras = frase.trim().split(/\s+/).filter(Boolean);

  if (palavras.length === 0) {
    carta.textContent = 'Por favor, digite o conteúdo da carta.';
    carta.classList.add('carta--erro');
    contador.textContent = '';
    atualizarBotoes(false);
    return;
  }

  carta.classList.remove('carta--erro');
  palavras.forEach((palavra, i) => {
    const recorte = document.createElement('span');
    recorte.textContent = palavra; // textContent: nada do que for digitado vira HTML
    recorte.tabIndex = 0;
    recorte.setAttribute('role', 'button');
    recorte.setAttribute('aria-label', `Trocar estilo de "${palavra}"`);
    recorte.style.animationDelay = `${i * 60}ms`;
    estilizar(recorte);
    carta.appendChild(recorte);
  });
  contador.textContent = `${palavras.length} palavra${palavras.length === 1 ? '' : 's'} recortada${palavras.length === 1 ? '' : 's'}`;
  atualizarBotoes(true);
}

function atualizarBotoes(temCarta) {
  vazia.hidden = carta.childNodes.length > 0;
  botaoEmbaralhar.disabled = !temCarta;
  botaoCopiar.disabled = !temCarta;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  gerarCarta(entrada.value);
});

// Clicar (ou Enter) numa palavra troca só o estilo dela
carta.addEventListener('click', (event) => {
  if (event.target.classList.contains('recorte')) estilizar(event.target);
});
carta.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('recorte')) {
    event.preventDefault();
    estilizar(event.target);
  }
});

botaoEmbaralhar.addEventListener('click', () => {
  carta.querySelectorAll('.recorte').forEach(estilizar);
});

botaoCopiar.addEventListener('click', async () => {
  const texto = [...carta.querySelectorAll('.recorte')].map((r) => r.textContent).join(' ');
  try {
    await navigator.clipboard.writeText(texto);
    botaoCopiar.textContent = '✅ Copiado!';
  } catch (e) {
    botaoCopiar.textContent = 'Não foi possível copiar';
  }
  setTimeout(() => { botaoCopiar.textContent = '📋 Copiar texto'; }, 1800);
});

atualizarBotoes(false);
