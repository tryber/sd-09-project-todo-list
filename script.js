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
  let list = document.createElement("li");
  main.appendChild(createList);
  list.id = "lista-tarefas";
}

function clickButton() {
  let button = document.getElementById("criar-tarefa");
  let list = document.getElementById("lista-tarefas");

  button.addEventListener("click", function () {
    let input = document.getElementById("texto-tarefa");
    let inputValue = document.getElementById("texto-tarefa").nodeValue;

    if (inputValue === "") {
      warn("A tarefa não pode ser vazia!");
    }

    let createListItem = document.createElement("li");
    list.appendChild(createListItem);
    createListItem.innerText = inputValue;
    input.value = "";
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
