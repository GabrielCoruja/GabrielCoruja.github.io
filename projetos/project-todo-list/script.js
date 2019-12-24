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
  elementCompleted(li);
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

const elementCompleted = li => {
  li.addEventListener("dblclick", () => {
    if (li.style.textDecoration) {
      li.style.textDecoration = "";
      li.style.color = "";
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "red";
    }
  });
};

function deleteElementsCompleted() {
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
    while (tagOl.firstChild) {
      tagOl.firstChild.remove();
    }
  });
}
