// Create a 'close' button and append it to each list item
var myNodelist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to remove the current list item
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i += 1) {
  close[i].onclick = function() {
    this.parentElement.remove()
    return;
    // var div = this.parentElement;
    // div.style.display = 'none';
  }
}

// Add a 'selected' class when clicking on a list item (only one list item must have this class)
document.querySelector('#lista-tarefas').addEventListener('click', function(e) {
  var selected;
  if (e.target.tagName === 'LI') {
    selected = document.querySelector('li.selected');
    if(selected) selected.classList.remove('selected');
    e.target.classList.add('selected');
  }
});

// Add a 'checked' symbol when double-clicking on a list item
document.querySelector('#lista-tarefas').addEventListener('dblclick', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('completed');
  }
}, false);

// Click on 'apaga-tudo' button to remove all list items
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

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = 'none';
    }
  }
}

// Creates the function of clicking on the 'criar-tarefa' button by pressing 'Enter'
document.getElementById('texto-tarefa')
    .addEventListener('keyup', function(e) {
    e.preventDefault();
    if (e.key === 'Enter') {
        document.getElementById('criar-tarefa').click();
    }
});
