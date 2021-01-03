function adicionar() {
   var add = document.getElementById("texto-tarefa").value
   var item = document.createElement('li');
   item.appendChild(document.createTextNode(add));
   var list = document.getElementById("lista-tarefas")
   list.appendChild(item);
   document.getElementById("texto-tarefa").value = ""
}
function limpar() {
   document.querySelectorAll("li").forEach(element => {
      element.remove();
   })
}
document.addEventListener('click', function (event) {
      if ( event.target.nodeName === 'LI' ) {
         document.querySelectorAll('.selected').forEach(element => {
            element.classList.remove('selected')
         })
            event.target.classList.toggle('selected')
         
   }
}, false);

document.addEventListener('dblclick', function(event){
   if ( event.target.nodeName === 'LI' ) {
      
      if(event.target.classList.contains('completed')) {
         event.target.classList.remove('completed')
      }
      else {
         event.target.classList.remove('selected')
         event.target.classList.toggle('completed')
   }}
})

function limpar2() {
   document.querySelectorAll(".completed").forEach(element => {
      element.remove();
   })
}

function limpar3() {
   document.querySelectorAll(".selected").forEach(element => {
      element.remove();
   })
}

function salvar() {
   var lista = document.querySelector('#lista-tarefas').innerHTML;
   localStorage.setItem('lista', lista)
}

var listaSalva = localStorage.getItem('lista');

if (listaSalva) {
   var lista = document.querySelector('#lista-tarefas');
	lista.innerHTML = listaSalva;
}

function cima() {
   var lista = document.querySelector('#lista-tarefas');
   var selecionado = document.querySelector('.selected');
   lista.insertBefore(selecionado, selecionado.previousElementSibling);
}


function baixo() {
   var lista = document.querySelector('#lista-tarefas');
   var selecionado = document.querySelector('.selected');
   lista.insertBefore(selecionado, selecionado.nextElementSibling.nextElementSibling);
}