function createHtmlElements() {
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.innerText = 'Minha Lista de Tarefas';
    let paragraph = document.createElement('p');
    paragraph.id = 'funcionamento'
    paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    let container = document.createElement('main');
    let body = document.body;

    body.appendChild(container);
    container.appendChild(header);
    header.appendChild(title);
    container.appendChild(paragraph)
}


createHtmlElements();