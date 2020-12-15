const btnAdd = document.querySelector('#criar-tarefa');
const olList = document.getElementById('lista-tarefas');
// const olList = document.querySelector('#lista-tarefas');
let selected = false;

function createLi() {
  const liList = document.createElement('li');
  const inputAdd = document.querySelector('#texto-tarefa');
  liList.innerText = inputAdd.value;
  olList.appendChild(liList);
  inputAdd.value = '';
}

function liSelected() {
  for (let i = 0; i < olList.children.length; i += 1) {
    if (olList.children[i].className !== 'selected') {
      olList.children[i].style.backgroundColor = 'white';
      console.log('passei aqui')
    } else {
      olList.children[i].style.backgroundColor = 'rgb(128 , 128 , 128)';
    }
  }
}

function oneClick(event) {
  let item = event.target;
  if (selected === true) {

    let selectedItem = document.querySelector('.selected');
    // selectedItem.className -= 'selected';
    selectedItem.className += '';
    // selectedItem.style.backgroundColor = 'white';
    // console.log(typeof(selectedItem))
    console.log(olList.children.length);
    liSelected();

  }
  selected = true;
  item.className += 'selected';
  item.style.backgroundColor = 'rgb(128 , 128 , 128)';
  // console.log(item);
}

function dbClick(event) {
  let selectedItem = document.querySelector('.selected');
  let completedItem = document.querySelector('.completed');
  let item = event.target;
  if (item.className === 'completed') {
    item.className -= 'completed';

  }
  selectedItem.style.backgroundColor = 'white';
  item.className = 'selected completed';

}

window.onload = function() {
  btnAdd.addEventListener('click', createLi);
  olList.addEventListener('click', oneClick);
  olList.addEventListener('dblclick', dbClick);

}
