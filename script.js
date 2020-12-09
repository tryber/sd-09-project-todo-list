let botao = document.getElementById("lista-tarefas");
    function addTarefa(){
        let tarefa = document.getElementById("lista-tarefas");
       let li = document.createElement("li");
       tarefa.appendChild(li);
       li.innerText = captureInput.value;
       captureInput.value = '';
       li.addEventListener('click', mudaCor);
       li.addEventListener('dblclick', confereCompleta);
    }
    addTarefa();
    botao.addEventListener('click', addTarefa);