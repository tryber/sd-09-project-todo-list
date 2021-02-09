//Iniciando a pagina
function coachStart() {
  const hello = document.querySelector('#hello');
  hello.innerText = `Não seja vagabundo,
  e coloque algo aqui,
  desgraça!`;
  return hello;
}

function coach(){
  const hello = document.querySelector('#hello');
  hello.innerText = `Criou coragem e escreveu!
  agora, é deixar de corpo mole!`;
  return hello;
}

function coachSpace() {
  const orderedList = document.getElementById('lista-tarefas');
  if(orderedList.childElementCount === 1) {
    coachStart();
  } else {
    coach();
  }
}

onload = coachSpace();

// Criar a lista de tarefas

function creatSchedule() {
  if (document.getElementById('texto-tarefa').value === '' || document.getElementById('texto-tarefa').value === null) {
    alert('Ai não dá, filhão!')
  } else {
    coach();
    const write = document.getElementById('texto-tarefa').value;
    const orderedList = document.getElementById('lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = write;
    orderedList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
  }
  select();
  line();
}

const btnTask = document.getElementById('criar-tarefa');
btnTask.addEventListener('click', creatSchedule);


//Seleção de tarefa
function deselect() {
  document.querySelectorAll('.selected').forEach((element) => {
  element.classList.remove('selected')});
}

function greyMark(focusTask) {
  deselect();
  const taskselected = focusTask.target;
  taskselected.classList.add('selected');
}

function select(){
  const scheduleList = document.querySelectorAll('li');
  scheduleList.forEach((element) => {element.addEventListener('click', greyMark)});
}
//Marcar como feito
function lineMark(markTask) {
  const taskselected = markTask.target;
  taskselected.classList.toggle('task-complete');
}

function line(){
  const scheduleList = document.querySelectorAll('li');
  scheduleList.forEach((element) => {element.addEventListener('dblclick', lineMark)});
}

//Limpar lista

function clear() {
  const btnClear = document.getElementById('apaga-tudo');
  btnClear.addEventListener('click', () => {
    document.querySelectorAll('li').forEach((element) => {
    element.remove()})
  })
}

clear();

