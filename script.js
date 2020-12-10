function createInput() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'digite o item';

  const inputArea = document.querySelector('#input-area');
  inputArea.appendChild(input);
}
createInput();

function createTaskList() {
  const taskList = document.querySelector('#task-list');
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  taskList.appendChild(ol);
}
createTaskList();

function addButtonItem() {
  const btn = document.createElement('button');
  btn.id = 'criar-tarefa';
  btn.type = 'submit';
  btn.innerText = 'Criar tarefa';
  btn.style.marginLeft = '5px';
  btn.style.padding = '3px';
  const inputArea = document.querySelector('#input-area');
  inputArea.appendChild(btn);

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const input = document.querySelector('#texto-tarefa');
    const taskList = document.querySelector('#lista-tarefas');

    if (input.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = input.value;
      newLi.className = 'list-item';
      taskList.appendChild(newLi);

      input.value = '';
    }
  });
}
addButtonItem();

function ChangeColorElementsLi() {
  const taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('click', function (e) {
    const currentSelected = document.querySelector('.selected');
    if (currentSelected) {
      currentSelected.classList.remove('selected');
      currentSelected.style.backgroundColor = '';
    }
    e.target.className += ' selected';
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
ChangeColorElementsLi();

function scratchingItem() {
  const taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('dblclick', function (e) {
    if (e.target.className !== 'completed') {
      e.target.classList.toggle('completed');
      e.target.style.backgroundColor = '';
    }
  });
}
scratchingItem();

function deleteTaskList() {
  const button = document.createElement('button');
  const divButton = document.querySelector('#buttons');
  divButton.appendChild(button);
  button.style.padding = '3px';
  button.style.marginLeft = '5px';
  button.innerText = 'Remover tudo';
  button.id = 'apaga-tudo';

  button.addEventListener('click', function () {
    document.querySelectorAll('.list-item').forEach(e => (e.parentNode.removeChild(e)));
    // https://stackoverflow.com/questions/13125817/how-to-remove-elements-that-were-fetched-using-queryselectorall
  });
}
deleteTaskList();

function deleteSelectedList() {
  const button = document.createElement('button');
  const divButton = document.querySelector('#buttons');
  divButton.appendChild(button);
  button.style.padding = '3px';
  button.style.marginLeft = '5px';
  button.innerText = 'Remover realizadas';
  button.id = 'remover-finalizados';

  button.addEventListener('click', function () {
    document.querySelectorAll('.completed').forEach(e => (e.parentNode.removeChild(e)));
    // https://stackoverflow.com/questions/13125817/how-to-remove-elements-that-were-fetched-using-queryselectorall
  });
}
deleteSelectedList();