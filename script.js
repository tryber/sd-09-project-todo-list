function createTask() {
  const input = document.getElementById('texto-tarefa');
  if (input.value !== '') {
    const ol = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = '';
  }
}

