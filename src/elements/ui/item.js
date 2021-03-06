"use strict";

Polymer({
	is: "ui-item",
	properties: {
		cover: String,
		detail: Object
	},
	listeners: {
		"tap": "_onTapped"
	},
	_onTapped() {
		this.fire("itemOpen", this.detail);
	}
});
