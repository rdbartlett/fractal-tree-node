var Mousetrap = require('mousetrap')
var ui = require('./ui')
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

Mousetrap.bind('up',  function() { if(state.modeIndex > 0) stateMgmt.set('modeIndex', state.modeIndex-1) })
Mousetrap.bind('down',  function() { if(state.modeIndex < 6) stateMgmt.set('modeIndex', state.modeIndex+1) })

Mousetrap.bind('q', function() { stateMgmt.set('modeIndex', 0); ui.updateModeSelection(state) })
Mousetrap.bind('w', function() { stateMgmt.set('modeIndex', 1); ui.updateModeSelection(state) })
Mousetrap.bind('e', function() { stateMgmt.set('modeIndex', 2); ui.updateModeSelection(state) })
Mousetrap.bind('r', function() { stateMgmt.set('modeIndex', 3); ui.updateModeSelection(state) })
Mousetrap.bind('t', function() { stateMgmt.set('modeIndex', 4); ui.updateModeSelection(state) })
Mousetrap.bind('y', function() { stateMgmt.set('modeIndex', 5); ui.updateModeSelection(state) })
Mousetrap.bind('u', function() { stateMgmt.set('modeIndex', 6); ui.updateModeSelection(state) })

Mousetrap.bind('a',  function() {
  if (state.modes[state.modeIndex] == 'urgncy') {
    stateMgmt.inc('urgncy', 1)
    animate.resetSweep()
  } else {
    rangesMgmt.inc(state.modes[state.modeIndex], 'center', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
})

Mousetrap.bind('z',  function() {
  if (state.modes[state.modeIndex] == 'urgncy') { stateMgmt.dec('urgncy', 1); animate.resetSweep() }
  else {rangesMgmt.dec(state.modes[state.modeIndex], 'center', 1);  drawCanvas.updateStateWithRanges(); drawCanvas.fromState() }
})

Mousetrap.bind('s', function() {
  if (state.modes[state.modeIndex] != 'urgncy'){
    rangesMgmt.inc(state.modes[state.modeIndex], 'amplitude', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
})

Mousetrap.bind('x',  function() {
  if (state.modes[state.modeIndex] != 'urgncy'){
    rangesMgmt.dec(state.modes[state.modeIndex], 'amplitude', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
})

Mousetrap.bind('d', function() {
  if (state.modes[state.modeIndex] != 'urgncy') rangesMgmt.inc(state.modes[state.modeIndex], 'freq', 1)
})

Mousetrap.bind('c', function() {
  if (state.modes[state.modeIndex] != 'urgncy') rangesMgmt.dec(state.modes[state.modeIndex], 'freq', 1)
})

Mousetrap.bind('o', function() { toggle('orbitt') });
Mousetrap.bind('p', function() { toggle('points') });

Mousetrap.bind('space', animate.playOrPause);


function toggle(attr){
  state = stateMgmt.get()
  if(state[attr]) stateMgmt.set(attr, false)
  else stateMgmt.set(attr, true)
  drawCanvas.fromState()
}
