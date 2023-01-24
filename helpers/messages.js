const { read } = require('fs');
const { resolve } = require('path');

require('colors');

const showMenu = () => {
	return new Promise((resolve) => {
		console.clear();

		console.log('========================='.green);
		console.log('  Choose an option'.green);
		console.log('=========================\n'.green);

		console.log(`${'1.'.green} Create a new task`);
		console.log(`${'2.'.green} List all tasks`);
		console.log(`${'3.'.green} List completed tasks`);
		console.log(`${'4.'.green} List pending tasks`);
		console.log(`${'5.'.green} Complete task(s)`);
		console.log(`${'6.'.green} Remove task`);
		console.log(`${'0.'.green} Exit\n`);

		const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question('Choose an option: ', (opt) => {
			readline.close();
			resolve(opt);
		});
	});
};

const pause = () => {
	return new Promise((resolve) => {
		const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question(`\nPress ${'ENTER'.green} to continue`, (opt) => {
			readline.close();
			resolve(opt);
		});
	});
};

module.exports = {
	showMenu,
	pause,
};
