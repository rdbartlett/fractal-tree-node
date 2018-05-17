var stateMgmt = require('./stateMgmt')
var state = stateMgmt.get()
var rangesMgmt = require('./rangesMgmt')
var ranges = rangesMgmt.get()

var drawCanvas = require('./drawCanvas')

const attrs = [ 'quirkk', 'widthh', 'energy', 'repeat', 'tensor', 'yessss' ]

// If widthh is sweeping from 20 to 50 degrees and back to 20
// in a period of 10 frames,
// the delta is 6 degrees-per-frame [(50-20)/(10/2)].
// If quirkk is sweeping from 10-20 over 5 frames, the delta is 4.
//
//         0     1     2     3     4     5     6     7     8     9     10
// Frames: | - - | - - | - - | - - | - - | - - | - - | - - | - - | - - |
// Widthh: 20    26    32    38    44    50    44    38    32    26    20
// Quirkk: 10    14    18    18    14    10    14    18    18    14    10
//

var sweepTimer
var growing = {
  quirkk: true,
  widthh: true,
  energy: true,
  repeat: true,
  tensor: true,
  yessss: true
}

function sweep(){
  sweepTimer = setInterval(function(){ nextFrame() }, 100/state.speedd)
}

function resetSweep(){
  clearTimeout(sweepTimer)
  sweep()
}

function nextFrame(){
  state = stateMgmt.get()
  deltas = rangesMgmt.getDeltas()

  attrs.forEach(function(attr){
    if(growing[attr]){
      if(state[attr].toFixed(1) < ranges[attr].high) stateMgmt.inc(attr, deltas[attr])
      else growing[attr] = !growing[attr]
    }
    else{
      if(state[attr].toFixed(1) > ranges[attr].low) stateMgmt.dec(attr, deltas[attr])
      else growing[attr] = !growing[attr]
    }
  });

  if(state.orbitt) stateMgmt.inc('angle', 1);

  drawCanvas.fromState();
}

playing = false

function playOrPause(){
  if(playing) {
    playing = !playing
    sweep()
  }
  else {
    playing = !playing
    clearTimeout(sweepTimer)
  }
}

module.exports = {sweep, resetSweep, playOrPause, playing}
