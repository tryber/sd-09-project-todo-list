window.onload = functionsLoaded();

function functionsLoaded(){
    newItemList()
}

function clearInput(){
    let inputLocal = document.querySelector("#texto-tarefa");
    inputLocal.value = "";
}

function newItemList(){
    let buttonLocal = document.querySelector("#criar-tarefa")

    buttonLocal.addEventListener("click", function(){
        let inputLocal = document.querySelector("#texto-tarefa")
        let taskName = inputLocal.value
        let listLocal = document.querySelector("#lista-tarefas")

        let newItem = document.createElement("li")
        newItem.className = "list-item"
        newItem.innerText = taskName
        listLocal.appendChild(newItem)

        clearInput()
    })
}