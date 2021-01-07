const buttonPress = document.getElementById('criar-tarefa');
const inputField = document.getElementById('texto-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const buttonDelete = document.getElementById('apaga-tudo');
let list = document.getElementsByTagName('li');

buttonPress.addEventListener('click', function () {
  let appendToList = document.createElement('li');
  appendToList.classList.add('lista-tarefas');
  appendToList.innerText = inputField.value;
  appendToList.classList.add('toSelect');
  toDoList.appendChild(appendToList);
  inputField.value = '';
});
 
//Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
toDoList.addEventListener('click', function (event) {
  let itemSelect = document.querySelector('.selected');
  if (itemSelect) {
    itemSelect.classList.remove('selected');
  }
  event.target.classList.add('selected'); 
  //if (event.target.classList.contains('toSelect')) {
    //event.target.classList.remove('toSelect');
   // event.target.classList.add('selected'); //rgb 128
   // console.log("passei por aqui");
  // } else {
  //   event.target.classList.remove('selected'); //RGB 128
  //   event.target.classList.add('toSelect');
  // }
});

//buttonPress.addEventListener('dblclick', function () {
  
//});
  
buttonDelete.addEventListener('click', function () {
  for (index = list.length - 1; index >= 0; index -= 1) {
    list[index].parentNode.removeChild(list[index]);
  }
});
