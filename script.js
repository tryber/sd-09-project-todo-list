function addTask() {
  const inputTask = document.getElementById('texto-tarefa');
  if (inputTask.value !== '') {
    const ol = document.getElementById('lista-tarefas');
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    ol.appendChild(li);
    inputTask.value = '';
  }
}
