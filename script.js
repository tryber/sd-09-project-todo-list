// funcao que remove a class selected dos outros items da lista
function removeTaskMarks() {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    if (listItems[index].classList.contains('selected')) {
      listItems[index].classList.toggle('selected');
    }
  }
}

// funcao que coloca a tag selected no item da lista
function clicaTarefa(self) {
  removeTaskMarks();
  self.target.classList.toggle('selected');
}
// requisito 9
function doubleClick(self) {
  self.target.classList.toggle('completed');
}

// requisito 6
function criaTarefa() {
  const newTexto = document.querySelector('#texto-tarefa').value;
  if (!newTexto) {
    alert('Por favor não deixar em branco');
  } else {
    const tarefa = document.createElement('li');
    // aqui ja implementa o event listaner de clicar em todas as tarefas
    tarefa.addEventListener('click', clicaTarefa);
    tarefa.addEventListener('dblclick', doubleClick);
    tarefa.innerText = newTexto;
    document.querySelector('ol').appendChild(tarefa);
    document.querySelector('#texto-tarefa').value = '';
  }
}

document.querySelector('#criar-tarefa').addEventListener('click', criaTarefa);
