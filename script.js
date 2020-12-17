// Requisitos obrigatórios
// Sua lista deve possuir o título "Minha Lista de Tarefas" em uma tag
function createTitle() {
  const header = document.querySelector('header');
  const title = document.createElement('h1');
  header.appendChild(title);
  title.innerText = 'Minha Lista de Tarefas';
}

// Abaixo do título deve haver um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
function createParagraph() {
  const main = document.querySelector('main');
  const paragraph = document.createElement('p');
  main.appendChild(paragraph);
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  paragraph.id = 'funcionamento';
}

// Deve haver um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista
function createInput() {
  const main = document.querySelector('main');
  const input = document.createElement('input');
  main.appendChild(input);
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'Digite o item que deseja adicionar à lista';
}

// Deve haver uma lista ordenada de tarefas com o id="lista-tarefas" | Os itens da lista de tarefas devem ser ordenados por ordem de criação
function createList() {
  const main = document.querySelector('main');
  const list = document.createElement('ol');
  main.appendChild(list);
  list.id = 'lista-tarefas';
}

// Deve haver um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
function createAddButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'criar-tarefa';
  button.innerText = 'Criar tarefa';
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

// // Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128) | Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
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

// Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
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

// Deve haver um botão com id="apaga-tudo"que quando clicado deve apagar todos os itens da lista
function createDeleteButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'apaga-tudo';
  button.innerText = 'Apagar tudo';
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

// Deve haver um botãoid="remover-finalizados"que quando clicado remove somente os elementos finalizados da sua lista
function createRemoveCompletedButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'remover-finalizados';
  button.innerText = 'Remover finalizados';
}

function clickRemoveCompletedButton() {
  const button = document.getElementById('remover-finalizados');
  button.addEventListener('click', function () {
    const selected = document.getElementsByClassName('completed');
    while (selected.length > 0) selected[0].remove();
  });
}

// Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
function createSaveTasksButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'salvar-tarefas';
  button.innerText = 'Salvar tarefas';
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

// Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
function createMoveUpButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'mover-cima';
  button.innerText = 'Mover para cima';
}

function clickMoveUpButton() {

}

function createMoveDownButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'mover-baixo';
  button.innerText = 'Mover para baixo';
}

function clickMoveDownButton() {

}

// Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
function createRemoveSelectedButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  main.appendChild(button);
  button.id = 'remover-selecionado';
  button.innerText = 'Remover item';
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
