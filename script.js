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

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createButton();
  clearTasksButton();
  clearCompletedButton();
  clearSelectedButton();
  saveTasksButton();
};
