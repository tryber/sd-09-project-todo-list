//Requisito 5
function btn() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("texto-tarefa").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
    li.classList.add('corFundo')
    document.getElementById("lista-tarefas").appendChild(li);
    document.getElementById("texto-tarefa").value = "";
}

//Requisito 7 e 8
let list = document.querySelector('ol');
list.addEventListener('click', function(param) {
  if (param.target.tagName === 'LI') {
    param.target.style.backgroundColor = 'rgb(128, 128, 128)'
  }
})

// Requisito 10
let btnApagar = document.getElementById('apaga-tudo');
btnApagar.addEventListener('click', apagaTudo);

function apagaTudo() {
  let lista = document.getElementById('lista-tarefas');
  while(lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}