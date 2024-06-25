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
	
	
		// Alektryon //
		if (typeof alek[a] !== 'undefined') {
			alekcount.innerHTML = alek[a].length;
			alekmatch.innerHTML = "";
			Object.keys(alek[a]).forEach(function(key) { 
				alekmatch.innerHTML += "<li>" + alek[a][key] + "</li>"; 
			})
		}
		else {
			alekcount.innerHTML = 0;
			alekmatch.innerHTML = "N/A";
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

		// Liber AL //
		if (typeof liberal[a] !== 'undefined') {
			liberalcount.innerHTML = liberal[a].length;
			liberalmatch.innerHTML = "";
			Object.keys(liberal[a]).forEach(function(key) { 
				liberalmatch.innerHTML += "<li>" + liberal[a][key] + "</li>"; 
			})
		}
		else {
			liberalcount.innerHTML = 0;
			liberalmatch.innerHTML = "N/A";
		}

		// Thelemic Libri //
		if (typeof libri[a] !== 'undefined') {
			libricount.innerHTML = libri[a].length;
			librimatch.innerHTML = "";
			Object.keys(libri[a]).forEach(function(key) { 
				librimatch.innerHTML += "<li>" + libri[a][key] + "</li>"; 
			})
		}
		else {
			libricount.innerHTML = 0;
			librimatch.innerHTML = "N/A";
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
