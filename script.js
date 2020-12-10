
let tarefa = document.getElementById("lista-tarefas");
tarefa.innerHTML = localStorage.getItem("item");

let botao = document.getElementById("criar-tarefa");
    function criaBotao() {
        botao.addEventListener("click", addTarefa);
    }
    criaBotao();
    function addTarefa(){
        let texto = document.getElementById('texto-tarefa');
       let li = document.createElement("li");
       tarefa.appendChild(li);
       li.innerText = texto.value;
       texto.value = '';
       li.addEventListener('click', mudaCor);
       li.addEventListener('dblclick', confereCompleta);
    }
    addTarefa();
    function mudaCor(){
        let cor = document.getElementsByTagName("li");
        let lista = document.querySelector("#lista-tarefas");
  lista.addEventListener("click", function (){
    for (let index = 0; index < cor.length; index += 1) {
      if (cor[index].classList.contains("selected") == true) {
        cor[index].classList.remove("selected");
      } else{
        cor[index].classList.add("selected");
    }
}
  })
};
mudaCor();
function confereCompleta(){
    let lista2= document.querySelector("#lista-tarefas");
    lista2.addEventListener("dblclick", function (event) {
        if (event.target.classList.contains("completed") == false) {
          event.target.classList.add("completed");
        } else {
          event.target.classList.remove("completed");
        }
      });
}
confereCompleta();

function apagaTudo() {
    let botaoApaga = document.querySelector('#apaga-tudo');
    let lista3 = document.querySelector('#lista-tarefas');
    botaoApaga.addEventListener('click', function() {
        lista3.innerText = '';
    });
}
apagaTudo();
let finalizado = document.getElementById("remover-finalizados");
finalizado.addEventListener("click", criaFinalizado());
function criaFinalizado() {
    let completo = document.querySelectorAll(".completed");
    for(let index = 0; index < completo.length; index += 1) {
        let removeFinalizado = completo[index];
        tarefa.removeChild(removeFinalizado);
    }
}