# 😂 Gerador de Memes

Gerador de memes feito com **HTML, CSS e JavaScript puro**. Escolha uma imagem, escreva o texto de cima e de baixo e baixe o meme pronto.

**🔗 Ver online:** https://gabrielcoruja.github.io/projetos/meme-generator-project/

## Funcionalidades

- **Enviar imagem** do computador, pelo botão ou **arrastando e soltando**.
- **Quatro imagens de exemplo** para testar na hora (SVGs que ficam no próprio projeto).
- **Texto superior e inferior** em tempo real, no estilo clássico de meme: Impact, maiúsculas, contorno preto.
- **Tamanho e cor do texto** ajustáveis.
- **Molduras**: fogo, água e terra, as três do desafio original.
- **Baixar como PNG**: imagem e texto são desenhados num `<canvas>`, com quebra automática de linha.
- **Modo escuro** automático e layout responsivo (no celular, a prévia fica em cima).

## Como funciona

- A prévia usa **container queries** (`cqw`): o tamanho do texto é proporcional à largura da imagem, então a prévia e o PNG ficam iguais.
- No download, o script mede cada palavra com `measureText` para quebrar as linhas e desenha o texto com `strokeText` e `fillText`.
- A imagem enviada é lida com `URL.createObjectURL` e não sai do navegador.

## Histórico

Projeto de 2019, do início dos meus estudos na Trybe. A primeira versão tinha o upload de imagem e os dois textos em tempo real, mas usava posições fixas em pixels (o texto saía do lugar em outras telas) e uma imagem padrão de um site externo, que saiu do ar. Agora os exemplos são locais e o projeto continua sem frameworks.

## Como executar

Abra o `index.html` no navegador.
