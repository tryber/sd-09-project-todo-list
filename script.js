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
  