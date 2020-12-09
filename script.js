function createInput() {
  let input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'digite o item';

  let section1 = document.querySelector('#section1');
  section1.appendChild(input);
}
createInput();

function createTaskList() {
  let taskList = document.querySelector('#task-list');
  let ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  taskList.appendChild(ol);
}
createTaskList();

function addButtonItem() {
  let btn = document.createElement('button');
  btn.id = 'criar-tarefa';
  btn.type = 'submit';
  btn.innerText = 'Criar tarefa';
  btn.style.marginLeft = '5px';
  btn.style.padding = '3px'
  let section1 = document.querySelector('#section1');
  section1.appendChild(btn);

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    let input = document.querySelector('#texto-tarefa');
    let taskList = document.querySelector('#lista-tarefas');

    if (input.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = input.value;
      taskList.appendChild(newLi);

      input.value = '';
    }
  });
}
addButtonItem();

function ChangeColorElementsLi() {
  let taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'rgb(128,128,128)';
    e.target.style.cursor = 'pointer';
  });
}
ChangeColorElementsLi();
