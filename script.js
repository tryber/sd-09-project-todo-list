let botao = document.getElementById("lista-tarefas");
    botao.addEventListener(click,addTarefa);
    function addTarefa(){
        let tarefa = document.querySelector("#lista-tarefas");
       let li = document.createElement("li");
       tarefa.appendChild(li);
       li.innerText = captureInput.value;
       captureInput.value = '';
       li.addEventListener('click', mudaCor);
       li.addEventListener('dblclick', confereCompleta);
    }
    addTarefa(); 