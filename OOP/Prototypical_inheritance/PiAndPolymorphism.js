function HtmlElement() {
	this.click = function () {
		console.log("clicked");
	};
}

HtmlElement.prototype.focus = function () {
	console.log("Focused");
};

function HtmlSelectElement(items = []) {
	this.items = items;
	this.addItem = function (value) {
		this.items.push(value);
	};
	this.removeItem = function (value) {
		let pos = this.items.indexOf(value);
		if (pos === -1) {
			throw new Error("Item not in list");
		}
		this.items.splice(pos, 1);
	};
	this.render = function () {
		if (!this.items.length) throw new Error("No item to render");
		// let optionsString = this.items.reduce((finalStr, currItem) => {
		// 	return finalStr + `<option>${currItem}</option>\n`;
		// }, "");
		return `<select>${this.items
			.map(
				item => `
		<option>${item}</option>`
			)
			.join("")}
</select>`;
	};
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.contructor = HtmlSelectElement;

function HtmlImgElement(src) {
	this.src = src;
	this.render = function () {
		if (!this.src) throw new Error("Image has source url");
		let imageString = `<img src="${this.src}" />`;
		return imageString;
	};
}

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.contructor = HtmlImgElement;

const elements = [
	new HtmlSelectElement([1, 2, 3]),
	new HtmlImgElement("https://"),
];

for (let element of elements) {
	console.log(element.render());
}
