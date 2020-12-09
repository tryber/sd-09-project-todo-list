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
  const toDoList = document.querySelector('#lista-tarefas');

  toDoList.addEventListener('click', function (event) {
    const toDos = document.querySelectorAll('#lista-tarefas li');

    toDos.forEach(function (toDo) {
      toDo.style.backgroundColor = '';
    });

    if (event.target !== toDoList) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

selectToDo();

function markToDoAsCompleted() {
  const toDoList = document.querySelector('#lista-tarefas');

  toDoList.addEventListener('dblclick', function (event) {
    if (event.target !== toDoList) {
      event.target.classList.toggle('completed');
    }
  });
}

markToDoAsCompleted();
