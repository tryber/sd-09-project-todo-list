/*https://github.com/tryber/sd-09-project-todo-list/pull/106 
https://github.com/tryber/sd-09-project-todo-list*/

const inputTextoTarefa = document.querySelector('#texto-tarefa');
const buttonCriarTarefas = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

/*5 - Deve haver um botão com id="criar-tarefa" e ao clicar nesse botão, 
um novo item deverá ser criado ao final da lista e o texto do input deve ser 
limpo.*/

function receberTexto() {
  const listaLi = document.createElement("li");
  listaLi.innerText = inputTextoTarefa.value;
  listaTarefas.appendChild(listaLi);
  inputTextoTarefa.value = "";
}
  buttonCriarTarefas.addEventListener("click", receberTexto);

  listaTarefas.addEventListener("click", function (event) {
  fundoCinza = event.target.style.backgroundColor;
  event.target.classList.add('backgroundCinza');
  
  });



