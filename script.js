window.onload = function () {
    createTitle();
}

function createTitle() {
    const header = document.getElementsByTagName('header');
    const h1 = document.createElement('h1');
    h1.innerText = 'Minha Lista de Tarefas';
    h1.style.color = 'red';
    h1.style.textAlign = 'center';
    h1.style.fontSize = '50px';
    header[0].appendChild(h1);
}