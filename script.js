let botao = document.getElementById("lista-tarefas");
    botao.addEventListener(click,listaTarefas);
    function addTarefa(){
        let tarefa = document.querySelector("#lista-tarefas");
       let li = document.createElement("li");
       tarefa.appendChild(li);
       li.innerText = captureInput.value;
       captureInput.value = '';
    }
    function mudaCor(){
        let cor = document.getElementsByTagName("li");
        let lista = document.querySelector("#lista-tarefas");
  lista.addEventListener("click", function (event) {
    for (let index = 0; index < cor.length; index += 1) {
      if (cor[index].classList.contains("selected") == true) {
        cor[index].classList.remove("selected");
      }
      event.target.classList.add("selected");
    }
  })
};
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

function apagaTudo() {
    let botaoApaga = document.querySelector('#apaga-tudo');
    let lista3 = document.querySelector('#lista-tarefas');
    botaoApaga.addEventListener('click', function() {
        lista3.innerText = '';
    });
}

function removeFinalizados(){
    let lista4= document.getElementsByTagName('ol')[0];
    let itens = lista4.querySelectorAll('li');
    let localizaTerminados = itens.getElementsByClassName('completed');
  for (index=localizaTerminados.length-1; index>=0; index-=1){
    lista4.removeChild(localizaTerminados[index]);

  }

}