var Mousetrap = require('mousetrap')
var stateMgmt = require('./stateMgmt')
var drawCanvas = require('./drawCanvas')

Mousetrap.bind('q', function() { stateMgmt.inc('quirkk', 1); drawCanvas.fromState() });
Mousetrap.bind('w', function() { stateMgmt.inc('widthh', 1); drawCanvas.fromState() });
Mousetrap.bind('e', function() { stateMgmt.inc('energy', 0.05); drawCanvas.fromState() });
Mousetrap.bind('r', function() { stateMgmt.inc('repeat', 1); drawCanvas.fromState() });
Mousetrap.bind('t', function() { stateMgmt.inc('tensor', 1); drawCanvas.fromState() });
Mousetrap.bind('y', function() { stateMgmt.inc('yessss', 1); drawCanvas.fromState() });
Mousetrap.bind('a', function() { stateMgmt.dec('quirkk', 1); drawCanvas.fromState() });
Mousetrap.bind('s', function() { stateMgmt.dec('widthh', 1); drawCanvas.fromState() });
Mousetrap.bind('d', function() { stateMgmt.dec('energy', 0.05); drawCanvas.fromState() });
Mousetrap.bind('f', function() { stateMgmt.dec('repeat', 1); drawCanvas.fromState() });
Mousetrap.bind('g', function() { stateMgmt.dec('tensor', 1); drawCanvas.fromState() });
Mousetrap.bind('h', function() { stateMgmt.dec('yessss', 1); drawCanvas.fromState() });
Mousetrap.bind('o', function() { toggle('orbitt') });
Mousetrap.bind('p', function() { toggle('points') });

function toggle(attr){
  if(state[attr]) stateMgmt.set(attr, false)
  else stateMgmt.set(attr, true)
  drawCanvas.fromState()
}
