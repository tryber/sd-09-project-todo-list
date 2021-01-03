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
    let removeBgColor = document.querySelectorAll("li");
    for (let index = 0; index < removeBgColor.length; index += 1) {
        removeBgColor[index].style.backgroundColor = "white";
    }
    let itensList = colorize.target;
    itensList.style.backgroundColor = "rgb(128, 128, 128)"    
}

clickColor.addEventListener("click", backgroundColorLi);

const doubleClick = document.querySelector("#lista-tarefas");

function creatingClass (markLiOne) {
    let decorationText = markLiOne.target;
    if (decorationText.className === "completed"){
        decorationText.className = "";
    } else {
        decorationText.className = "completed";
    }
}

doubleClick.addEventListener("dblclick", creatingClass);

const deleteList = document.querySelector("#apaga-tudo");

function deleteLi () {
    let clearTotalList = document.querySelectorAll("li");
    for (let index = 0; index < clearTotalList.length; index += 1) {
        let son = document.querySelector("#lista-tarefas").lastChild;
        document.querySelector("ol").removeChild(son);
    }
    clearTotalList.innerHtml
}

deleteList.addEventListener("click", deleteLi)
