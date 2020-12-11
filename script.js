// Remove Background dos Itens
function removeBackgroundItems(arrayTasks) {
  for (let indexTask = 0; indexTask < arrayTasks.length; indexTask += 1) {
    if (arrayTasks[indexTask].style.backgroundColor !== '') {
      arrayTasks[indexTask].removeAttribute('style');
    }
  }
  // for (let task of arrayTasks) {
  //   if (task.style.backgroundColor !== '') {
  //     task.removeAttribute('style');
  //   }
  // }
}

// Botão Adicionar
document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const tarefa = document.querySelector('#texto-tarefa');

  const elementHTML = document.createElement('li');
  elementHTML.innerText = tarefa.value;
  document.querySelector('#lista-tarefas').appendChild(elementHTML);

  tarefa.value = '';
  tarefa.focus();
  // return elementHTML;
});

// Clique Tarefa
document.querySelector('#lista-tarefas').addEventListener('click', function (event) {
  const listaTarefas = event.target;
  if (listaTarefas.id === '') {
    const itensTarefa = listaTarefas.parentNode.children;
    // console.log(listaTarefas);
    removeBackgroundItems(itensTarefa);
    listaTarefas.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});
