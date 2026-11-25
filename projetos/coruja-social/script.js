// Coruja Social: validação de login e cadastro no navegador. Nada é enviado para servidor nenhum.
const formLogin = document.getElementById('form-login');
const mensagemLogin = document.getElementById('mensagem-login');
const formCadastro = document.getElementById('form-cadastro');
const erros = document.getElementById('erros');
const senha = document.getElementById('password');
const botaoMostrar = document.getElementById('mostrar-senha');
const forcaBarra = document.getElementById('forca-barra');
const forcaTexto = document.getElementById('forca-texto');
const personalizado = document.getElementById('genero-personalizado');
const areaFormulario = document.getElementById('area-formulario');
const boasVindas = document.getElementById('boas-vindas');

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEFONE = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;
const contatoValido = (valor) => EMAIL.test(valor) || TELEFONE.test(valor.replace(/\s/g, ''));

// ---------- Login ----------
formLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  const usuario = document.getElementById('user-email-phone').value.trim();
  const senhaLogin = document.getElementById('user-password').value;
  if (!usuario || !senhaLogin) {
    mensagemLogin.textContent = 'Preencha o e-mail ou telefone e a senha.';
  } else if (!contatoValido(usuario)) {
    mensagemLogin.textContent = 'Digite um e-mail ou telefone válido.';
  } else {
    mensagemLogin.textContent = `Olá, ${usuario}! Este é um projeto de estudo, então o login não está ligado a nenhum servidor.`;
  }
  mensagemLogin.classList.add('mensagem-login--visivel');
});

document.getElementById('esqueceu').addEventListener('click', (event) => {
  event.preventDefault();
  mensagemLogin.textContent = 'Na Coruja Social de mentira, ninguém esquece a senha. 😉';
  mensagemLogin.classList.add('mensagem-login--visivel');
});

// ---------- Senha: mostrar/ocultar e força ----------
botaoMostrar.addEventListener('click', () => {
  const mostrando = senha.type === 'text';
  senha.type = mostrando ? 'password' : 'text';
  botaoMostrar.textContent = mostrando ? 'Mostrar' : 'Ocultar';
  botaoMostrar.setAttribute('aria-pressed', String(!mostrando));
});

function forcaDaSenha(valor) {
  let pontos = 0;
  if (valor.length >= 8) pontos += 1;
  if (valor.length >= 12) pontos += 1;
  if (/[A-Z]/.test(valor) && /[a-z]/.test(valor)) pontos += 1;
  if (/\d/.test(valor)) pontos += 1;
  if (/[^A-Za-z0-9]/.test(valor)) pontos += 1;
  return pontos;
}

senha.addEventListener('input', () => {
  const niveis = [
    { texto: '', cor: 'transparent' },
    { texto: 'Senha fraca', cor: '#dc2626' },
    { texto: 'Senha fraca', cor: '#dc2626' },
    { texto: 'Senha média', cor: '#d97706' },
    { texto: 'Senha boa', cor: '#16a34a' },
    { texto: 'Senha forte', cor: '#15803d' },
  ];
  const pontos = senha.value ? Math.max(1, forcaDaSenha(senha.value)) : 0;
  forcaBarra.style.width = `${pontos * 20}%`;
  forcaBarra.style.background = niveis[pontos].cor;
  forcaTexto.textContent = niveis[pontos].texto;
});

// ---------- Gênero personalizado mostra o campo de pronome ----------
document.querySelectorAll('input[name="gender"]').forEach((opcao) => {
  opcao.addEventListener('change', () => {
    personalizado.hidden = opcao.value !== 'Personalizado';
  });
});

// ---------- Cadastro ----------
function idade(dataTexto) {
  const nascimento = new Date(`${dataTexto}T00:00:00`);
  const hoje = new Date();
  let anos = hoje.getFullYear() - nascimento.getFullYear();
  const aindaNaoFezAniversario = hoje.getMonth() < nascimento.getMonth()
    || (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate());
  if (aindaNaoFezAniversario) anos -= 1;
  return anos;
}

function validar(dados) {
  const problemas = [];
  if (dados.firstname.length < 2) problemas.push(['firstname', 'Informe seu nome.']);
  if (dados.lastname.length < 2) problemas.push(['lastname', 'Informe seu sobrenome.']);
  if (!contatoValido(dados.phone_email)) problemas.push(['phone_email', 'Informe um celular ou e-mail válido.']);
  if (dados.password.length < 6) problemas.push(['password', 'A senha precisa ter pelo menos 6 caracteres.']);
  if (!dados.birthdate) {
    problemas.push(['birthdate', 'Informe sua data de nascimento.']);
  } else if (idade(dados.birthdate) < 13) {
    problemas.push(['birthdate', 'É preciso ter pelo menos 13 anos.']);
  }
  if (!dados.gender) problemas.push(['gender', 'Escolha um gênero.']);
  if (dados.gender === 'Personalizado' && !dados.pronome) problemas.push(['pronome', 'Escolha um pronome.']);
  return problemas;
}

formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();
  const dados = Object.fromEntries(new FormData(formCadastro).entries());
  Object.keys(dados).forEach((chave) => { dados[chave] = String(dados[chave]).trim(); });
  dados.gender = dados.gender || '';

  formCadastro.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
  const problemas = validar(dados);

  if (problemas.length > 0) {
    erros.innerHTML = '';
    const lista = document.createElement('ul');
    problemas.forEach(([campo, mensagem]) => {
      const item = document.createElement('li');
      item.textContent = mensagem;
      lista.appendChild(item);
      const elemento = formCadastro.elements[campo];
      if (elemento && elemento.setAttribute) elemento.setAttribute('aria-invalid', 'true');
    });
    erros.appendChild(lista);
    const primeiro = formCadastro.elements[problemas[0][0]];
    (primeiro.length ? primeiro[0] : primeiro).focus();
    return;
  }

  erros.innerHTML = '';
  mostrarBoasVindas(dados);
});

function mostrarBoasVindas(dados) {
  document.getElementById('boas-vindas-titulo').textContent = `Olá, ${dados.firstname} ${dados.lastname}!`;
  const resumo = document.getElementById('resumo');
  resumo.innerHTML = '';
  const [ano, mes, dia] = dados.birthdate.split('-');
  const linhas = [
    ['Contato', dados.phone_email],
    ['Nascimento', `${dia}/${mes}/${ano}`],
    ['Gênero', dados.gender === 'Personalizado' ? (dados['gender-custom'] || 'Personalizado') : dados.gender],
  ];
  linhas.forEach(([rotulo, valor]) => {
    const dt = document.createElement('dt');
    dt.textContent = rotulo;
    const dd = document.createElement('dd');
    dd.textContent = valor;
    resumo.append(dt, dd);
  });
  areaFormulario.hidden = true;
  boasVindas.hidden = false;
  boasVindas.focus();
}

document.getElementById('voltar-cadastro').addEventListener('click', () => {
  formCadastro.reset();
  personalizado.hidden = true;
  forcaBarra.style.width = '0';
  forcaTexto.textContent = '';
  boasVindas.hidden = true;
  areaFormulario.hidden = false;
  document.getElementById('firstname').focus();
});

// Não deixa escolher data no futuro
document.getElementById('birthdate').max = new Date().toISOString().slice(0, 10);
