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
    addLine.className = 'linha';
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
  const todoList = document.querySelector('#lista-tarefas');
  todoList.addEventListener('click', function (event) {
    const allList = document.querySelectorAll('.linha');
    if (event.target.className.indexOf('selecionado') === -1) {
      for (let index = 0; index < allList.length; index += 1) {
        allList[index].classList.remove('selecionado');
      }
      event.target.classList.add('selecionado');
    } else {
      event.target.classList.remove('selecionado');
    }
  });
}
selected();
