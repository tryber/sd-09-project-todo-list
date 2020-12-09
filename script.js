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

function setTaskDone() {
  const orderedList = document.querySelector('ol');
  orderedList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

setTaskDone();

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

function removeCompletedTask(taskArray) {
  for (const task of taskArray) {
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
