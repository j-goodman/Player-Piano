var React = require('react');
var Note = require('../util/Note.js');
var KeyStore = require('../stores/KeyStore.js');
// var TONES = require('../contants/Tones.js');

var Key = React.createClass({
	getInitialState: function () {
		return {pressed: false};
	},

  componentDidMount: function () {
    this.note = new Note(this.props.noteName);
    this.storeToken = KeyStore.addListener(this.changeState);
  },

  changeState: function () {
    if (KeyStore.include(this.props.noteName)) {
      this.note.start();
			this.setState({pressed: true});
    }
    else {
      this.note.stop();
			this.setState({pressed: false});
    }
  },

  render: function () {
		var keyPressed = "";
		if (this.state.pressed) {
			keyPressed = " keyPressed";
		}

    return (<div className={"key" + keyPressed}>{this.props.noteName}</div>);
  }
});

module.exports = Key;
