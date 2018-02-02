var stateMgmt = require('./stateMgmt')
var state
var rangesMgmt = require('./rangesMgmt')
var ranges = rangesMgmt.get()

var drawCanvas = require('./drawCanvas')

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

const frameRate = 33
const attrs = ['quirkk', 'widthh']
var deltas = []
attrs.forEach(function(attr){
  if (ranges[attr].period > 0)
    deltas[attr] = (ranges[attr].high - ranges[attr].low)/ (ranges[attr].period / 2)
  else deltas[attr] = 0
  document.getElementById(attr + 'Low').textContent = ranges[attr].low.toFixed(2);
  document.getElementById(attr + 'High').textContent = ranges[attr].high.toFixed(2);
  document.getElementById(attr + 'Period').textContent = ranges[attr].period.toFixed(2);
});




var sweepTimer
var growOrShrink = {
  quirkk: true,
  widthh: true,
  energy: true,
  repeat: true,
  tensor: true,
  yessss: true
}

function sweep(){
  sweepTimer = setInterval(function(){ nextFrame() }, frameRate)
}

function nextFrame(){
  state = stateMgmt.get();

  attrs.forEach(function(attr){
    if(growOrShrink[attr]){
      if(state[attr] < ranges[attr].high) stateMgmt.inc(attr, deltas[attr])
      else growOrShrink[attr] = !growOrShrink[attr]
    }
    else{
      if(state[attr] > ranges[attr].low) stateMgmt.dec(attr, deltas[attr])
      else growOrShrink[attr] = !growOrShrink[attr]
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

module.exports = {sweep, playOrPause}
