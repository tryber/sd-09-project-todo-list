//Adicionar tarefas a lista ordenada #lista-tarefas
function addTask() {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', function() {
    const task = document.querySelector('#texto-tarefa').value;
    const taskList = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = task;
    taskList.appendChild(listItem);
  });
}

addTask();