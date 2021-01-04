// hiddenBox message function
function hiddenBox() {
  const divContainerMenssage = document.querySelector('.feedback-message');
  let opacity = 100;
  setInterval(function (event) {
    if (opacity <= 0) {
      clearInterval(event);
    } else {
      opacity -= 1;
      divContainerMenssage.style.opacity = `${opacity / 100}`;
    }
  }, 10);
}

// FeedBack Message
function feedBackMessage(textMessage) {
  const divContainerMenssage = document.querySelector('.feedback-message');
  divContainerMenssage.innerHTML = textMessage;
  let opacity = 0;
  setInterval(function (event) {
    if (opacity >= 100) {
      clearInterval(event);
    } else {
      opacity += 1;
      divContainerMenssage.style.opacity = `${opacity / 100}`;
    }
  }, 10);
  setTimeout(hiddenBox, 3000);
}

// Create Btn Delete selected
function createBtnDelete() {
  const btnDelete = document.createElement('button');
  const iconTrash = document.createElement('span');
  btnDelete.setAttribute('id', 'remover-selecionado');
  btnDelete.setAttribute('class', 'action-btn white-color');
  iconTrash.setAttribute('class', 'fas fa-trash');
  btnDelete.appendChild(iconTrash);
  return btnDelete;
}

// Select task
function addIconTrash(task) {
  if (task.classList.contains('selected')) {
    const btnDelete = createBtnDelete();
    task.appendChild(btnDelete);
  }
}

// Remove Selected
function removeSelected(itemSelected) {
  const list = itemSelected.parentElement;
  const btnDeleteSelected = document.querySelector('#remover-selecionado');
  if (!btnDeleteSelected) {
    return;
  }
  btnDeleteSelected.addEventListener('click', function () {
    list.removeChild(itemSelected);
    feedBackMessage('Tarefa apagada com sucesso');
  });
}

// Change Background
function selectedElement(event) {
  const taskElements = document.querySelectorAll('.task');
  taskElements.forEach((task) => {
    if (task.classList.contains('selected')) {
      task.classList.remove('selected');
      task.removeChild(task.firstElementChild);
    }
  });
  // add class selected
  event.target.classList.add('selected');
  // add icon Trash for delete item selected
  addIconTrash(event.target);
  // function for remove item selected
  removeSelected(event.target);
}

// Delete Tasks Completed
function removeCompleted() {
  const btnDeleteComplete = document.querySelector('#remover-finalizados');
  const list = document.querySelector('#lista-tarefas');
  btnDeleteComplete.addEventListener('click', function () {
    for (let index = 0; index < list.childElementCount; index += 1) {
      if (list.childNodes[index].classList.contains('completed')) {
        list.removeChild(list.childNodes[index]);
      }
    }
    feedBackMessage('Tarefas completas removidas!');
  });
}

// Mark Completed task
function taskCompleted(event) {
  event.target.classList.toggle('completed');
  removeCompleted();
}

// Change position Task
function changePositionEngine(list, operator, prevItem, positionInitial) {
  let operation = 0;
  const taskSelected = list.childNodes[positionInitial];
  const textItemSelected = list.childNodes[positionInitial].innerText;
  const textItemOfChange = prevItem.innerText;
  // Obtem a operação dependendo do operador passado pela função moveUp ou moveDown
  switch (operator) {
    case '-': operation = positionInitial - 1; break;
    case '+': operation = positionInitial + 1; break;
    // no default
  }
  // Verificando quem está marcado como completo e ai mudar para posição correta
  if (taskSelected.classList.contains('completed') && !prevItem.classList.contains('completed')) {
    taskSelected.classList.toggle('completed');
    prevItem.classList.toggle('completed');
    removeCompleted();
  } else if (prevItem.classList.contains('completed')) {
    taskSelected.classList.add('completed');
    prevItem.classList.remove('completed');
    removeCompleted();
  }
  // Faz a troca. O anterior com o posterior (caso moveUp) e vice-versa (moveDown)
  list.childNodes[operation].innerText = textItemSelected;
  list.childNodes[positionInitial].innerText = textItemOfChange;
  list.childNodes[operation].classList.add('selected');
  list.childNodes[positionInitial].classList.remove('selected');
}

// Move Up Task
function moveUp(list) {
  const btnUp = document.querySelector('#mover-cima');
  btnUp.addEventListener('click', function () {
    for (let index = 0; index < list.childElementCount; index += 1) {
      if (list.childNodes[index].classList.contains('selected')) {
        const prevItem = list.childNodes[index - 1];
        if (!prevItem) {
          return;
        }
        changePositionEngine(list, '-', prevItem, index);
        addIconTrash(list.childNodes[index - 1]);
        removeSelected(list.childNodes[index - 1]);
      }
    }
  });
}

// Move Down Task
function moveDown(list) {
  const btnDown = document.querySelector('#mover-baixo');
  btnDown.addEventListener('click', function () {
    for (let index = 0; index < list.childElementCount; index += 1) {
      if (list.childNodes[index].classList.contains('selected')) {
        const nextItem = list.childNodes[index + 1];
        if (!nextItem) {
          return;
        }
        changePositionEngine(list, '+', nextItem, index);
        addIconTrash(list.childNodes[index + 1]);
        removeSelected(list.childNodes[index + 1]);
        return;
      }
    }
  });
}

// Create Task in list
function createTaskElement(taskName) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';
  taskElement.innerText = taskName;
  taskElement.addEventListener('click', selectedElement);
  taskElement.addEventListener('dblclick', taskCompleted);
  return taskElement;
}

// Save List in Local Storage
function saveList(list) {
  const btnSave = document.querySelector('#salvar-tarefas');
  const tasks = list.childNodes;
  btnSave.addEventListener('click', function () {
    const textInnerTask = [];
    const taskPositionCompleted = [];
    for (let index = 0; index < tasks.length; index += 1) {
      textInnerTask.push(tasks[index].innerText);
      if (tasks[index].classList.contains('completed')) {
        taskPositionCompleted.push(index);
      }
    }
    // Deleta os dados antigos (caso exista) antes de setar novos
    localStorage.removeItem('tasks');
    localStorage.removeItem('tasksCompletedPosition');
    // Salva as alterações
    localStorage.setItem('tasks', JSON.stringify(textInnerTask));
    localStorage.setItem('tasksCompletedPosition', JSON.stringify(taskPositionCompleted));
    feedBackMessage('Lista salva com sucesso!');
  });
}

// Get Items of Local Storage
function getItemsOfLocalStorage(list) {
  const valuesTextTask = JSON.parse(localStorage.getItem('tasks'));
  const positionsTaskCompleted = JSON.parse(localStorage.getItem('tasksCompletedPosition'));
  if (!valuesTextTask || !positionsTaskCompleted) {
    return;
  }
  for (let index = 0; index < valuesTextTask.length; index += 1) {
    const taskElemetOld = createTaskElement(valuesTextTask[index]);
    if (positionsTaskCompleted.indexOf(index) >= 0) {
      taskElemetOld.classList.add('completed');
      // Chamada da função de remover as completas - Para adcionar o evento inicialmente.
      removeCompleted();
    }
    list.appendChild(taskElemetOld);
  }
}

// Add task in list
function addTaskInlist(button, inputText, taskList) {
  button.addEventListener('click', function () {
    const valueInput = inputText.value;
    if (!valueInput) {
      alert('Por favor, digite uma tarefa');
      return;
    }
    const taskElement = createTaskElement(valueInput);
    taskList.appendChild(taskElement);
    inputText.value = '';
  });
}

// Delete All Tasks
function deleteAllTasks(taskList) {
  const btnDeleteAll = document.querySelector('#apaga-tudo');
  btnDeleteAll.addEventListener('click', function () {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    feedBackMessage('Lista apagada com sucesso!');
  });
}

window.onload = function () {
  const textTaskInput = document.querySelector('#texto-tarefa');
  const buttonAddTask = document.querySelector('#criar-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  getItemsOfLocalStorage(taskList);
  addTaskInlist(buttonAddTask, textTaskInput, taskList);
  deleteAllTasks(taskList);
  // function move up item selected
  moveUp(taskList);
  moveDown(taskList);
  saveList(taskList);
};
