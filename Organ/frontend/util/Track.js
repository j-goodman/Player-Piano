var KeyStore = require('../stores/KeyStore.js');
var KeyAction = require('../actions/KeyAction.js');

var KEY_MAP = {
  1046.50: 49,
  1174.66: 50,
  1318.51: 51,
  1396.91: 52,
  1567.98: 53,
  1760.00: 54,
  1975.53: 55
};

var Track = function (attributes) {
	this.name = attributes.name;
	this.roll = attributes.roll || [{timeSlice: 0, notes: []}];
};

Track.prototype.startRecording = function () {
	this.roll = [];
	this.startTime = new Date();
};

Track.prototype.stopRecording = function () {
	this.addNotes([]);
};

Track.prototype.addNotes = function (notes) {
	this.roll.push({
		timeSlice: (new Date() - this.startTime),
		notes: notes
	});
};

Track.prototype.play = function () {
	var playBackStartTime = new Date();
	var rollIndex = 0;

	var intervalId = setInterval(function () {
		var currentTime = new Date();
		if (currentTime - playBackStartTime >= this.roll[rollIndex].timeSlice) {

			if(rollIndex > 0) {
				for(var i = 0; i < this.roll[rollIndex - 1].notes.length; i++) {
					KeyAction.keyReleased(KEY_MAP[(this.roll[rollIndex - 1].notes[i])]);
				}
			}

			for (var j = 0; j < this.roll[rollIndex].notes.length; j++) {
				KeyAction.keyPressed(KEY_MAP[(this.roll[rollIndex].notes[j])]);
			}

			if (rollIndex === this.roll.length - 1) {
				clearInterval(intervalId);
			}

			rollIndex++;
		}
	}.bind(this), 10);
};

module.exports = Track;
