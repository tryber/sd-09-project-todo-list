function criaTarefa() {
  const tarefa = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const itemLista = document.createElement('li');
  itemLista.innerHTML = tarefa.value;
  itemLista.className = 'item';
  lista.appendChild(itemLista)
  tarefa.value = '';
}
const adicTarefa = document.querySelector('#criar-tarefa');
adicTarefa.addEventListener('click', criaTarefa);

function apagarTudo() {
  let apagaTudo = document.querySelectorAll('.item');
  for (let i = 0; i < apagaTudo.length; i += 1) {
    apagaTudo[i].remove();
  }
}

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

let finalizados = document.querySelector('#remover-selecionado');
finalizados.addEventListener('click', apagarSelecionados);

function apagarSelecionados() {
  const final= document.querySelectorAll('.selecao');
  for (let index = 0; index < final.length; index += 1) {
    final[index].remove();
  }
}




