// funcao que remove a class selected dos outros items da lista
function removeTaskMarks() {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    if (listItems[index].classList.contains('selected')) {
      listItems[index].classList.toggle('selected');
    }
  }
}

// funcao que coloca a tag selected no item da lista
function clicaTarefa(self) {
  removeTaskMarks();
  self.target.classList.toggle('selected');
}
// requisito 9
function doubleClick(self) {
  self.target.classList.toggle('completed');
}

// requisito 6
function criaTarefa() {
  const newTexto = document.querySelector('#texto-tarefa').value;
  if (!newTexto) {
    alert('Por favor não deixar em branco');
  } else {
    const tarefa = document.createElement('li');
    // aqui ja implementa o event listaner de clicar em todas as tarefas
    tarefa.addEventListener('click', clicaTarefa);
    tarefa.addEventListener('dblclick', doubleClick);
    tarefa.innerText = newTexto;
    document.querySelector('ol').appendChild(tarefa);
    document.querySelector('#texto-tarefa').value = '';
  }
}

document.querySelector('#criar-tarefa').addEventListener('click', criaTarefa);

// requisito 10
document.querySelector('#apaga-tudo').addEventListener('click', function () {
  document.querySelector('ol').innerText = '';
  localStorage.clear();
});

// requisito 11
function removeDone() {
  const taskDone = document.querySelectorAll('.completed');
  for (let index = taskDone.length - 1; index >= 0; index -= 1) {
    taskDone[index].parentElement.removeChild(taskDone[index]);
  }
}

document.querySelector('#remover-finalizados').addEventListener('click', removeDone);

// salvando usando JSON
function allTasksToArray(nodeList) {
  const myArray = [];
  for (let index = 0; index < nodeList.length; index += 1) {
    if (nodeList[index].classList.contains('completed')) {
      myArray.push('completed');
    } else {
      myArray.push('');
    }
    myArray.push(nodeList[index].innerText);
  }
  return myArray;
}

function arrayToStorage() {
  const myTasks = document.querySelectorAll('li');
  if (myTasks.length === 0) {
    alert('No tasks to save');
  } else {
    const myArray = allTasksToArray(myTasks);
    localStorage.setItem('myTasks', JSON.stringify(myArray));
  }
}

document.querySelector('#salvar-tarefas').addEventListener('click', arrayToStorage);

document.querySelector('#remover-selecionado').addEventListener('click', function () {
  const selectedTask = document.querySelector('.selected');
  selectedTask.parentNode.removeChild(selectedTask);
});

// requisito 13
// funcao criada exclusivamente para uso no botao de up e down
function returnClassIndex() {
  let selectedIndex;
  const nodeList = document.querySelectorAll('li');
  for (let index = 0; index < nodeList.length; index += 1) {
    if (nodeList[index].classList.contains('selected')) {
      selectedIndex = index;
    }
  }
  return selectedIndex;
}

function moveParaCima() {
  const index = returnClassIndex();
  if (index > 0) {
    const myNode = document.querySelector('.selected');
    myNode.parentNode.insertBefore(myNode, myNode.previousSibling);
  } else if (index === 0) {
    alert('O elemento já está no topo da lista');
  }
}

// não existe uma função insertAfter T-T.
function moveParaBaixo() {
  const listSize = document.querySelectorAll('li').length - 1;
  const index = returnClassIndex();
  if (index < listSize) {
    const myNode = document.querySelector('.selected');
    myNode.parentNode.insertBefore(myNode, myNode.nextSibling.nextSibling);
  } else if (index === listSize) {
    alert('O elemento já está no fim da lista');
  }
}

document.querySelector('#mover-cima').addEventListener('click', moveParaCima);
document.querySelector('#mover-baixo').addEventListener('click', moveParaBaixo);
