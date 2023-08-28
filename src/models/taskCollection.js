import { Task } from './task.js';

export class TaskCollection {
	_collection = {};

	collectionArr() {
		return Object.keys(this._collection).map((key) => {
			return this._collection[key];
		});
	}

	constructor() {
		this._collection = {};
	}

	loadTasksFromArray(tasks = []) {
		tasks.forEach((task) => {
			this.createTask(task['desc']);
		});
	}

	createTask(description = '') {
		const task = new Task(description);

		this._collection[task.id] = task;
	}
}
