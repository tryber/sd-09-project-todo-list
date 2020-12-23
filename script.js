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
    "Clique duas vezes em um item para marcá-lo como completo";

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

function createOrderedList() {
  let main = document.querySelector("main");

  let createOl = document.createElement("ol");

  createOl.id = "lista-tarefas";

  main.appendChild(createOl);
}

/**
 * DESAFIO 05
 */

function createButton() {
  let main = document.querySelector("main");

  let buttonCreate = document.createElement("button");

  buttonCreate.id = "criar-tarefa";

  buttonCreate.innerHTML = "Adicionar tarefa";

  main.appendChild(buttonCreate);
}

function submitButton() {
  let getOl = document.querySelector("#lista-tarefas");

  let buttonCreate = document.querySelector("#criar-tarefa");

  buttonCreate.addEventListener("click", function () {
    let createInput = document.querySelector("#texto-tarefa");

    let createInputValue = document.querySelector("#texto-tarefa").value;

    let createTagLi = document.createElement("li");

    createTagLi.innerText = createInputValue;

    getOl.appendChild(createInputValue);

    createInput.value = "";
  });
}

/*function buttonClearTask() {
  let main = document.querySelector("main");

  let createButtonClearTask = document.createElement("button");

  createButtonClearTask.id = "apaga-tudo";

  button.innerText = "Apaga tudo";

  main.appendChild(createButtonClearTask);
}

function buttonClearSelected() {
  let main = document.querySelector("main");

  let createButtonClearSelected = document.createElement("button");

  createButtonClearSelected.id = "remover-finalizados";

  createButtonClearSelected.innerText = "Apagar completados";

  main.appendChild(createButtonClearSelected);
}
*/

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createOrderedList();
  createButton();
  // buttonClearTask();
  // buttonClearSelected();
  submitButton();
};
