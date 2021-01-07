//Requisito 5
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("texto-tarefa").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
        document.getElementById("lista-tarefas").appendChild(li);
        document.getElementById("texto-tarefa").value = "";
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}