function addAssignment() {
  const inputTaskText = document.getElementById('texto-tarefa');
  const listItem = document.createElement('li');
  listItem.innerText = inputTaskText.value;
  const olListaTarefa = document.getElementById('lista-tarefas')
  olListaTarefa.appendChild(listItem);
  inputTaskText.value = '';
}

const buttonInforms = document.getElementById('criar-tarefa');
buttonInforms.addEventListener('click', addAssignment);

