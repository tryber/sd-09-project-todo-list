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

function createButton() {
  let getMain = document.querySelector("main");
  let createButton = document.createElement("button");
  createButton.id = "criar-tarefa";
  createButton.innerText = "Criar tarefa";
  getMain.appendChild(createButton);
}

/*
function clearTasksButton() {
  let getMain = document.querySelector("main");
  let createClearTaskButton = document.createElement("button");
  createClearTaskButton.id = "apaga-tudo";
  createClearTaskButton.innerText = "Apaga tudo";
  getMain.appendChild(createClearTaskButton);
}

function clearCompletedButton() {
  let getMain = document.querySelector("main");
  let createClearCompletedButton = document.createElement("button");
  createClearCompletedButton.id = "remover-finalizados";
  createClearCompletedButton.innerText = "Apagar completados";
  getMain.appendChild(createClearCompletedButton);
}

function clearSelectedButton() {
  let getMain = document.querySelector("main");
  let createClearSelectedButton = document.createElement("button");
  createClearSelectedButton.id = "remover-selecionado";
  createClearSelectedButton.innerText = "Apagar selecionado";
  getMain.appendChild(createClearSelectedButton);
}

function saveTasksButton() {
  let getMain = document.querySelector("main");
  let createSaveTaskButton = document.createElement("button");
  createSaveTaskButtonn.id = "salvar-tarefas";
  createSaveTaskButton.innerText = "Salvar Lista";
  getMain.appendChild(createSaveTaskButton);
}

function moveUpButton() {
  let getMain = document.querySelector("main");
  let createMoveUpButton = document.createElement("button");
  createMoveUpButton.id = "mover-cima";
  createMoveUpButton.innerText = "Mover para cima";
  getMain.appendChild(createMoveUpButton);
}

function moveDownButton() {
  let getMain = document.querySelector("main");
  let createMoveDownButton = document.createElement("button");
  createMoveDownButtonn.id = "mover-baixo";
  createMoveDownButton.innerText = "Mover para baixo";
  getMain.appendChild(createMoveDownButton);
}

function createOrderedList() {
  let getMain = document.querySelector("main");
  let createOrderedList = document.createElement("ol");
  createOrderedList.id = "lista-tarefas";
  getMain.appendChild(createOrderedListt);
}

function doubleClicked() {
  let getOrderedList = document.querySelector("ol");
  getOrderedList.addEventListener("dblclick", function (event) {
    event.target.classList.toggle("completed");
  });
}

function clickedItem() {
  let getOrderedList = document.querySelector("ol");
  getOrderedList.addEventListener("click", function (event) {
    let getSelected = document.querySelectorAll(".selected");
    for (let index = 0; index < getSelected.length; index += 1) {
      getSelected[index].classList.remove("selected");
    }
    event.target.classList.add("selected");
  });
}

function submitButton() {
  let getOrderedList = document.querySelector("#lista-tarefas");
  let getButton = document.querySelector("#criar-tarefa");
  getButton.addEventListener("click", function () {
    let getInput = document.querySelector("#texto-tarefa");
    let getInputValue = document.querySelector("#texto-tarefa").value;
    let createListItem = document.createElement("li");
    createListItem.innerText = getInputValue;
    getOrderedList.appendChild(createListItem);
    getInput.value = "";
  });
}

function clearAllTasks() {
  let getButton = document.getElementById("apaga-tudo");
  let getOrderedList = document.getElementById("lista-tarefas");
  button.addEventListener("click", function () {
    let listLength = orderedList.childElementCount;
    for (let index = 0; index < listLength; index += 1) {
      getOrderedList.firstChild.remove();
    }
  });
}

function clearCompletedTasks() {
  let getButton = document.getElementById("remover-finalizados");
  getButton.addEventListener("click", function () {
    let liList = document.getElementsByTagName("li");
    for (let index = 0; index < liList.length; index += 1) {
      if (liList[index].classList.contains("completed")) {
        liList[index].remove();
        index -= 1;
      }
    }
  });
}

function clearSelectedTasks() {
  let getButton = document.getElementById("remover-selecionado");
  getButton.addEventListener("click", function () {
    let liList = document.getElementsByTagName("li");
    for (let index = 0; index < liList.length; index += 1) {
      if (liList[index].classList.contains("selected")) {
        liList[index].remove();
        index -= 1;
      }
    }
  });
}

function setListItens() {
  let getButton = document.getElementById("salvar-tarefas");
  getButton.addEventListener("click", function () {
    let lineItens = document.getElementsByTagName("li");
    for (let index = 0; index < lineItens.length; index += 1) {
      let objeto = {
        text: lineItens[index].innerText,
        class: lineItens[index].className,
      };
      localStorage.setItem(index, JSON.stringify(objeto));
    }
  });
}

function getListItens() {
  let getOrderedList = document.getElementById("lista-tarefas");
  for (let index = 0; index < localStorage.length; index += 1) {
    let createListItem = document.createElement("li");
    let objStorage = JSON.parse(localStorage.getItem(index));
    createListItem.innerText = objStorage.text;
    createListItem.className = objStorage.class;
    getOrderedList.appendChild(createListItem);
  }
}

function moveSelectedUp() {
  let getButton = document.getElementById("mover-cima");
  getButton.addEventListener("click", function () {
    let getSelected = document.querySelector(".selected");
    let previousElement;
    if (getSelected) {
      previousElement = getSelected.previousElementSibling;
    }
    if (previousElement) {
      let auxiliar = {
        text: previousElement.innerText,
        class: previousElement.className,
      };
      previousElement.innerText = getSelected.innerText;
      previousElement.className = getSelected.className;
      getSelected.innerText = auxiliar.text;
      getSelected.className = auxiliar.class;
    }
  });
}

function moveSelectedDown() {
  let getButton = document.getElementById("mover-baixo");
  getButton.addEventListener("click", function () {
    let getSelected = document.querySelector(".selected");
    let nextElement;
    if (getSelected) {
      nextElement = getSelected.nextElementSibling;
    }
    if (nextElement) {
      let auxiliar = {
        text: nextElement.innerText,
        class: nextElement.className,
      };
      nextElement.innerText = getSelected.innerText;
      nextElement.className = getSelected.className;
      getSelected.innerText = auxiliar.text;
      getSelected.className = auxiliar.class;
    }
  });
}
*/

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createOrderedList();
  /*createButton();
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
  */
};
