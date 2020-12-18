function createTitle() {
  const header = document.querySelector('header');
  const title = document.createElement('h1');
  header.appendChild(title);
  title.innerText = 'Minha Lista de Tarefas';
}

function createParagraph() {
  const main = document.querySelector('main');
  const paragraph = document.createElement('p');
  main.appendChild(paragraph);
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  paragraph.id = 'funcionamento';
}

function createInput() {
  const main = document.querySelector('main');
  const input = document.createElement('input');
  main.appendChild(input);
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'Digite o item que deseja adicionar à lista';
}

function createList() {
  const main = document.querySelector('main');
  const list = document.createElement('ol');
  main.appendChild(list);
  list.id = 'lista-tarefas';
}

function createAddButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar';
}

function clickAddButton() {
  const button = document.querySelector('#criar-tarefa');
  const list = document.querySelector('#lista-tarefas');
  button.addEventListener('click', function () {
    const input = document.querySelector('#texto-tarefa');
    const inputValue = document.querySelector('#texto-tarefa').value;
    const listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.innerText = inputValue;
    input.value = '';
  });
}

function clickItem() {
  const listItems = document.getElementById('lista-tarefas');
  listItems.addEventListener('click', function (event) {
    const selected = document.querySelectorAll('.selected');
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function dblClickItem() {
  const listItems = document.getElementById('lista-tarefas');
  listItems.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

function createDeleteButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'apaga-tudo';
  button.innerText = 'Limpar lista';
}

function clickDeleteButton() {
  const button = document.getElementById('apaga-tudo');
  const listItems = document.getElementById('lista-tarefas');
  button.addEventListener('click', function () {
    const items = listItems.childElementCount;
    for (let index = 0; index < items; index += 1) {
      listItems.firstChild.remove();
    }
  });
}

function createRemoveCompletedButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'remover-finalizados';
  button.innerText = 'Limpar finalizados';
}

function clickRemoveCompletedButton() {
  const button = document.getElementById('remover-finalizados');
  button.addEventListener('click', function () {
    const selected = document.getElementsByClassName('completed');
    while (selected.length > 0) selected[0].remove();
  });
}

function createSaveTasksButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'salvar-tarefas';
  button.innerText = 'Salvar lista';
}

function clickSaveTasksButtonSet() {
  const button = document.getElementById('salvar-tarefas');
  button.addEventListener('click', function () {
    const listItems = document.getElementsByTagName('li');
    for (let index = 0; index < listItems.length; index += 1) {
      const objectString = {
        text: listItems[index].innerText,
        class: listItems[index].className,
      };
      localStorage.setItem(index, JSON.stringify(objectString));
    }
  });
}

function clickSaveTasksButtonGet() {
  const list = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const listItems = document.createElement('li');
    const objectString = JSON.parse(localStorage.getItem(index));
    listItems.innerText = objectString.text;
    listItems.className = objectString.class;
    list.appendChild(listItems);
  }
}

function createMoveUpButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'mover-cima';
  button.innerText = '⬆';
}

function clickMoveUpButton() {
  const button = document.getElementById('mover-cima');
  button.addEventListener('click', function () {
    const selected = document.querySelector('.selected');
    let previousElement;
    if (selected) {
      previousElement = selected.previousElementSibling;
    }
    if (previousElement) {
      const aux = {
        text: previousElement.innerText,
        class: previousElement.class,
      };
      previousElement.innerText = selected.innerText;
      previousElement.className = selected.className;
      selected.innerText = aux.text;
      selected.className = aux.class;
    }
  });
}

function createMoveDownButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'mover-baixo';
  button.innerText = '⬇';
}

function clickMoveDownButton() {
  const button = document.getElementById('mover-baixo');
  button.addEventListener('click', function () {
    const selected = document.querySelector('.selected');
    let nextElement;
    if (selected) {
      nextElement = selected.nextElementSibling;
    }
    if (nextElement) {
      const aux = {
        text: nextElement.innerText,
        class: nextElement.class,
      };
      nextElement.innerText = selected.innerText;
      nextElement.className = selected.className;
      selected.innerText = aux.text;
      selected.className = aux.class;
    }
  });
}

function createRemoveSelectedButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'remover-selecionado';
  button.innerText = '✖';
}

function clickRemoveSelectedButton() {
  const button = document.getElementById('remover-selecionado');
  button.addEventListener('click', function () {
    const selected = document.getElementsByClassName('selected');
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
  dblClickItem();
  createDeleteButton();
  clickDeleteButton();
  createRemoveCompletedButton();
  clickRemoveCompletedButton();
  createSaveTasksButton();
  clickSaveTasksButtonSet();
  clickSaveTasksButtonGet();
  createMoveUpButton();
  clickMoveUpButton();
  createMoveDownButton();
  clickMoveDownButton();
  createRemoveSelectedButton();
  clickRemoveSelectedButton();
};
