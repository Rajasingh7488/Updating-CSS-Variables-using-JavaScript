const inputs = document.querySelectorAll('.controls input');

function handleupdate() {
	/* adding suffix 'px' to the variables like blur and spacing */
	// console.log(suffix)
	// .dataset stores the data which is ut with data-anything :'fromhere'
	//in same way it pulls out px from the html (data-sizing="px")
	//and the ||'' this is for the color as it has no px in html so it should not dive px to it 
	//i.e or operator with an empty '' is there
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	console.log(this.value)
}

console.log(inputs)
inputs.forEach(input => input.addEventListener('change', handleupdate));
inputs.forEach(input=> input.addEventListener('mousemove', handleupdate));