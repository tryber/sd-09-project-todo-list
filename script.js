// window.onload = function () {
  // aproveitar o onload para recuperar o que estiver salvo no local storage.
// }

const myTaskList = document.getElementById('lista-tarefas');
const myTaskInput = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');

buttonAddTask.addEventListener('click', function () {
  const myElement = document.createElement('li');
  const myTask = myTaskInput.value;
  myElement.innerHTML = myTask;
  myTaskList.appendChild(myElement);
  myTaskInput.value = '';
});
myTaskList.addEventListener('click', function (event) {
  const selectedItem = document.getElementsByClassName('selected')[0];
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }
  const clickedItem = event.target;
  clickedItem.classList.add('selected');
});
myTaskList.addEventListener('dblclick', function (event) {
  const markItemAsCompleted = event.target;
  if (markItemAsCompleted.classList.contains('completed')) {
    markItemAsCompleted.classList.remove('completed');
  } else {
    markItemAsCompleted.classList.add('completed');
  }
});
