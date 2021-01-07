const botao = document.querySelector('button');
const botao2 = document.querySelectorAll('button')[1];
const botao3 = document.querySelectorAll('button')[2];

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

function criarLista() {
  const secaoOl = document.querySelector('.ol');
  const newList = document.createElement('ol');
  newList.id = 'lista-tarefas';
  secaoOl.appendChild(newList);
}
criarLista();

function criarBotao(tarefa) {
  const newTask = document.querySelector('button');
  newTask.id = tarefa;
  newTask.innerHTML = 'Adicionar';
}
criarBotao('criar-tarefa');

// limpa o o texto digitado na caixa de texto
function limpaTexto() {
  const textInput = document.querySelector('#texto-tarefa');
  if (textInput.value !== '') {
    textInput.value = '';
  }
}

// limpa elemento com class color
function pegaItem() {
  const itensLista = document.querySelector('#lista-tarefas').childNodes;
  for (let index = 0; index < itensLista.length; index += 1) {
    const elementoItem = itensLista[index];
    if (elementoItem.classList.contains('color')) {
      elementoItem.classList.remove('color');
    }
  }
}

// funcao para selecionar elemento da lista com acao de click
function trocaFundoItemLista() {
  const itensLista = document.querySelector('#lista-tarefas').childNodes;
  for (let index = 0; index < itensLista.length; index += 1) {
    const elementoItem = itensLista[index];
    elementoItem.addEventListener('click', function (event) {
      pegaItem();
      event.target.classList.toggle('color');
    });
  }
}

function removeItemCompleto() {
  const filhosDeOl = document.querySelector('#lista-tarefas').childNodes;
  for (let index = 0; index < filhosDeOl.length; index += 1) {
    const lis = filhosDeOl[index];
    if (lis.classList.contains('completed')) {
      lis.remove();
    } 
  }
}

// cria botao remover item
function criaBotaoRemove() {
  botao3.id = 'remover-finalizados';
  botao3.innerText = 'Remover Item';
}
criaBotaoRemove();

// cria uma lista ordenada dentro de ol
function itemLista() {
  const item = document.querySelector('#lista-tarefas');
  const textInput = document.querySelector('#texto-tarefa');
  const listaTarefa = document.createElement('li');
  listaTarefa.innerText = textInput.value;
  item.appendChild(listaTarefa);
  limpaTexto();
  trocaFundoItemLista();
  botao3.addEventListener('click', removeItemCompleto);
}
botao.addEventListener('click', itemLista);

// funcao para riscar um item da lista que ja foi completado
const listaDeTarefas = document.querySelector('#lista-tarefas');
function riscaItem(event) {
  const selecionarItem = document.querySelector('.completed');
  const tarefaSelecionada = event.target;
  if (selecionarItem !== null) {
    tarefaSelecionada.classList.remove('completed');
  } else {
    tarefaSelecionada.classList.add('completed');
  }
}
listaDeTarefas.addEventListener('dblclick', riscaItem);

window.onload = function criaBotaoApagar() {
  botao2.id = 'apaga-tudo';
  botao2.innerText = 'Apagar Lista';
};

// remove itens da lista
function apagaLista() {
  while (listaDeTarefas.firstChild) {
    listaDeTarefas.removeChild(listaDeTarefas.firstChild);
  }
}
botao2.addEventListener('click', apagaLista);
