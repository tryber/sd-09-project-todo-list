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
  for (let index = 0; index < itensLista.length; index+=1) {
    const elementoItem = itensLista[index];
    if (elementoItem.classList.contains('color')) {
      elementoItem.classList.remove('color');
    }
  }
}

// funcao para selecionar elemento da lista com acao de click
function trocaFundoItemLista() {
  const itensLista = document.querySelector('#lista-tarefas').childNodes;
  for (let index = 0; index < itensLista.length; index+=1) {
    const elementoItem = itensLista[index];
    elementoItem.addEventListener('click', function (event) {
      pegaItem();
      event.target.classList.toggle('color');
    });
  }
}

// cria uma lista ordenada dentro de ol
const botao = document.querySelector('button');
function itemLista() {
  const item = document.querySelector('#lista-tarefas');
  const textInput = document.querySelector('#texto-tarefa');
  const listaTarefa = document.createElement('li');
  listaTarefa.innerText = textInput.value;
  item.appendChild(listaTarefa);
  limpaTexto();
  trocaFundoItemLista();
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
