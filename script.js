const buttonPress = document.getElementById('criar-tarefa');
const inputField = document.getElementById('texto-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const buttonDelete = document.getElementById('apaga-tudo');
const list = document.getElementsByTagName('li');

buttonPress.addEventListener('click', function () {
  let appendToList = document.createElement('li');
  appendToList.classList.add('lista-tarefas');
  appendToList.innerText = inputField.value;
  toDoList.appendChild(appendToList);
  inputField.value = '';
});

buttonPress.addEventListener('dblclick', function () {
  
});
  
buttonDelete.addEventListener('click', function () {
  for (index = list.length - 1; index >= 0; index -= 1) {
    list[index].parentNode.removeChild(list[index]);
  }
});
