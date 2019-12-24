const tagOl = document.getElementById("lista-de-elementos-adicionados");
const textoInput = document.getElementById("adicionar-tarefa");
const gerarLista = document.getElementsByClassName("estilo-botoes")[0];
const removerLista = document.getElementsByClassName("estilo-botoes")[2];
const removerItem = document.getElementsByClassName("estilo-botoes")[3];
const removeElementsSelecteds = document.getElementById(
  "delete-elements-selected"
);
let itemSelected = "";

gerarLista.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = textoInput.value;
  tagOl.appendChild(li);
  textoInput.value = "";
  generateStyle();
  elementCompleted();
  delectedAll();
  deleteElementsCompleted(li);
});

const generateStyle = () => {
  const list = document.getElementsByTagName("li");
  for (let clas of list) {
    clas.addEventListener("click", () => {
      for (let index = 0; index < list.length; index++) {
        list[index].style.background = "";
      }
      clas.style.background = "gray";
      itemSelected = clas;
      deleteSelected();
    });
  }
};

const elementCompleted = () => {
  const list = document.getElementsByTagName("li");
  for (let clas of list) {
    clas.addEventListener("dblclick", () => {
      clas.style.textDecoration = "line-through";
      clas.style.color = "red";
    });
  }
};

function deleteElementsCompleted(li) {
  removeElementsSelecteds.addEventListener("click", () => {
    const list = document.getElementsByTagName("li");
    for (let index = 0; index < list.length; index++) {
      if (list[index].style.color) {
        list[index].remove();
        index--;
      }
    }
  });
}

function deleteSelected() {
  removerItem.addEventListener("click", () => {
    itemSelected.remove();
  });
}

function delectedAll() {
  removerLista.addEventListener("click", function() {
    while (tag.firstChild) {
      tag.firstChild.remove();
    }
  });
}
