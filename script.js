const listaDeTarefas = document.querySelector('#lista-tarefas');
const textInput = document.querySelector('#texto-tarefa');
const botao = document.querySelector('button');
const botao2 = document.querySelectorAll('button')[1];
const botao3 = document.querySelectorAll('button')[2];

// limpa o texto digitado na caixa de texto
function limpaTexto() {
  if (textInput.value) {
    textInput.value = '';
  }
}

// limpa elemento com class color
function limpaClassItem() {
  const itensLista = listaDeTarefas.childNodes;
  for (let index = 0; index < itensLista.length; index += 1) {
    const elementoItem = itensLista[index];
    if (elementoItem.classList.contains('color')) {
      elementoItem.classList.remove('color');
    }
  }
}

// busca elemento e muda nome da classe para color
function trocaFundoItemLista() {
  const itensLista = listaDeTarefas.childNodes;
  for (let index = 0; index < itensLista.length; index += 1) {
    const elementoItem = itensLista[index];
    elementoItem.addEventListener('click', function (event) {
      limpaClassItem();
      event.target.classList.toggle('color');
    });
  }
}

// remove item com a classe completed
function removeItemCompleto() {
  const selectedClass = document.querySelectorAll('.completed');
  for (let index = 0; index < selectedClass.length; index++) {
    const element = selectedClass[index];
    if (element) {
      element.remove();
    }
  }
}

// cria uma lista ordenada dentro de ol
function itemLista() {
  const listaTarefa = document.createElement('li');
  listaTarefa.innerText = textInput.value;
  listaDeTarefas.appendChild(listaTarefa);
  limpaTexto();
  trocaFundoItemLista();
}

// funcao para riscar um item da lista que ja foi completado
function riscaItem(event) {
  const selecionarItem = document.querySelector('.completed');
  const tarefaSelecionada = event.target;
  tarefaSelecionada.classList.toggle('completed');
}
listaDeTarefas.addEventListener('dblclick', riscaItem);

// remove itens da lista
function apagaLista() {
  while (listaDeTarefas.firstChild) {
    listaDeTarefas.removeChild(listaDeTarefas.firstChild);
  }
}

window.onload = function () {
  botao.addEventListener('click', itemLista);
  botao2.addEventListener('click', apagaLista);
  botao3.addEventListener('click', removeItemCompleto);
};
