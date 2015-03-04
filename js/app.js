$(document).ready(function () {

	var fizzBuzz = function(userNumber) {

		for (var i= 1; i<=userNumber; i++) {
			if (i%15 == 0) {
				//console.log ("fizzbizz");
				text += 'fizzBuzz ';
			}
			else if (i%3 == 0) {
				//console.log ("fizz");
				text += 'fizz ';
			}
			else if (i%5 == 0) {
				//console.log ("buzz");
				text += 'buzz ';
			}
			else {
				text += i + " "
			}
		}

	}

	var text = '';

	var userNumber = prompt('please enter a number');

	//var userNumber = parseInt(promptNumber);

	console.log(userNumber)

	if(!isNaN(userNumber) && userNumber % 1 == 0) {
		fizzBuzz(userNumber);
		
	} else {
		alert('not a number')
	}


$('#textOutput').append(text);
});