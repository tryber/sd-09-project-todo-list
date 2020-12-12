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

function addTask() {
  button.addEventListener('click', function () {
    if(text.value === '') {
      alert('[ERRO!] - Digite algum valor!');
    } else {
      const list = document.createElement('li');
      list.className = 'todo-list';
      orderedList.appendChild(list);
      list.innerText = text.value;
      text.value = '';
    }
  });
}

function chamgeBackgroudColorOfList() {
  orderedList.addEventListener('click', function (event) {
    if (event.target.className === 'lista-de-tarefas') {
      event.target.style.backgroundColor = false;
    }else if(list.classList.contains('todo-list')) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

function todoCompleted() {
  orderedList.addEventListener('dblclick', function (event) {
    if (event.target.className === 'todo-list') {
      event.target.className = 'todo-list completed';
    } else if (event.target.className === 'todo-list completed') {
      event.target.className = 'todo-list';
    }
  });
}

function removeCheckedTasks() {
  removeTasks.addEventListener('click', function () {
    const orderedList = document.querySelectorAll('#lista-tarefas>li');
    for (let index = 0; index < orderedList.length; index += 1) {
      let listTask = orderedList[index];
      listTask.parentNode.removeChild(listTask);
    }
  });
}

window.onload = function () {
  addTask();
  chamgeBackgroudColorOfList();
  todoCompleted();
  removeCheckedTasks()
}
