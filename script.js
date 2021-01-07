const bnt = document.getElementById("criar-tarefa");
let listElemnet = document.getElementsByTagName('li');
let list = document.getElementsByTagName('ol')[0];
const bntRmvComp = document.getElementById("remover-finalizados");
const bntRmvAll = document.getElementById("apaga-tudo");

function addONeListener(objeto, func) {
  objeto.addEventListener('click', func);
}

function addListenerOnLabel(func) {
  const label = document.getElementsByTagName('li');

  for (let index = 0; index < label.length; index += 1) {
    label[index].addEventListener('click', func);
    //console.log(label[index]);
  }
}

function addDbListener(obj, func) {
  for (let index = 0; index < obj.length; index += 1) {
    obj[index].addEventListener('dblclick', func);
    //console.log(label[index]);
  }
}

function addNew() {
  //let label = document.createElement('label');
  let taskContent = document.getElementById('texto-tarefa').value;
  let taskElement = document.createElement('li');
  let lista = document.getElementsByClassName('lista-tarefas')[0];

  taskElement.innerText = taskContent;
  //taskElement.appendChild(label);
  lista.appendChild(taskElement);

  clearInput('texto-tarefa');
  addListenerOnLabel(changeClassSelected);
  addDbListener(listElemnet, changeClassDone);
}

function clearInput(classe) {
  document.getElementById(classe).value = '';
}

function changeClassSelected(event) {
  let selected = document.querySelector('.selected');
  //console.log(selected);

  if (!selected) {
    event.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function changeClassDone(event) {
  //event.target.classList.add('done');
  let task = event.target;
  console.log(task.classList.length);

  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function removeComp(event) {
  for (let index = 0; index < listElemnet.length; index += 1) {
    if (listElemnet[index].classList.contains('completed')) {
      listElemnet[index].remove(listElemnet[index]);
    }
  }
}

function removeAll(event) {
  list.remove('list');
  let ol = document.createElement('ol');
  ol.classList.add('lista-tarefas');
  let principal = document.getElementById('principal');
  console.log(principal);
  principal.appendChild(ol);
}

addONeListener(bnt, addNew);
addONeListener(bntRmvComp, removeComp);
addONeListener(bntRmvAll, removeAll);
