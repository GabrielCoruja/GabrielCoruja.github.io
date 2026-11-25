// Gerador de Memes: imagem + texto em cima e embaixo, em tempo real, com download em PNG.
const imagem = document.getElementById('meme-image');
const moldura = document.getElementById('meme-image-container');
const entradaTopo = document.getElementById('text-input-top');
const entradaBase = document.getElementById('text-input');
const textoTopo = document.getElementById('meme-text-top');
const textoBase = document.getElementById('meme-text');
const tamanhoFonte = document.getElementById('tamanho-fonte');
const corTexto = document.getElementById('cor-texto');
const areaUpload = document.getElementById('area-upload');
const arquivo = document.getElementById('meme-insert');

// Texto aparece em tempo real sobre a imagem
entradaTopo.addEventListener('input', () => { textoTopo.textContent = entradaTopo.value; });
entradaBase.addEventListener('input', () => { textoBase.textContent = entradaBase.value; });

function aplicarEstiloTexto() {
  // O tamanho é proporcional à largura da prévia, para ficar igual na tela e no PNG
  moldura.style.setProperty('--tamanho-fonte', tamanhoFonte.value);
  moldura.style.setProperty('--cor-texto', corTexto.value);
}
tamanhoFonte.addEventListener('input', aplicarEstiloTexto);
corTexto.addEventListener('input', aplicarEstiloTexto);

function carregarArquivo(file) {
  if (!file || !file.type.startsWith('image/')) return;
  imagem.src = URL.createObjectURL(file);
}

arquivo.addEventListener('change', () => carregarArquivo(arquivo.files[0]));

// Arrastar e soltar a imagem
['dragenter', 'dragover'].forEach((tipo) => areaUpload.addEventListener(tipo, (event) => {
  event.preventDefault();
  areaUpload.classList.add('upload--ativo');
}));
['dragleave', 'drop'].forEach((tipo) => areaUpload.addEventListener(tipo, () => {
  areaUpload.classList.remove('upload--ativo');
}));
areaUpload.addEventListener('drop', (event) => {
  event.preventDefault();
  carregarArquivo(event.dataTransfer.files[0]);
});

document.getElementById('exemplos').addEventListener('click', (event) => {
  const botao = event.target.closest('button');
  if (botao) imagem.src = botao.dataset.src;
});

document.querySelectorAll('input[name="moldura"]').forEach((opcao) => {
  opcao.addEventListener('change', () => { moldura.dataset.moldura = opcao.value; });
});

document.getElementById('limpar').addEventListener('click', () => {
  entradaTopo.value = '';
  entradaBase.value = '';
  textoTopo.textContent = '';
  textoBase.textContent = '';
});

// Quebra o texto em linhas que caibam na largura da imagem
function quebrarLinhas(contexto, texto, larguraMaxima) {
  const palavras = texto.split(' ');
  const linhas = [];
  let linha = '';
  palavras.forEach((palavra) => {
    const teste = linha ? `${linha} ${palavra}` : palavra;
    if (contexto.measureText(teste).width > larguraMaxima && linha) {
      linhas.push(linha);
      linha = palavra;
    } else {
      linha = teste;
    }
  });
  if (linha) linhas.push(linha);
  return linhas;
}

// Desenha imagem e textos num <canvas> e baixa como PNG
document.getElementById('baixar').addEventListener('click', () => {
  const largura = imagem.naturalWidth || 800;
  const altura = imagem.naturalHeight || 600;
  const canvas = document.createElement('canvas');
  canvas.width = largura;
  canvas.height = altura;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imagem, 0, 0, largura, altura);

  const fonte = (Number(tamanhoFonte.value) / 600) * largura;
  ctx.font = `900 ${fonte}px Impact, "Arial Black", sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillStyle = corTexto.value;
  ctx.strokeStyle = '#000';
  ctx.lineWidth = fonte / 8;
  ctx.lineJoin = 'round';

  const desenhar = (texto, emCima) => {
    const linhas = quebrarLinhas(ctx, texto.toUpperCase(), largura * 0.92);
    const alturaLinha = fonte * 1.1;
    const inicio = emCima ? fonte * 1.1 : altura - alturaLinha * (linhas.length - 1) - fonte * 0.35;
    linhas.forEach((linha, i) => {
      const y = inicio + i * alturaLinha;
      ctx.strokeText(linha, largura / 2, y);
      ctx.fillText(linha, largura / 2, y);
    });
  };
  desenhar(entradaTopo.value, true);
  desenhar(entradaBase.value, false);

  const link = document.createElement('a');
  link.download = 'meme.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});

aplicarEstiloTexto();
