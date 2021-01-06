const botao = document.getElementById("criar-tarefa");
const list = document.getElementsByTagName('li');

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
  let lista = document.getElementById('lista-tarefas');

  taskElement.innerText = taskContent;
  //taskElement.appendChild(label);
  lista.appendChild(taskElement);

  clearInput('texto-tarefa');
  addListenerOnLabel(changeClassSelected);
  addDbListener(list, changeClassDone);
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

  if(task.classList.contains('done')) {
    task.classList.remove('done');
    console.log('remove');
  } else {
    task.classList.add('done');
    console.log('add');
  }  
}

addONeListener(botao, addNew);
