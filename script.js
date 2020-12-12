function addTask() {
  const text = document.querySelector('#texto-tarefa');
  const button = document.querySelector('#criar-tarefa');
  const orderedList = document.querySelector('#lista-tarefas');
  
  button.addEventListener('click', function () {
    if(text.value === '') {
      alert('[ERRO!] - Digite algum valor!');
    } else {
      const list = document.createElement('li');
      list.className = 'todo-list'
      orderedList.appendChild(list);
      list.innerText = text.value;
      text.value = '';
    }
  });
}
addTask();

function chamgeBackgroudColorOfList() {
  const list = document.querySelector('#lista-tarefas')
  list.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
  });
}
chamgeBackgroudColorOfList();