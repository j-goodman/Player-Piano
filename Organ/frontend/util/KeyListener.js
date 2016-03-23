var KeyAction = require('../actions/KeyAction.js');

$(document).on('keydown', function (e) {
  var code =  e.keyCode || e.which;
  KeyAction.keyPressed(code);
});

$(document).on('keyup', function (e) {
  var code =  e.keyCode || e.which;
  KeyAction.keyReleased(code);
});
