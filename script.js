window.onload = function () {
  let olParent = document.getElementById("lista-tarefas");
  let btnCreaTask = document.getElementById("criar-tarefa");

  function createTasks() {
    let task = document.createElement("li");
    let inputBtn = document.getElementById("texto-tarefa").value;
    task.textContent = inputBtn;
    olParent.appendChild(task);
    console.log(document.getElementById('texto-tarefa').value = '');
  }
  btnCreaTask.addEventListener("click", createTasks);
};