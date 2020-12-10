window.onload = function(){
    createControls();
}

function createControls()
{
    const controlsContainer = document.querySelector('#controls-container');
    const controlButtonIds = [];
    const controlIputIds = ['texto-tarefa'];

    for(const element of controlIputIds){
        const input = document.createElement('input');
        input.id = element;
        controlsContainer.appendChild(input);
    }
}