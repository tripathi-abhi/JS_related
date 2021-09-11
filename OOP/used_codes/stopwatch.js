function StopWatch() {
	let startTime = null;
	let endTime = null;
	let running = false;
	let duration = 0;
	this.start = function () {
		if (running) {
			throw new Error("Stopwatch has already started");
		}
		startTime = Date.now();
	};

	this.stop = function () {
		if (!running) {
			throw new Error("Stopwatch hasn't been started");
		}
		running = false;
		endTime = Date.now();
		duration = (endTime - startTime) / 1000;
	};

	this.reset = function () {
		startTime = endTime = null;
		running = false;
		duration = 0;
	};

	Object.defineProperty(this, "duration", {
		get: function () {
			return duration;
		},
	});
}
