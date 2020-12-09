function createListItem(inputValue) {
  const li = document.createElement('li');
  li.innerText = inputValue
  return li
}

function addTask() {
  const myButton = document.querySelector('button');
  myButton.addEventListener('click', () => {
    const myTaskList = document.querySelector('ol');
    let inputLine = document.querySelector('input');
    const li = createListItem(inputLine.value)
    myTaskList.appendChild(li);
    inputLine.value = '';
  });
}

addTask();
