const _p = Symbol();

class soemthing {
	constructor(val) {
		this[_p] = val;
	}

	get name() {
		return name;
	}

	set name(val) {
		name = val;
	}
}

const s = new soemthing();
