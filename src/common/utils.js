export const num = 123;

export const str = 'abc';

export let arr = [1, 2, 3];

const obj = { foo: 'bar' };

const util = {
	add(a, b) {
		console.log(a + b);
		return a + b;
	},

	subtract(a, b) {
		console.log(a - b);
		return a - b;
	}
};

// list export
export {
	obj,
	util as default
};



