const inputTextoTarefa = document.querySelector("#texto-tarefa");
const buttonCriarTarefas = document.querySelector("#criar-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");

//5 - Deve haver um botão com id="criar-tarefa" e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
function receberTexto() {
  const listaLi = document.createElement("li");
  listaLi.innerText = inputTextoTarefa.value;
  listaTarefas.appendChild(listaLi);
  inputTextoTarefa.value = '';
}

buttonCriarTarefas.addEventListener('click', receberTexto);

