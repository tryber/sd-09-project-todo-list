//Requisito 5
function btn() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("texto-tarefa").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
        document.getElementById("lista-tarefas").appendChild(li);
        document.getElementById("texto-tarefa").value = "";
}