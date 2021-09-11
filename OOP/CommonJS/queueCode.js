// Implementation Detail
const _list = new WeakMap();

// Public Interface
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
		console.log(`Queue has ${_list.get(this).length} items.`);
	}
}

module.exports = Queue;
