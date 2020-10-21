function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if(argMoveId == 2){
		return 'papier';
	} else if(argMoveId == 3){
		return 'nożyce';
	}
}

function displayResult( argComputerMove, argPlayerMove) {
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		printMessage('Ty wygrywasz!');
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
		printMessage('jest remis');
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
		printMessage('wygrywa komputer');
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
		printMessage('należy powtórzyć');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
		printMessage('jest remis');
	} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
		printMessage('wygrywa komputer');
	} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
		printMessage('Ty wygrywasz');
	} else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
		printMessage('należy powtórzyć');
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		printMessage('Ty wygrywasz');
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
		printMessage('wygrywa komputer');
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
		printMessage('jest remis');
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
		printMessage('należy powtórzyć');
	}
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1) {
  	computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else if ( randomNumber == 3) {
	computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/* if(playerInput == '1'){
  	playerMove = 'kamień';
} else if (randomNumber == 2) {
	playerMove = 'papier';
} else if (randomNumber == 3) {
	playerMove = 'nożyce';
} */

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier') {
	printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
	printMessage('jest remis');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
	printMessage('wygrywa komputer');
} else if (computerMove == 'kamień' && playerMove == 'nieznany ruch') {
	printMessage('należy powtórzyć');
	} else if (computerMove == 'papier' && playerMove == 'papier') {
	printMessage('jest remis');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
	printMessage('wygrywa komputer');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
	printMessage('Ty wygrywasz');
} else if (computerMove == 'papier' && playerMove == 'nieznany ruch') {
	printMessage('należy powtórzyć');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
	printMessage('Ty wygrywasz');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
	printMessage('wygrywa komputer');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
	printMessage('jest remis');
} else if (computerMove == 'nożyce' && playerMove == 'nieznany ruch') {
	printMessage('należy powtórzyć');
}