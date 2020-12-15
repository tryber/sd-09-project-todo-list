window.onload = function () {
  function titleOperation() {
    const operation = document.createElement('h5');
    const title = document.querySelector('.title');
    title.appendChild(operation);
    operation.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    operation.id = 'funcionamento';
  }
  titleOperation();

  function createButton() {
    const button = document.createElement('button');
    button.id = 'criar-tarefa';
    button.innerHTML = 'Adicionar Tarefa';
    document.body.appendChild(button);
  }
  createButton();

  function createContainer() {
    const container = document.createElement('div');
    const button = document.querySelector('#criar-tarefa');
    const input = document.querySelector('#texto-tarefa');
    const listOrdened = document.querySelector('#lista-tarefas');
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(listOrdened);
    document.body.appendChild(container);
    container.className = 'container';
  }
  createContainer();

  function addNewTodo() {
    const button = document.querySelector('#criar-tarefa');
    const input = document.querySelector('#texto-tarefa');
    const list = document.querySelector('#lista-tarefas');

    button.addEventListener('click', function () {
      if (input.value.length > 0) {
        const newList = document.createElement('li');
        newList.innerText = input.value;

      newList.className = 'list-items';
      list.appendChild(newList);
      input.value = '';
    }
    });

    input.addEventListener('keyup', function (event) {
      if (event.keyCode === 13 && input.value.length > 0) {
        const newList = document.createElement('li');
        newList.innerText = input.value;

        newList.className = 'list-items';
        list.appendChild(newList);
        input.value = '';
      }
    });
  }
  addNewTodo();

  function doubleClickList() {
    const taskList = document.querySelector('#lista-tarefas');
    taskList.addEventListener('dblclick', function (event) {
      event.target.classList.toggle('completed');
    });
  }
  doubleClickList();

  function clickList() {
    const task = document.querySelector('#lista-tarefas');
    task.addEventListener('click', function (event) {
      let list = document.querySelectorAll('li');
      for (let index = 0; index < list.length; index += 1) {
        list[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
  clickList();

  function createButtonClearAllItemList() {
    let button = document.createElement('button');
    let container = document.querySelector('.container');
    button.id = 'apaga-tudo';
    button.innerText = 'Clear All List';
    container.appendChild(button);
  }
  createButtonClearAllItemList();

  function removeList() {
    let taskList = document.querySelector('#lista-tarefas')
    let buttonClearAll = document.querySelector('#apaga-tudo')

    buttonClearAll.addEventListener('click', function () {
      let itemsList = document.querySelectorAll('li')
      for (let index = 0; index < itemsList.length; index += 1) {
        taskList.removeChild(itemsList[index]);
      }
    })
  }
	removeList();

  function createButtonClearItemFinalized() {
    let button = document.createElement('button');
    let container = document.querySelector('.container');
    button.id = 'remover-finalizados';
    button.innerText = 'Clear Itens Finalized';
    container.appendChild(button);
  }
  createButtonClearItemFinalized();

  function removeItemFinalized() {
    let taskList = document.querySelector('#lista-tarefas');
    let buttonClearFinalized = document.querySelector('#remover-finalizados');

      buttonClearFinalized.addEventListener('click', function () {
      let itemsList = document.querySelectorAll('.completed');
      for (let index = 0; index < itemsList.length; index += 1) {
      taskList.removeChild(itemsList[index]);
      }
      })
    }
    removeItemFinalized();

  function createButtonClearItemSelected() {
      let button = document.createElement('button');
      let container = document.querySelector('.container');
      button.id = 'remover-selecionado';
      button.innerText = 'Clear Item Selected';
      container.appendChild(button);
    }
    createButtonClearItemSelected();
  
    function removeItemSelected() {
      let taskList = document.querySelector('#lista-tarefas');
      let buttonClearSelected = document.querySelector('#remover-selecionado');
  
        buttonClearSelected.addEventListener('click', function () {
        let itemsList = document.querySelectorAll('.selected');
        for (let index = 0; index < itemsList.length; index += 1) {
        taskList.removeChild(itemsList[index]);
        }
        })
      }
      removeItemSelected();
};
