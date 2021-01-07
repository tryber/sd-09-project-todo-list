let task;

let addButton = document.querySelector('#criar-tarefa');
let taskList = document.querySelector('#lista-tarefas');
let clearAllBtn = document.querySelector('#apaga-tudo');

addButton.addEventListener('click', () => {
  task = document.querySelector('#texto-tarefa').value;
    
  let listItem = document.createElement('li')
  listItem.innerText = task;
  listItem.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)'
  })
  listItem.addEventListener('dblclick', (e) => {
    e.target.style.textDecoration = 'line-through'
  })
  document.querySelector('#texto-tarefa').value = '';
  document.querySelector('#texto-tarefa').focus();
  taskList.appendChild(listItem);
});
