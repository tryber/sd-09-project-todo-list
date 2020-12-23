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
    const selected = document.querySelectorAll(".selected");
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove("selected");
    }
    event.target.classList.add("selected");
  });
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createAddButton();
  createList();
  //clickButton();
  clickItem();
};
