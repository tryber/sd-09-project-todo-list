// Adicionar nova tarefa
function createNewTask() {
  const tasksList = document.querySelector('#lista-tarefas');
  const newItem = document.createElement('li');
  let newTask = document.querySelector('#texto-tarefa');
  newItem.setAttribute('class', 'task');
  tasksList.appendChild(newItem).innerText = newTask.value;
  newTask.value = '';
}

// Selecionar uma tarefa da lista
function selectTask() {
  const tasksList = document.querySelector('#lista-tarefas');
  for (let index = 0; index < tasksList.childElementCount; index += 1) {
    tasksList.children[index].onclick
    /* tasksList.children[index].addEventListener('click', function() {
      if (tasksList.children[index]) {
        console.log(tasksList.children[index].innerText);
      }
    }) */
  }
}

window.onload = function() {
  const buttonNewTask = document.querySelector('#criar-tarefa');
  buttonNewTask.addEventListener('click', createNewTask);
  const tasksList = document.querySelector('#lista-tarefas');
  //tasksList.addEventListener('click', selectTask);
}
