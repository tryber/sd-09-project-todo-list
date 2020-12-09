function createListItem(inputValue) {
  const li = document.createElement('li');
  li.innerText = inputValue;
  return li
}

function addTask() {
  const myButton = document.querySelector('button');
  myButton.addEventListener('click', () => {
    const myTaskList = document.querySelector('ol');
    let inputLine = document.querySelector('input');
    if(inputLine.value === '') {
      return
    }
    const li = createListItem(inputLine.value);
    myTaskList.appendChild(li);
    inputLine.value = '';
  });
}

addTask();

function setTaskColor () {
  const orderedList = document.querySelector('ol');
  orderedList.addEventListener('click', (event) => {
    const myList = document.querySelectorAll('li');
    for (const item of myList) {
      item.style.background = 'white';
    }
    event.target.style.background = 'rgb( 128 , 128 , 128)';
  })
}

setTaskColor();
