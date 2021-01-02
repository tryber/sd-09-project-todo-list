const main = document.querySelector('body');

function criaParagrafo(textString) {
  const paragraph = document.querySelector('p');
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = textString;
}
criaParagrafo('Clique duas vezes em um item para marcá-lo como completo.');

function caixaTexto(idString) {
  const newInput = document.querySelector('input');
  newInput.id = idString;
}
caixaTexto('texto-tarefa');

function criarLista(listString) {
  const newList = document.querySelector('ol');
  newList.id = listString;
}
criarLista('lista-tarefas');

function criarBotao(tarefa) {
  const newTask = document.querySelector('button');
  newTask.id = tarefa;
  newTask.innerHTML = 'Adicionar';
}
criarBotao('criar-tarefa');

function limpaTexto() {
  const textInput = document.querySelector('#texto-tarefa');
  if(textInput.value !== '') {
    textInput.value = '';
  }
}
// function trocaFundoItemLista() {
//   const itensLista = document.querySelector('#lista-tarefas').childNodes;
//   for (let index = 0; index < itensLista.length; index++) {
//     const elementoItem = itensLista[index];
//     elementoItem.addEventListener('click', function(event){
//       pegaItem();
//       console.log(elementoItem);
//         event.target.classList.toggle('color');
//     })
//   }
// }

// function pegaItem() {
//   const itensLista = document.querySelector('#lista-tarefas').childNodes;
//   for (let index = 0; index < itensLista.length; index++) {
//     const elementoItem = itensLista[index];
//     if (elementoItem.classList.contains('color')) {
//       elementoItem.classList.remove('color');
//     }
//   }
// }

const listaDeTarefas = document.querySelector('#lista-tarefas');
function selecionarTarefa(event) {
  const selecionarItem = document.querySelector('.color');
  const tarefaSelecionada = event.target;
  if (selecionarItem !== null) {
    selecionarItem.classList.remove('color');
  } else {
    tarefaSelecionada.classList.add('color');
  }
}
listaDeTarefas.addEventListener('click', selecionarTarefa);

const botao = document.querySelector('button');
function itemLista() {
  const item = document.querySelector('#lista-tarefas');
  const textInput = document.querySelector('#texto-tarefa');
  const listaTarefa = document.createElement('li');
  listaTarefa.innerHTML = textInput.value;
  item.appendChild(listaTarefa);
  limpaTexto();
  // trocaFundoItemLista();
}
botao.addEventListener('click', itemLista);
