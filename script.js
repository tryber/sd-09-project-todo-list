let task;

let addButton = document.querySelector('#criar-tarefa');
let taskList = document.querySelector('#lista-tarefas');
let clearAllBtn = document.querySelector('#apaga-tudo');
let removeDone = document.querySelector('#remover-finalizados');

addButton.addEventListener('click', () => {
  task = document.querySelector('#texto-tarefa').value;
    
  let listItem = document.createElement('li')
  listItem.innerText = task;
  listItem.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
  listItem.addEventListener('dblclick', (e) => {
    e.target.classList.contains('completed') ?    
    e.target.classList = '' :      
    e.target.classList = 'completed'
  })
  document.querySelector('#texto-tarefa').value = '';
  document.querySelector('#texto-tarefa').focus();
  taskList.appendChild(listItem);
});

clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = ''
})
