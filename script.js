function createTask() {
  const button = document.querySelector('.button');
  const inputText = document.querySelector('.inputText');
  const father = document.querySelector('.taskList');
  button.addEventListener('click', function () {
    const task = document.createElement('li');
    task.innerText = inputText.value;
    task.className = 'task';
    father.appendChild(task);
    inputText.value = '';
  });
}
createTask();
function removeColorTask() {
  const taskList = document.querySelectorAll('.task');
  for (let index = 0; index < taskList.length; index += 1) {
    if (taskList[index].style.backgroundColor !== 'white') {
      taskList[index].style.backgroundColor = 'white';
    }
  }
}
function changeColorTask() {
  const taskList = document.querySelector('.taskList');
  const color = 'rgb(128, 128, 128)';
  taskList.addEventListener('click', function (event) {
    removeColorTask();
    event.target.style.backgroundColor = color;
  });
}
changeColorTask();
function addCompleted() {
  const taskList = document.querySelector('.taskList');
  taskList.addEventListener('dblclick', function (event) {
    if (event.target.className === 'task completed') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
addCompleted();
function clearAll() {
  const button = document.querySelector('.buttonClear');
  const list = document.querySelector('.taskList');
  button.addEventListener('click', function () {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
}
clearAll();
function clearCompleted() {
  const button = document.querySelector('.clearCompleted');
  button.addEventListener('click', function () {
    const list = document.querySelectorAll('.completed');
    for (let index = 0; index < list.length; index += 1) {
      list[index].remove();
    }
  });
}
clearCompleted();
