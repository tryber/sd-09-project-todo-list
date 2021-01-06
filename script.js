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
  console.log(task.classList[0]);

  if (task[0] = 'selected') {
    console.log(task.classList)
    task.classList.add('done');
  }
  if(task[1] = 'done') {
    task.classList.remove('done');
}

}

addONeListener(botao, addNew);
