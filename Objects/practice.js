const circle = {
	radius: 1,
	get area() {
		return 3.14 * Math.pow(this.radius, 2);
	},
};

circle.radius = 2;
console.log(circle.area);
