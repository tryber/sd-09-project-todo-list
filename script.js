function createTask() {
  const btnAddTask = document.querySelector('#criar-tarefa');
  btnAddTask.addEventListener('click', () => {
    const taskText = document.querySelector('#texto-tarefa');
    const task = document.createElement('li');

    task.innerText = taskText.value;
    document.querySelector('#lista-tarefas').appendChild(task);
    taskText.value = '';
  });
}
createTask();

function changeTaskColor() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', (event) => {
    for (let index = 0; index < taskList.childElementCount; index += 1) {
      taskList.children[index].style.backgroundColor = 'white';
    }
    const task = event.target;
    task.style.backgroundColor = 'rgb(128 , 128 , 128)';
  });
}
changeTaskColor();
