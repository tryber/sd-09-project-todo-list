function createInput() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'digite o item';

  const section1 = document.querySelector('#section1');
  section1.appendChild(input);
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
  const section1 = document.querySelector('#section1');
  section1.appendChild(btn);

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const input = document.querySelector('#texto-tarefa');
    const taskList = document.querySelector('#lista-tarefas');

    if (input.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = input.value;
      taskList.appendChild(newLi);

      input.value = '';
    }
  });
}
addButtonItem();

function ChangeColorElementsLi() {
  const taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('click', function (e) {
    let currentSelected = document.querySelector('.selected');
    if (currentSelected) {
      currentSelected.className = '';
      currentSelected.style.backgroundColor = '';
    }
    e.target.className = 'selected';
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
ChangeColorElementsLi();

