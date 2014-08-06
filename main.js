// DOM ready
$(function() {

		var userChoice = prompt('ready? rock, paper, or scissors');
		while (userChoice != 'rock' || 'paper' || 'scissors') { 
		
        userChoice = prompt('Ready? Rock, Paper, or Scissors');
		 game()
		};

		// if (userChoice === 'rock' || 'paper' || 'scissors') {

debugger

		var comChoice = Math.random()
			if (comChoice < 0.34) {
				comChoice = 'rock';
			} else if(comChoice <= 0.67) {
				comChoice = 'paper';
			} else {
				comChoice = 'scissors';
			}

		}

		var compare = function(userChoice, comChoice);
			if (userChoice === comChoice) {
				alert('draw');
			}

//			if (userChoice === 'rock') {
//				if (comChoice === 'paper') {
//					alert( 'you lost to paper');
//				}
//
//				else {
//					if (comChoice === 'scissors') {
//						alert( 'you beat scissors');
//					}
//				}
//			}
//			
//			if (userChoice === 'paper') {
//				if (comChoice === 'scissors') {
//					alert( 'you lost to scissors');
//				}
//
//				else {
//					if (comChoice === 'rock') {
//						alert( 'you beat rock');
//					}
//				}
//			}
//
//			if (userChoice === 'scissors') {
//				if (comChoice === 'rock') {
//					return 'you lost to rock'
//				}
//
//				else {
//					if (comChoice === 'paper') {
//						return 'you beat paper'
//					}
//				}
//			}


	};	
});
