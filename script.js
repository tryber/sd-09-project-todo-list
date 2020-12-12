document.getElementById('criar-tarefa').addEventListener('click', function () {
  const task1 = document.querySelector('input').value;
  const li = document.createElement('li');
  document.querySelector('input').value = '';
  li.innerText = task1;
  document.getElementById('lista-tarefas').appendChild(li);
})

function paintItem() {
  let taskList = document.getElementById('lista-tarefas');
  taskList.addEventListener('click', function (event) {
    const getList = document.getElementsByTagName('li');
    for (let i = 0; i < getList.length; i++) {
      getList[i].style.backgroundColor = ''
    }
    if (event.target.style.backgroundColor == '') {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

paintItem();

function completeTask() {
  let taskList = document.getElementById('lista-tarefas');
  taskList.addEventListener('dblclick', function(event) {
    if ( event.target.classList.contains('completed') === true ) {
      event.target.classList.remove('completed');
     } else {
      event.target.classList.add('completed');
    }
  });
}

completeTask();

function clearAll() {
  const clear = document.getElementById('apaga-tudo');
  const taskList = document.getElementById('lista-tarefas');
  clear.addEventListener('click', function() {
    const listArray = document.getElementsByTagName('li');
    for (let i = 0; i < listArray.length; i += 1) {
      taskList.removeChild(listArray[i]);
    }
  });
}

clearAll();
