const text = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const list = document.createElement('li');
list.className = 'todo-list';
const buttonsSection = document.querySelector('#buttons');
const removeTasks = document.createElement('button');
removeTasks.id = 'apaga-tudo';
removeTasks.innerHTML = 'Excluir Tudo';
buttonsSection.appendChild(removeTasks);
const removeChecked = document.createElement('button');
removeChecked.id = 'remover-finalizados';
removeChecked.innerHTML = 'Remover Concluídos';
buttonsSection.appendChild(removeChecked);
const saveTasks = document.createElement('button');
saveTasks.id = 'salvar-tarefas';
saveTasks.innerHTML = 'Salvar Tarefas';
buttonsSection.appendChild(saveTasks);

// Adiciona as tarefas
function addTask() {
  button.addEventListener('click', function () {
    if (text.value === '') {
      alert('[ERRO!] - Digite algum valor!');
    } else {
      const lists = document.createElement('li');
      lists.className = 'todo-list';
      orderedList.appendChild(lists);
      lists.innerText = text.value;
      text.value = '';
    }
  });
}

// Muda a cor de fundo da lista ao ser clicado
function chamgeBackgroudColorOfList() {
  orderedList.addEventListener('click', function (event) {
    if (event.target.className === 'lista-de-tarefas') {
      event.target.style.backgroundColor = '';
    } else if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }
  });
}

// Risca as tarefas clicadas duas vezes
function todoCompleted() {
  orderedList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

// Remove todas as tarefas
function removeAllTasks() {
  removeTasks.addEventListener('click', function () {
    const ulList = document.querySelectorAll('#lista-tarefas>li');
    for (let index = 0; index < ulList.length; index += 1) {
      const listTask = ulList[index];
      listTask.parentNode.removeChild(listTask);
    }
  });
}

// Remove as tarefas riscadas
function removeCheckedTasks() {
  removeChecked.addEventListener('click', function () {
    const listUl = document.querySelectorAll('#lista-tarefas>li');
    for (let index = 0; index < listUl.length; index += 1) {
      const checked = listUl[index];
      if (checked.className === 'todo-list completed') {
        checked.parentNode.removeChild(checked);
      }
    }
  });
}

// Salva as preferencias no localStorage
function saveAllTasks() {
  saveTasks.addEventListener('click', function () {
    const olList = document.querySelectorAll('.todo-list');
    const mylList = [];
    const classes = [];
    const myTasks = {
      mylList,
      classes,
    };
    for (let index = 0; index < olList.length; index += 1) {
      mylList.push(olList[index].innerHTML);
      classes.push(olList[index].classList.contains('completed'));
    }
    localStorage.setItem('myTodoList', JSON.stringify(myTasks));
  });
}
//########################################################################
saveAllTasks();
removeCheckedTasks();
removeAllTasks();
todoCompleted();
chamgeBackgroudColorOfList();
addTask();

// Ao recarregar a página as preferências são carregadas
window.onload = function () {
  const myTodo = JSON.parse(localStorage.getItem('myTodoList'));
  if (myTodo !== null && myTodo.mylList.length > 0) {
    for (let index = 0; index < myTodo.mylList.length; index += 1) {
      const savedList = document.createElement('li');
      savedList.innerHTML = myTodo.mylList[index];
      savedList.classList = 'todo-list';
      if (myTodo.classes[index] === true) {
        savedList.classList += ' completed';
      }
      orderedList.appendChild(savedList);
    }
  }
};
