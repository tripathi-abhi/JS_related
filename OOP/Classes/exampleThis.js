"use strict";

function something() {
	this.draw = function () {
		console.log(this);
	};
}

const some = new something();
const draw = some.draw;
draw();

class Something_class {
	draw() {
		console.log(this);
	}
}

const some_class = new Something();
const draw = some_class.draw;
draw();
