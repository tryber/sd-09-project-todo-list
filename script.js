// Botão Adicionar
document.querySelector('#criar-tarefa').addEventListener('click', function (event) {
  let tarefa = document.querySelector('#texto-tarefa');

  const elementHTML = document.createElement('li');
  elementHTML.innerText = tarefa.value;
  document.querySelector('#lista-tarefas').appendChild(elementHTML);

  tarefa.value = '';
  tarefa.focus();
  // return elementHTML;
});