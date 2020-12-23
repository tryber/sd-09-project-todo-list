function createTitle() {
  let getHeader = document.querySelector("header");

  let createH1 = document.createElement("h1");

  getHeader.appendChild(createH1);

  createH1.innerText = "Minha Lista de Tarefas";
}

function createParagraph() {
  let main = document.querySelector("main");

  let createParagraph = document.createElement("p");

  createParagraph.id = "funcionamento";

  createParagraph.innerText =
    "Clique duas vezes em um item para marcá-lo como completo";

  main.appendChild(createParagraph);
}

function createInput() {
  let main = document.querySelector("main");

  let createInput = document.createElement("input");

  createInput.id = "texto-tarefa";

  createInput.type = "text";

  createInput.placeholder = "Digite o item que deseja adicionar a lista";

  main.appendChild(createInput);
}

function createOrderedList() {
  let main = document.querySelector("main");

  let createOl = document.createElement("ol");

  createOl.id = "lista-tarefas";

  main.appendChild(createOl);
}

function createButton() {
  let main = document.querySelector("main");

  let buttonCreate = document.createElement("button");

  buttonCreate.id = "criar-tarefa";

  buttonCreate.innerHTML = "Adicionar tarefa";

  main.appendChild(buttonCreate);
}

function buttonClearTask() {
  let main = document.querySelector("main");

  let createButtonClearTask = document.createElement("button");

  createButtonClearTask.id = "apaga-tudo";

  button.innerText = "Apaga tudo";

  main.appendChild(createButtonClearTask);
}

/*function buttonClearSelected() {
  let main = document.querySelector("main");

  let createButtonClearSelected = document.createElement("button");

  createButtonClearSelected.id = "remover-finalizados";

  createButtonClearSelected.innerText = "Apagar completados";

  main.appendChild(createButtonClearSelected);
}

function buttonSave() {
  let main = document.querySelector("main");

  let createSaveButton = document.createElement("button");

  createSaveButton.id = "salvar-tarefas";

  createSaveButton.InnerText = "Salvar Lista";

  main.appendChild(createSaveButton);
}

function buttonMoveUp() {
  let main = document.querySelector("main");

  let createButtonMoveUp = document.createElement("button");

  createButtonMoveUp.id = "mover-cima";

  createButtonMoveUp.innerText = "Mover para cima";

  main.appendChild(createButtonMoveUp);
}

function buttonMoveDown() {
  let main = document.querySelector("main");

  let createButtonMoveDown = document.createElement("button");

  createButtonMoveDown.id = "mover-baixo";

  createButtonMoveDown.innerText = "mover para baixo";

  main.appendChild(createButtonMoveDown);
}

function doubleClick() {
  let getTagOl = document.querySelector("ol");

  getTagOl.addEventListener("dblclick", function (event) {
    event.target.classList.toggle("compled");
  });
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

function clickItem() {
  let getTagOl = document.querySelector("ol");
  getTagOl.addEventListener("click", function (event) {
    let getSelected = document.querySelectorAll(".selected");

    for (let index = 0; index < getSelected.length; index += 1) {
      getSelected[index].classList.remove("getSelected");
    }

    event.target.classList.add("getSelected");
  });
}

function TaskClearAll() {
  let getButtonClearTask = document.querySelector("#apaga-tudo");

  let getCreateOl = document.querySelector("#lista-tarefas");

  getButtonClearTask.addEventListener("click", function () {
    let getList = getCreateOl.childElementCount;

    for (let index = 0; index < getList.length; index += 1) {
      getCreateOl.firstChild.remove();
    }
  });
}

function TaskClearCompleted() {
  let getButtonClearSelected = document.querySelector("#remover-finalizados");

  getButtonClearSelected.addEventListener("click", function () {
    let getTagLi = document.getElementByTagName("li");

    for (let index = 0; index < getTagLi.length; index += 1) {
      if (getTagLi[index].classList.contains("completed")) {
        getTagLi[index].remove();
        index -= 1;
      }
    }
  });
}

function setListItens() {
  let getButtonSave = document.querySelector("salvar-tarefas");

  getButtonSave.addEventListener("click", function () {
    let getLiItens = document.getElementByTagName("li");

    for (let index = 0; index < getLiItens.length; index += 1) {
      let createObject = {
        text: getLiItens[index].innerText,
        class: getLiItens[index].className,
      };
      localStorage.setItem(index, JSON.stringify(createObject));
    }
  });
}

function getItensList() {
  let getCreateOl = document.querySelector("#lista-tarefas");

  for (let index = 0; index < localStorage.length; index += 1) {
    let createLi = document.createElement("li");

    let getStorageObject = JSON.parse(localStorage.getItem(index));

    createLi.innerText = getStorageObject.text;

    createLi.className = getStorageObject.class;

    getCreateOl.appendChild(createLi);
  }
}

function selectedMoveUp() {
  let getButton = querySelector("#mover-cima");

  getButton.addEventListener("click", function () {
    let getSelected = document.querySelector(".selected");

    let previousElement;

    if (previousElement) {
      let createAuxiliarObject = {
        text: previousElement.innerText,
        class: previousElement.className,
      };

      previousElement.innerText = getSelected.innerText;
      previousElement.className = getSelected.className;
      getSelected.innerText = createAuxiliarObject.text;
      getSelected.className = createAuxiliarObject.class;
    }
  });
}

function selectedMoveDown() {
  let getButton = document.querySelector("#mover-baixo");

  getButton.addEventListener("click", function () {
    let getSelected = document.querySelector(".selected");

    let nextElement;

    if (getSelected) {
      let auxiliarObject = {
        text: nextElement.innerText,
        class: nextElement.className,
      };

      nextElement.innerText = getSelected.innerText;
      nextElement.className = getSelected.className;
      getSelected.innerText = auxiliarObject.text;
      getSelected.className = auxiliarObject.class;
    }
  });
}
*/

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createOrderedList();
  createButton();
  buttonClearTask();
  buttonClearSelected();
  buttonSave();
  submitButton();
  buttonMoveDown();
  doubleClick();
  clickItem();
  TaskClearAll();
  TaskClearCompleted();
  setListItens();
  getItensList();
  selectedMoveUp();
  selectedMoveDown();
};
