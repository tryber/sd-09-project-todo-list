const btnAdd = document.querySelector('#criar-tarefa');
const olList = document.getElementById('lista-tarefas');
let selected = false;

function createLi() {
  const liList = document.createElement('li');
  const inputAdd = document.querySelector('#texto-tarefa');
  liList.innerText = inputAdd.value;
  olList.appendChild(liList);
  inputAdd.value = '';
}

function selectItem(event) {
  let item = event.target;
  item.style.backgroundColor = 'rgb(128 , 128 , 128)';
  if (selected === true) {
    let selectedItem = document.querySelector('.selected');
    // let selectedItem = document.getElementsByClassName('selected');
    selectedItem.className = '';
    selectedItem.style.backgroundColor = 'white';
    console.log(typeof(selectedItem))
  }
  selected = true;
  item.className = 'selected';
  console.log(item);
}

window.onload = function() {
  btnAdd.addEventListener('click', createLi);
  olList.addEventListener('click', selectItem);
}
