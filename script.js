function greybackground() {
  const list2 = document.querySelectorAll('.list');
  for (let index = 0; index < list2.length; index += 1) {
    list2[index].addEventListener('click', function () {
      for (let index2 = 0; index2 < list2.length; index2 += 1) {
        list2[index2].classList.remove('greyBackground');
      }
      list2[index].classList.add('greyBackground');
    });
  }
}

function createItemList() {
  const buttom = document.getElementById('criar-tarefa');
  const list = document.getElementById('lista-tarefas');
  buttom.addEventListener('click', function () {
    const createItem = document.createElement('li');
    createItem.classList.add('list');
    const imputText = document.getElementById('texto-tarefa').value;
    list.appendChild(createItem);
    const textBox = document.getElementById('texto-tarefa');
    createItem.innerText = imputText;
    textBox.value = '';
    greybackground();
  });
}

function eraseAll() {
  const erase = document.getElementById('apaga-tudo');
  const list = document.getElementById('lista-tarefas');
  erase.addEventListener('click', function () {
    list.innerText = '';
  });
}

function dblclick() {
  const list = document.querySelector('ol');
  list.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
    //Outra opção mais simples:: event.target.classList.toggle('completed'); 
  });
}

function removeEnded() {
  const buttom = document.getElementById('remover-finalizados');
  buttom.addEventListener('click', function () {
    const list = document.getElementsByTagName('li');
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].classList.contains('completed')) {
        list[index].remove();
        index = index - 1;
      }
    }
  });
}

function removeSelected() {
  const buttom = document.getElementById('remover-selecionado');
  buttom.addEventListener('click', function () {
    const list = document.getElementsByTagName('li');
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].classList.contains('greyBackground')) {
        list[index].remove();
      }
    }
  });
}

window.onload = function () {
  createItemList();
  dblclick();
  eraseAll();
  removeEnded();
  removeSelected();
};
