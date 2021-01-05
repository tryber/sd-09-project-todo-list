function addText () {
	const text = document.getElementById('texto-tarefa');
	const add = document.getElementById('lista-tarefas');
	
	let criarElemento = document.createElement('li');
	criarElemento.innerText = text.value;
	add.appendChild(criarElemento);
	text.value = '';
}

function changebg(event) {
	const color = document.querySelector('.bg-color');
		if (color !== null) {
				color.classList.remove('bg-color');
	} event.target.classList.add('bg-color');
} 
	const change = document.querySelector('#lista-tarefas');
	change.addEventListener('click', changebg);
 



	function riscar (event) {
		
		if (event.target.classList.contains('completed')){
			event.target.classList.remove('completed');
		} else {
			(event.target.classList.add('completed'))
		}


		//event.target.classList.remove('completed');
}	
	const lirisc= document.querySelector('#lista-tarefas');
	lirisc.addEventListener('dblclick', riscar);
