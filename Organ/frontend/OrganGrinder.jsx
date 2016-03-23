var React = require('react');
var ReactDOM = require('react-dom');
var Key = require('./components/Key.jsx');
var TONES = require('./constants/Tones.js');
var Recorder = require('./components/Recorder.jsx');

$(function() {
  require('./util/KeyListener.js');

  var KeyWrapper = React.createClass({
    render: function () {
      return (
        <div className="keyboard group">
          <Key noteName={TONES.C6} />
          <Key noteName={TONES.D6} />
          <Key noteName={TONES.E6} />
          <Key noteName={TONES.F6} />
          <Key noteName={TONES.G6} />
          <Key noteName={TONES.A6} />
          <Key noteName={TONES.B6} />
					<Recorder />
        </div>
      );
    }
  });

  ReactDOM.render(<KeyWrapper />, $('#content')[0]);
});
