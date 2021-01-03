const buttonClick = document.querySelector("#criar-tarefa");

function verifyInput () {
    let getText = document.querySelector("#texto-tarefa").value;
    let addTasks = document.querySelector("#lista-tarefas");
    let createTasks = document.createElement("li");
    addTasks.appendChild(createTasks).innerText = getText;
    document.querySelector("#texto-tarefa").value = "";
}

buttonClick.addEventListener("click", verifyInput);

const clickColor = document.querySelector("#lista-tarefas");

function backgroundColorLi (colorize) {
    let itensList = colorize.target;
    itensList.style.backgroundColor = "rgb(128, 128, 128)"
    
}

clickColor.addEventListener("click", backgroundColorLi);
