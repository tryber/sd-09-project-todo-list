const singleInput = document.querySelector('#texto-tarefa'); //  input
const createTaskButton = document.getElementById('criar-tarefa'); //  button
const orderedList = document.getElementById('lista-tarefas'); //  Ol
const eraseButton = document.querySelector('#apaga-tudo');
const removeFinished = document.querySelector('#remover-finalizados');
const saveTask = document.querySelector('#salvar-tarefas');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');
const removeSelected = document.querySelector('#remover-selecionado');

// 
const listSave = localStorage.getItem('lista');
orderedList.innerHTML = listSave;

//  REQUISITO 12 - Save

function saveList () {
  //localStorage.clear();
  localStorage.setItem('lista', orderedList.innerHTML);
}
saveTask.addEventListener('click', saveList);

// 7, 8 e 9
function backInput(item) {
  const selectOnOff = document.querySelector('.selected');
 if (selectOnOff !== null) {
    selectOnOff.classList.remove('selected');
  }
  item.classList.add('selected');
}

//----

function lineThough (item) {
    item.classList.toggle('completed');
}

// 5 e 6
function activeInput () {
  const list = document.createElement('li');
  if (singleInput.value < 1) {
    Swal.fire({
      title: 'Preencha o campo de Input corretamente!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  } else {
    list.innerHTML = singleInput.value;
    orderedList.appendChild(list);
    singleInput.value = '';
  }
  list.addEventListener('click', function(){
    backInput(list);
  })
  list.addEventListener('dblclick', function(){
    lineThough(list);
  })
}
createTaskButton.addEventListener('click', activeInput);

// 10
function deleteList () {
  orderedList.innerHTML = '';
}
eraseButton.addEventListener('click', deleteList);

// 11
function removeItensCompleted () {
  //localStorage.clear();
  const list = document.querySelectorAll('li');
  const lastElement = list.length - 1;
  for (let index = lastElement; index >= 0; index -= 1) {
    if (list[index].classList.contains('completed')) {
      list[index].remove();
    }
  }
}
removeFinished.addEventListener('click', removeItensCompleted);

// 14
function removeItensSelected () {
  const list = document.getElementsByClassName('selected')[0];
  if (list.classList.contains('selected')) {
    list.remove();
  }
}
removeSelected.addEventListener('click', removeItensSelected);

