const listaOrdenada = document.querySelector('#lista-tarefas');
const inputBox = document.querySelector('#texto-tarefa');
const addbutton = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');
const removeButton = document.querySelector('#apaga-tudo');
const removeDoneButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');

function recriaLista() {
  if (localStorage.length !== 0) {
    for(let index = 0; index < localStorage.length; index += 1) {
      let li = document.createElement('li');
      let conteudo = localStorage.getItem(index);
      conteudo = conteudo.split(',')
      li.innerText = conteudo[0];
      li.classList = conteudo[1];
      olList.appendChild(li)
    }
  }
}
recriaLista();

function reciveInputText() {
  addbutton.addEventListener('click', function () {
    const text = inputBox.value;
    const li = document.createElement('li');
    li.className = 'itensDaLista';
    listaOrdenada.appendChild(li);
    li.innerText = text;
    inputBox.value = '';
  });
}
reciveInputText();

function changeLiBackgroundColor() {
  olList.addEventListener('click', function (event) {
    const list = document.querySelectorAll('li');
    for (const item of list) {
      item.classList.remove('selected')
    }
    event.target.classList.add('selected');
  });
}
changeLiBackgroundColor();

function lineThroughList() {
  listaOrdenada.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}
lineThroughList();

function removeAllListItens() {
  removeButton.addEventListener('click', function () {
    const listItens = document.querySelectorAll('.itensDaLista');
    for (let index = 0; index < listItens.length; index += 1) {
      olList.removeChild(listItens[index]);
    }
  });
}
removeAllListItens();

function removeDoneListItens() {
  removeDoneButton.addEventListener('click', function () {
    const doneItens = document.querySelectorAll('.completed');
    for (const item of doneItens)
      olList.removeChild(item);
  });
}
removeDoneListItens();

function saveList() {
  saveButton.addEventListener('click', function () {
    let listas = document.querySelectorAll('li');
    for(let index = 0; index < listas.length; index +=1) {
      let arrayValorClasses = [];
      arrayValorClasses.push(listas[index].innerHTML);
      arrayValorClasses.push(listas[index].className);
      localStorage.setItem(index, arrayValorClasses);
    }
  });
}
saveList();

function moveUpItem() {
  moveUpButton.addEventListener('click', function () {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem !== null) {
      const selectedClass = selectedItem.classList.value;
      const selectedText  = selectedItem.innerHTML
      if (selectedItem.previousElementSibling) {
        const previusClass = selectedItem.previousElementSibling.classList.value;
        const previusText = selectedItem.previousElementSibling.innerHTML;
        selectedItem.innerHTML = previusText;
        selectedItem.previousElementSibling.innerHTML = selectedText;
        selectedItem.previousElementSibling.className = selectedClass;
        selectedItem.className = previusClass;
      }
    };
  });
}
moveUpItem();

function moveDownItem() {
  moveDownButton.addEventListener('click', function () {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem !== null) {
      const selectedClass = selectedItem.classList.value;
      const selectedText  = selectedItem.innerHTML
      if (selectedItem.nextElementSibling) {
        const previusClass = selectedItem.nextElementSibling.classList.value;
        const previusText = selectedItem.nextElementSibling.innerHTML;
        selectedItem.innerHTML = previusText;
        selectedItem.nextElementSibling.innerHTML = selectedText;
        selectedItem.nextElementSibling.className = selectedClass;
        selectedItem.className = previusClass;
      }
    };
  });
}
moveDownItem();