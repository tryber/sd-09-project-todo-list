// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "marked" class when clicking on a list item
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('marked');
  }
}, false);

// Add a "checked" symbol when double-clicking on a list item
var list = document.querySelector('ol');
list.addEventListener('dblclick', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.remove('marked');
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Criar" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("texto-tarefa").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Você precisa digitar alguma coisa para adicionar como uma tarefa.");
  } else {
    document.getElementById("lista-tarefas").appendChild(li);
  }
  document.getElementById("texto-tarefa").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Creates the function of clicking on the "criar-tarefa" button by pressing "Enter"
document.getElementById("texto-tarefa")
    .addEventListener("keyup", function(e) {
    e.preventDefault();
    if (e.key === "Enter") {
        document.getElementById("criar-tarefa").click();
    }
});
