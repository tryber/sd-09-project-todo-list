function createTask() {
  const button = document.querySelector('.button');
  const inputText = document.querySelector('.inputText');
  const father = document.querySelector('.taskList');
  button.addEventListener('click', function () {
    const task = document.createElement('li');
    task.innerText = inputText.value;
    task.className = 'task'
    father.appendChild(task);
    inputText.value = '';
  });
}
createTask();

function changeColorTask() {
  let taskList = document.querySelector('.taskList');
  let color = 'rgb(128, 128, 128)';
  taskList.addEventListener('click', function (event) {
    event.target.style.backgroundColor = color;
    });
  }
  changeColorTask();
