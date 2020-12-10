// Requisitos 5 & 6
function createListItem(inputValue) {
  const li = document.createElement('li');
  li.innerText = inputValue;
  return li;
}

function getDataFromStorage() {
  const myOrderedList = document.querySelector('ol');
  for (let key = 0; key < localStorage.length; key += 1) {
    const li = createListItem(localStorage[key].split('.')[0]);
    if (localStorage[key].split('.')[1] === 'completed') {
      li.className = 'completed';
    }
    myOrderedList.appendChild(li);
  }
}

getDataFromStorage();

function addTask() {
  const myButton = document.querySelector('button');
  const inputLine = document.querySelector('input');
  inputLine.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      if (inputLine.value.trim() === '') {
        return;
      }
      const myTaskList = document.querySelector('ol');
      const li = createListItem(inputLine.value);
      myTaskList.appendChild(li);
      inputLine.value = '';
    }
  });

  myButton.addEventListener('click', () => {
    const myTaskList = document.querySelector('ol');
    if (inputLine.value === '') {
      return;
    }
    const li = createListItem(inputLine.value);
    myTaskList.appendChild(li);
    inputLine.value = '';
  });
}

addTask();

// Requisitos 7 & 8
function setItemWhiteColor(array) {
  for (const item of array) {
    item.style.background = 'white';
  }
}

function setTaskColor() {
  const orderedList = document.querySelector('ol');
  orderedList.addEventListener('click', (event) => {
    const myList = document.querySelectorAll('li');
    setItemWhiteColor(myList);
    event.target.style.background = 'rgb(128 , 128 , 128)';
  });
}

setTaskColor();

// Requisito 9
function setTaskDone() {
  const orderedList = document.querySelector('ol');
  orderedList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

setTaskDone();

// Requisito 10
function deleteItem(array) {
  for (const item of array) {
    item.remove();
  }
}

function deleteTaskList() {
  const myButton = document.querySelector('#apaga-tudo');
  myButton.addEventListener('click', () => {
    const itemsList = document.querySelectorAll('li');
    return deleteItem(itemsList);
  });
}

deleteTaskList();

// Requisito 11
function removeCompletedTask(taskArray) {
  for (let index = 0; index < taskArray.length; index += 1) {
    document.querySelector('.completed').remove();
  }
}

function deleteCompletedTasks() {
  const myButton = document.querySelector('#remover-finalizados');
  myButton.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.completed');
    removeCompletedTask(completedTasks);
  });
}

deleteCompletedTasks();

// Bonus

// Requisito 12
function myTaskObject() {
  const taskList = document.querySelectorAll('li');
  const taskObject = {};
  for (let indexElement = 0; indexElement < taskList.length; indexElement += 1) {
    taskObject[indexElement] = `${taskList[indexElement].innerText}.${taskList[indexElement].classList}`;
  }
  localStorage.clear();
  for (const key in taskObject) {
    localStorage.setItem(key, taskObject[key]);
  }
}

function saveTheData() {
  const myButton = document.querySelector('#salvar-tarefas');
  myButton.addEventListener('click', () => {
    myTaskObject();
  });
}

saveTheData();

// Requisito 13
function moveTaskUp(selectedTask, myList) {
  if (selectedTask.previousElementSibling) {
    return myList.insertBefore(selectedTask, selectedTask.previousElementSibling);
  }
}

function moveTaskDown(selectedTask, myList) {
  if (selectedTask.nextElementSibling) {
    return myList.insertBefore(selectedTask, selectedTask.nextElementSibling.nextElementSibling);
  }
}

function verifySelectedTask(selectedTask) {
  const taskArray = document.querySelectorAll('li');
  for (const element of taskArray) {
    if (element.style.background === 'rgb(128, 128, 128)') {
      selectedTask = element;
    }
  }
  return selectedTask
}

function moveSelectedTask() {
  const upButton = document.querySelector('#mover-cima');
  const downButton = document.querySelector('#mover-baixo');
  upButton.addEventListener('click', () => {
    const myList = document.querySelector('ol');
    const selectedTask = verifySelectedTask();
    if (selectedTask) {
      moveTaskUp(selectedTask, myList);
    }
  });
  downButton.addEventListener('click', () => {
    const myList = document.querySelector('ol');
    const selectedTask = verifySelectedTask();
    if (selectedTask) {
      moveTaskDown(selectedTask, myList);
    }
  });
}

moveSelectedTask();

// Requisito 14
function deleteTaskSelected() {
  const myButton = document.querySelector('#remover-selecionado');
  myButton.addEventListener('click', () => {
    const taskList = document.querySelectorAll('li');
    for (const selectedTask of taskList) {
      if (selectedTask.style.backgroundColor === 'rgb(128, 128, 128)') {
        selectedTask.remove();
      }
    }
  });
}

deleteTaskSelected();
