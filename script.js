// Create a list item (li) child of a ordered list (ol)
function cresteListItem (task) {
    const orderedList = document.querySelector("#lista-tarefas");
    const listItem = document.createElement("li");
    listItem.innerText = task;
    orderedList.appendChild(listItem);
    return listItem;
}

// Clear text in input field
function clearInput(form) {
    const taskInput = document.querySelector("#texto-tarefa");
    taskInput.value = null;
}

// Create Task
function addTask () {
    const taskForm = document.querySelector("#formulario-tarefa");
    cresteListItem(taskForm.value);
    clearInput();
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
