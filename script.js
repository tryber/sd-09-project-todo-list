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
	const listItems = document.querySelectorAll('li');
	for (let index = 0; index < listItems.length; index += 1 ) {
		if (listItems[index].classList.contains('selected')) {
			listItems[index].style.backgroundColor = 'rgb(128, 128, 128)';
		} else {
			listItems[index].style.backgroundColor = null;
		}
	}
}

// Update text-decoration line-through of item
function updateLineThrough(item) {
  const listItems = document.querySelectorAll('li');
  if (item.style.textDecoration === 'line-through') {
    item.style.textDecoration = null;
    updateClassList();
	} else if (item.classList.contains('completed')) {
    item.style.textDecoration = 'line-through';
  }
}

// Update the class of list itms(li) to only 'tarefa'
function updateClassList() {
	const listItems = document.querySelectorAll('li');
	for (let index = 0; index < listItems.length; index += 1) {
		if ((listItems[index].classList.contains('selected')) || (listItems[index].classList.contains('completed'))) {
			listItems[index].className = 'tarefa';
		}
  }
}

// Add class selected and call the function that update background-color of selected itens
function updateTaskColor(event) {
	const selectedItem = event.target;
	if( selectedItem.classList.contains('tarefa')) {
    updateClassList();
    selectedItem.className += ' selected';
	}
	updateBackgroundColor();
}

// Add class completed and call the function that update text-decoration line-through of item
function updateTaskCompleted(event) {
	const completedItem = event.target;
  if( completedItem.classList.contains('tarefa')) {
    completedItem.className += ' completed';
  }
  updateLineThrough(completedItem);
}

// Prevent submit of a input in form
function preventSubmit(event) {
	event.preventDefault();
  }

window.onload = function () {
	const buttonTask = document.querySelector('#criar-tarefa');
	const taskForm = document.querySelector('#formulario-tarefa');
	const taskList = document.querySelector('#lista-tarefas');
	buttonTask.addEventListener('click', addTask);
	taskForm.addEventListener('submit', preventSubmit);
	taskList.addEventListener('click', updateTaskColor);
	taskList.addEventListener('dblclick', updateTaskCompleted);
};
