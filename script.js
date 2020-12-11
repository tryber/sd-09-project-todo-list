// Remove Background dos Itens
function isStyleAttribute(element) {
  if (element.hasAttribute('style')) {
    element.removeAttribute('style');
  }
}

function isClassAttribute(element) {
  if (element.getAttribute('class') !== 'completed') {
    element.removeAttribute('class');
  }
}

function removeAttributeTag(task) {
  const arrayTasks = task.parentNode.children;

  for (let indexTask = 0; indexTask < arrayTasks.length; indexTask += 1) {
    isStyleAttribute(arrayTasks[indexTask]);
    isClassAttribute(arrayTasks[indexTask]);
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
