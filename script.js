function addTask() {
  const newItem = document.createElement('li');
  if (document.getElementById('texto-tarefa').value !== '') {
    const newItemText = document.createTextNode(document.getElementById('texto-tarefa').value);
    newItem.appendChild(newItemText);
    document.getElementById('lista-tarefas').appendChild(newItem);
    document.getElementById('texto-tarefa').value = '';
  }
}

function clearList() {
  document.querySelector('#lista-tarefas').innerHTML = '';
}

function clearCompleted() {
  let completedList = document.getElementsByClassName('completed');
  while (completedList.length > 0) {
    completedList[0].parentNode.removeChild(completedList[0]);
  }
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

taskList.addEventListener('dblclick', function (done) {
  if (done.target.classList.contains('completed')) {
    done.target.classList.remove('completed');
  } else {
    done.target.classList.add('completed');
  }
});
