const buttonCriarTarefa = document.querySelector("#criar-tarefa");

function checkInput(){
    let textoTarefa = document.querySelector("#texto-tarefa").value;
    let adicionaTarefa = document.querySelector("#lista-tarefas");
    let criaTarefa = document.createElement("li");


    adicionaTarefa.appendChild(criaTarefa).innerText = textoTarefa;
    document.querySelector("#texto-tarefa").value = "";
}

buttonCriarTarefa.addEventListener("click", checkInput);

const pushColour = document.querySelector("#lista-tarefas");

function backgroundColour(colorize){
    let deleteBackgroundColour = document.querySelectorAll("li");

    for (let index=0; index < deleteBackgroundColour.length; index += 1){
        deleteBackgroundColour[index].style.backgroundColor = "white";}

    let listaDeItens = colorize.target;
    listaDeItens.style.backgroundColor = "rgb(128, 128, 128)";
}

pushColour.addEventListener("click", backgroundColour);

const duploclick = document.querySelector("#lista-tarefas");

function makingClass (markLiOne){
    let beautifulText = markLiOne.target;
    if (beautifulText.className === "completed"){
        beautifulText.className = "";
    } else {
        beautifulText.className = "completed";
    }
}

duploclick.addEventListener("dblclick", makingClass);

const eraseList = document.querySelector("#apaga-tudo");

function eraseLi (){
    let deleteListGeral = document.querySelectorAll("li");
    for (let index = 0; index < deleteListGeral.length; index +=1) {
        let lad = document.querySelector("#lista-tarefas").lastChild;
        document.querySelector("ol").removeChild(lad);
    }
    deleteListGeral.innerHtml
}

eraseList.addEventListener("click", eraseLi);

const eraseFinished = document.querySelector("#remover-finalizados");

function removeFinished (){
    let mopFinished = document.querySelectorAll(".completed");
    for (let index = 0; index < mopFinished.length; index +=1){
        let picked = mopFinished[index];
        document.querySelector("ol").removeChild(picked);
    }
    mopFinished.innerHtml
}

eraseFinished.addEventListener("click", removeFinished);

    


