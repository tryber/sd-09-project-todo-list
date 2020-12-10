// Remover os itens selecionados
function removeSelected() {
  const tasksList = document.querySelector('#lista-tarefas');
  for (let taskIndex = tasksList.childElementCount - 1; taskIndex >= 0; taskIndex -= 1) {
    if (tasksList.children[taskIndex].classList.contains('completed')) {
      tasksList.removeChild(tasksList.children[taskIndex]);
    }
  }
}

// Remover todos os itens da lista
function removeAll() {
  const tasksList = document.querySelector('#lista-tarefas');
  for (let index = tasksList.childElementCount; index >= 0; index -= 1) {
    tasksList.removeChild(tasksList.childNodes[0]);
  }
}

// Marcar ou desmarcar a tarefa como completa
function completeTask(task) {
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

// Desmarca a tarefa selecionada anteriormente
function clearSelected() {
  const tasksList = document.querySelector('#lista-tarefas');
  for (let index = 0; index < tasksList.childElementCount; index += 1) {
    tasksList.children[index].style.backgroundColor = null;
  }
}

// Selecionar uma tarefa da lista
function selectTask(task) {
  clearSelected();
  task.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

// Atribuindo propriedades para o novo item
function setNewItemProperties(tasksList, newItem) {
  newItem.setAttribute('id', `item${tasksList}`);
  newItem.addEventListener('click', function () {
    selectTask(newItem);
  });
  newItem.addEventListener('dblclick', function () {
    completeTask(newItem);
  });
}

// Adicionar nova tarefa
function createNewTask() {
  const tasksList = document.querySelector('#lista-tarefas');
  const newItem = document.createElement('li');
  const newTask = document.querySelector('#texto-tarefa');
  newItem.setAttribute('class', 'task');
  newItem.classList.add('mdl-list__item');
  console.log(newTask.value);
  tasksList.appendChild(newItem).innerText = newTask.value;
  setNewItemProperties(tasksList.childElementCount, newItem);
  newTask.value = '';
}

window.onload = function () {
  const buttonNewTask = document.querySelector('#criar-tarefa');
  buttonNewTask.addEventListener('click', createNewTask);
  const buttonDeleteAll = document.querySelector('#apaga-tudo');
  buttonDeleteAll.addEventListener('click', removeAll);
  const buttonDeleteSelected = document.querySelector('#remover-finalizados');
  buttonDeleteSelected.addEventListener('click', removeSelected);
};
