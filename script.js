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

// Click on 'apaga-tudo' button to remove all list items
// if (confirm('Você tem certeza que deseja apagar todas as tarefas?')) {
const buttonRemoveAll = document.querySelector('#apaga-tudo');
buttonRemoveAll.addEventListener('click', function () {
  if (document.querySelectorAll('li').length > 0) {
    removeItems('li');
  }
});


// var allListItems = document.getElementsByTagName('li');
// for (var index = 0; index < allListItems.length; index += 1) {
//   allListItems[index].addEventListener('click', function(){
//     this.classList.toggle("active");
//   });
//   allListItems[index].querySelector('#apaga-tudo').addEventListener('click', function(){
//     this.closes
//   })
// }




// Create a new list item when clicking on the 'Criar' button
function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('texto-tarefa').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('Você precisa digitar alguma coisa para adicionar como uma tarefa.');
  } else {
    document.getElementById('lista-tarefas').appendChild(li);
  }
  document.getElementById('texto-tarefa').value = '';

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
}

var buttonRemoveChecked = document.querySelector('#remover-finalizados');

// Creates the function of clicking on the 'criar-tarefa' button by pressing 'Enter'
document.getElementById('texto-tarefa')
    .addEventListener('keyup', function(e) {
    e.preventDefault();
    if (e.key === 'Enter') {
        document.getElementById('criar-tarefa').click();
    }
});
