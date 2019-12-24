const tag = document.getElementById("lista-de-elementos-adicionados");
const textoInput = document.getElementById("adicionar-tarefa");
const gerarLista = document.getElementsByClassName("estilo-botoes")[0];
const removerSelecionados = document.getElementsByClassName("estilo-botoes")[1];
const removerLista = document.getElementsByClassName("estilo-botoes")[2];
const removerItem = document.getElementsByClassName("estilo-botoes")[3];
let itemSelected = "";

gerarLista.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = textoInput.value;
  tag.appendChild(li);
  textoInput.value = "";
  generateStyle();
  gerar();
});

const generateStyle = () => {
  const list = document.getElementsByTagName("li");
  for (let clas of list) {
    clas.addEventListener("click", () => {
      for(let index = 0; index < list.length; index++){
          list[index].style.background = '';
      }
      clas.style.background = "gray";
      itemSelected = clas;
    });
  }
};

const gerar = () => {
    const list = document.getElementsByTagName("li");
    for (let clas of list) {
    clas.addEventListener("dblclick", () => {
        if (clas.style.textDecoration) {
          clas.style.textDecoration = "";
          clas.style.color = "";
          console.log('zero')
        } else {
          clas.style.textDecoration = "line-through";
          clas.style.color = "red";
          console.log('colorido')
        }
      });
    }
}

removerItem.addEventListener('click', () => {
    itemSelected.remove();
})

removerLista.addEventListener("click", function() {
  while (tag.firstChild) {
    tag.firstChild.remove();
  }
});
