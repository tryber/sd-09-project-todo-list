// Altera cor de fundo do item da lista selecionado
function highlight(event) {
  const clickedItem = event.target;
  const selectedTasks = document.querySelectorAll('.selected');
  if (selectedTasks.length < 1) {
    clickedItem.className += ' selected';
  } else if (selectedTasks[0] !== clickedItem) {
    selectedTasks[0].className = selectedTasks[0].className.replace(' selected', '');
    clickedItem.className += ' selected';
  } else {
    clickedItem.className = clickedItem.className.replace(' selected', '');
  }
}

function highlightListItemEvent() {
  const listItems = document.querySelectorAll('.task');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].removeEventListener('click', highlight);
    listItems[index].addEventListener('click', highlight);
  }
}

// Risca tarefas já completadas
function crossOrUncross(event) {
  const task = event.target;
  if (task.className.includes('completed')) {
    task.className = task.className.replace(' completed', '');
  } else {
    task.className += ' completed';
  }
}

function crossTask() {
  const tasks = document.querySelectorAll('.task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].removeEventListener('dblclick', crossOrUncross);
    tasks[index].addEventListener('dblclick', crossOrUncross);
  }
}

window.onload = function () {
  /*
  Irá verificar se existe algo no localStorage.
  Se houver, ir criar a lista.
  Senão segue o baile.
  */

  if (localStorage.length > 0) {
    const taskArray = JSON.parse(localStorage.getItem('taskListNames'));
    const classArray = JSON.parse(localStorage.getItem('taskListClasses'));
    const taskList = document.querySelector('#lista-tarefas');
    for (let index = 0; index < taskArray.length; index += 1) {
      const task = document.createElement('li');
      task.innerText = taskArray[index];
      task.className = classArray[index];
      taskList.appendChild(task);
      highlightListItemEvent();
      crossTask();
    }
  }
};

// Adicionar tarefas a lista ordenada #lista-tarefas
function transferText(task) {
  if (task === '') {
    alert('Campo vazio!');
  } else {
    const taskList = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = task;
    listItem.className = 'task';
    taskList.appendChild(listItem);
    highlightListItemEvent();
    crossTask();
    document.querySelector('#texto-tarefa').value = '';
  }
}
function addTask() {
  // Adicionar com clique
  const addButton = document.querySelector('#criar-tarefa');
  const inputBox = document.querySelector('#texto-tarefa');
  addButton.addEventListener('click', function () {
    transferText(inputBox.value);
  });
  // Adicionar com enter
  inputBox.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      transferText(inputBox.value);
    }
  });
}

addTask();

// Botão de limpar lista #apaga-tudo

function clearAll() {
  const clearButton = document.querySelector('#apaga-tudo');
  clearButton.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
    const task = document.querySelectorAll('.task');
    for (let index = 0; index < task.length; index += 1) {
      taskList.removeChild(task[index]);
    }
    // Garante que, ao limpar a lista, ela não seja carregada novamente em uma nova sessão.
    if (localStorage.length > 0) {
      localStorage.clear();
    }
  });
}

clearAll();

// Botão de remover finalizados #remover-finalizados

function clearDoneItems() {
  const removeDoneButton = document.querySelector('#remover-finalizados');
  removeDoneButton.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
    const task = document.querySelectorAll('.task');
    for (let index = 0; index < task.length; index += 1) {
      if (task[index].className.includes('completed')) {
        taskList.removeChild(task[index]);
      }
    }
  });
}

clearDoneItems();

// Botão de remover tarefa selecionada #remover-selecionado

function clearselectedItems() {
  const removeSelectedButton = document.querySelector('#remover-selecionado');
  removeSelectedButton.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
    const task = document.querySelectorAll('.task');
    for (let index = 0; index < task.length; index += 1) {
      if (task[index].className.includes('selected')) {
        taskList.removeChild(task[index]);
      }
    }
  });
}

clearselectedItems();

// Botão de mover tarefa para a posição acima

function moveUp() {
  const moveUpButton = document.querySelector('#mover-cima');
  moveUpButton.addEventListener('click', function () {
    const task = document.querySelectorAll('.task');
    for (let index = 0; index < task.length; index += 1) {
      if (task[index].className.includes('selected') && task[index].previousSibling !== null) {
        task[index].parentNode.insertBefore(task[index], task[index - 1]);
      }
    }
  });
}

moveUp();

// Botão de mover tarefa para posição abaixo

function moveDown() {
  const moveDownButton = document.querySelector('#mover-baixo');
  moveDownButton.addEventListener('click', function () {
    const task = document.querySelectorAll('.task');
    for (let index = 0; index < task.length; index += 1) {
      if (task[index].className.includes('selected') && task[index].nextSibling !== null) {
        task[index].parentNode.insertBefore(task[index + 1], task[index]);
      }
    }
  });
}

moveDown();

// Botão de salvar tarefas

function saveTasks() {
  const saveTasksButton = document.querySelector('#salvar-tarefas');
  saveTasksButton.addEventListener('click', function () {
    const task = document.querySelectorAll('.task');
    const taskArray = [];
    const classArray = [];
    for (let index = 0; index < task.length; index += 1) {
      taskArray.push(task[index].innerText);
      classArray.push(task[index].className);
    }
    localStorage.setItem('taskListNames', JSON.stringify(taskArray));
    localStorage.setItem('taskListClasses', JSON.stringify(classArray));
    alert('Lista salva com sucesso!');
  });
}

saveTasks();
