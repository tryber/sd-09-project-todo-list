// 1- adiciona <header> e conteudo "Minha Lista de Tarefas"
// 2- adiciona <p.funcionamnto> com conteuro "Clique duas..."
// 3- add <input>
function insertForm() {
  const elementHolder = document.querySelector('.input-session')
  let newForm = document.createElement('form');
  let newLabel = document.createElement('label');
  let newInput = document.createElement('input');
  let newButton = document.createElement('button');
  newForm.id = 'input-bar';
  newLabel.for = 'data-inserted';
  newInput.id = 'texto-tarefa'
  newInput.type = 'text';
  newButton.innerText = 'Adicionar tarefa';
  newButton.id = 'criar-tarefa';
  newForm.appendChild(newLabel);
  newForm.appendChild(newInput);
  newForm.appendChild(newButton);
  elementHolder.appendChild(newForm);
}
insertForm()