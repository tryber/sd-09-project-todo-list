window.onload = function() {
function clearInputButton(buttonName) {
  const botao = document.getElementById('input-box');
  const newButton = document.createElement('button');
  const newButtonID = 'criar-tarefa';
  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  botao.appendChild(newButton);
  }
  clearInputButton('Adicionar');

  
const bttn = document.getElementById('criar-tarefa');

function bttnCriarTarefa() {
  const input = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const addLi = document.createElement('li');
  addLi.innerText = input;
  lista.appendChild(addLi);
  document.getElementById('texto-tarefa').value = '';
}
  
  bttn.addEventListener('click', bttnCriarTarefa);
}
