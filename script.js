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
  let task = document.getElementsByClassName('task');
  console.log(task);
  const color = 'rgb(128, 128, 128)';
  for (let index = 0; index < task.length; index += 1) {
    task[index].addEventListener('click', function (event) {
      console.log('oi')
      console.log(event.target);
      event.target.style.backgroudColor = color;
    });
  }
}
changeColorTask();