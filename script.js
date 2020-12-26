function adicionar() {
   var add = document.getElementById("texto-tarefa").value
   var item = document.createElement('li');
   item.appendChild(document.createTextNode(add));
   var list = document.getElementById("lista-tarefas")
   list.appendChild(item);
   document.getElementById("texto-tarefa").value =""
}