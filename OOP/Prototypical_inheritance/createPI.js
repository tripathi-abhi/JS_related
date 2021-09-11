function Shape() {}

Shape.prototype.draw = function () {
	console.log("draw");
};

Shape.prototype.duplicate = function () {
	console.log("duplicated");
};

const s = new Shape();

function Circle(radius) {
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
const c = new Circle(2);
