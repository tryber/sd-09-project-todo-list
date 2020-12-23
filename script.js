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
  let main = document.querySelector("main");
  let createButton = document.createElement("button");
  createButton.id = "criar-tarefa";
  createButton.innerText = "Criar tarefa";
  main.appendChild(createButton);
}

function createList() {
  let main = document.querySelector("main");
  let craeteList = document.createElement("li");
  main.appendChild(createList);
  createList.id = "lista-tarefas";
}

function clickButton() {
  let getButton = document.getElementById("criar-tarefa");
  let getList = document.getElementById("lista-tarefas");

  getButton.addEventListener("click", function () {
    let getInput = document.getElementById("texto-tarefa");
    let getInputValue = document.getElementById("texto-tarefa").nodeValue;

    if (getInputValue === "") {
      warn("A tarefa não pode ser vazia!");
    }

    let createListItem = document.createElement("li");
    getList.appendChild(createListItem);
    createListItem.innerText = getInputValue;
    getInput.value = "";
  });
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createButton();
  createList();
  clickButton();
};
