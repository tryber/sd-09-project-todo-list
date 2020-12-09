// 1- adiciona <header> e conteudo "Minha Lista de Tarefas"
// 2- adiciona <p.funcionamnto> com conteuro "Clique duas..."
// 3- add <input>
function insertForm() {
  const elementHolder = document.querySelector('.input-session')
  const newForm = document.createElement('form');
  const newLabel = document.createElement('label');
  const newInput = document.createElement('input');
  const newButton = document.createElement('button');
  newForm.id = 'input-bar';
  newLabel.for = 'data-inserted';
  newInput.id = 'texto-tarefa';
  newInput.name = 'tarefa';
  newInput.type = 'text';
  newButton.innerText = 'Adicionar tarefa';
  newButton.id = 'criar-tarefa';
  newForm.appendChild(newLabel);
  newForm.appendChild(newInput);
  newForm.appendChild(newButton);
  elementHolder.appendChild(newForm);
}
insertForm();

// 4- inserir Lista Ordenada
function insertTaskOrderedList() {
  const elementHolder = document.querySelector('.tasks');
  const newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  elementHolder.appendChild(newOl);
}
insertTaskOrderedList();

// 5-
function clickAddTask() {
  const form = document.getElementById('input-bar');
  const taskList = document.querySelector('#lista-tarefas');
  form.addEventListener('submit', function (event) {
    let taskItem = document.createElement('li');
    const taskRead = event.target.tarefa.value;
    taskItem.innerText = taskRead;
    taskList.appendChild(taskItem);
    sessionStorage.setItem(sessionStorage.length, taskRead);
  });
}
clickAddTask();

// busca e povoa a OL com itens do session storage (window-load)
window.addEventListener('load', function () {
  const taskList = document.querySelector('#lista-tarefas');
  for (let index = 0; index < sessionStorage.length; index += 1){
    let taskItem = document.createElement('li');
    taskItem.innerText = sessionStorage.getItem(index);
    taskList.appendChild(taskItem);
  }
});
