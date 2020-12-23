/*
function createTitle() {
  let getheader = document.querySelector("header");

  let createH1 = document.createElement("h1");

  getheader.appendChild(createH1);

  createH1.innerText = "Minha Lista de Tarefas";
}

function createParagraph() {
  let getMain = document.querySelector("main");
  let createParagraph = document.createElement("p");
  createParagraph.innerText =
    "Clique duas vezes em um item para marcá-lo como completo";
  createParagraph.id = "funcionamento";
  getMain.appendChild(createParagraph);
}

function createInput() {
  let getMain = document.querySelector("main");
  let createInput = document.createElement("input");
  createInput.id = "texto-tarefa";
  createInput.type = "text";
  createInput.placeholder = "Digite o item que deseja adicionar a lista";
  getMain.appendChild(createInput);
}

function createAddButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.className = "buttons add-button";
  button.id = "criar-tarefa";
  button.innerText = "Adicionar";
}

function createList() {
  let main = document.querySelector("main");
  let list = document.createElement("li");
  main.appendChild(createList);
  list.id = "lista-tarefas";
}

function clickButton() {
  let button = document.querySelector("#criar-tarefa");
  let list = document.querySelector("#lista-tarefas");
  button.addEventListener("click", function () {
    let input = document.querySelector("#texto-tarefa");
    let inputValue = document.querySelector("#texto-tarefa").value;
    if (inputValue === "") {
      alert("A tarefa não pode ser vazia!");
      return;
    }
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerText = inputValue;
    input.value = "";
  });
}

function clickItem() {
  let itemsList = document.getElementById("lista-tarefas");
  itemsList.addEventListener("click", function (event) {
    let selected = document.querySelectorAll(".selected");
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove("selected");
    }
    event.target.classList.add("selected");
  });
}

function doubleClickItem() {
  let listItems = document.getElementById("lista-tarefas");
  listItems.addEventListener("dblclick", function (event) {
    event.target.classList.toggle("completed");
  });
}

function createDeleteButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.className = "buttons delete-button";
  button.id = "apaga-tudo";
  button.innerText = "Limpar lista";
}

function clickDeleteButton() {
  let button = document.getElementById("apaga-tudo");
  let listItems = document.getElementById("lista-tarefas");
  button.addEventListener("click", function () {
    let items = listItems.childElementCount;
    for (let index = 0; index < items; index += 1) {
      listItems.firstChild.remove();
    }
  });
}

function createRemoveCompletedButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.className = "buttons remove-completed";
  button.id = "remover-finalizados";
  button.innerText = "Limpar finalizados";
}

function clickRemoveCompletedButton() {
  let button = document.getElementById("remover-finalizados");
  button.addEventListener("click", function () {
    let selected = document.getElementClassName("completed");
    while (selected.length > 0) seletected[0].remove();
  });
}

function createSaveTasksButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.className = "buttons save-tasks";
  button.id = "salvar-tarefas";
  button.innerText = "Salvar lista";
}

function createSaveTasksButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.className = "buttons save-tasks";
  button.id = "salvar-tarefas";
  button.innerText = "Salvar lista";
}

function clickSaveTasksButtonSet() {
  let button = document.getElementById("salvar-tarefas");
  button.addEventListener("click", function () {
    let listItems = document.getElementsByTagName("li");
    for (let index = 0; index < listItems.length; index += 1) {
      listItems[index].classList.add("saved-items");
      let objectString = {
        text: listItems[index].innerText,
        class: listItems[index].className,
      };

      localStorage.setItem(index, JSON.stringify(objectString));
    }
    alert("Lista salva!!!");
  });
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createList();
  createAddButton();
  clickAddButton();
  clickItem();
  dblClickItem();
  createDeleteButton();
  clickDeleteButton();
  createRemoveCompletedButton();
  clickRemoveCompletedButton();
  createSaveTasksButton();
  clickSaveTasksButtonSet();
  clickSaveTasksButtonGet();
  createDeleteSavedListButton();
  clickDeleteSavedListButton();
  createMoveUpButton();
  clickMoveUpButton();
  createMoveDownButton();
  clickMoveDownButton();
  createRemoveSelectedButton();
  clickRemoveSelectedButton();
};
*/

function createTitle() {
  // armazenar o elemento pai de onde será criado o elemento novo
  const header = document.querySelector("header");
  // agora criamos o elemento que queremos
  const heading = document.createElement("h1");
  // o pai header ele ta recebendo o heading como filho
  // o nosso h1 vai entrar dentro do header
  header.appendChild(heading);
  // coloca texto no h1
  heading.innerText = "Minha Lista de Tarefas";
  heading.style.color = "red";
  heading.style.textAlign = "center";
  heading.style.border = "1px solid purple";
}

function createParagraph() {
  const main = document.querySelector("main");
  const paragraph = document.createElement("p");
  paragraph.innerText =
    "Clique duas vezes em um item para marcá-lo como completo";
  paragraph.id = "funcionamento";
  main.appendChild(paragraph);
}

function createInput() {
  const main = document.querySelector("main");
  const input = document.createElement("input");
  input.id = "texto-tarefa";
  input.type = "text";
  input.placeholder = "Digite o item que deseja adicionar a lista";
  main.appendChild(input);
}

function createButton() {
  const main = document.querySelector("main");
  const button = document.createElement("button");
  button.id = "criar-tarefa";
  button.innerText = "Criar tarefa";
  main.appendChild(button);
}

function clearTasksButton() {
  const main = document.querySelector("main");
  const button = document.createElement("button");
  button.id = "apaga-tudo";
  button.innerText = "Apaga tudo";
  main.appendChild(button);
}

function clearCompletedButton() {
  const main = document.querySelector("main");
  const button = document.createElement("button");
  button.id = "remover-finalizados";
  button.innerText = "Apagar completados";
  main.appendChild(button);
}

function clearSelectedButton() {
  const main = document.querySelector("main");
  const button = document.createElement("button");
  button.id = "remover-selecionado";
  button.innerText = "Apagar selecionado";
  main.appendChild(button);
}

function saveTasksButton() {
  const main = document.querySelector("main");
  const button = document.createElement("button");
  button.id = "salvar-tarefas";
  button.innerText = "Salvar Lista";
  main.appendChild(button);
}

function moveUpButton() {
  const main = document.querySelector("main");
  const button = document.createElement("button");
  button.id = "mover-cima";
  button.innerText = "Mover para cima";
  main.appendChild(button);
}

function moveDownButton() {
  const main = document.querySelector("main");
  const button = document.createElement("button");
  button.id = "mover-baixo";
  button.innerText = "Mover para baixo";
  main.appendChild(button);
}

function createOrderedList() {
  const main = document.querySelector("main");
  const orderedList = document.createElement("ol");
  orderedList.id = "lista-tarefas";
  main.appendChild(orderedList);
}

function doubleClicked() {
  const orderedList = document.querySelector("ol");
  orderedList.addEventListener("dblclick", function (event) {
    event.target.classList.toggle("completed");
  });
}

function clickedItem() {
  const orderedList = document.querySelector("ol");
  orderedList.addEventListener("click", function (event) {
    const selected = document.querySelectorAll(".selected");
    for (let i = 0; i < selected.length; i += 1) {
      selected[i].classList.remove("selected");
    }
    event.target.classList.add("selected");
  });
}

function submitButton() {
  const orderedList = document.querySelector("#lista-tarefas");
  const button = document.querySelector("#criar-tarefa");
  button.addEventListener("click", function () {
    const input = document.querySelector("#texto-tarefa");
    const inputValue = document.querySelector("#texto-tarefa").value;
    const listItem = document.createElement("li");
    listItem.innerText = inputValue;
    orderedList.appendChild(listItem);
    input.value = "";
  });
}

function clearAllTasks() {
  const button = document.getElementById("apaga-tudo");
  const orderedList = document.getElementById("lista-tarefas");
  button.addEventListener("click", function () {
    const listLength = orderedList.childElementCount;
    for (let index = 0; index < listLength; index += 1) {
      orderedList.firstChild.remove();
    }
  });
}

function clearCompletedTasks() {
  const button = document.getElementById("remover-finalizados");
  button.addEventListener("click", function () {
    const liList = document.getElementsByTagName("li");
    for (let index = 0; index < liList.length; index += 1) {
      if (liList[index].classList.contains("completed")) {
        liList[index].remove();
        index -= 1;
      }
    }
  });
}

function clearSelectedTasks() {
  const button = document.getElementById("remover-selecionado");
  button.addEventListener("click", function () {
    const liList = document.getElementsByTagName("li");
    for (let index = 0; index < liList.length; index += 1) {
      if (liList[index].classList.contains("selected")) {
        liList[index].remove();
        index -= 1;
      }
    }
  });
}

function setListItens() {
  const button = document.getElementById("salvar-tarefas");
  button.addEventListener("click", function () {
    const lineItens = document.getElementsByTagName("li");
    for (let index = 0; index < lineItens.length; index += 1) {
      const objeto = {
        text: lineItens[index].innerText,
        class: lineItens[index].className,
      };
      localStorage.setItem(index, JSON.stringify(objeto));
    }
  });
}

function getListItens() {
  const orderedList = document.getElementById("lista-tarefas");
  for (let index = 0; index < localStorage.length; index += 1) {
    const listItem = document.createElement("li");
    const objStorage = JSON.parse(localStorage.getItem(index));
    listItem.innerText = objStorage.text;
    listItem.className = objStorage.class;
    orderedList.appendChild(listItem);
  }
}

function moveSelectedUp() {
  const button = document.getElementById("mover-cima");
  button.addEventListener("click", function () {
    const selected = document.querySelector(".selected");
    let previousElement;
    if (selected) {
      previousElement = selected.previousElementSibling;
    }
    if (previousElement) {
      const auxiliar = {
        text: previousElement.innerText,
        class: previousElement.className,
      };
      previousElement.innerText = selected.innerText;
      previousElement.className = selected.className;
      selected.innerText = auxiliar.text;
      selected.className = auxiliar.class;
    }
  });
}

function moveSelectedDown() {
  const button = document.getElementById("mover-baixo");
  button.addEventListener("click", function () {
    const selected = document.querySelector(".selected");
    let nextElement;
    if (selected) {
      nextElement = selected.nextElementSibling;
    }
    if (nextElement) {
      const auxiliar = {
        text: nextElement.innerText,
        class: nextElement.className,
      };
      nextElement.innerText = selected.innerText;
      nextElement.className = selected.className;
      selected.innerText = auxiliar.text;
      selected.className = auxiliar.class;
    }
  });
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createOrderedList();
  createButton();
  submitButton();
  clearTasksButton();
  clearCompletedButton();
  clearSelectedButton();
  saveTasksButton();
  moveUpButton();
  moveDownButton();
  setListItens();
  getListItens();
  clearCompletedTasks();
  clearSelectedTasks();
  clearAllTasks();
  moveSelectedUp();
  moveSelectedDown();
  doubleClicked();
  clickedItem();
};
