function StopWatch() {
	let startTime,
		endTime,
		running = false,
		duration = 0;

	Object.defineProperty(this, "startTime", {
		set: function (value) {
			startTime = value;
		},
		get: function () {
			return startTime;
		},
	});

	Object.defineProperty(this, "endTime", {
		set: function (value) {
			endTime = value;
		},
		get: function () {
			return endTime;
		},
	});

	Object.defineProperty(this, "running", {
		set: function (value) {
			running = value;
		},
		get: function () {
			return running;
		},
	});

	Object.defineProperty(this, "duration", {
		set: function (value) {
			duration = value;
		},
		get: function () {
			return duration;
		},
	});
}

StopWatch.prototype.start = function () {
	if (this.running) throw new Error("Stopwatch already started");
	this.startTime = Date.now();
	console.log(this.startTime);
	this.running = true;
};

StopWatch.prototype.stop = function () {
	if (!this.running) throw new Error("Stopwatch not started");
	this.endTime = Date.now();
	this.duration = (this.endTime - this.startTime) / 1000;
	this.running = false;
};

StopWatch.prototype.reset = function () {
	this.startTime = this.endTime = null;
	this.duration = 0;
	this.running = false;
};
