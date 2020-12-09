const botao = document.querySelector('#criar-tarefa').addEventListener('click', botaoCriarTarefa);
let indexList = 0;

function botaoCriarTarefa() {
  const getList = document.getElementById('lista-tarefas');
  const getInputValue = document.getElementById('texto-tarefa').value;
  const newList = document.createElement('li');
  getList.appendChild(newList);
  newList.innerText = getInputValue;
  document.getElementById('texto-tarefa').value = '';
  listChildrens = getList.children;
  listChildrens[indexList].addEventListener('click', coloringBackgroundListItens);
  indexList += 1;
}

function coloringBackgroundListItens(event) {
  let actualColoredItem = event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
}




