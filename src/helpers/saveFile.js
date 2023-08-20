import fs from 'node:fs';

const file = './database/data.json';

export const save = (data) => {
	fs.writeFileSync(file, JSON.stringify(data));
};

export const read = (data) => {
	if (!fs.existsSync(file)) {
		return null;
	}

	return JSON.parse(fs.readFileSync(file, { encoding: 'utf-8' }));
};
