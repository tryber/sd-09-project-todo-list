function createTask () {
  const button = document.querySelector('.button');
  const inputText = document.querySelector('.inputText');
  const father = document.querySelector('.taskList');
  button.addEventListener('click', function () {
    const task = document.createElement('li');
    task.innerText = inputText.value;
    father.appendChild(task);
    inputText.value = '';
  });
}
createTask();
