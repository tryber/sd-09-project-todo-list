window.onload = function() {
  createItemList()
}

function createItemList() {
  const buttom = document.getElementById('criar-tarefa')
  const list = document.getElementById('lista-tarefas')
  const generateItem = buttom.addEventListener('click', function() {
    const createItem = document.createElement('li')
    list.appendChild(createItem)
    const imputText = document.getElementById('texto-tarefa').value;
    const textBox = document.getElementById('texto-tarefa');
    createItem.innerText = imputText;
    textBox.value = '';
  })
}

