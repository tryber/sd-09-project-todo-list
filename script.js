function addTask() {
  const newItem = document.createElement('li');
  const newItemText = document.createTextNode(document.getElementById('texto-tarefa').value);
  newItem.appendChild(newItemText);
  document.getElementById('lista-tarefas').appendChild(newItem);
  document.getElementById('texto-tarefa').value = '';
}

const taskList = document.querySelector('#lista-tarefas');

taskList.addEventListener('click', function (select) {
  const selectionCheck = document.querySelector('.selected');
  if (selectionCheck) {
    selectionCheck.classList.remove('selected');
    select.target.classList.add('selected');
  } else {
    select.target.classList.add('selected');
  }
});
