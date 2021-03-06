window.onload = function(e) {
	// Prevent double-tap zoom on mobile
	document.body.addEventListener('touchstart', preventZoom);

	// create mailto link
	var em = document.getElementById('em');
	if (em != null) {
		var temp = "akim8&#064;emich&#046;edu";
		em.innerHTML = "<a href=\"mailto:" + temp + "\">" + temp + "</a>";
	}

	// parse twemoji
	twemoji.parse(document.body, {size: 1, folder: 'svg', ext: '.svg'});

	// High five
	document.getElementById('hand').addEventListener("touchend", hi5);
	document.getElementById('hand').addEventListener("click", hi5);
}

function preventZoom(e) {
	var t2 = e.timeStamp;
	var t1 = e.currentTarget.dataset.lastTouch || t2;
	var dt = t2 - t1;
	var fingers = e.touches.length;
	e.currentTarget.dataset.lastTouch = t2;
	if (!dt || dt > 500 || fingers > 1) return; // not double-tap
	e.preventDefault();
	e.target.click();
}

// https://stackoverflow.com/a/7019461
var alreadyFired = false;
function hi5() {
	if (!alreadyFired) {
		alreadyFired = true;
		setTimeout(function(){ alreadyFired = false; }, 100);
		var hand = document.getElementById('hand');
		hand.classList.toggle('spin');
	}
}
