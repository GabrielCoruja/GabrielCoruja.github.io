# 🎨 Pixel Art

Editor de pixel art feito com **HTML, CSS e JavaScript puro**. Escolha uma cor da paleta e clique ou arraste sobre os pixels para desenhar.

**🔗 Ver online:** https://gabrielcoruja.github.io/projetos/project-pixel-art/

## Funcionalidades

- **Paleta de Cores** com preto fixo e três cores geradas aleatoriamente. O botão "Novas cores" sorteia outras.
- **Cor livre** com o seletor de cores do navegador.
- **Pincel e borracha**: pinte clicando ou arrastando, com mouse, caneta ou toque. O traço é contínuo mesmo com movimentos rápidos.
- **Quadro de 5 a 50 pixels** de lado. Valores fora do limite são ajustados (abaixo de 5 vira 5, acima de 50 vira 50).
- **Mostrar ou esconder a grade** para ver o desenho limpo.
- **Baixar como PNG**: o desenho é recriado num `<canvas>` em alta resolução.
- **Salvamento automático** no `localStorage`: o desenho continua lá quando você volta.
- **Modo escuro** automático e layout que se adapta ao celular.

## Como funciona

- O quadro é uma grade CSS (`display: grid`). O tamanho de cada pixel é calculado em CSS com `min()` para caber em qualquer tela, até o máximo de 40 px do projeto original.
- Os eventos de ponteiro (`pointerdown`, `pointermove`) unificam mouse e toque. Para não deixar falhas no traço, o script pinta os pontos intermediários entre dois eventos.
- O download percorre os pixels, desenha cada um como um retângulo no canvas e gera o arquivo com `toDataURL`.

## Histórico

Projeto de 2019, do início dos meus estudos na Trybe. A primeira versão tinha a paleta, o quadro 5×5, o botão de limpar e o quadro com tamanho definido pelo usuário (com `alert` para valores inválidos). Em 2026 o projeto ganhou o visual novo, a borracha, a cor livre, o pintar arrastando, o download e o salvamento. Continua sem frameworks, como na primeira versão.

## Como executar

Abra o `index.html` no navegador. Não há dependências nem etapa de build.
