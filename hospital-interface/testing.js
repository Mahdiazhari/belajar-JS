var t = 0;
function hitung(t) {
	setInterval(function() {
		//Timer
		// if (t >= 60) {
		// 	var minute = Math.floor(t / 60);
		// 	var second = t % 60;
		// 	console.log(minute + ' M ' + second + ' S ');
		// 	t--;
		// } else if (t <= 59 && t > 0) {
		// 	console.log('0 M ' + t + ' S');
		// 	t--;
		// } else {
		// 	console.log('Timer is Over');
		// 	clearInterval(this);
		// }

		//Stopwatch
		t++;
		if (t >= 60) {
			var minute = Math.floor(t / 60);
			var second = t % 60;
			console.log(minute + ' M ' + second + ' S ');
		} else if (t <= 59 && t > 0) {
			console.log('0 M ' + t + ' S');
		}
	}, 1000);
}
hitung(t);
