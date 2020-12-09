window.onload = function() {
  const tasksList = document.getElementById('lista-tarefas');

  //Criar lista de tarefas
  function createNewElementList() {
    const createTaskButton = document.getElementById('criar-tarefa');

    createTaskButton.addEventListener('click', function() {
      const taskTextInput = document.getElementById('texto-tarefa');
      const newTask = document.createElement('li');
      newTask.innerText = taskTextInput.value;
      newTask.classList.add('task');
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
    });
  }

  // Risca task quando clicado 2x
  function taskComplete() {
    tasksList.addEventListener('dblclick', function(event) {
      const taskCompleted = event.target;
      const lastCompleted = document.querySelector('.completed');
      if (taskCompleted == lastCompleted) taskCompleted.classList.remove('completed');
      else taskCompleted.classList.add('completed');
    });
  }

  // Apaga todas as tasks
  function clearAllTasks() {
    const claerAllButton = document.querySelector('#apaga-tudo');
    
    claerAllButton.addEventListener('click', function() {
      const todoList = document.querySelector('#lista-tarefas');
      const allTasks = document.querySelectorAll('.task');
      
      for (let task of allTasks) {
        todoList.removeChild(task);
      }
    });
  }

  // Apaga os itens finalizados
  function clearCompletedTaskd() {
    const claerCompletedButton = document.querySelector('#remover-finalizados');
    
    claerCompletedButton.addEventListener('click', function() {
      const todoList = document.querySelector('#lista-tarefas');
      const completedTasks = document.querySelectorAll('.completed');
      
      for (let task of completedTasks) {
        todoList.removeChild(task);
      }
    });
  }

  createNewElementList();
  selectTaskItem();
  taskComplete();
  clearAllTasks();
  clearCompletedTaskd();
}
