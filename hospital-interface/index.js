const INPUT = process.argv.slice(2);
const Controller = require('./Controller/controller');
const COMMAND = INPUT[0];

switch (COMMAND) {
	case 'register':
		Controller.register({
			username: INPUT[1],
			password: INPUT[2],
			role: INPUT[3]
		});
		break;
	case 'delete':
		//console.log('Fungsi belum dibuat');
		Controller.delete(INPUT[1]);	
		break;

	case 'login':
		Controller.login({ username: INPUT[1], password: INPUT[2] });
		break;

	case 'list':
		Controller.getList();
		break;

	case 'addPatient':
		Controller.addPatient({
			name: INPUT[1],
			diagnosis: INPUT.slice(2).join(' ')
		});
		break;

	case 'logout':
		Controller.logout();
		break;
}
