const inputFirst = document.querySelector('#texto-tarefa'); //  input
const createAssingnment = document.getElementById('criar-tarefa'); //  button
const listAssingnment = document.getElementById('lista-tarefas'); //  Ol

// ----
function backInput(item) {
  const selectedOnOf = document.querySelector('.selected');
  if (selectedOnOf != null) {
    selectedOnOf.classList.remove('selected');
  }
  item.classList.add('selected');
}

function lineThrough(item) {
  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
  item.classList.add('completed');
  }
}

function ativaInput() {
    const listLi = document.createElement('li');
    listLi.innerHTML = inputFirst.value;
    listAssingnment.appendChild(listLi);
    listLi.className = 'list-input';
    inputFirst.value = null;

  listLi.addEventListener('click', function() {
  backInput(listLi);
 })
  listLi.addEventListener('dblclick', function() {
  lineThrough(listLi);
 })
}
createAssingnment.addEventListener('click', ativaInput);

// ----

function deleteLista () {
  const list = document.getElementsByTagName('li');
  const elements = list.length - 1;
  for (let index = elements; index >= 0; index -= 1) {
    list[index].remove();
  }
  localStorage.clear();
}
const btnDelete = document.querySelector('#apaga-tudo');
btnDelete.addEventListener('click', deleteLista);
