const btnCreateTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const newTaskText = document.querySelector('#texto-tarefa');
const deleteAll = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');

function makeLi(content) {
  const li = document.createElement('li');
  li.innerText = content;
  li.classList.add('task');
  taskList.appendChild(li);
}

function clickBtn() {
  const newTaskValue = newTaskText.value;
  if (newTaskValue) makeLi(newTaskValue);
  newTaskText.value = '';
}

btnCreateTask.addEventListener('click', clickBtn);
newTaskText.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    clickBtn();
  }
});


function taskSelector(event) {
  const selectedClass = document.querySelector('.selected');
  const targetTask = event.target;
  if (selectedClass !== null) {
    selectedClass.classList.remove('selected');
  }
  targetTask.classList.add('selected');
}

taskList.addEventListener('click', taskSelector);

function mkLineTrough(event) {
  const lineTarget = event.target;
  lineTarget.classList.toggle('completed');
}

taskList.addEventListener('dblclick', mkLineTrough);

function removeAllChild() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

deleteAll.addEventListener('click', removeAllChild);

function deleteAllCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
}

deleteCompleted.addEventListener('click', deleteAllCompleted);

function saveTasks() {
  const tasks = document.querySelectorAll('.task');
  localStorage.clear();
  for (let index = 0; index < tasks.length; index += 1) {
    localStorage.setItem(index, JSON.stringify([tasks[index].innerText, tasks[index].className]));
  }
}

btnSaveTasks.addEventListener('click', saveTasks);

window.onload = function () {
  for (let index = 0; index < localStorage.length; index += 1) {
    const storageValue = JSON.parse(localStorage.getItem(index));
    const li = document.createElement('li');
    li.innerText = storageValue[0];
    li.className = storageValue[1];
    taskList.appendChild(li);
  }
};

function deleteSelected() {
  const selectedLi = document.querySelector('.selected');
  selectedLi.remove();
}

document.querySelector('#remover-selecionado').addEventListener('click', deleteSelected);
