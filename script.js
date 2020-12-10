// 5
function clickAddTask() {
  const form = document.getElementById('input-bar');
  const taskOlList = document.querySelector('#lista-tarefas');
  const taskLiItems = taskOlList.children;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let taskItem = document.createElement('li');
    const taskRead = event.target.tarefa.value;
    taskItem.innerText = taskRead;
    taskItem.addEventListener('click', function (eventT) {
      for (let index = 0; index < taskLiItems.length; index += 1) {
        taskLiItems[index].style.backgroundColor = '';
      }
      eventT.target.style.backgroundColor = 'rgb(128, 128, 128)';
    })
    taskOlList.appendChild(taskItem);
    event.target.tarefa.value = '';
  });
}
clickAddTask();
