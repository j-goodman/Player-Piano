var Dispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;
var TONES = require('../constants/Tones.js');

var KeyStore = new Store(Dispatcher);
var _notes = [];

KeyStore.__onDispatch = function (payload) {
  var noteIndex = _notes.indexOf(payload.noteName);
  switch (payload.actionType) {
    case "keydown":
      if (noteIndex === -1) {
        _notes.push(payload.noteName);
        this.__emitChange();
      }
      break;
    case "keyup":
      if (noteIndex !== -1) {
        _notes.splice(noteIndex, 1);
        this.__emitChange();
      }
      break;
    default:
      console.log("Did not find either known value.");
      console.log(payload);
  }
};

KeyStore.include = function(noteName) {
  var index = _notes.indexOf(noteName);
  if(index === -1) {
    return false;
  }
  else {
    return true;
  }
};

KeyStore.all = function () {
	return _notes.slice();
};

module.exports = KeyStore;
