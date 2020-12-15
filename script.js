// Create a list item (li) child of a ordered list (ol)
function cresteListItem(task) {
  const orderedList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerText = task;
  listItem.className = 'tarefa';
  orderedList.appendChild(listItem);
  return listItem;
}

// Clear text in input field
function clearInput(inputValue) {
  inputValue.value = null;
}

// Create task(li) in oredered list(ol)
function addTask() {
  const taskInput = document.querySelector('#texto-tarefa');
  cresteListItem(taskInput.value);
  clearInput(taskInput);
}

// Remove the class 'selected' form li elements
function removeClassSelected() {
  const tasksSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < tasksSelected.length; index += 1) {
    tasksSelected[index].classList.remove('selected');
  }
}

// Remove the class 'completed' form li elements
function removeClassCompleted() {
  const tasksCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < tasksCompleted.length; index += 1) {
    tasksCompleted[index].classList.remove('completed');
  }
}

// Change background-color of elements with class selected
function updateBackgroundColor() {
  const tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].classList.contains('selected')) {
      tasks[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      tasks[index].style.backgroundColor = null;
    }
  }
}

// Update text-decoration line-through of item
function updateLineThrough(item) {
  if (item.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
    item.style.textDecoration = null;
    removeClassCompleted();
  } else if (item.classList.contains('completed')) {
    item.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
}

// Add class selected and call the function that update background-color of selected itens
function updateTaskColor(event) {
  const selectedItem = event.target;
  if (selectedItem.classList.contains('tarefa')) {
    removeClassSelected();
    selectedItem.className += ' selected';
  }
  updateBackgroundColor();
}

// Add class completed and call the function that update text-decoration line-through of item
function updateTaskCompleted(event) {
  const completedItem = event.target;
  if (completedItem.classList.contains('tarefa')) {
    completedItem.className += ' completed';
  }
  updateLineThrough(completedItem);
}

// Delete all elements li
function deleteAllTasks() {
  const list = document.querySelector('#lista-tarefas');
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  localStorage.clear();
}

// Delete all elements li with class 'completed' or with class 'selected'
function removeTask(event) {
  const target = event.target.id;
  let className = '';
  if (target === 'remover-finalizados') {
    className = 'completed';
  } else if (target === 'remover-selecionado') {
    className = 'selected'; 
  }
  const list = document.querySelector('#lista-tarefas');
  const tasks = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].classList.contains(className)) {
      list.removeChild(tasks[index]);
    }
  }
  for (let index2 = 0; localStorage.getItem(`task ${index2}`); index2 += 1) {
    const taskInStorage = localStorage.getItem(`task ${index2}`);
    if (taskInStorage.includes(className)) {
      localStorage.removeItem(`task ${index2}`);
    }
  }
}

// Verify if browser support web storage and save li elements in local storage
function saveTasks() {
  const tasks = document.querySelectorAll('.tarefa');
  if (typeof(Storage) !== 'undefined') {
    for (let index = 0; index < tasks.length; index += 1) {
      const tasksArray = [tasks[index].innerHTML, tasks[index].className];
      localStorage.setItem(`task ${index}`, tasksArray);
    }
  } else {
    alert('Browser dont support Web Storage!');
  }
}

// Load elements li saved in local storage
function loadTaks() {
  for (let index = 0; localStorage.getItem(`task ${index}`); index += 1) {
    const tasksArray = (localStorage.getItem(`task ${index}`)).split(',');
    const loadedTask = cresteListItem(tasksArray[0]);
    loadedTask.className = tasksArray[1];
    updateBackgroundColor(loadedTask);
    updateLineThrough(loadedTask);
  }
}

// Move up the li elements
function moveUp() {
  if (document.querySelector('.selected') !== null) {
    const taskUp = document.querySelector('.selected');
    const list = document.querySelector('#lista-tarefas');
    if (taskUp.previousElementSibling !== null) {
      list.insertBefore(taskUp, taskUp.previousElementSibling);
    }
  } else {
    alert('Erro! Nenhuma tarefa selecionada!');
  }
}

// Move down the li elements
function moveDown() {
  if (document.querySelector('.selected') !== null) {
    const taskDown = document.querySelector('.selected');
    const list = document.querySelector('#lista-tarefas');
    if (taskDown.nextElementSibling !== null) {
      list.insertBefore(taskDown.nextElementSibling, taskDown);
    }
  } else {
    alert('Erro! Nenhuma tarefa selecionada!');
  }
}

// Prevent submit of a input in form
function preventSubmit(event) {
  event.preventDefault();
}

// Load function and event listeners at the window load
window.onload = function () {
  const buttonTask = document.querySelector('#criar-tarefa');
  const taskForm = document.querySelector('#formulario-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const buttonDelete = document.querySelector('#apaga-tudo');
  const buttonConclude = document.querySelector('#remover-finalizados');
  const buttonSaveTasks = document.querySelector('#salvar-tarefas');
  const buttonMoveUp = document.querySelector('#mover-cima');
  const buttonMoveDown = document.querySelector('#mover-baixo');
  const buttonRemoveSelected = document.querySelector('#remover-selecionado');
  buttonTask.addEventListener('click', addTask);
  taskForm.addEventListener('submit', preventSubmit);
  taskList.addEventListener('click', updateTaskColor);
  taskList.addEventListener('dblclick', updateTaskCompleted);
  buttonDelete.addEventListener('click', deleteAllTasks);
  buttonConclude.addEventListener('click', removeTask);
  buttonSaveTasks.addEventListener('click', saveTasks);
  buttonMoveUp.addEventListener('click', moveUp);
  buttonMoveDown.addEventListener('click', moveDown);
  buttonRemoveSelected.addEventListener('click', removeTask);
  loadTaks();
};
