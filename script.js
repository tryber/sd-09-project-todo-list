

function criaTarefa(){
  let tarefa  = document.querySelector('#texto-tarefa');
  let lista = document.querySelector('#lista-tarefas');
  let itemLista = document.createElement('li');
  itemLista.innerHTML = tarefa.value;
  lista.appendChild(itemLista)
  tarefa.value = " ";
 }

 
let adicTarefa= document.querySelector('#criar-tarefa');
adicTarefa.addEventListener('click', criaTarefa);
