# ✅ Lista de Tarefas

Lista de tarefas feita com **HTML, CSS e JavaScript puro**: adicione, conclua, reordene, filtre e remova tarefas. Tudo fica salvo no navegador.

**🔗 Ver online:** https://gabrielcoruja.github.io/projetos/project-todo-list/

## Funcionalidades

- **Adicionar** com o botão ou com Enter.
- **Concluir** com clique duplo no item ou pela caixinha de seleção.
- **Selecionar** com um clique e **mover para cima ou para baixo** (botões ↑ ↓ ou as setas do teclado).
- **Remover** a tarefa selecionada (botão ou tecla Delete), **remover as concluídas** ou **apagar tudo** (com confirmação).
- **Filtros**: todas, pendentes e concluídas, com um contador de pendentes.
- **Salvamento automático** no `localStorage`.
- **Modo escuro** automático e layout responsivo.

## O que mudou por dentro

A versão original salvava o **HTML de cada item** (`outerHTML`) no `localStorage` e inseria o texto digitado com `innerHTML`. Isso permitia que um texto como `<img onerror=...>` executasse código na página.

Agora:

- as tarefas ficam num **array de objetos** `{ id, texto, concluida }`, e a lista é redesenhada a partir dele;
- o texto é inserido com `textContent`, então nada do que é digitado vira HTML;
- os eventos são registrados uma vez por item. Antes, cada nova tarefa adicionava os mesmos eventos de novo nos itens que já existiam.

## Histórico

Projeto de 2019, do início dos meus estudos na Trybe. As funcionalidades originais (adicionar, concluir com clique duplo, selecionar, mover, remover e salvar) continuam todas aqui, agora com filtros, atalhos de teclado e um visual novo.

## Como executar

Abra o `index.html` no navegador.
