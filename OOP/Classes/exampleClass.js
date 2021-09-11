class Circle {
	constructor(radius) {
		this.radius = radius;
		this.move = function () {
			console.log("move");
		};
	}

	draw() {
		console.log("draw");
	}

	static parse(obj) {
		const parsedObj = JSON.parse(obj);
		return new Circle(parsedObj.radius);
	}
}

const c1 = new Circle(2);
const c2 = new Circle(3);
