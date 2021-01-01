function criaTarefa() {
  const tarefa = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const itemLista = document.createElement('li');
  itemLista.innerHTML = tarefa.value;
  itemLista.className = 'item';
  lista.appendChild(itemLista)
  tarefa.value = '';
}

function apagarTudo() {
  let apagaTudo = document.querySelectorAll('.item');
  for (let i = 0; i < apagaTudo.length; i += 1) {
    apagaTudo[i].remove();
  }
}

const adicTarefa = document.querySelector('#criar-tarefa');
adicTarefa.addEventListener('click', criaTarefa);

const apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.addEventListener('click', apagarTudo);

const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', changeColor);
lista.addEventListener('dblclick', risk);

function risk(event) {
  event.target.classList.toggle('completed');
}

function changeColor(event) {
  event.target.classList.toggle('selecao');
}

let finalizados = document.querySelector('#remover-finalizados');
finalizados.addEventListener('click', apagarFinalizados);

function apagarFinalizados() {
  const completos= document.querySelectorAll('.completed');
  for (let index = 0; index < completos.length; index += 1) {
    completos[index].remove();
  }
}

