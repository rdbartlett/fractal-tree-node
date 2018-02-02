var Mousetrap = require('mousetrap')
var stateMgmt = require('./stateMgmt')

// Mousetrap.bind('q', function() { stateMgmt.inc('quirkk', 1) });
Mousetrap.bind('q', function() { alert('yo') });
