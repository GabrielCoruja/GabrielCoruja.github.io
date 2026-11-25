# 🦉 Coruja Social

Tela de **login e cadastro** de uma rede social **fictícia**, feita para praticar formulários com **HTML, CSS e JavaScript puro**.

**🔗 Ver online:** https://gabrielcoruja.github.io/projetos/coruja-social/

> Projeto de estudo: nenhum dado digitado é enviado ou salvo. O formulário não está ligado a nenhum servidor.

## Funcionalidades

- **Login no cabeçalho** com validação de e-mail ou telefone.
- **Cadastro** com nome, sobrenome, celular ou e-mail, senha, data de nascimento e gênero.
- **Validação** com a lista de erros, destaque nos campos inválidos e foco no primeiro campo com problema.
- **Força da senha** com barra colorida, e botão para **mostrar ou ocultar** a senha.
- **Data de nascimento** com o seletor nativo do navegador (sem datas futuras) e **idade mínima de 13 anos**.
- **Gênero personalizado**: ao escolher "Personalizado", aparecem o pronome e o campo de gênero opcional.
- **Tela de boas-vindas** com o resumo do cadastro.
- Ilustração da "rede" feita com CSS, **modo escuro** automático e layout responsivo.

## Histórico

Este projeto começou em 2019 como um exercício da Trybe: **reproduzir a tela inicial do Facebook** com HTML e CSS. A primeira versão usava o logo, o CSS e os textos do Facebook, além de jQuery, Bootstrap e um plugin de calendário.

Em 2026 ele virou a **Coruja Social**, com identidade própria:

- o layout e os campos que eram o objetivo do exercício continuam os mesmos;
- uma página publicada que imita a tela de login de uma rede social real pode ser confundida com phishing, então a marca foi trocada;
- as dependências saíram: o calendário agora é o `<input type="date">` do navegador.

## Como executar

Abra o `index.html` no navegador.
