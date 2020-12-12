const text = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const list = document.createElement('li');
list.className = 'todo-list';

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
addTask();

function chamgeBackgroudColorOfList() {
  orderedList.addEventListener('click', function (event) {
    if (event.target.className === 'lista-de-tarefas') {
      event.target.style.backgroundColor = 'rgb(228, 250, 228)';
    }else if(list.classList.contains('todo-list')) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}
chamgeBackgroudColorOfList();