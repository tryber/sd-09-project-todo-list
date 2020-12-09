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

  // Mudar cor de fundo ao selecionar elemento e selecionar o item
  function selectTaskItem() {
    tasksList.addEventListener('click', function(event) {
      const lastSelected = document.querySelector('.selected');
      let taskSelect = event.target;
      if(lastSelected) {
        lastSelected.classList.remove('selected');
        taskSelect.classList.add('selected');
      } else taskSelect.classList.add('selected');
      // selectTaskItem(taskSelect);
    });
  }

  // function selectTaskItem(task) {
  //   const lastSelected = document.querySelector('.selected');
  //   if(lastSelected) {
  //     lastSelected.classList.remove('selected');
  //     task.classList.add('selected');
  //   } else task.classList.add('selected');
  // }

  createNewElementList();
  selectTaskItem();

}
