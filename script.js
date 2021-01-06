function createTask() {
  let input = document.getElementById('texto-tarefa');
  if (input.value !== "") {
    let ol = document.getElementById('lista-tarefas');
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = "";
  }
}

