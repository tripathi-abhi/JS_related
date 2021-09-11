class Shape {
	constructor(pos) {
		this.position = pos;
	}

	draw() {
		console.log("draw");
	}
}

class Circle extends Shape {
	constructor(radius, pos) {
		super(pos);
		this.radius = radius;
	}

	area() {
		return this.radius * this.radius * 3.14;
	}
}
