
interface ID {
	id: number
}

const enum DIRECTION {
	ASC,
	DESC
}

function sortArray<T extends ID>(data: Array<T>, direction: DIRECTION = DIRECTION.ASC): Array<T> {
	return direction == DIRECTION.ASC
		? data.sort((a, b) => b.id - a.id)
		: data.sort((a, b) => a.id - b.id);
}

const data = [
	{ id: 2, name: 'Петя' },
	{ id: 3, name: 'Надя' },
	{ id: 1, name: 'Вася' },
];

const result = sortArray(data, DIRECTION.DESC)
