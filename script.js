function removeBackgroundColor() {
  const olListaTarefa = document.getElementById('lista-tarefas');
  const childsOl = olListaTarefa.children;
  for (let i = 0; i < childsOl.length; i += 1) {
    childsOl[i].style.backgroundColor = '';
  }
}

function apagarTarefas() {
  const olListaTarefa = document.getElementById('lista-tarefas');
  olListaTarefa.innerHTML = '';
}

const clearListButton = document.getElementById('apaga-tudo');
clearListButton.addEventListener('click', apagarTarefas);

function changeBackgroundColor(event) {
  removeBackgroundColor();
  event.target.style.backgroundColor = 'gray';
}

function addAssignment() {
  const inputTaskText = document.getElementById('texto-tarefa');
  const listItem = document.createElement('li');
  listItem.innerText = inputTaskText.value;
  const olListaTarefa = document.getElementById('lista-tarefas');
  olListaTarefa.appendChild(listItem);
  inputTaskText.value = '';
  listItem.addEventListener('click', changeBackgroundColor);
}

const buttonInforms = document.getElementById('criar-tarefa');
buttonInforms.addEventListener('click', addAssignment);
