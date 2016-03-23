var Dispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;
var TONES = require('../constants/Tones.js');

var KeyStore = new Store(Dispatcher);




module.exports = KeyStore;
