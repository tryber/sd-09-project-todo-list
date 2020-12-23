/**
 * DESAFIO 05
 * 
 * CRIAR UM ELEMENTO DA TAG <button id="criar-tarefa">
criar uma variavel para acessar o id="criar-tarefa"da tag button
criar uma variavel para acessar o id="lista-tarefas" da tag ol
criar uma variavel para inserir uma tag <li> para adicionar o texto dentro da <ol>
fazer um clear up na caixa de texto
 */

function addInputText() {
  let getInput = document.querySelector("#texto-tarefa");
  //let getButton = document.querySelector('#criar-tarefa');
  let getOl = document.querySelector("#lista-tarefas");
  let createTagLi = document.createElement("li");

  if (getInput !== "") {
    createTagLi.innerText = getInput.value;
    getOl.appendChild(createTagLi);
    getInput.value = "";
  }
}
