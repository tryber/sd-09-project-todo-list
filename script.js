window.onload = function() {
  let todoList = document.getElementById('lista-tarefas');
  const tasksList = document.getElementById('lista-tarefas');

  //Criar lista de tarefas
  function createNewElementList() {
    const createTaskButton = document.getElementById('criar-tarefa');

    createTaskButton.addEventListener('click', function() {
      const taskTextInput = document.getElementById('texto-tarefa');
      const newTask = document.createElement('li');
      newTask.innerText = taskTextInput.value;
      tasksList.appendChild(newTask);
      taskTextInput.value = '';
    });
  }

  function changeBackgroundColorTaskItem() {
    tasksList.addEventListener('click', function(event) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }

  createNewElementList();
  changeBackgroundColorTaskItem();

}
