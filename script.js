// Create a list item (li) child of a ordered list (ol)
function cresteListItem (task) {
    const orderedList = document.querySelector("#lista-tarefas");
    const listItem = document.createElement("li");
    listItem.innerText = task;
    orderedList.appendChild(listItem);
    return listItem;
}

// Clear text in input field
function clearInput(inputValue) {
    inputValue.value = null;
}

// Create Task
function addTask () {
    const taskInput = document.querySelector("#texto-tarefa");
    cresteListItem(taskInput.value);
    clearInput(taskInput);
}

// Prevent submit of a input in form
function preventSubmit(event) {
    event.preventDefault();
  }

window.onload = function () {
    const buttonTask = document.querySelector("#criar-tarefa");
    const taskForm = document.querySelector("#formulario-tarefa");
    
    buttonTask.addEventListener('click', addTask);
    taskForm.addEventListener('submit', preventSubmit);
};
