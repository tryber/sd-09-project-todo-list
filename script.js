//Lista vazia
function empty() {
  const orderedList = document.getElementById('lista-tarefas');
  const hello = document.createElement('h5');
  hello.id = 'hello';
  hello.innerText =
  `Não seja vagabundo,
  e coloque algo aqui,
  desgraça!`;
  if (orderedList.childElementCount === 0) {
    orderedList.appendChild(hello);
  }
  else;
}

window.onload = empty;

// Criar a lista de tarefas
function creatSchedule() {
  if (document.getElementById('texto-tarefa').value !== '') {
    const hello = document.getElementById('hello');
  hello.innerHTML = '';
  const write = document.getElementById('texto-tarefa').value;
  const orderedList = document.getElementById('lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerText = write;
  orderedList.appendChild(listItem);
  document.getElementById('texto-tarefa').value = '';
  }
  else if (document.getElementById('texto-tarefa').value === '') {
    alert('Ai não dá filhão')
  }
}

const btnTask = document.getElementById('criar-tarefa');
btnTask.addEventListener('click', creatSchedule);