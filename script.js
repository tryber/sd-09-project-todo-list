function removeCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1 ) {
    completedTasks[index].parentNode.removeChild(completedTasks[index]);
  }
}

const btnRemoveCompleted = document.getElementById('remover-finalizados');
btnRemoveCompleted.addEventListener('click', removeCompleted);

function checkSelected(event) {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected !== null) {
    taskSelected.style.backgroundColor = null;
    taskSelected.classList.remove('selected');
  }
  event.target.classList.add('selected');
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function checkCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
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
  incluiTarefa.addEventListener('click', checkSelected);
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
