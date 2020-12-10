// Adicionar nova tarefa
function createNewTask() {
  const tasksList = document.querySelector('#lista-tarefas');
    const newItem = document.createElement('li');
    let newTask = document.querySelector('#texto-tarefa');
    newItem.setAttribute('class', 'task');
    tasksList.appendChild(newItem).innerText = newTask.value;
    newTask.value = '';
  }
  
  window.onload = function() {
    const buttonNewTask = document.querySelector('#criar-tarefa');
    buttonNewTask.addEventListener('click', createNewTask);
  }
