var Mousetrap = require('mousetrap')
var stateMgmt = require('./stateMgmt')
var drawCanvas = require('./drawCanvas')
var animate = require('./animate')
var presets = require('./presets')

Mousetrap.bind('1', function() { presets.load(0); drawCanvas.fromState() });
Mousetrap.bind('2', function() { presets.load(1); drawCanvas.fromState() });
Mousetrap.bind('3', function() { presets.load(2); drawCanvas.fromState() });
Mousetrap.bind('4', function() { presets.load(3); drawCanvas.fromState() });
Mousetrap.bind('5', function() { presets.load(4); drawCanvas.fromState() });
Mousetrap.bind('6', function() { presets.load(5); drawCanvas.fromState() });
Mousetrap.bind('7', function() { presets.load(6); drawCanvas.fromState() });
Mousetrap.bind('8', function() { presets.load(7); drawCanvas.fromState() });
Mousetrap.bind('9', function() { presets.load(8); drawCanvas.fromState() });
Mousetrap.bind('0', function() { presets.load(9); drawCanvas.fromState() });

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

Mousetrap.bind('space', animate.playOrPause);

function toggle(attr){
  if(state[attr]) stateMgmt.set(attr, false)
  else stateMgmt.set(attr, true)
  drawCanvas.fromState()
}
