const _list = new WeakMap();
class Queue {
	constructor() {
		_list.set(this, []);
	}

	push(item) {
		_list.get(this).push(item);
	}

	pop() {
		let currList = _list.get(this);
		if (!currList.length) throw new Error("Queue is empty");
		currList.shift();
	}

	back() {
		let currList = _list.get(this);
		if (!currList.length) throw new Error("Queue is empty");
		return currList[currList.length - 1];
	}

	front() {
		let currList = _list.get(this);
		if (!currList.length) throw new Error("Queue is empty");
		return currList[0];
	}

	get count() {
		return _list.get(this).length;
	}
}

const q = new Queue();
