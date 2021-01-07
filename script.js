//Requisito 5
function btn() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("texto-tarefa").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
    document.getElementById("lista-tarefas").appendChild(li);
    document.getElementById("texto-tarefa").value = "";
}

let list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.style.backgroundColor = 'rgb(128, 128, 128)'
  }
}, false);