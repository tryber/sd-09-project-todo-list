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

function createButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'criar-tarefa';
  button.innerText = 'Criar tarefa';
}

function clickItem() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].addEventListener('click', function () {
      for (let i = 0; i < listItem.length; i += 1) {
        listItem[i].classList.remove('selected');
      }
      this.classList.add('selected');
    });
  }
}

function dblClick() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].addEventListener('dblclick', function () {
      this.classList.add('completed');
    });
  }
  if (listItem[index].classList === 'completed') {
    listItem[index].addEventListener('dblclick', function () {
      this.classList.remove('completed');
    });
  }
}

function clickButton() {
  const button = document.querySelector('#criar-tarefa');
  const list = document.querySelector('#lista-tarefas');
  button.addEventListener('click', function () {
    const input = document.querySelector('#texto-tarefa');
    const inputValue = document.querySelector('#texto-tarefa').value;
    const listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.innerText = inputValue;
    input.value = '';
    clickItem();
    dblClick();
  });
}

/* function deleteButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'apaga-tudo';
  button.innerText = 'Apagar tudo'
  button.addEventListener('click', function () {
    const items = document.querySelectorAll('li');
    delete items;
  }
} */

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createList();
  createButton();
  clickButton();
};
