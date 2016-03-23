var React = require('react');
var Track = require('../util/Track.js');
var KeyStore = require('../stores/KeyStore.js');

var Recorder = React.createClass({
	getInitialState: function () {
		return {isRecording: false, track: new Track({name: "No Track"})};
	},

	componentDidMount: function () {
		this.storeToken = KeyStore.addListener(function() {
			if (this.state.isRecording) {
				this.state.track.addNotes(KeyStore.all());
			}
		}.bind(this));
	},

	componentWillUnmount: function () {
		if (this.state.isRecording) {
			this.state.track.stopRecording();
		}

		KeyStore.remove(this.state.storeToken);
	},

	render: function () {
		var buttonLabel = "Start Recording";
		if (this.state.isRecording) {
			buttonLabel = "Finish Recording";
		}

		return (
			<div>
				<button onClick={this.clickButton} className='recorderButton'>{buttonLabel}</button>
				<button onClick={this.clickPlay} className='playButton'>Play</button>
			</div>
		);
	},

	clickButton: function () {
		if (this.state.isRecording) {
			this.state.track.stopRecording();
			this.setState({isRecording: false});
		}
		else {
			this.state.track = new Track({name: "Trackname"});
			this.state.track.startRecording();
			this.setState({isRecording: true});
		}
	},

	clickPlay: function () {
		if (!this.state.isRecording) {
			this.state.track.play();
		}
	}
});

module.exports = Recorder;
