// Create a 'close' button and append it to each list item
// var myNodelist = document.getElementsByTagName('LI');
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var closeButton = document.createElement('BUTTON');
//   var txt = document.createTextNode('\u00D7');
//   closeButton.className = 'close';
//   closeButton.setAttribute('id', 'remover-selecionado')
//   closeButton.appendChild(txt);
//   myNodelist[i].appendChild(closeButton);
// }

// Click on a close button to remove the current list item
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i += 1) {
  close[i].onclick = function() {
    this.parentElement.remove()
    return;
  }
}

// Add a 'selected' class when clicking on a list item (only one list item must have this class)
// document.querySelector('#lista-tarefas').addEventListener('click', function(e) {
//   var selected;
//   if (e.target.tagName === 'LI') {
//     selected = document.querySelector('li.selected');
//     if(selected) selected.classList.remove('selected');
//     e.target.classList.add('selected');
//   }
// });
const taskList = document.querySelector('#lista-tarefas');
taskList.addEventListener('click', function (itemList) {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem != null) {
    selectedItem.className = '';
    selectedItem.style.backgroundColor = 'rgb(255, 255, 255)';
  }
  if (itemList.target.className !== 'completed') {
    itemList.target.className = 'selected';
    itemList.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

// Add a 'checked' symbol when double-clicking on a list item
// document.querySelector('#lista-tarefas').addEventListener('dblclick', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('completed');
//   }
// }, false);
taskList.addEventListener('dblclick', function (itemList) {
  itemList.target.style.backgroundColor = 'rgb(255, 255, 255)';
  if (itemList.target.className === 'completed') {
    itemList.target.className = '';
    itemList.target.style.textDecoration = 'none';
  } else {
    itemList.target.className = 'completed';
    itemList.target.style.textDecoration = 'line-through';
  }
});

// Function to remove items
function removeItems(items) {
  const itemsToRemove = document.querySelectorAll(items);
  for (let index = 0; index < itemsToRemove.length; index += 1) {
    itemsToRemove[index].remove();
  }
}

// Button to remove all list items
// if (confirm('Você tem certeza que deseja apagar todas as tarefas?')) {
  const buttonRemoveAll = document.querySelector('#apaga-tudo');
  buttonRemoveAll.addEventListener('click', function () {
    if (document.querySelectorAll('li').length > 0) {
      removeItems('li');
    }
  });
// }

// Button to remove a selected list item
const buttonRemoveSelected = document.querySelector('#remover-selecionado');
buttonRemoveSelected.addEventListener('click', function () {
  if (document.querySelectorAll('.selected').length > 0) {
    removeItems('.selected');
  }
});

// Button to remove all completed list items
const buttonRemoveAllCompleted = document.querySelector('#remover-finalizados');
buttonRemoveAllCompleted.addEventListener('click', function () {
  if (document.querySelectorAll('.completed').length > 0) {
    removeItems('.completed');
  }
});

// Button to create a new list item
const buttonCreate = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
buttonCreate.addEventListener('click', function () {
  if (textTask.value !== '') {
    const addTask = document.createElement('li');
    addTask.innerText = textTask.value;
    addTask.style.marginTop = '3px';
    taskList.appendChild(addTask);
    textTask.value = '';
  }
});


// function newElement() {
//   var li = document.createElement('li');
//   var inputValue = document.getElementById('texto-tarefa').value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert('Você precisa digitar alguma coisa para adicionar como uma tarefa.');
//   } else {
//     document.getElementById('lista-tarefas').appendChild(li);
//   }
//   document.getElementById('texto-tarefa').value = '';

  // var closeButton = document.createElement('BUTTON');
  // var txt = document.createTextNode('\u00D7');
  // closeButton.className = 'close';
  // closeButton.setAttribute('id', 'remover-selecionado')
  // closeButton.appendChild(txt);
  // li.appendChild(closeButton);

  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     this.parentElement.remove()
  //     return;
  //   }
  // }
// }

var buttonRemoveChecked = document.querySelector('#remover-finalizados');

// Creates the function of clicking on the 'criar-tarefa' button by pressing 'Enter'
// document.getElementById('texto-tarefa')
//     .addEventListener('keyup', function(e) {
//     e.preventDefault();
//     if (e.key === 'Enter') {
//         document.getElementById('criar-tarefa').click();
//     }
// });
