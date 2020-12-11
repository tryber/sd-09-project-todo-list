// Remove Background dos Itens
function removeBackgroundItems(task) {
  const arrayTasks = task.parentNode.children;

  for (let indexTask = 0; indexTask < arrayTasks.length; indexTask += 1) {
    if (arrayTasks[indexTask].style.backgroundColor !== '') {
      arrayTasks[indexTask].removeAttribute('style');

      if (arrayTasks[indexTask].hasAttribute('style')) {
        arrayTasks[indexTask].removeAttribute('style');
      }

      if (arrayTasks[indexTask].getAttribute('class') !== 'completed') {
        arrayTasks[indexTask].removeAttribute('class');
      }
    }
  }
}

// Botão Adicionar
document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const tarefa = document.querySelector('#texto-tarefa');

  const elementHTML = document.createElement('li');
  elementHTML.innerText = tarefa.value;
  document.querySelector('#lista-tarefas').appendChild(elementHTML);

  tarefa.value = '';
  tarefa.focus();
});

// Clique Tarefa
document.querySelector('#lista-tarefas').addEventListener('click', function (event) {
  if (event.target.id === '') {
    removeBackgroundItems(event.target);
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

// Duplo Clique
document.querySelector('#lista-tarefas').addEventListener('dblclick', function (event) {
  if (event.target.id === '') {
    event.target.classList.toggle('completed');
    removeBackgroundItems(event.target);
  }
});
