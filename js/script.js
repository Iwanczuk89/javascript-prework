function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function printMessage(msg){
	let playerMove = 'papier' ;
	printMessage('zagrałem ' + playerMove + '! Jeśli komputer zagra kamień to przegrywa') ;
}