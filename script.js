function saveToLocalStorage() {
    if (typeof Storage !== 'undefined') {
      localStorage.clear();
      const tasks = document.querySelector('#lista-tarefas');
      const objTasks = [];
      const objClasses = [];
      for (let index = 0; index < tasks.children.length; index += 1) {
        objTasks[index] = tasks.children[index].innerText;
        objClasses[index] = tasks.children[index].classList;
      }
      localStorage.setItem('tasks', objTasks.join());
      localStorage.setItem('classes', objClasses.join());
    } else {
      document.write('Sem suporte para Web Storage.');
    }
  }
  function handleClickTaskElement(event) {
    const taskBackgroundColor = event.target;
    const removeBackgroundColorTask = document.querySelectorAll('#lista');
    for (let index = 0; index < removeBackgroundColorTask.length; index += 1) {
      removeBackgroundColorTask[index].classList.remove('selected');
    }
    taskBackgroundColor.classList.add('selected');
  }
  
  function handleDblclickTaskElement(event) {
    const taskCompleted = event.target;
    if (taskCompleted.classList.contains('completed')) {
      taskCompleted.classList.remove('completed');
    } else {
      taskCompleted.classList.add('completed');
    }
  }
  function getFromLocalStorage() {
    const objTasks = localStorage.getItem('tasks').split(',');
    const objClasses = localStorage.getItem('classes').split(',');
    for (let index = 0; index < objTasks.length; index += 1) {
      const addTask = document.querySelector('#lista-tarefas');
      const list = document.createElement('li');
      list.innerHTML = objTasks[index];
      list.className = objClasses[index];
      list.id = 'lista';
      addTask.appendChild(list);
      list.addEventListener('click', handleClickTaskElement);
      list.addEventListener('dblclick', handleDblclickTaskElement);
    }
  }
  function createTaskElement() {
    const addNewTask = document.querySelector('#lista-tarefas');
    const textToTask = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    if (textToTask.value !== '') {
      li.innerHTML = textToTask.value;
      li.id = 'lista';
      addNewTask.appendChild(li);
      textToTask.value = '';
      li.addEventListener('click', handleClickTaskElement);
      li.addEventListener('dblclick', handleDblclickTaskElement);
    }
  }
  function removeAllTasks() {
    const allTasks = document.querySelector('#lista-tarefas');
    while (allTasks.firstChild) {
      allTasks.removeChild(allTasks.lastChild);
    }
  }
  function removeCompletedTasks() {
    const allCompletedTasks = document.getElementsByClassName('completed');
    while (allCompletedTasks.length > 0) {
      allCompletedTasks[0].remove();
    }
  }
  function removeSelectedTask() {
    const selectedTask = document.getElementsByClassName('selected');
    while (selectedTask.length > 0) {
      selectedTask[0].remove();
    }
  }
  function moveUpSelectedTask() {
    const tasksToMoveUp = document.querySelectorAll('#lista');
    for (let index = 1; index < tasksToMoveUp.length; index += 1) {
      if (tasksToMoveUp[index].classList.contains('selected')) {
        const liPrevClass = tasksToMoveUp[index - 1].className;
        const liPrevTask = tasksToMoveUp[index - 1].innerText;
        tasksToMoveUp[index - 1].innerText = tasksToMoveUp[index].innerText;
        tasksToMoveUp[index - 1].className = tasksToMoveUp[index].className;
        tasksToMoveUp[index].innerText = liPrevTask;
        tasksToMoveUp[index].className = liPrevClass;
        break;
      }
    }
  }
  function moveDownSelectedTask() {
    const tasksToMoveDown = document.querySelectorAll('#lista');
    for (let index = 0; index < tasksToMoveDown.length - 1; index += 1) {
      if (tasksToMoveDown[index].classList.contains('selected')) {
        const liNextClass = tasksToMoveDown[index + 1].className;
        const LiNextTask = tasksToMoveDown[index + 1].innerText;
        tasksToMoveDown[index + 1].innerText = tasksToMoveDown[index].innerText;
        tasksToMoveDown[index + 1].className = tasksToMoveDown[index].className;
        tasksToMoveDown[index].innerText = LiNextTask;
        tasksToMoveDown[index].className = liNextClass;
        break;
      }
    }
  }
  const buttonCreateTask = document.querySelector('#criar-tarefa');
  buttonCreateTask.addEventListener('click', createTaskElement);
  
  const buttonRemoveAllTasks = document.querySelector('#apaga-tudo');
  buttonRemoveAllTasks.addEventListener('click', removeAllTasks);
  
  const buttonRemoveCompletedTasks = document.querySelector('#remover-finalizados');
  buttonRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
  
  const buttonSaveTasks = document.querySelector('#salvar-tarefas');
  buttonSaveTasks.addEventListener('click', saveToLocalStorage);
  
  const buttonRemoveSelectedTask = document.querySelector('#remover-selecionado');
  buttonRemoveSelectedTask.addEventListener('click', removeSelectedTask);
  
  const buttonMoveUpSelectedTask = document.querySelector('#mover-cima');
  buttonMoveUpSelectedTask.addEventListener('click', moveUpSelectedTask);
  
  const buttonMoveDownSelectedTask = document.querySelector('#mover-baixo');
  buttonMoveDownSelectedTask.addEventListener('click', moveDownSelectedTask);
  