const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', botaoCriarTarefa);

function botaoCriarTarefa() {
  const getList = document.getElementById('lista-tarefas');
  let getInputValue = document.getElementById('texto-tarefa').value;
  const newList = document.createElement('li');
  getList.appendChild(newList);
  newList.innerText = getInputValue;
  document.getElementById('texto-tarefa').value = ''
}