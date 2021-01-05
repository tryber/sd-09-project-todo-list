//javascripts source
//https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
//https://www.youtube.com/watch?v=XF1_MlZ5l6M&ab_channel=WebDevSimplified
//https://www.youtube.com/watch?v=y17RuWkWdn8&t=890s&ab_channel=WebDevSimplified
//https://www.w3schools.com/jsref/met_node_removechild.asp
function addTask() {
  const addBtn = document.getElementById('criar-tarefa');
  addBtn.addEventListener('click', function () {
    const textSource = document.querySelector('#texto-tarefa').value;
    const addLine = document.createElement('li');
    const todoList = document.querySelector('#lista-tarefas');
    document.getElementById('texto-tarefa').value = '';
    addLine.innerText = textSource;
    addLine.className = 'line';
    todoList.appendChild(addLine);
  });
}
addTask();

function clear() {
  const clearBtn = document.getElementById('apaga-tudo');
  clearBtn.addEventListener('click', function () {
    const list = document.querySelector('#lista-tarefas');
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
}
clear();
function selected() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('click', function (event) {
    const items = document.querySelectorAll('.line');
    if (event.target.className.indexOf('selected') === -1) {
      for (let index = 0; index < items.length; index += 1) {
        items[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    } else {
      event.target.classList.remove('selected');
    }
  });
}
selected();

function complete() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('dblclick', function (event) {
    if (event.target.className.indexOf('completed') === -1) {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  });
}
complete();
