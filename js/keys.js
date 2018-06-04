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
var slides = require('./slides')

Mousetrap.bind('1', function() { presets.load(0) });
Mousetrap.bind('2', function() { presets.load(1) });
Mousetrap.bind('3', function() { presets.load(2) });
Mousetrap.bind('4', function() { presets.load(3) });
Mousetrap.bind('5', function() { presets.load(4) });
Mousetrap.bind('6', function() { presets.load(5) });
Mousetrap.bind('7', function() { presets.load(6) });
Mousetrap.bind('8', function() { presets.load(7) });
Mousetrap.bind('9', function() { presets.load(8) });
Mousetrap.bind('0', function() { presets.load(9) });

Mousetrap.bind('a',  function() { if(state.modeIndex > 0) stateMgmt.set('modeIndex', state.modeIndex-1) })
Mousetrap.bind('z',  function() { if(state.modeIndex < 7) stateMgmt.set('modeIndex', state.modeIndex+1) })

Mousetrap.bind('q', function() { stateMgmt.set('modeIndex', 0); ui.updateModeSelection(state) })
Mousetrap.bind('w', function() { stateMgmt.set('modeIndex', 1); ui.updateModeSelection(state) })
Mousetrap.bind('e', function() { stateMgmt.set('modeIndex', 2); ui.updateModeSelection(state) })
Mousetrap.bind('r', function() { stateMgmt.set('modeIndex', 3); ui.updateModeSelection(state) })
Mousetrap.bind('t', function() { stateMgmt.set('modeIndex', 4); ui.updateModeSelection(state) })
Mousetrap.bind('y', function() { stateMgmt.set('modeIndex', 5); ui.updateModeSelection(state) })
Mousetrap.bind('h', function() { stateMgmt.set('modeIndex', 6); ui.updateModeSelection(state) })
Mousetrap.bind('u', function() { stateMgmt.set('modeIndex', 7); ui.updateModeSelection(state) })

Mousetrap.bind('j',  incState)
Mousetrap.bind('n',  decState)
Mousetrap.bind('k',  incSwing)
Mousetrap.bind('m',  decSwing)
Mousetrap.bind('l',  incFreq)
Mousetrap.bind(',',  decFreq)

function incState(){
  if (stateMgmt.mode() == 'urgncy') {
    stateMgmt.inc('urgncy', 1)
    animate.resetSweep()
  } else if (stateMgmt.mode() == 'huuuue'){
    stateMgmt.inc('red', 5)
    ui.updateRed(state)
  } else {
    rangesMgmt.inc(stateMgmt.mode(), 'center', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
}

function decState(){
  if (stateMgmt.mode() == 'urgncy') {
    stateMgmt.dec('urgncy', 1)
    animate.resetSweep()
  } else if (stateMgmt.mode() == 'huuuue'){
    stateMgmt.dec('red', 5)
    ui.updateRed(state)
  } else {
    rangesMgmt.dec(stateMgmt.mode(), 'center', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
}

function incSwing(){
  if (stateMgmt.mode() == 'urgncy') return
  else if (stateMgmt.mode() == 'huuuue') {
    stateMgmt.inc('green', 5)
    ui.updateGreen(state)
  } else {
    rangesMgmt.inc(stateMgmt.mode(), 'amplitude', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
}

function decSwing(){
  if (stateMgmt.mode() == 'urgncy') return
  else if (stateMgmt.mode() == 'huuuue') {
    stateMgmt.dec('green', 5)
    ui.updateGreen(state)
  } else {
    rangesMgmt.dec(stateMgmt.mode(), 'amplitude', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
}

function incFreq(){
  if (stateMgmt.mode() == 'huuuue') {
    stateMgmt.inc('blue', 5)
    ui.updateBlue(state)
  } else if (stateMgmt.mode() != 'urgncy') rangesMgmt.inc(stateMgmt.mode(), 'freq', 1)
}

function decFreq(){
  if (stateMgmt.mode() == 'huuuue') {
    stateMgmt.dec('blue', 5)
    ui.updateBlue(state)
  } else if (stateMgmt.mode() != 'urgncy') rangesMgmt.dec(stateMgmt.mode(), 'freq', 1)
}

Mousetrap.bind('i', function() { toggleControls() });
Mousetrap.bind('o', function() { toggle('orbitt') });
Mousetrap.bind('p', function() { toggle('points') });


Mousetrap.bind('space', animate.playOrPause);

// add bounds
Mousetrap.bind('down', slides.next);
Mousetrap.bind('up', slides.prev);
Mousetrap.bind('right', slides.last);


function toggle(attr){
  state = stateMgmt.get()
  if(state[attr]) stateMgmt.set(attr, false)
  else stateMgmt.set(attr, true)
  drawCanvas.fromState()
}

showingControls = true

function toggleControls(){
  if(showingControls) {
    showingControls = !showingControls
    document.getElementById('stateReader').style.display = 'none'
  }
  else {
    showingControls = !showingControls
    document.getElementById('stateReader').style.display = 'block'
  }
}