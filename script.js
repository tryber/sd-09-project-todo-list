function main (){
  createItemList();
}

function createItemList () {
  const buttom = document.getElementById('criar-tarefa');
  const list = document.getElementById('lista-tarefas');
  const generateItemByClick = buttom.addEventListener('click', function () {
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

function greybackground () {
  const list2 = document.querySelectorAll('.list');
  for (let index = 0; index < list2.length; index += 1) {
    list2[index].addEventListener('click', function() {
    list2[index].style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

window.onload = function () {
  main();
};
