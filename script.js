function addTask() {
  let inputTask = document.getElementById('texto-tarefa');
  if (inputTask.value !== "") {
    let ol = document.getElementById('lista-tarefas');
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    ol.appendChild(li);
    inputTask.value = "";
  }
}
