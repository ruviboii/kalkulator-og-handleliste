const liste = document.getElementById('handleliste');
const nyttProdukt = document.getElementById('item');
const addKnapp = document.getElementById('add');

addKnapp.addEventListener('click', function() {
	const verdi = nyttProdukt.value;
	addProduct(verdi);
})

function addProduct(verdi) {
	let produkt = document.createElement('li');
	produkt.innerText = verdi;
	let fjern = document.createElement('button');
	fjern.addEventListener('click', function() {
		this.parentNode.remove();
	})
	fjern.innerText = "X";
	produkt.appendChild(fjern);
	liste.appendChild(produkt);
}

function Clear() {
	liste.innerHTML = '';
}
