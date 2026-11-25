# ✉️ Carta Misteriosa

Escreva uma frase e ela vira uma **carta montada com recortes de jornal e revista**, cada palavra com um estilo diferente. Feito com **HTML, CSS e JavaScript puro**.

**🔗 Ver online:** https://gabrielcoruja.github.io/projetos/project-mystery-letter/

## Funcionalidades

- **Gerar a carta** pelo botão ou com Enter. Se a frase estiver vazia, aparece a mensagem "Por favor, digite o conteúdo da carta."
- Cada palavra recebe uma classe aleatória de cada grupo:
  - **estilo**: jornal, revistas e três papéis com textura (as imagens originais do projeto)
  - **tamanho**: médio, grande e muito grande
  - **rotação**: para a esquerda, para a direita ou nenhuma
  - **inclinação**: para a esquerda, para a direita ou nenhuma
- **Clique numa palavra** (ou use Enter nela) para trocar só o estilo dela.
- **Embaralhar estilos** de todas as palavras de uma vez.
- **Copiar o texto** da carta.
- **Contador** de palavras recortadas.
- **Modo escuro** automático e layout responsivo.

## Histórico

Projeto de 2019, do início dos meus estudos na Trybe. A primeira versão aplicava estilos inline sorteados e usava uma imagem externa no título, que saiu do ar. Agora os estilos são classes CSS combináveis, o título usa as texturas do próprio projeto, e o texto digitado é inserido com `textContent` em vez de HTML.

## Como executar

Abra o `index.html` no navegador.
