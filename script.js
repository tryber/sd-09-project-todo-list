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

// Change background-color of elements with class selected
function updateBackgroundColor() {
	const tasks = document.querySelectorAll('li');
	for (let index = 0; index < tasks.length; index += 1 ) {
		if (tasks[index].classList.contains('selected')) {
			tasks[index].style.backgroundColor = 'rgb(128, 128, 128)';
		} else {
			tasks[index].style.backgroundColor = null;
		}
	}
}

// Update text-decoration line-through of item
function updateLineThrough(item) {
  const tasks = document.querySelectorAll('li');
  if (item.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
    item.style.textDecoration = null;
    removeClassCompleted();
	} else if (item.classList.contains('completed')) {
    item.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
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

// Add class selected and call the function that update background-color of selected itens
function updateTaskColor(event) {
	const selectedItem = event.target;
	if( selectedItem.classList.contains('tarefa')) {
    removeClassSelected();
    selectedItem.className += ' selected';
	}
	updateBackgroundColor();
}

// Add class completed and call the function that update text-decoration line-through of item
function updateTaskCompleted(event) {
	const completedItem = event.target;
  if(completedItem.classList.contains('tarefa')) {
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
}

// Delete all elements li with class 'completed'
function concludeTask() {
  const list = document.querySelector('#lista-tarefas');
  const tasks = document.querySelectorAll('.tarefa');
  for(let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].classList.contains('completed')) {
      list.removeChild(tasks[index]);
    }
  }
}

// Prevent submit of a input in form
function preventSubmit(event) {
	event.preventDefault();
  }

window.onload = function () {
	const buttonTask = document.querySelector('#criar-tarefa');
	const taskForm = document.querySelector('#formulario-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const buttonDelete = document.querySelector('#apaga-tudo');
  const buttonConclude = document.querySelector('#remover-finalizados');
  
	buttonTask.addEventListener('click', addTask);
	taskForm.addEventListener('submit', preventSubmit);
	taskList.addEventListener('click', updateTaskColor);
  taskList.addEventListener('dblclick', updateTaskCompleted);
  buttonDelete.addEventListener('click', deleteAllTasks);
	buttonConclude.addEventListener('click', concludeTask);
};
