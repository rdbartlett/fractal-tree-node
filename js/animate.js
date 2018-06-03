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
  sweepTimer = setInterval(function(){ nextFrame() }, 200/state.urgncy)
}

function pause(){
  clearTimeout(sweepTimer)
}

function resetSweep(){
  clearTimeout(sweepTimer)
  sweep()
}

var bounds = {
  energy: {min: 0, max: 100},
  repeat: {min: 0, max: 300},
  tensor: {min: 0, max: 999},
  yessss: {min: 0, max: 16},
  urgncy: {min: 1, max: 100}
}


function LTMax(attr){ return (state[attr] + 1 <= bounds[attr].max) }
function GTMin(attr){ return (state[attr] - 1 >= bounds[attr].min) }
function LTTop(attr){ return (state[attr] < ranges[attr].center + ranges[attr].amplitude) }
function GTBot(attr){ return (state[attr] > ranges[attr].center - ranges[attr].amplitude) }
function grow(attr){   stateMgmt.inc(attr, deltas[attr]) }
function shrink(attr){ stateMgmt.dec(attr, deltas[attr]) }

function shouldGrow(attr){
  if(bounds[attr]) return LTTop(attr) && LTMax(attr)
  else return LTTop(attr)
}

function shouldShrink(attr){
  if(bounds[attr]) return GTBot(attr) && GTMin(attr)
  else return GTBot(attr)
}

function nextFrame(){
  state = stateMgmt.get()
  deltas = rangesMgmt.getDeltas()

  attrs.forEach(function(attr){
    if(growing[attr]){
      if(shouldGrow(attr)){
        if(bounds[attr] && LTMax(attr)) grow(attr)
        else grow(attr)
      } else growing[attr] = !growing[attr]
    }
    else{
      if(shouldShrink(attr)){
        if(bounds[attr] && GTMin(attr)) shrink(attr)
        else shrink(attr)
      } else growing[attr] = !growing[attr]
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

module.exports = {sweep, resetSweep, playOrPause, playing, pause}
