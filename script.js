// Altera cor de fundo do item da lista selecionado
function highlight(event) {
  const clickedItem = event.target;
  const selectedItemBackgroundColor = 'rgb(128, 128, 128)';
  const selectedTasks = document.querySelectorAll('.selected');
  if (selectedTasks.length < 1) {
    clickedItem.className += ' selected';
    clickedItem.style.backgroundColor = selectedItemBackgroundColor;
  } else if (selectedTasks[0] !== clickedItem) {
    selectedTasks[0].className = selectedTasks[0].className.replace(' selected', '');
    selectedTasks[0].style.backgroundColor = 'transparent';
    clickedItem.className += ' selected';
    clickedItem.style.backgroundColor = selectedItemBackgroundColor;
  } else {
    clickedItem.style.backgroundColor = 'transparent';
    clickedItem.className = clickedItem.className.replace(' selected', '');
  }
}

function highlightListItemEvent() {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].removeEventListener('click', highlight);
    listItems[index].addEventListener('click', highlight);
  }
}

highlightListItemEvent();

// Adicionar tarefas a lista ordenada #lista-tarefas
function addTask() {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', function () {
    const task = document.querySelector('#texto-tarefa').value;
    const taskList = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = task;
    listItem.className = 'task';
    taskList.appendChild(listItem);
    highlightListItemEvent();
    document.querySelector('#texto-tarefa').value = '';
  });
}

addTask();
