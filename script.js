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
    const toDo = document.querySelectorAll('#lista-tarefas li');

    toDo.forEach(function (toDo) {
      toDo.style.backgroundColor = '';
    });

    if (event.target !== toDoList) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

selectToDo();
