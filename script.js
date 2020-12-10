window.onload = function() {
  const tasksList = document.getElementById('lista-tarefas');

  //Criar lista de tarefas
  // function createNewElementList() {
  //   const createTaskButton = document.getElementById('criar-tarefa');

  //   createTaskButton.addEventListener('click', function() {
  //     const taskTextInput = document.getElementById('texto-tarefa');
  //     const newTask = document.createElement('li');
  //     newTask.innerText = taskTextInput.value;
  //     newTask.classList.add('task');
  //     tasksList.appendChild(newTask);
  //     taskTextInput.value = '';
  //   });
  // }
  function createNewElementList(content, completed) {    
      const newTask = document.createElement('li');
      newTask.innerText = content;
      newTask.classList.add('task');
      if (completed) newTask.classList.add('completed');
      tasksList.appendChild(newTask);
  }

  function addTaskButton() {
    const createTaskButton = document.getElementById('criar-tarefa');
    
    createTaskButton.addEventListener('click', function() {
      const taskTextInput = document.getElementById('texto-tarefa');
      const textTask = taskTextInput.value;
      if (textTask) createNewElementList(textTask);
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
  function taskCompleteCheckAndDescheck() {
    tasksList.addEventListener('dblclick', function(event) {
      const taskCompleted = event.target;
      if (taskCompleted.classList.contains('completed')) taskCompleted.classList.remove('completed');
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

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  function saveItensTaskLocalStorage() {
    const saveTaskButton = document.querySelector('#salvar-tarefas');
    
    saveTaskButton.addEventListener('click', function() {
      const allTasks = document.getElementsByClassName('task');
      let allTasksArray = [];
      for (let index = 0; index < allTasks.length; index +=1) {
        const task = allTasks[index].innerText;
        const completed = allTasks[index].classList.contains('completed');
        const nameTask = {
          task,
          completed,
        };
        allTasksArray[index] = nameTask;
      }
      let allTasksString = JSON.stringify(allTasksArray);
      localStorage.setItem('taskList', allTasksString);
    });
  }

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
  function restoreItensTaskToList() {
    let savededLocalStorage = localStorage.getItem('taskList');
    savededLocalStorage =  JSON.parse(savededLocalStorage);

    if (savededLocalStorage.length > 0) {
      for (let item of savededLocalStorage) {
        createNewElementList(item.task, item.completed);
      }
    }
  }

  addTaskButton();
  selectTaskItem();
  taskCompleteCheckAndDescheck();
  clearAllTasks();
  clearCompletedTaskd();
  saveItensTaskLocalStorage();
  restoreItensTaskToList();
}
