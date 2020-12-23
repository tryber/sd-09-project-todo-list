/**
 * DESAFIO 01
 * criar um
 */

function createTitle() {
  let getHeader = document.querySelector("header");

  let createH1 = document.createElement("h1");

  getHeader.appendChild(createH1);

  createH1.innerText = "Minha Lista de Tarefas";
}

/**
 * DESAFIO 02
 */

function createParagraph() {
  let main = document.querySelector("main");

  let createParagraph = document.createElement("p");

  createParagraph.id = "funcionamento";

  createParagraph.innerText =
    "Clique duas vezes em um item apra marcá-lo como completo";

  main.appendChild(createParagraph);
}

/**
 * DESAFIO 03
 */

function createInput() {
  let main = document.querySelector("main");

  let createInput = document.createElement("input");

  createInput.id = "texto-tarefa";

  createInput.type = "text";

  createInput.placeholder = "Digite o item que deseja adicionar a lista";

  main.appendChild(createInput);
}

/**
 * DESAFIO 04
 */

function createButton() {
  let main = document.querySelector("main");

  let createButton = document.createElement("button");

  createButton.id = "criar-tarefa";

  createButton.innerText = "Criar tarefa";

  main.appendChild(createButton);
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createButton();
};
