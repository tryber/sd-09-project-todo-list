function pushTaskToList() {
  let createTaskBtn = document.getElementById("criar-tarefa");
  createTaskBtn.addEventListener("click", function () {
    let inputText = document.querySelector("#texto-tarefa").value;
    let taskLine = document.createElement("li");
    let taskList = document.querySelector("#lista-tarefas");
    document.getElementById("texto-tarefa").value = "";
    taskLine.innerText = inputText;
    taskList.appendChild(taskLine);
  });
}
pushTaskToList();
