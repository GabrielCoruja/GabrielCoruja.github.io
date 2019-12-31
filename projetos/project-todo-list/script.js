const tagOl = document.getElementById("lista-de-elementos-adicionados");
const textoInput = document.getElementById("adicionar-tarefa");
const gerarLista = document.getElementsByClassName("estilo-botoes")[0];
let itemSelected = "";

gerarLista.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = textoInput.value;
  tagOl.appendChild(li);
  saveList(textoInput.value);
  textoInput.value = "";
  elementCompleted(li);
  delectedAll();
  deleteElementsCompleted();
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
  const removeElementsSelecteds = document.getElementById(
    "delete-elements-selected"
  );
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
  const removerItem = document.getElementsByClassName("estilo-botoes")[3];
  removerItem.addEventListener("click", () => {
    itemSelected.remove();
  });
}

function delectedAll() {
  const removerLista = document.getElementsByClassName("estilo-botoes")[2];
  removerLista.addEventListener("click", function() {
    while (tagOl.firstChild) {
      tagOl.firstChild.remove();
    }
    if(localStorage.comments) {
      localStorage.removeItem("comments")
    }
  });
}

const upElement = document.getElementById("upElement");
upElement.addEventListener("click", () => {
  let previousElement = itemSelected.previousElementSibling;
  tagOl.insertBefore(itemSelected, previousElement);
});

const downElement = document.getElementById("downElement");
downElement.addEventListener("click", () => {
  if (itemSelected.nextElementSibling == null) {
    let firstElement = tagOl.firstElementChild;
    tagOl.insertBefore(itemSelected, firstElement);
  } else {
    let nextElement = itemSelected.nextElementSibling;
    tagOl.insertBefore(itemSelected, nextElement.nextSibling);
  }
});

function saveList(value) {
  const object = value;
  if (!localStorage.comments) {
    const newComment = JSON.stringify([object]);
    localStorage.setItem("comments", newComment);
  } else {
    const actualComments = localStorage.comments;
    const formatedActualComments = JSON.parse(actualComments);
    const finalComments = [...formatedActualComments, object];
    localStorage.comments = JSON.stringify(finalComments);
  }
  const list = document.getElementsByTagName("li");
  for(let index = 0; index < list.length; index++) {
    if(list[index].style.textDecoration) {
      localStorage.setItem(`style${index}`, 1);
    } else {
      localStorage.setItem(`style${index}`, 0);
    }
  }
}

function showList() {
  if(localStorage.comments) {
    let local = JSON.parse(localStorage.comments);
    for(let index = 0; index < local.length; index++) {
      const tagLi = document.createElement("li");
      tagLi.innerHTML = local[index];
      tagOl.appendChild(tagLi);
      elementCompleted(tagLi);
      delectedAll();
      deleteElementsCompleted();
    }
    completed()
  }
}

function completedLocalStorage() {
  const list = document.getElementsByTagName("li");
  for(let index = 0; index < list.length; index++) {
    if(localStorage[`style${index}`] == 1) {
      list[index].style.textDecoration = "line-through";
      list[index].style.color = "red";
    }
  }
}

showList();
generateStyle();
