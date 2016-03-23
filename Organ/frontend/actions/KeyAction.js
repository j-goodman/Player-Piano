var TONES = require('../constants/Tones.js');
var Dispatcher = require('../dispatcher/Dispatcher.js');

var Mapping = {
  49: TONES.C6,
  50: TONES.D6,
  51: TONES.E6,
  52: TONES.F6,
  53: TONES.G6,
  54: TONES.A6,
  55: TONES.B6
};

var KeyAction = {
  keyPressed: function (key) {
    var payload = {
      actionType: 'keydown',
      noteName: Mapping[key]
    };

    Dispatcher.dispatch(payload);
  },

  keyReleased: function (key) {
    var payload = {
      actionType: 'keyup',
      noteName: Mapping[key]
    };
		
    Dispatcher.dispatch(payload);
  }
};

module.exports = KeyAction;
