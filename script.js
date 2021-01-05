function saveData() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const textoTarefa = document.getElementById('texto-tarefa').value;
  const incluiTarefa = document.createElement('li');
  incluiTarefa.innerText = textoTarefa;
  incluiTarefa.className = 'tarefa-from-list';
  listaTarefas.appendChild(incluiTarefa);
}
const criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', saveData);

function clearList() {
  document.getElementById('lista-tarefas').innerHTML = '';
}
const limpaList = document.getElementById('apaga-tudo');
limpaList.addEventListener('click', clearList);