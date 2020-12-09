function newTask() {
  let list = document.querySelector('#lista-tarefas');
  let mt = document.querySelector('#texto-tarefa');
  let newli = document.createElement('li');
  newli.innerText = mt.value;
  list.appendChild(newli)
  mt.value = ''
}

function makeTask() {
  let button = document.getElementById('criar-tarefa')
  button.addEventListener('click', newTask)
}
makeTask()