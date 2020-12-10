const inputTask = document.querySelector('#texto-tarefa');
const createTask = document.querySelector('#criar-tarefa');
const deleteTask = document.querySelector('#apaga-tudo');
const removeCompletedTask = document.querySelector('#remover-finalizados');
const taskList = document.querySelector('#lista-tarefas');

// Submit Task to Task List
const submitTask = () => {
  if (inputTask.value === '') {
    return alert('Insira um valor válido para sua task!!');
  }
  const taskListElement = document.createElement('li');
  taskListElement.className = 'task';
  taskListElement.innerText = inputTask.value;
  inputTask.value = '';
  return taskList.appendChild(taskListElement);
};

createTask.addEventListener('click', submitTask);

// Change task color
const unselectsTasks = () => {
  const taskItem = document.querySelectorAll('.task');
  for (let i = 0; i < taskItem.length; i += 1) {
    taskItem[i].classList.remove('selected');
    taskItem[i].style.backgroundColor = 'rgb(98 , 65 , 160)';
  }
};

const selectTask = (event) => {
  if (event.target.className !== 'task selected') {
    unselectsTasks();
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
  }
  if (event.target.className === 'completed selected') {
    event.target.className = 'completed';
    event.target.style.backgroundColor = 'green';
  }
};

taskList.addEventListener('click', selectTask);

// Clompleted Tasks
const completedTasks = (event) => {
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
    event.target.style.backgroundColor = 'green';
  } else {
    event.target.className = 'task selected';
    event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
  }
};

taskList.addEventListener('dblclick', completedTasks);

// Delete All Tasks
const deleteAllTasks = () => {
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.firstChild);
  }
};

deleteTask.addEventListener('click', deleteAllTasks);

// Delete Completed Tasks

const deleteCompletedTasks = () => {
  const completedItem = document.querySelectorAll('.completed');
  for (let i = 0; i < completedItem.length; i += 1) {
    taskList.removeChild(completedItem[i]);
  }
};

removeCompletedTask.addEventListener('click', deleteCompletedTasks);
