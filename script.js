const buttonTasks = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');

function addTasks(event) {
  const olTaskList = document.querySelector('#lista-tarefas');
  const lengthValue = document.querySelector('#texto-tarefa').value.length;
  const enter = lengthValue > 0 && event.keyCode === 13;
  const click = lengthValue > 0 && event.target.id === 'criar-tarefa';
  if (enter || click) {
    const textTasks = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerText = textTasks.value;
    olTaskList.appendChild(li);
    textTasks.value = '';
  }
}
buttonTasks.addEventListener('click', addTasks);
input.addEventListener('keyup', addTasks);

function itemSelected() {
  const olTaskList = document.querySelector('ol#lista-tarefas');
  olTaskList.addEventListener('click', function (event) {
    const li = event.target;
    const list = document.querySelector('.selectedList');
    if (list) {
      list.classList.remove('selectedList');
    }
    li.classList.add('selectedList');
  });
}
itemSelected();


const btnClearList = document.querySelector('#apaga-tudo');
function removeList() {
  btnClearList.addEventListener('click', function () {
    const olLi = document.querySelectorAll('ol li');
    const ol = document.querySelector('ol');
    for (let indexClear = 0; indexClear < olLi.length; indexClear +=1) {
      ol.removeChild(olLi[indexClear]);
  }
});
}
removeList();

function DoubleClick() {
  const ol = document.querySelector('ol#lista-tarefas');
  ol.addEventListener('dblclick', function (event) {
    const dlb = event.target;
    if (dlb.className.includes('completed')) {
      dlb.classList.remove('completed');
    } else {
      dlb.classList.add('completed');
    }
  });
}
DoubleClick();

function removeFinished() {
  const btnRemoveFinished = document.querySelector('#remover-finalizados');
  btnRemoveFinished.addEventListener('click', function () {
    const olLi = document.querySelectorAll('ol li');
    const ol = document.querySelector('ol');
    for (let index = 0; index < olLi.length; index += 1) {
      if (olLi[index].className.includes('completed')) {
        ol.removeChild(olLi[index]);
      }
    }
  });
}
removeFinished();
