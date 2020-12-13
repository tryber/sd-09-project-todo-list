function criarTarefa() {
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'tarefa';
  novaTarefa.innerText = inputTextoTarefa.value;
  console.log(listaTarefas);
  listaTarefas.appendChild(novaTarefa);
  inputTextoTarefa.value = '';
}

