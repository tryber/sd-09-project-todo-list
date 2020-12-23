function createTitle() {
  let header = document.querySelector("header");
  let title = document.createElement("h1");
  header.appendChild(title);
  title.innerText = "Minha Lista de Tarefas";
}

function createParagraph() {
  let header = document.querySelector("header");
  let paragraph = document.createElement("p");
  paragraph.id = "funcionamento";
  header.appendChild(paragraph);

  paragraph.innerText =
    "Clique duas vezes em um item para marcá-lo como completo";
}

function createInput() {
  let main = document.querySelector("main");
  let input = document.createElement("input");
  main.appendChild(input);
  input.id = "texto-tarefa";
  input.type = "text";
  input.placeholder = "Digite o item que deseja adicionar à lista";
}

function createList() {
  let main = document.querySelector("main");
  let list = document.createElement("ol");
  main.appendChild(list);
  list.id = "lista-tarefas";
}

function createAddButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.id = "criar-tarefa";
  button.innerText = "Adicionar";
}

function clickAddButton() {
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
  let listItems = document.getElementById("lista-tarefas");
  listItems.addEventListener("click", function (event) {
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
    let selected = document.getElementsByClassName("completed");
    while (selected.length > 0) selected[0].remove();
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
    alert("Lista salva!");
  });
}

function clickSaveTasksButtonGet() {
  let list = document.getElementById("lista-tarefas");
  for (let index = 0; index < localStorage.length; index += 1) {
    let listItems = document.createElement("li");
    let objectString = JSON.parse(localStorage.getItem(index));
    listItems.innerText = objectString.text;
    listItems.className = objectString.class;
    list.appendChild(listItems);
  }
}

function createDeleteSavedListButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.className = "buttons delete-saved-list";
  button.id = "apagar-lista-salva";
  button.innerText = "Limpar lista salva";
}

function clickDeleteSavedListButton() {
  let button = document.getElementById("apagar-lista-salva");
  button.addEventListener("click", function () {
    localStorage.clear();
    let listItems = document.getElementsByTagName("li");
    for (let index = 0; index < listItems.length; index += 1) {
      listItems[index].classList.remove("saved-items");
    }
    alert("Lista apagada!");
  });
}

function createMoveUpButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.className = "buttons move-up";
  button.id = "mover-cima";
  button.innerHTML = "&#11014";
}

function clickMoveUpButton() {
  let button = document.getElementById("mover-cima");
  button.addEventListener("click", function () {
    let selected = document.querySelector(".selected");
    let previousElement;
    if (selected) {
      previousElement = selected.previousElementSibling;
    }
    if (previousElement) {
      let auxiliary = {
        text: previousElement.innerText,
        class: previousElement.className,
      };
      previousElement.innerText = selected.innerText;
      previousElement.className = selected.className;
      selected.innerText = auxiliary.text;
      selected.className = auxiliary.class;
    }
  });
}

function createMoveDownButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.className = "buttons move-down";
  button.id = "mover-baixo";
  button.innerHTML = "&#11015";
}

function clickMoveDownButton() {
  let button = document.getElementById("mover-baixo");
  button.addEventListener("click", function () {
    let selected = document.querySelector(".selected");
    let nextElement;
    if (selected) {
      nextElement = selected.nextElementSibling;
    }
    if (nextElement) {
      let auxiliary = {
        text: nextElement.innerText,
        class: nextElement.className,
      };
      nextElement.innerText = selected.innerText;
      nextElement.className = selected.className;
      selected.innerText = auxiliary.text;
      selected.className = auxiliary.class;
    }
  });
}

function createRemoveSelectedButton() {
  let main = document.querySelector("main");
  let button = document.createElement("button");
  main.appendChild(button);
  button.className = "buttons remove-selected";
  button.id = "remover-selecionado";
  button.innerHTML = "&#10008";
}

function clickRemoveSelectedButton() {
  let button = document.getElementById("remover-selecionado");
  button.addEventListener("click", function () {
    let selected = document.getElementsByClassName("selected");
    while (selected.length > 0) selected[0].remove();
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
  doubleClickItem();
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
