document.addEventListener('keydown', handleKeypress, false);

function handleKeypress(){
	if (event.keyCode == 84){
		document.body.style.background = 'yellow';
	}
}