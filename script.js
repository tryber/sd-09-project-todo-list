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
    addLine.className = 'li';
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
function paintGray() {
  const list = document.querySelector('ol');
  list.addEventListener('click', (event) => {
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i += 1) {
      li[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}