function addTask() {
  const newItem = document.createElement('li');
  const newItemText = document.createTextNode(document.getElementById('texto-tarefa').value);
  newItem.appendChild(newItemText);
  document.getElementById('lista-tarefas').appendChild(newItem);
  document.getElementById('texto-tarefa').value = '';
}
