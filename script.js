// 9- click change bgcolor to gray
function changeBGSelectedItems(elementHtml) {
  const taskLiItems = document.querySelector('#lista-tarefas').children;
  elementHtml.addEventListener('click', function (eventT) {
  for (let index = 0; index < taskLiItems.length; index += 1) {
    taskLiItems[index].style.backgroundColor = '';
  }
  eventT.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

// 9- click apply/remove text-decoration

function markupTasks(elementHtml) {
  elementHtml.addEventListener('dblclick', function (event) {    
    if (event.target.className === '') {
      event.target.className = 'completed';
    } else {
      event.target.className = '';
    } 
  });
}

// 5

function clickAddTask() {
  const form = document.getElementById('input-bar');
  const taskOlList = document.querySelector('#lista-tarefas');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskItem = document.createElement('li');
    const taskRead = event.target.tarefa.value;
    taskItem.innerText = taskRead;
    if (taskRead === '') {
      return;
    }
    taskOlList.appendChild(taskItem);
    event.target.tarefa.value = '';
    changeBGSelectedItems(taskItem); //add the eventlistener click change bgcolor to gray
    markupTasks(taskItem); //add eventlistener click apply/remove text-decoration
  });
}
clickAddTask();
