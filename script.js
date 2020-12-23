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
  let buttonCreate = document.createElement("button");
  getMain.appendChild(buttonCreate);
  button.id = "criar-tarefa";
  button.innerText = "Adicionar";
}

function createList() {
  let getMain = document.querySelector("main");

  let createList = document.createElement("ol");

  getMain.appendChild(createList);

  createList.id = "lista-tarefas";
}

function clickAddButton() {
  let getButton = document.getElementById("criar-tarefa");
  let getList = document.getElementById("lista-tarefas");
  getButton.addEventListener("click", function () {
    let getInput = document.querySelector("#texto-tarefa");
    let getInputValue = document.querySelector("#texto-tarefa").value;
    if (getInputValue === "") {
      alert("A tarefa não pode ser vazia!");
      return;
    }
    let createListItem = document.createElement("li");
    getList.appendChild(getListItem);
    createListItem.innerText = getInputValue;
    getInput.value = "";
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

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createList();
  createButton();
  clickAddButton();
  clickItem();
};
