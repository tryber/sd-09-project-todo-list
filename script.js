const myTaskList = document.getElementById('lista-tarefas');
const myTaskInput = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');
const buttonRemoveAll = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const buttonSaveAll = document.getElementById('salvar-tarefas');
const buttonDeleteSelected = document.getElementById('remover-selecionado');

window.onload = function () {
  for (let item = 0; item < localStorage.length; item += 1) {
    const task = localStorage[item];
    myTaskList.innerHTML += task;
  }
};
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
buttonRemoveAll.addEventListener('click', function () {
  const myTasks = myTaskList.children;
  while (myTasks.length > 0) {
    myTaskList.removeChild(myTasks[0]);
  }
});
buttonRemoveCompleted.addEventListener('click', function () {
  const completedClass = document.getElementsByClassName('completed');
  while (completedClass.length > 0) {
    completedClass[0].remove();
  }
});
buttonSaveAll.addEventListener('click', function () {
  localStorage.clear();
  // if (myTaskList.children.length === 0) {
  //   alert('Nothing to save...');
  // }
  for (let index = 0; index < myTaskList.children.length; index += 1) {
    localStorage.setItem(index, `<li class=${myTaskList.children[index].className}>${myTaskList.children[index].innerHTML}</li>`);
  }
  // alert('Everything is save :)');
});
buttonDeleteSelected.addEventListener('click', function () {
  const selectedClass = document.getElementsByClassName('selected');
  selectedClass[0].remove();
});
