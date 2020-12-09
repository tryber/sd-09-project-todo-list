// Requisitos 5 & 6
function createListItem(inputValue) {
  const li = document.createElement('li');
  li.innerText = inputValue;
  return li;
}

function addTask() {
  const myButton = document.querySelector('button');
  myButton.addEventListener('click', () => {
    const myTaskList = document.querySelector('ol');
    const inputLine = document.querySelector('input');
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
    event.target.style.background = 'rgb( 128 , 128 , 128)';
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
