function pushTaskToList() {
  const createTaskBtn = document.getElementById("criar-tarefa");
  createTaskBtn.addEventListener("click", function () {
    let inputText = document.querySelector("#texto-tarefa").value;
    let taskLine = document.createElement("li");
    let taskList = document.querySelector("#lista-tarefas");
    document.getElementById("texto-tarefa").value = "";
    taskLine.innerText = inputText;
    taskLine.className = "linha";
    taskList.appendChild(taskLine);
  });
}
pushTaskToList();

function selectTask() {
  const taskList = document.querySelector("#lista-tarefas");
  taskList.addEventListener("click", function (event) {
    let allItens = document.querySelectorAll(".linha");
    if (event.target.className.indexOf("selecionado") === -1) {
      for (let index = 0; index < allItens.length; index += 1) {
        allItens[index].classList.remove("selecionado");
      }
      event.target.classList.add("selecionado");
    } else {
      for (let index = 0; index < allItens.length; index += 1) {
        allItens[index].classList.remove("selecionado");
      }
    }
  });
}

selectTask();
