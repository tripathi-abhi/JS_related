// Intermediate function Inheritance
function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Shape(color) {
	this.color = color;
}

Shape.prototype.duplicate = function () {
	console.log("duplicated");
};

function Circle(radius, color) {
	Shape.bind(this, color)();
	this.radius = radius;
}

extend(Circle, Shape);
Circle.prototype.duplicate = function () {
	console.log("duplicated circle");
};

const c = new Circle(2, "blue");
c.duplicate();
