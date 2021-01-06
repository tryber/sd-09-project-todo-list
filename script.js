
function mudaParaCinza() {
  let colorList = document.getElementsByClassName('tarefa-from-list');
  for (let index = 0; index < colorList.length ; index +=1){
    colorList[index].style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function checkCompleted(event) {
  elemento = document.getElementById('nova-tarefa');
  if (elemento.classList.contains('selected')) {
    event.target.classlist.remove('selected');
  }else{
    event.target.classList.add('selected');
  }  
  }

function saveData() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const textoTarefa = document.getElementById('texto-tarefa');
  const incluiTarefa = document.createElement('li');
  incluiTarefa.innerText = textoTarefa.value;
  incluiTarefa.className = 'tarefa-from-list';
  incluiTarefa.setAttribute('id', 'nova-tarefa');
  incluiTarefa.addEventListener('click', mudaParaCinza);
  incluiTarefa.addEventListener('dblclick', checkCompleted);
  listaTarefas.appendChild(incluiTarefa);
  textoTarefa.value = '';
}

function clearList() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

const criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', saveData);

const limpaList = document.getElementById('apaga-tudo');
limpaList.addEventListener('click', clearList);
