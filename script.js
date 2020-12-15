//const inputFirst = document.querySelectorAll('#texto-tarefa'); //  input
//const createAssingnment = document.getElementById('criar-tarefa'); //  button
//const listAssingnment = document.getElementById('lista-tarefas'); //  Ol

//  REQUISITO 5
function ativaInput () {
  if (inputFirst !== undefined) {
    const listLi = document.createElement('li');
    listLi.innerHTML = inputFirst.value;
    listAssingnment.appendChild(listLi);
    inputFirst.value = null;
  }
}
const inputFirst = document.querySelector('#texto-tarefa'); //  input
const listAssingnment = document.getElementById('lista-tarefas'); //  Ol
const createAssingnment = document.getElementById('criar-tarefa'); //  button
createAssingnment.addEventListener('click', ativaInput);
