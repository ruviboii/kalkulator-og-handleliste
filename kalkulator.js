const input = document.querySelector('input');
let knapper = {};
knapper['gange'] = document.getElementById('gange');
knapper['dele'] = document.getElementById('dele');
knapper['pluss'] = document.getElementById('pluss');
knapper['minus'] = document.getElementById('minus');
knapper['lik'] = document.getElementById('erLik');
knapper['clear'] = document.getElementById('clear');

input.addEventListener('keydown', function(event) {
	event.preventDefault();
	if (isFinite(event.key)) {
		input.value += event.key;
	} else if (event.key === 'Backspace') {
		input.value = input.value.slice(0, -1);
	}
})

knapper['lik'].addEventListener('click', function() {
	let verdi = input.value;
	verdi = eval(verdi);
	if (verdi) {
		input.value = verdi;
	}
})

knapper['gange'].addEventListener('click', function() {
	input.value += '*';
})
knapper['dele'].addEventListener('click', function() {
	input.value += '/';
})
knapper['pluss'].addEventListener('click', function() {
	input.value += '+';
})
knapper['minus'].addEventListener('click', function() {
	input.value += '-';
})
knapper['clear'].addEventListener('click', function() {
	input.value = '';
})
