const btnAddTask = document.querySelector('#criar-tarefa');

// Função responsável por limpar o campo de input
function clearTextInput() {
  document.querySelector('#texto-tarefa').value = '';
}

// Requisitos [7-8] - Função responsável por colorir BgColor do item selecionado
function clickItemList(event) {
  const li = document.querySelectorAll('li');
  li.forEach((item) => {
    item.style.backgroundColor = '';
  });
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');
}

// Requisito [9] - Função responsável pelo o double click no item
function doubleClickItem() {
  const ol = document.querySelector('ol');
  ol.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

doubleClickItem();

// Requisito [5] - Função responsável por adicionar uma nova tarefa
function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const listTask = document.createElement('li');
  listTask.className = 'tasks';
  listTask.innerText = input;
  document.querySelector('#lista-tarefas').appendChild(listTask);
  listTask.addEventListener('click', clickItemList);
  clearTextInput();
}

btnAddTask.addEventListener('click', createTask);

// Requisito [10] - Função responsável por apagar todas as tasks
function deleteTasks() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].remove();
  }
}

const btnDeleteTasks = document.querySelector('#apaga-tudo');
btnDeleteTasks.addEventListener('click', deleteTasks);

// Requisito [11] - Função responsável por apagar tarefas finalizadas
function deleteCompletedTask() {
  const completedTask = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTask.length; index += 1) {
    completedTask[index].remove();
  }
}

const btnDeleteCompletedTasks = document.querySelector('#remover-finalizados');
btnDeleteCompletedTasks.addEventListener('click', deleteCompletedTask);

// Requisito [12] - Função responsável por salvar as tarefas
// localStorage
function saveTasks() {
  const btnSaveTasks = document.querySelector('#salvar-tarefas');

  btnSaveTasks.addEventListener('click', function () {
    const tasks = document.querySelectorAll('li');
    const tasksArr = [];
    for (let index = 0; index < tasks.length; index += 1) {
      const task = tasks[index].innerText;
      const completed = tasks[index].classList.contains('completed');
      const taskName = {
        task,
        completed,
      };
      tasksArr[index] = taskName;
    }
    const tasksString = JSON.stringify(tasksArr);
    localStorage.setItem('taskItem', tasksString);
  });
}
saveTasks();

// Função para criar tasks a partir dos dados salvos no storage
function createTasksSaved(task, completed) {
  const ol = document.querySelector('ol');
  const newTask = document.createElement('li');
  newTask.innerText = task;
  newTask.classList.add('task');
  if (completed) {
    newTask.classList.add('completed');
  }
  ol.appendChild(newTask);
}

// Requisito [12] - Função responsável por resgatar tasks salvas
function getTasks() {
  let getLocalStorage = localStorage.getItem('taskItem');
  getLocalStorage = JSON.parse(getLocalStorage);
  if (getLocalStorage) {
    for (let index = 0; index < getLocalStorage.length; index += 1) {
      createTasksSaved(getLocalStorage[index].task, getLocalStorage[index].completed);
    }
  }
}
getTasks();

// Requisito [14] - Função responsável por remover itens selecionados
function deleteSelected() {
  const buttom = document.getElementById('remover-selecionado');
  buttom.addEventListener('click', function () {
    const list = document.querySelector('#lista-tarefas');
    const tasks = document.querySelectorAll('.tasks');
    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index].className.includes('selected')) {
        list.removeChild(tasks[index]);
      }
    }
  });
}
deleteSelected();
