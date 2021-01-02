// Remove Background dos Itens
function removeBackgroundColor(styleCSS, task) {
  if (styleCSS === 'backgroundColor' && task.style.backgroundColor !== '') {
    task.style.backgroundColor = '';
  }
}

function removeStyleTag(task) {
  if (task.style.backgroundColor === '' && task.style.textDecoration === '' && task.style.opacity === '') {
    task.removeAttribute('style');
  }
}

function removeAttributeTag(task, styleCSS) {
  const arrayTasks = document.querySelectorAll('.lista-tarefas-item');

  for (let indexTask = 0; indexTask < arrayTasks.length; indexTask += 1) {
    removeBackgroundColor(styleCSS, arrayTasks[indexTask]);

    if (styleCSS === 'textDecoration' && arrayTasks[indexTask].innerText === task.innerText) {
      arrayTasks[indexTask].style.textDecoration = '';
      arrayTasks[indexTask].style.opacity = '';
    }

    removeStyleTag(arrayTasks[indexTask]);
  }
}

// Criando e Adicionando os itens a lista
function addItemList(text, classCompleted) {
  const elementHTML = document.createElement('li');
  elementHTML.innerText = text;
  elementHTML.classList.add('lista-tarefas-item');

  if (classCompleted) {
    elementHTML.style.textDecoration = 'line-through solid rgb(0 , 0 , 0)';
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
    // console.log(event);
    removeAttributeTag(event.target, 'backgroundColor');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

// Duplo Clique
document.querySelector('#lista-tarefas').addEventListener('dblclick', function (event) {
  if (event.target.id === '') {
    if (event.target.style.textDecoration === '') {
      event.target.style.textDecoration = 'line-through solid rgb(0 , 0 , 0)';
      event.target.style.opacity = 0.5;
    } else {
      removeAttributeTag(event.target, 'textDecoration');
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
    if (tarefasItens[index].style.textDecoration !== '') {
      document.querySelector('#lista-tarefas').removeChild(tarefasItens[index]);
    }
  }
});

// Botão Remover Selecionado
document.querySelector('#remover-selecionado').addEventListener('click', function () {
  const tarefasItens = document.querySelectorAll('.lista-tarefas-item');

  for (let index = 0; index < tarefasItens.length; index += 1) {
    if (tarefasItens[index].style.backgroundColor !== '') {
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

    if (tarefasItens[index].style.textDecoration !== '') {
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
    if (tarefasItens[index].style.backgroundColor !== '' && index > 0) {
      document.querySelector('#lista-tarefas').insertBefore(tarefasItens[index], tarefasItens[index].previousSibling);
      break;
    }
  }
});

// Botão Mover para Baixo
document.querySelector('#mover-baixo').addEventListener('click', function () {
  const tarefasItens = document.querySelectorAll('.lista-tarefas-item');

  for (let index = 0; index < tarefasItens.length; index += 1) {
    if (tarefasItens[index].style.backgroundColor !== '' && index < tarefasItens.length - 1) {
      document.querySelector('#lista-tarefas').insertBefore(tarefasItens[index].nextSibling, tarefasItens[index]);
      break;
    }
  }
});
