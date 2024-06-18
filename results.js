input.oninput = function() {
	a = 0;

	if (input.value !== "")
		window.history.pushState('','','?' + "v=" + input.value);
	else
		window.history.pushState('','', window.location.protocol + "//" + window.location.host + window.location.pathname);

	Object.keys(cipher).forEach(function(key) { a += ((input.value).split(key).length - 1)*cipher[key]; }); 
	
	if (/\d/.test(input.value))
		a += ((input.value)).match(/\d+/g).map(Number).reduce(function(b, c) { return b + c; }, 0);
	
	result.innerHTML = a;
	
	
		// AQQA //
		if (typeof aqqa[a] !== 'undefined') {
			aqqacount.innerHTML = aqqa[a].length;
			aqqamatch.innerHTML = "";
			Object.keys(aqqa[a]).forEach(function(key) { 
				aqqamatch.innerHTML += "<li>" + aqqa[a][key] + "</li>"; 
			})
		}
		else {
			aqqacount.innerHTML = 0;
			aqqamatch.innerHTML = "N/A";
		}

		// AQ.io //
		if (typeof aqio[a] !== 'undefined') {
			aqiocount.innerHTML = aqio[a].length;
			aqiomatch.innerHTML = "";
			Object.keys(aqio[a]).forEach(function(key) { 
				aqiomatch.innerHTML += "<li>" + aqio[a][key] + "</li>"; 
			})
		}
		else {
			aqiocount.innerHTML = 0;
			aqiomatch.innerHTML = "N/A";
		}

		// Lam-UFO-93 //
		if (typeof lam93[a] !== 'undefined') {
			lam93count.innerHTML = lam93[a].length;
			lam93match.innerHTML = "";
			Object.keys(lam93[a]).forEach(function(key) { 
				lam93match.innerHTML += "<li>" + lam93[a][key] + "</li>"; 
			})
		}
		else {
			lam93count.innerHTML = 0;
			lam93match.innerHTML = "N/A";
		}

		// Urbanomic //
		if (typeof urban[a] !== 'undefined') {
			urbancount.innerHTML = urban[a].length;
			urbanmatch.innerHTML = "";
			Object.keys(urban[a]).forEach(function(key) { 
				urbanmatch.innerHTML += "<li>" + urban[a][key] + "</li>"; 
			})
		}
		else {
			urbancount.innerHTML = 0;
			urbanmatch.innerHTML = "N/A";
		}


}

document.body.onload = function() {
	input.value = decodeURI(window.location.search).substring(3,128);
	input.select();
	input.dispatchEvent(new Event('input'));
}
