const selectBotao = document.getElementById('criar-tarefa');
const selectLista = document.getElementById('lista-tarefas');
const addTarefa = () => {
    let input = document.getElementById('texto-tarefa');
    let li = document.createElement('li');
selectLista.appendChild(li);
li.textContent= input.value;
input.value = "";
li.className = 'lista-tarefas';
    }
selectBotao.addEventListener('click',addTarefa);
function addClassSelected(){
    let lista = document.getElementById('lista-tarefas');
lista.addEventListener('click',function(event){
    const selected = document.querySelectorAll('.selected');
    for (let i = 0; i < selected.length; i += 1) {
      selected[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
addClassSelected();

function apagaTudo(){
    const elementos = document.getElementById('lista-tarefas');
    const botaoLimpar = document.getElementById('apaga-tudo');
    botaoLimpar.addEventListener('click',function(){
elementos.innerText = '';
    });
    }
apagaTudo();

function confereCompleta(){
    const elements = document.getElementById('lista-tarefas');
    elements.addEventListener('dblclick',function(event){
if(event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
} else {
    event.target.classList.add('completed');

}
    })
}
confereCompleta();

function removeFinalizados(){
    const botaoFinalizados = document.getElementById('remover-finalizados');
    const finalizados = document.getElementsByClassName('completed');
    botaoFinalizados.addEventListener('click',function(){
for (let index=0;index<=finalizados.length;index+=1){
    finalizados[index].remove();
}
    })
}
removeFinalizados();