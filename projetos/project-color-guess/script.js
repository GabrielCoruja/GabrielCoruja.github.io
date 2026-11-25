// Adivinhe a Cor: mostra um código RGB e a pessoa escolhe a bola com essa cor.
const CHAVE_RECORDE = 'adivinhe-a-cor:recorde';

const textoRgb = document.getElementById('rgb-color');
const areaBolas = document.getElementById('balls');
const resposta = document.getElementById('answer');
const placar = document.getElementById('score');
const sequenciaEl = document.getElementById('sequencia');
const recordeEl = document.getElementById('recorde');
const botaoProxima = document.getElementById('proxima');

let quantidade = 6;
let corCerta = '';
let pontos = 0;
let sequencia = 0;
let errouNestaRodada = false;
let rodadaEncerrada = false;
let recorde = Number(lerRecorde()) || 0;

function lerRecorde() {
  try { return localStorage.getItem(CHAVE_RECORDE); } catch (e) { return 0; }
}

function salvarRecorde() {
  if (pontos <= recorde) return;
  recorde = pontos;
  try { localStorage.setItem(CHAVE_RECORDE, String(recorde)); } catch (e) { /* ignora */ }
}

function corAleatoria() {
  const canal = () => Math.floor(Math.random() * 256);
  return `rgb(${canal()}, ${canal()}, ${canal()})`;
}

function atualizarPlacar() {
  placar.textContent = pontos;
  sequenciaEl.textContent = sequencia;
  recordeEl.textContent = recorde;
}

function novaRodada() {
  areaBolas.innerHTML = '';
  errouNestaRodada = false;
  rodadaEncerrada = false;
  botaoProxima.hidden = true;

  const cores = Array.from({ length: quantidade }, corAleatoria);
  corCerta = cores[Math.floor(Math.random() * quantidade)];
  textoRgb.textContent = corCerta.toUpperCase();
  resposta.textContent = 'Escolha uma cor!';
  resposta.className = 'resposta';

  cores.forEach((cor, indice) => {
    const bola = document.createElement('button');
    bola.type = 'button';
    bola.className = 'ball';
    bola.style.background = cor;
    bola.style.animationDelay = `${indice * 40}ms`;
    bola.dataset.cor = cor;
    bola.setAttribute('aria-label', `Opção ${indice + 1}`);
    bola.addEventListener('click', () => escolher(bola));
    areaBolas.appendChild(bola);
  });
}

function escolher(bola) {
  if (rodadaEncerrada || bola.disabled) return;

  if (bola.dataset.cor === corCerta) {
    pontos += errouNestaRodada ? 1 : 3;
    sequencia = errouNestaRodada ? 0 : sequencia + 1;
    rodadaEncerrada = true;
    salvarRecorde();
    resposta.textContent = errouNestaRodada ? 'Acertou! +1 ponto' : 'Acertou de primeira! +3 pontos 🎉';
    resposta.className = 'resposta resposta--certa';
    bola.classList.add('certa');
    areaBolas.querySelectorAll('.ball').forEach((outra) => { if (outra !== bola) outra.classList.add('apagada'); });
    botaoProxima.hidden = false;
    botaoProxima.focus();
  } else {
    errouNestaRodada = true;
    sequencia = 0;
    bola.disabled = true;
    bola.classList.add('errada');
    resposta.textContent = 'Errou! Tente outra cor.';
    resposta.className = 'resposta resposta--errada';
  }
  atualizarPlacar();
}

botaoProxima.addEventListener('click', novaRodada);

document.getElementById('reset-game').addEventListener('click', () => {
  pontos = 0;
  sequencia = 0;
  atualizarPlacar();
  novaRodada();
});

document.querySelectorAll('input[name="dificuldade"]').forEach((opcao) => {
  opcao.addEventListener('change', () => {
    quantidade = Number(opcao.value);
    novaRodada();
  });
});

atualizarPlacar();
novaRodada();
