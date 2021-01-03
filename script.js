// Remove Background dos Itens

function removeClassCompleted(arrayElement, taskText, toggleCompleted) {
  if (toggleCompleted && taskText === arrayElement.innerText) {
    arrayElement.style.textDecoration = '';
    arrayElement.style.opacity = '';
  }
}
function removeAttributeTag(task, toggleCompleted) {
  // console.log(task);
  const arrayTasks = task.parentNode.children;

  for (let indexTask = 0; indexTask < arrayTasks.length; indexTask += 1) {
    const element = arrayTasks[indexTask];

    element.style.backgroundColor = '';

    removeClassCompleted(element, task.innerText, toggleCompleted);

    if (element.style.backgroundColor === '' && element.style.textDecoration === '' && element.style.opacity === '') {
      element.removeAttribute('style');
    }
  }
}

// Criando e Adicionando os itens a lista
function addItemList(text, classCompleted) {
  const elementHTML = document.createElement('li');
  elementHTML.innerText = text;
  elementHTML.classList.add('lista-tarefas-item');

  if (classCompleted) {
    elementHTML.classList.add('completed');
    elementHTML.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    elementHTML.style.opacity = 0.5;
  }

  document.querySelector('#lista-tarefas').appendChild(elementHTML);
}

// Botão Adicionar
document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const tarefa = document.querySelector('#texto-tarefa');

  addItemList(tarefa.value, false);

  tarefa.value = '';
  tarefa.focus();
});

// Clique Tarefa
document.querySelector('#lista-tarefas').addEventListener('click', function (event) {
  if (event.target.id === '') {
    removeAttributeTag(event.target, false);
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

// Duplo Clique
document.querySelector('#lista-tarefas').addEventListener('dblclick', function (event) {
  if (event.target.id === '') {
    event.target.classList.toggle('completed');
    removeAttributeTag(event.target, event.target.classList.toggle('completed'));

    if (event.target.classList.toggle('completed')) {
      event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      event.target.style.opacity = 0.5;
    }
  }
});

// Botão Apaga Lista
document.querySelector('#apaga-tudo').addEventListener('click', function () {
  const tarefasItens = document.querySelectorAll('.lista-tarefas-item');

  for (let index = 0; index < tarefasItens.length; index += 1) {
    document.querySelector('#lista-tarefas').removeChild(tarefasItens[index]);
  }

  if (localStorage.length > 0) {
    localStorage.clear();
  }
});

// Botão Remover Finalizados
document.querySelector('#remover-finalizados').addEventListener('click', function () {
  const tarefasItens = document.querySelectorAll('.lista-tarefas-item');

  for (let index = 0; index < tarefasItens.length; index += 1) {
    if (tarefasItens[index].classList.contains('completed')) {
      document.querySelector('#lista-tarefas').removeChild(tarefasItens[index]);
    }
  }
});

// Botão Remover Finalizado
document.querySelector('#remover-selecionado').addEventListener('click', function () {
  const tarefasItens = document.querySelectorAll('.lista-tarefas-item');

  for (let index = 0; index < tarefasItens.length; index += 1) {
    if (tarefasItens[index].hasAttribute('style')) {
      document.querySelector('#lista-tarefas').removeChild(tarefasItens[index]);
    }
  }
});

// Botão Salvar
document.querySelector('#salvar-tarefas').addEventListener('click', function () {
  const tarefasItens = document.querySelectorAll('.lista-tarefas-item');

  localStorage.clear();

  for (let index = 0; index < tarefasItens.length; index += 1) {
    const arrayItem = {
      text: tarefasItens[index].innerText,
      completed: false,
    };

    if (tarefasItens[index].classList.contains('completed')) {
      arrayItem.completed = true;
    }

    localStorage.setItem(`lista-tarefas-item-${index}`, JSON.stringify(arrayItem));
  }
});

window.onload = function () {
  for (let index = 0; index < localStorage.length; index += 1) {
    const localItem = JSON.parse(localStorage.getItem(`lista-tarefas-item-${index}`));
    addItemList(localItem.text, localItem.completed);
  }
};

// Botão Mover para Cima
document.querySelector('#mover-cima').addEventListener('click', function () {
  const tarefasItens = document.querySelectorAll('.lista-tarefas-item');

  for (let index = 0; index < tarefasItens.length; index += 1) {
    if (tarefasItens[index].hasAttribute('style') && index > 0) {
      document.querySelector('#lista-tarefas').insertBefore(tarefasItens[index], tarefasItens[index].previousSibling);
      break;
    }
  }
});

// Botão Mover para Baixo
document.querySelector('#mover-baixo').addEventListener('click', function () {
  const tarefasItens = document.querySelectorAll('.lista-tarefas-item');

  for (let index = 0; index < tarefasItens.length; index += 1) {
    if (tarefasItens[index].hasAttribute('style') && index < tarefasItens.length - 1) {
      document.querySelector('#lista-tarefas').insertBefore(tarefasItens[index].nextSibling, tarefasItens[index]);
      break;
    }
  }
});
