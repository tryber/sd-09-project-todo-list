const criarTarefa = document.querySelector("#criar-tarefa");
const textoTarefa = document.querySelector("#texto-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");

criarTarefa.addEventListener("click", function(event) {
  const tarefa = document.createElement("li");
  tarefa.innerText = textoTarefa.value;
  textoTarefa.value = "";
  listaTarefas.appendChild(tarefa);
})