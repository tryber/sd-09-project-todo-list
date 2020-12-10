// 9- click change bgcolor to gray
function changeBGSelectedItems(elementHtml) {
  const taskLiItems = document.querySelector('#lista-tarefas').children;
  elementHtml.addEventListener('click', function (eventT) {
    for (let index = 0; index < taskLiItems.length; index += 1) {
      taskLiItems[index].style.backgroundColor = '';
    }
    eventT.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

// 9- click apply/remove text-decoration

function markupTasks(elementHtml) {
  elementHtml.addEventListener('dblclick', function (event) {
    if (event.target.className === '') {
      event.target.className = 'completed';
    } else {
      event.target.className = '';
    }
  });
}

// 5

function clickAddTask() {
  const form = document.getElementById('input-bar');
  const taskOlList = document.querySelector('#lista-tarefas');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskItem = document.createElement('li');
    const taskRead = event.target.tarefa.value;
    taskItem.innerText = taskRead;
    if (taskRead === '') {
      return;
    }
    taskOlList.appendChild(taskItem);
    event.target.tarefa.value = '';
    changeBGSelectedItems(taskItem); // add the eventlistener click change bgcolor to gray
    markupTasks(taskItem); // add eventlistener click apply/remove text-decoration
  });
}
clickAddTask();

// 8- buttons

function createButton(nameId, nameButton) {
  const buttonSection = document.querySelector('.tools');
  const newButton = document.createElement('button');
  newButton.id = nameId;
  newButton.innerText = nameButton;
  buttonSection.appendChild(newButton);
}
createButton('apaga-tudo', '❌');
createButton('mover-cima', '⬆');
createButton('mover-baixo', '⬇');
createButton('salvar-tarefas', 'Salvar Tarefas');
createButton('remover-selecionado', 'Remover Seleção');
createButton('remover-finalizados', 'Limpar Completos');

// 10- implementa função button apagar tudo;

function buttonRemoveAll() {
  const button = document.querySelector('#apaga-tudo');
  button.addEventListener('click', function () {
    const list = document.querySelector('ol#lista-tarefas');
    const listElements = document.querySelectorAll('ol#lista-tarefas li');
    for (let index = 0; index < listElements.length; index += 1) {
      list.removeChild(listElements[index]);
      localStorage.removeItem(index);
    }
  });
}
buttonRemoveAll();

function buttonRemoveCompletedTasks() {
  const button = document.querySelector('#remover-finalizados');
  button.addEventListener('click', function () {
    const list = document.querySelector('ol#lista-tarefas');
    const listElements = document.querySelectorAll('ol#lista-tarefas li');
    for (let index = 0; index < listElements.length; index += 1) {
      if (listElements[index].className === 'completed') {
        list.removeChild(listElements[index]);
      }
    }
  });
}
buttonRemoveCompletedTasks();

function buttonSaveTaskList () {
  const button = document.querySelector('#salvar-tarefas');
  button.addEventListener('click', function () {
    const listElements = document.querySelectorAll("ol#lista-tarefas li");
    for (let index = 0; index < listElements.length; index += 1) {
      localStorage.setItem(index, listElements[index].innerText)
    }
  });
}
buttonSaveTaskList ();

window.addEventListener('load', function () {
  const list = document.querySelector('ol#lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const newElement = document.createElement('li');
    newElement.innerText = localStorage.getItem(index);
    list.appendChild(newElement);
  }
});
