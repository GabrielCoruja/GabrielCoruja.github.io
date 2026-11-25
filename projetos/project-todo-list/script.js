// Lista de Tarefas: adicionar, concluir, selecionar, reordenar, filtrar e salvar.
// O estado fica num array e a tela é redesenhada a partir dele (sem guardar HTML no localStorage).
const CHAVE = 'lista-de-tarefas';

const form = document.getElementById('form-tarefa');
const input = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
const contador = document.getElementById('contador');
const vazio = document.getElementById('vazio');

let tarefas = carregar();
let selecionadaId = null;
let filtro = 'todas';

function carregar() {
  try {
    const salvas = JSON.parse(localStorage.getItem(CHAVE));
    if (Array.isArray(salvas)) {
      return salvas.filter((t) => typeof t.texto === 'string' && typeof t.id === 'string');
    }
  } catch (e) { /* dado inválido: começa vazia */ }
  return [];
}

function salvar() {
  try { localStorage.setItem(CHAVE, JSON.stringify(tarefas)); } catch (e) { /* ignora */ }
}

function visiveis() {
  if (filtro === 'pendentes') return tarefas.filter((t) => !t.concluida);
  if (filtro === 'concluidas') return tarefas.filter((t) => t.concluida);
  return tarefas;
}

function alternarConcluida(id) {
  const tarefa = tarefas.find((t) => t.id === id);
  tarefa.concluida = !tarefa.concluida;
  atualizar();
}

function desenhar() {
  lista.innerHTML = '';
  visiveis().forEach((tarefa) => {
    const item = document.createElement('li');
    item.className = 'tarefa';
    item.classList.toggle('completed', tarefa.concluida);
    item.classList.toggle('selecionada', tarefa.id === selecionadaId);
    item.dataset.id = tarefa.id;

    const caixa = document.createElement('input');
    caixa.type = 'checkbox';
    caixa.checked = tarefa.concluida;
    caixa.setAttribute('aria-label', `Concluir "${tarefa.texto}"`);
    caixa.addEventListener('change', () => alternarConcluida(tarefa.id));

    const texto = document.createElement('span');
    texto.className = 'texto';
    texto.textContent = tarefa.texto; // textContent: o que a pessoa digita nunca vira HTML

    item.append(caixa, texto);
    item.addEventListener('click', (event) => {
      if (event.target === caixa) return;
      selecionadaId = selecionadaId === tarefa.id ? null : tarefa.id;
      desenhar();
    });
    item.addEventListener('dblclick', (event) => {
      if (event.target === caixa) return;
      alternarConcluida(tarefa.id);
    });
    lista.appendChild(item);
  });

  const pendentes = tarefas.filter((t) => !t.concluida).length;
  contador.textContent = tarefas.length === 0
    ? 'Nenhuma tarefa'
    : `${pendentes} pendente${pendentes === 1 ? '' : 's'} de ${tarefas.length}`;
  vazio.hidden = visiveis().length > 0;
}

function atualizar() {
  salvar();
  desenhar();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const texto = input.value.trim();
  if (!texto) {
    input.focus();
    return;
  }
  tarefas.push({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, texto, concluida: false });
  input.value = '';
  if (filtro === 'concluidas') filtro = 'todas';
  atualizarFiltros();
  atualizar();
});

function mover(direcao) {
  const indice = tarefas.findIndex((t) => t.id === selecionadaId);
  const destino = indice + direcao;
  if (indice < 0 || destino < 0 || destino >= tarefas.length) return;
  [tarefas[indice], tarefas[destino]] = [tarefas[destino], tarefas[indice]];
  atualizar();
}

document.getElementById('mover-cima').addEventListener('click', () => mover(-1));
document.getElementById('mover-baixo').addEventListener('click', () => mover(1));

document.getElementById('remover-selecionado').addEventListener('click', () => {
  tarefas = tarefas.filter((t) => t.id !== selecionadaId);
  selecionadaId = null;
  atualizar();
});

document.getElementById('remover-finalizados').addEventListener('click', () => {
  tarefas = tarefas.filter((t) => !t.concluida);
  atualizar();
});

document.getElementById('apaga-tudo').addEventListener('click', () => {
  if (tarefas.length === 0) return;
  if (!window.confirm('Apagar todas as tarefas?')) return;
  tarefas = [];
  selecionadaId = null;
  atualizar();
});

function atualizarFiltros() {
  document.querySelectorAll('[data-filtro]').forEach((botao) => {
    botao.setAttribute('aria-pressed', String(botao.dataset.filtro === filtro));
  });
}

document.querySelectorAll('[data-filtro]').forEach((botao) => {
  botao.addEventListener('click', () => {
    filtro = botao.dataset.filtro;
    atualizarFiltros();
    desenhar();
  });
});

// Atalhos: setas movem a tarefa selecionada, Delete remove
document.addEventListener('keydown', (event) => {
  if (!selecionadaId || event.target === input) return;
  if (event.key === 'ArrowUp') { event.preventDefault(); mover(-1); }
  if (event.key === 'ArrowDown') { event.preventDefault(); mover(1); }
  if (event.key === 'Delete') document.getElementById('remover-selecionado').click();
});

desenhar();
