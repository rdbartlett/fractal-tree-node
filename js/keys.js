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

Mousetrap.bind('q', function() { stateMgmt.set('mode', 'quirkk'); ui.updateModeSelection(state) })
Mousetrap.bind('w', function() { stateMgmt.set('mode', 'widthh'); ui.updateModeSelection(state) })
Mousetrap.bind('e', function() { stateMgmt.set('mode', 'energy'); ui.updateModeSelection(state) })
Mousetrap.bind('r', function() { stateMgmt.set('mode', 'repeat'); ui.updateModeSelection(state) })
Mousetrap.bind('t', function() { stateMgmt.set('mode', 'tensor'); ui.updateModeSelection(state) })
Mousetrap.bind('y', function() { stateMgmt.set('mode', 'yessss'); ui.updateModeSelection(state) })
Mousetrap.bind('u', function() { stateMgmt.set('mode', 'urgncy'); ui.updateModeSelection(state) })

Mousetrap.bind('up',  function() {
  if (state.mode == 'urgncy') {
    stateMgmt.inc('urgncy', 1)
    animate.resetSweep()
  } else {
    rangesMgmt.inc(state.mode, 'center', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
})

Mousetrap.bind('down',  function() {
  if (state.mode == 'urgncy') { stateMgmt.dec('urgncy', 1); animate.resetSweep() }
  else {rangesMgmt.dec(state.mode, 'center', 1);  drawCanvas.updateStateWithRanges(); drawCanvas.fromState() }
})

Mousetrap.bind('right', function() {
  if (state.mode != 'urgncy'){
    rangesMgmt.inc(state.mode, 'amplitude', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
})

Mousetrap.bind('left',  function() {
  if (state.mode != 'urgncy'){
    rangesMgmt.dec(state.mode, 'amplitude', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
})

Mousetrap.bind('shift+up', function() {
  if (state.mode != 'urgncy') rangesMgmt.inc(state.mode, 'freq', 1)
})

Mousetrap.bind('shift+down', function() {
  if (state.mode != 'urgncy') rangesMgmt.dec(state.mode, 'freq', 1)
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
