class View {
	static show(data) {
		// for (let value of data) {
		// 	console.log(`=> Username: ${value.username}`);
		// 	console.log(`   Role    : ${value.role}`);
		// 	console.log(' ');
		// }
		if (data == undefined || data.length == 0) {
			console.log('Empty Data');
			console.log('No employees inside the Data!');
			return false;
		}

		for (var i = 0; i < data.length; i++) {
			console.log(`=> Username: ${data[i].username}`);
			console.log(`   Role    : ${data[i].role}`);
			console.log(' ');
		}
	}

	/**
	 *
	 * @param {string} log
	 */
	static log(log) {
		console.log(log);
	}
}

module.exports = View;
