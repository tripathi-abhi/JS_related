const mixin = (Target, ...compositions) => {
	Object.assign(Target, ...compositions);
};

const canEat = {
	eat: function () {
		this.hunger--;
		console.log("eating");
	},
};

const canWalk = {
	walk: function () {
		console.log("walking");
	},
};

function Person(hunger) {
	this.hunger = hunger;
}

mixin(Person.prototype, canEat, canWalk);
const person = new Person(10);
console.log(person);
