const _list = new WeakMap();
class Stack {
	constructor() {
		_list.set(this, []);
	}

	push(value) {
		_list.get(this).push(value);
	}

	pop() {
		this.peek();
		_list.get(this).pop();
	}

	peek() {
		let items = _list.get(this);
		if (!items.length) throw new Error("stack empty");
		console.log(items[items.length - 1]);
	}

	get count() {
		return _list.get(this).length;
	}
}

const s = new Stack();
