const buttonAddTask = document.querySelector('#criar-tarefa');


function addTask() {

  const inputPlace = document.querySelector('#texto-tarefa');
  const inputValue = document.querySelector('#texto-tarefa').value;
  const innerTaskList = document.querySelector('#lista-tarefas');
  const createLi = document.createElement('li');
  if (inputValue) {
    createLi.innerText = inputValue;
    createLi.classList.add('taskItem');
    innerTaskList.appendChild(createLi);
    inputPlace.value = '';
  };



};

buttonAddTask.addEventListener('click', addTask);
