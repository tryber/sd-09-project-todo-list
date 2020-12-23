

function criaTarefa(){
  let tarefa  = document.querySelector('#texto-tarefa');
  let lista = document.querySelector('#lista-tarefas');
  let itemLista = document.createElement('li');
  itemLista.innerHTML = tarefa.value;
  itemLista.className = 'item';
  lista.appendChild(itemLista)
  tarefa.value = " ";
 }

function apagarTudo(){
   let apagaTudo = document.querySelectorAll('#lista-tarefas');
   for(i=0; i<apagaTudo.length;i+=1){
       apagaTudo[i].remove();
   }
} 

let adicTarefa= document.querySelector('#criar-tarefa');
adicTarefa.addEventListener('click', criaTarefa);

let apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.addEventListener('click', apagarTudo);



let corFundoTarefa= document.querySelectorAll('.item');
for (let index = 0; index < corFundoTarefa.length; index += 1) {
corFundoTarefa[i].addEventListener('click', color);
}

function color(){
let corFundo= document.querySelectorAll('.item');  
for (let index = 0; index < corFundo.length; index += 1) {
    corFundo[i].style.backgroundColor = rgb(128,128,128);
}
}