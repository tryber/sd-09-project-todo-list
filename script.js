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
  const listLength = list2.length;
  for (let index = 0; index < list2.length; index += 1) {
    list2[index].addEventListener('click', function() {
      for (index2 =0; index2 < list2.length; index2 +=1) {
        list2[index2].classList.remove('greyBackground');
      }
      list2[index].classList.add('greyBackground');
    });
  }
}

window.onload = function () {
  main();
};
