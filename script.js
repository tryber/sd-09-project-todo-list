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
			if (listItems[index].className === 'selected') {
					listItems[index].style.backgroundColor = 'rgb(128, 128, 128)';
			} else {
					listItems[index].style.backgroundColor = null;
			}
	}
}

// Update the class of selected itens in task list
function updateItemClass(item) {
	const listItems = document.querySelectorAll('li');
	for (let index = 0; index < listItems.length; index += 1 ) {
			if (listItems[index].className === 'selected') {
					listItems[index].className = 'tarefa';
			}
	}
	item.className = 'selected';
}

// Make the call of the functions that update class and update background-color of selected itens
function updateTaskColor(event) {
	const selectedItem = event.target;
	if( selectedItem.className === 'tarefa'){
			updateItemClass(selectedItem);
	}
	updateBackgroundColor();
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
};
