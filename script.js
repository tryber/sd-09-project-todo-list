const buttonAddTask = document.querySelector('#criar-tarefa');


function addTask() {

  const inputPlace = document.querySelector('#texto-tarefa');
  const inputValue = document.querySelector('#texto-tarefa').value;
  const innerTaskList = document.querySelector('#lista-tarefas');
  const createLi = document.createElement('li');
  if (inputValue) {
    createLi.innerText = inputValue;
    createLi.classList.add('task-item')
    innerTaskList.appendChild(createLi);
    inputPlace.value = '';
  };

};

buttonAddTask.addEventListener('click', addTask);



function selectTaskItem(event) {
  const selectedTask = document.querySelectorAll('.task-item.selected');
  const itensTask = document.querySelectorAll('.task-item');
  console.log(selectedTask)
  for (let index = 0; index < selectedTask.length; index++) {
    selectedTask[index].classList.remove('selected')
  }
  event.target.classList.toggle('selected')
}

const selectedItem = document.querySelectorAll('#lista-tarefas');
for (let index = 0; index < selectedItem.length; index++) {
  selectedItem[index].addEventListener('click', selectTaskItem);
}


function selectCompletedTask(event) {
  event.target.classList.toggle('completed');
}

const itemToComplete = document.querySelectorAll('.task-item.completed');
for (let index = 0; index < selectedItem.length; index++) {
  selectedItem[index].addEventListener('dblclick', selectCompletedTask);
}

