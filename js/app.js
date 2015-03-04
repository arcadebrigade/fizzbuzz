$(document).ready(function () {

	var $text=$('.text');

for (var i= 1; i<=100; i++) {
	if (i%15 == 0) {
		console.log ("fizzbizz");
	}
	else if (i%3 == 0) {
		console.log ("fizz");
	}
	else if (i%5 == 0) {
		console.log ("buzz");
	}
	else {
		console.log (i);
	}
}
});