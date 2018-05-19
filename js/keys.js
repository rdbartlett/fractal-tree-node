var Mousetrap = require('mousetrap')
var stateMgmt = require('./stateMgmt')
var state = stateMgmt.get()
var rangesMgmt = require('./rangesMgmt')
var ranges
var attrs = rangesMgmt.attrs
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



Mousetrap.bind('i', function() { stateMgmt.inc('speedd', 1); animate.resetSweep() })
Mousetrap.bind('k', function() { stateMgmt.dec('speedd', 1); animate.resetSweep() })

Mousetrap.bind('q', function() { stateMgmt.set('mode', 'quirkk') })
Mousetrap.bind('w', function() { stateMgmt.set('mode', 'widthh') })
Mousetrap.bind('e', function() { stateMgmt.set('mode', 'energy') })
Mousetrap.bind('r', function() { stateMgmt.set('mode', 'repeat') })
Mousetrap.bind('t', function() { stateMgmt.set('mode', 'tensor') })
Mousetrap.bind('y', function() { stateMgmt.set('mode', 'yessss') })


Mousetrap.bind('up',    function() { rangesMgmt.inc(state.mode, 'center', 1);  drawCanvas.updateStateWithRanges(); drawCanvas.fromState() })
Mousetrap.bind('down',  function() { rangesMgmt.dec(state.mode, 'center', 1);  drawCanvas.updateStateWithRanges(); drawCanvas.fromState() })
Mousetrap.bind('right', function() { rangesMgmt.inc(state.mode, 'amplitude', 1); drawCanvas.updateStateWithRanges(); drawCanvas.fromState() })
Mousetrap.bind('left',  function() { rangesMgmt.dec(state.mode, 'amplitude', 1); drawCanvas.updateStateWithRanges(); drawCanvas.fromState() })

Mousetrap.bind('o', function() { toggle('orbitt') });
Mousetrap.bind('p', function() { toggle('points') });

Mousetrap.bind('space', animate.playOrPause);

Mousetrap.bind('shift+q', function() { rangesMgmt.inc(attrs[0], 'high', 1) })
Mousetrap.bind('shift+w', function() { rangesMgmt.inc(attrs[1], 'high', 1) })
Mousetrap.bind('shift+e', function() { rangesMgmt.inc(attrs[2], 'high', 0.05) })
Mousetrap.bind('shift+r', function() { rangesMgmt.inc(attrs[3], 'high', 1) })
Mousetrap.bind('shift+t', function() { rangesMgmt.inc(attrs[4], 'high', 1) })
Mousetrap.bind('shift+y', function() { rangesMgmt.inc(attrs[5], 'high', 1) })

Mousetrap.bind('shift+a', function() { rangesMgmt.dec(attrs[0], 'high', 1) })
Mousetrap.bind('shift+s', function() { rangesMgmt.dec(attrs[1], 'high', 1) })
Mousetrap.bind('shift+d', function() { rangesMgmt.dec(attrs[2], 'high', 0.05) })
Mousetrap.bind('shift+f', function() { rangesMgmt.dec(attrs[3], 'high', 1) })
Mousetrap.bind('shift+g', function() { rangesMgmt.dec(attrs[4], 'high', 1) })
Mousetrap.bind('shift+h', function() { rangesMgmt.dec(attrs[5], 'high', 1) })

Mousetrap.bind('shift+ctrl+q', function() { rangesMgmt.inc(attrs[0], 'period', 1) })
Mousetrap.bind('shift+ctrl+w', function() { rangesMgmt.inc(attrs[1], 'period', 1) })
Mousetrap.bind('shift+ctrl+e', function() { rangesMgmt.inc(attrs[2], 'period', 1) })
Mousetrap.bind('shift+ctrl+r', function() { rangesMgmt.inc(attrs[3], 'period', 1) })
Mousetrap.bind('shift+ctrl+t', function() { rangesMgmt.inc(attrs[4], 'period', 1) })
Mousetrap.bind('shift+ctrl+y', function() { rangesMgmt.inc(attrs[5], 'period', 1) })

Mousetrap.bind('shift+ctrl+a', function() { rangesMgmt.dec(attrs[0], 'period', 1) })
Mousetrap.bind('shift+ctrl+s', function() { rangesMgmt.dec(attrs[1], 'period', 1) })
Mousetrap.bind('shift+ctrl+d', function() { rangesMgmt.dec(attrs[2], 'period', 1) })
Mousetrap.bind('shift+ctrl+f', function() { rangesMgmt.dec(attrs[3], 'period', 1) })
Mousetrap.bind('shift+ctrl+g', function() { rangesMgmt.dec(attrs[4], 'period', 1) })
Mousetrap.bind('shift+ctrl+h', function() { rangesMgmt.dec(attrs[5], 'period', 1) })


function toggle(attr){
  state = stateMgmt.get()
  if(state[attr]) stateMgmt.set(attr, false)
  else stateMgmt.set(attr, true)
  drawCanvas.fromState()
}
