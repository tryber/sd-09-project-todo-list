function addToDo() {
  const inputToDo = document.querySelector('#texto-tarefa');
  const addToDobutton = document.querySelector('#criar-tarefa');
  const toDoList = document.querySelector('#lista-tarefas');

  addToDobutton.addEventListener('click', function () {
    const toDoText = inputToDo.value;

    const toDo = document.createElement('li');
    toDo.innerText = toDoText;

    toDoList.appendChild(toDo);
    inputToDo.value = '';
  });
}

addToDo();

function selectToDo() {
  toDoList = document.querySelector('#lista-tarefas');

  toDoList.addEventListener('click', function (event) {
    event.target.classList.toggle('selected-todo');
  })
}

selectToDo();