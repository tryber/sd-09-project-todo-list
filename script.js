function addTask() {
  let newItem = document.createElement('li');
  let newItemText = document.createTextNode(document.getElementById('texto-tarefa').value);
  newItem.appendChild(newItemText);
  document.getElementById('lista-tarefas').appendChild(newItem);
}
