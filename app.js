import 'colors';
import { TaskCollection } from './src/models/taskCollection.js';
import { inquirerMenu, pause, readInput } from './src/helpers/inquirer.js';
import { save, read } from './src/helpers/saveFile.js';

const main = async () => {
	let option = 0;
	const taskCollection = new TaskCollection();

	taskCollection.loadTasksFromArray(read());

	do {
		option = await inquirerMenu();

		switch (option) {
			case 1:
				const description = await readInput('Description: ');
				taskCollection.createTask(description);
				break;

			case 2:
				console.log(taskCollection.collectionArr);
				break;
		}

		save(taskCollection.collectionArr);

		await pause();
	} while (option !== 0);

	console.clear();
};

main();
