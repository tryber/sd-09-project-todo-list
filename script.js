const btnAdd = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');


function createLi() {
  const liItem = document.createElement('li');
  const inputValue = document.querySelector('#texto-tarefa');
  liItem.textContent = inputValue.value;
  olList.appendChild(liItem);
  inputValue.value = '';
}

// console.log(inputValue.value);

function oneClick(event) {
  const liItem = event.target;
  const selected = document.querySelector('.selected');
  if (selected && liItem.className === 'selected completed') {
    console.log('selected and completed');
  } else if (selected && selected.className === 'selected completed') {
    selected.className = 'completed';
    if (liItem.className === 'completed') {
      liItem.className = 'selected completed';
    } else {
      liItem.className = 'selected';
    }
  } else if (selected) {
    selected.className = '';
    if (liItem.className === 'completed') {
      liItem.className = 'selected completed';
    } else {
      liItem.className = 'selected';
    }
  } else if (liItem.className === 'completed') {
    liItem.className = 'selected completed';
  } else {
    liItem.className = 'selected';
  }
}

function dbClick(event) {
  const liItem = event.target;
  if (liItem.className === 'selected completed') {
    liItem.className = 'selected';
    console.log('selected and completed');
  } else if (liItem.className === 'completed') {
    liItem.className = '';
  } else {
    liItem.className = 'completed';
  }
}



window.onload = function() {

  btnAdd.addEventListener('click', createLi);
  olList.addEventListener('click', oneClick);
  olList.addEventListener('dblclick', dbClick);



}