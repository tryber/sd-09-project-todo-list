
function selectingColor(event) {
  for (let index = 0; index < paletaCores.length; index += 1) {
    if (paletaCores[index].classList.contains('selected')) {
      paletaCores[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function mudaParaCinza(event) { 
  if (event.target.classList.contains('selected')) {
    event.target.style.backgroundColor = null;
    event.target.classList.remove('selected');
  }else{
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function checkCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  }else{
    event.target.classList.add('completed');
  }
  }

function saveData() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const textoTarefa = document.getElementById('texto-tarefa');
  const incluiTarefa = document.createElement('li');
  incluiTarefa.innerText = textoTarefa.value;
  incluiTarefa.className = 'tarefa-from-list';
  incluiTarefa.setAttribute('class', 'nova-tarefa');
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
