// Remove Background dos Itens
function removeAttributeTag(task) {
  const arrayTasks = task.parentNode.children;

  for (let indexTask = 0; indexTask < arrayTasks.length; indexTask += 1) {
    element = arrayTasks[indexTask];

    if (element.hasAttribute('style')) {
      element.removeAttribute('style');
    }
  }
}

// Botão Adicionar
document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const tarefa = document.querySelector('#texto-tarefa');

  const elementHTML = document.createElement('li');
  elementHTML.innerText = tarefa.value;
  elementHTML.classList.add('lista-tarefas-item');
  document.querySelector('#lista-tarefas').appendChild(elementHTML);

  tarefa.value = '';
  tarefa.focus();
});

// Clique Tarefa
document.querySelector('#lista-tarefas').addEventListener('click', function (event) {
  if (event.target.id === '') {
    removeAttributeTag(event.target);
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

// Duplo Clique
document.querySelector('#lista-tarefas').addEventListener('dblclick', function (event) {
  if (event.target.id === '') {
    event.target.classList.toggle('completed');
    removeAttributeTag(event.target);
  }
});

// Botão Apaga Lista
document.querySelector('#apaga-tudo').addEventListener('click', function () {
  const tarefasItens = document.querySelectorAll('.lista-tarefas-item');

  for (let index = 0; index < tarefasItens.length; index += 1) {
    document.querySelector('#lista-tarefas').removeChild(tarefasItens[index]);
  }
});
