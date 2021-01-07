/*https://github.com/tryber/sd-09-project-todo-list/pull/106 
https://github.com/tryber/sd-09-project-todo-list*/

const inputTextoTarefa = document.querySelector('#texto-tarefa');
const buttonApagar = document.querySelector('#apaga-tudo')
const buttonCriarTarefas = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function receberTexto() {
  const listaLi = document.createElement('li');
  listaLi.innerText = inputTextoTarefa.value;
  listaTarefas.appendChild(listaLi);
  inputTextoTarefa.value = '';
}
buttonCriarTarefas.addEventListener('click', receberTexto);

listaTarefas.addEventListener('click', function (event) {
  let listTarefa = document.querySelectorAll('li');
  for (let index = 0; index < listTarefa.length; index += 1) {
    if (listTarefa[index].classList.contains('backgroundCinza')) {
      listTarefa[index].classList.remove('backgroundCinza');
    }
  }
  event.target.classList.add('backgroundCinza');
});


listaTarefas.addEventListener('dblclick', function (event) {
  let riscTarefa = document.querySelectorAll('li');
  for(let index = 0; index < riscTarefa.length; index += 1){
    if (riscTarefa[index].classList.contains('completed')) {
    riscTarefa[index].remove('listaTarefa');
    }
  }
  event.target.classList.add('completed');
  
});
  
//função que substitui o botao reset
function apagarElementos() {
  let apagarElemento = document.querySelectorAll('li');
  for(let index = 0; index < apagarElemento.length; index +=1){
    apagarElemento[index].remove('li');
  }
}
buttonApagar.addEventListener('click', apagarElementos)