function clickAddTask() {
  const form = document.getElementById('input-bar');
  const taskList = document.querySelector('#lista-tarefas');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let taskItem = document.createElement('li');
    const taskRead = event.target.tarefa.value;
    taskItem.innerText = taskRead;
    taskList.appendChild(taskItem);
    event.target.tarefa.value = '';
  });
}
clickAddTask();


