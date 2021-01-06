function createTask() {
  const input = document.getElementById("texto-tarefa");
  if (input.value !== "") {
    const ol = document.getElementById("lista-tarefas");
    const li = document.createElement("li");
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = "";
  }
}

function changeColor() {
  const lista = document.getElementById("lista-tarefas");
  lista.addEventListener("click", function (e) {
    const selectedLista = document.getElementsByClassName("selected");
    if (selectedLista[0]) {
      selectedLista[0].classList.remove("selected");
    }
    e.target.classList.add("selected");
  });
}

function completed() {
  const lista = document.getElementById("lista-tarefas");
  lista.addEventListener("dblclick", function (event) {
    event.target.classList.toggle("completed");
  });
}

window.onload = function () {
  createTask();
  changeColor();
  completed();
};
