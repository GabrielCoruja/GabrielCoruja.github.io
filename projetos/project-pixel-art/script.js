// Pixel Art: paleta com preto + 3 cores aleatórias, quadro N x N, pincel e borracha.
const BRANCO = '#ffffff';
const PRETO = '#000000';
const CHAVE = 'pixel-art:desenho';

const paleta = document.getElementById('color-palette');
const quadro = document.getElementById('pixel-board');
const amostra = document.getElementById('selecionar-cor');
const corPersonalizada = document.getElementById('cor-personalizada');
const botaoBorracha = document.getElementById('borracha');
const inputTamanho = document.getElementById('board-size');
const mensagemTamanho = document.getElementById('mensagem-tamanho');

let corSelecionada = PRETO;
let pintando = false;

function corAleatoria() {
  const canal = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  return `#${canal()}${canal()}${canal()}`;
}

function selecionarCor(cor, botao) {
  corSelecionada = cor;
  amostra.style.background = cor;
  botaoBorracha.setAttribute('aria-pressed', String(cor === BRANCO && botao === botaoBorracha));
  paleta.querySelectorAll('.color').forEach((item) => {
    const ativo = item === botao;
    item.classList.toggle('selected', ativo);
    item.setAttribute('aria-checked', String(ativo));
  });
}

function criarPaleta() {
  paleta.innerHTML = '';
  const cores = [PRETO, corAleatoria(), corAleatoria(), corAleatoria()];
  cores.forEach((cor, indice) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'color';
    botao.style.background = cor;
    botao.setAttribute('role', 'radio');
    botao.setAttribute('aria-label', indice === 0 ? 'Preto' : `Cor ${cor}`);
    botao.addEventListener('click', () => selecionarCor(cor, botao));
    paleta.appendChild(botao);
  });
  selecionarCor(PRETO, paleta.firstElementChild);
}

function criarQuadro(tamanho, cores = []) {
  quadro.innerHTML = '';
  quadro.style.setProperty('--tamanho', tamanho);
  for (let i = 0; i < tamanho * tamanho; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.background = cores[i] || BRANCO;
    quadro.appendChild(pixel);
  }
  inputTamanho.value = tamanho;
}

function salvar() {
  const pixels = [...quadro.children].map((pixel) => pixel.style.background);
  try {
    localStorage.setItem(CHAVE, JSON.stringify({ tamanho: Math.sqrt(pixels.length), pixels }));
  } catch (e) { /* sem localStorage: o desenho só não é lembrado */ }
}

function pintar(pixel) {
  if (pixel && pixel.classList.contains('pixel')) {
    pixel.style.background = corSelecionada;
  }
}

// Pintar clicando ou arrastando (mouse, caneta ou dedo)
let ultimoPonto = null;

quadro.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  pintando = true;
  ultimoPonto = { x: event.clientX, y: event.clientY };
  pintar(event.target);
});
quadro.addEventListener('pointermove', (event) => {
  if (!pintando) return;
  // Se o mouse andou rápido, pinta também os pixels no caminho entre os dois pontos
  const passo = quadro.firstElementChild.offsetWidth / 2;
  const dx = event.clientX - ultimoPonto.x;
  const dy = event.clientY - ultimoPonto.y;
  const passos = Math.max(1, Math.ceil(Math.hypot(dx, dy) / passo));
  for (let i = 1; i <= passos; i += 1) {
    pintar(document.elementFromPoint(ultimoPonto.x + (dx * i) / passos, ultimoPonto.y + (dy * i) / passos));
  }
  ultimoPonto = { x: event.clientX, y: event.clientY };
});
window.addEventListener('pointerup', () => {
  if (pintando) salvar();
  pintando = false;
});

corPersonalizada.addEventListener('input', () => selecionarCor(corPersonalizada.value, null));
document.getElementById('nova-paleta').addEventListener('click', criarPaleta);
botaoBorracha.addEventListener('click', () => selecionarCor(BRANCO, botaoBorracha));

document.getElementById('form-tamanho').addEventListener('submit', (event) => {
  event.preventDefault();
  const valor = inputTamanho.value.trim();
  if (!valor) {
    mensagemTamanho.textContent = 'Digite um tamanho entre 5 e 50.';
    return;
  }
  // Mesma regra do projeto original: abaixo de 5 vira 5, acima de 50 vira 50
  const tamanho = Math.min(50, Math.max(5, Number(valor)));
  mensagemTamanho.textContent = tamanho !== Number(valor)
    ? `O tamanho foi ajustado para ${tamanho}.`
    : '';
  criarQuadro(tamanho);
  salvar();
});

document.getElementById('clear-board').addEventListener('click', () => {
  quadro.querySelectorAll('.pixel').forEach((pixel) => { pixel.style.background = BRANCO; });
  salvar();
});

const botaoGrade = document.getElementById('alternar-grade');
botaoGrade.addEventListener('click', () => {
  const ativa = quadro.classList.toggle('sem-grade') === false;
  botaoGrade.setAttribute('aria-pressed', String(ativa));
});

// Baixar o desenho como PNG, desenhando cada pixel num <canvas>
document.getElementById('baixar').addEventListener('click', () => {
  const pixels = [...quadro.children];
  const tamanho = Math.sqrt(pixels.length);
  const escala = Math.max(8, Math.floor(512 / tamanho));
  const canvas = document.createElement('canvas');
  canvas.width = tamanho * escala;
  canvas.height = tamanho * escala;
  const contexto = canvas.getContext('2d');
  pixels.forEach((pixel, i) => {
    contexto.fillStyle = pixel.style.background;
    contexto.fillRect((i % tamanho) * escala, Math.floor(i / tamanho) * escala, escala, escala);
  });
  const link = document.createElement('a');
  link.download = 'pixel-art.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});

function iniciar() {
  criarPaleta();
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE));
    if (salvo && Number.isInteger(salvo.tamanho) && salvo.tamanho >= 5 && salvo.tamanho <= 50) {
      criarQuadro(salvo.tamanho, salvo.pixels);
      return;
    }
  } catch (e) { /* dado inválido: começa um quadro novo */ }
  criarQuadro(5);
}

iniciar();
