// window.onload = function () {
  //aproveitar o onload para recuperar o que estiver salvo no local storage.
// }

const myTaskList = document.getElementById('lista-tarefas');
const myTaskInput = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');

buttonAddTask.addEventListener('click', function () {
  const myElement = document.createElement('li');
  let myTask = myTaskInput.value;
  myElement.innerHTML = myTask;
  myTaskList.appendChild(myElement);
  myTaskInput.value = '';
})