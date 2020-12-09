let botao = document.getElementById("lista-tarefas");
    botao.addEventListener('click', addTarefa);
    function addTarefa(){
        let tarefa = document.querySelector("#lista-tarefas");
       let li = document.createElement("li");
       tarefa.appendChild(li);
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
