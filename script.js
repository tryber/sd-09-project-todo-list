function criaTarefa() {
  let tarefa = document.querySelector('#texto-tarefa');
  let lista = document.querySelector('#lista-tarefas');
  let itemLista = document.createElement('li');
  itemLista.innerHTML = tarefa.value;
  itemLista.className = 'item';
  lista.appendChild(itemLista)
  tarefa.value = "";
}

function apagarTudo() {
  let apagaTudo = document.querySelectorAll('.item');
  for (i = 0; i < apagaTudo.length; i += 1) {
    apagaTudo[i].remove();
  }
}

let adicTarefa = document.querySelector('#criar-tarefa');
adicTarefa.addEventListener('click', criaTarefa);

let apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.addEventListener('click', apagarTudo);

let lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', changeColor);
lista.addEventListener('dblclick', risk);

function risk(event) {
  event.target.classList.toggle('completed');
}

function changeColor(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)'
  //classList.toggle('selecao');
}

let finalizados = document.querySelector('#remover-finalizados');
let complet = document.querySelectorAll('.completed');
finalizados.addEventListener('click', apagarFinalizados);

function apagarFinalizados(){
  for (i = 0; i < complet.length; i += 1) {
      complet[i].remove();
  }
}

