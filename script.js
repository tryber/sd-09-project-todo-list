const btnCreateLi = document.querySelector('#criar-tarefa');
const captureOl = document.querySelector('#lista-tarefas');
const newTaskText = document.querySelector('#texto-tarefa');

function makeLi(content) {
  const li = document.createElement('li');
  li.innerText = content;
  li.classList.add('task');
  captureOl.appendChild(li);
}

function clickBtn() {
  const newTaskValue = newTaskText.value;
  if (newTaskValue) makeLi(newTaskValue);
  newTaskText.value = '';
}

btnCreateLi.addEventListener('click', clickBtn);

function taskSelector(event) {
  const selectedClass = document.querySelector('.selected');
  const targetTask = event.target;
  if (selectedClass !== null) {
    selectedClass.classList.remove('selected');
  }
  targetTask.classList.add('selected');
}

function getSelector() {
  captureOl.addEventListener('click', taskSelector);
}

getSelector();
