// cria as tarefas
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
adicTarefa.addEventListener('keyup', criaTarefa);

//apaga todas as tarefas
function apagarTudo() {
  let apagaTudo = document.querySelectorAll('.item');
  for (let i = 0; i < apagaTudo.length; i += 1) {
    apagaTudo[i].remove();
  }
}

const apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.addEventListener('click', apagarTudo);

// seleciona as tarefas completadas com um risco
const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('dblclick', risk);

function risk(event) {
  event.target.classList.toggle('completed');
}

//apaga as tarefas finalizadas
let finalizados = document.querySelector('#remover-finalizados');
finalizados.addEventListener('click', apagarFinalizados);

function apagarFinalizados() {
  const finaliz = document.querySelectorAll('.completed');
  for (let index = 0; index < finaliz.length; index += 1) {
    finaliz[index].remove();
  }
}

//seleciona as tarefas
let lista1 = document.querySelector('#lista-tarefas')
lista1.addEventListener('click', changeColor);

function changeColor(event) {
  let selecionado = document.querySelectorAll('.selecao');
  for (let i = 0; i < selecionado.length; i += 1) {
    selecionado[i].classList.remove('selecao');
  }
  event.target.classList.add('selecao')
}


//remove a tarefa selecionada
let selecionados = document.querySelector('#remover-selecionado');
selecionados.addEventListener('click', apagarSelecionados);

function apagarSelecionados() {
  const sele = document.querySelectorAll('.selecao');
  for (let index = 0; index < sele.length; index += 1) {
    sele[index].remove();
  }
}

let up = document.getElementById('mover-cima');
let listTarefas1 = document.querySelectorAll('li')
up.addEventListener('click', subir);

function subir() {
  for (let i = 1; i < listTarefas1.length; i++) {
    for (let j = 0; j < i; j++) {
      if (listTarefas1[i] < listTarefas1[j]) {
        let position = listTarefas1[i];

        listTarefas1[i] = listTarefas1[j];
        listTarefas1[j] = position;
      }
    }
  }

}
//https://www.w3schools.com/js/js_json_intro.asp 
// a parte do object espiei do projeto do gabriel garcia 
let saved = document.querySelector('#salvar-tarefas');
saved.addEventListener('click', salvarDados);


function salvarDados() {
  let listTarefasSalvar = document.querySelectorAll('li');
  let itensSalvos = [];
  for (let i = 0; i < listTarefasSalvar.length; i += 1) {
    itensSalvos.push({
      value: listTarefasSalvar[i].innerText,
      class: listTarefasSalvar[i].className,
    });
  }
  let myJSON = JSON.stringify(itensSalvos);
  localStorage.setItem("tasks", myJSON);
}

function loadPage() {
  const itensRecuperados = localStorage.getItem("tasks");
  let obj = JSON.parse(itensRecuperados);
  for (let i = 0; i < obj.length; i += 1) {

    const lista = document.querySelector('#lista-tarefas');
    const itemLista = document.createElement('li');
    itemLista.innerHTML = obj.value;
    itemLista.className = obj.class;
    lista.appendChild(itemLista)
  }
}

loadPage();