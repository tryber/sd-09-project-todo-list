function saveData() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const textoTarefa = document.getElementById('texto-tarefa');
  const incluiTarefa = document.createElement('li');
  incluiTarefa.innerText = textoTarefa.value;
  incluiTarefa.className = 'tarefa-from-list';
  incluiTarefa.addEventListener('click', mudaParaCinza);
  listaTarefas.appendChild(incluiTarefa);
  textoTarefa.value = '';
}
function mudaParaCinza() {
  colorList = document.getElementsByClassName('tarefa-from-list');
  for (let index = 0; index < colorList.length ; index +=1){
    colorList[index].style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

const criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', saveData);

function clearList() {
  document.getElementById('lista-tarefas').innerHTML = '';
}
const limpaList = document.getElementById('apaga-tudo');
limpaList.addEventListener('click', clearList);
