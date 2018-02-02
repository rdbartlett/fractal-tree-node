var stateMgmt = require('./stateMgmt')
var drawCanvas = require('./drawCanvas')

// var recurringTimer
// var oneShotTimer

// playing = true

// scene1 = {from: 100, to: 50,  rate: 50}
// scene2 = {from:  50, to: 100, rate: 20}
// scene3 = {from: 100, to: 100, rate: 500}
// sequence = [ scene1, scene2, scene3 ]

// function playOrPause(){
//   if(playing) {
//     playing = !playing
//     startSequence()
//   }
//   else {
//     playing = !playing
//     clearTimeout(oneShotTimer)
//     clearTimeout(recurringTimer)
//   }
// }

// function startSequence() {
//   thisScene = 0;
//   animate(sequence[thisScene])
// }

// function advanceSequence(){
//   thisScene++
//   if(sequence.length == thisScene) thisScene = 0
//   animate(sequence[thisScene])
// }

// function animate(scene){
//   count = 1
//   next = scene.from
//   hold = false

//   if (scene.from > scene.to) growOrShrink = 1
//   else if (scene.from < scene.to) growOrShrink = -1
//   else hold = true;

//   if(hold) oneShotTimer = setTimeout(advanceSequence, scene.rate)
//   else recurringTimer = setInterval(tween, scene.rate);

//   function tween(){
//     if (next == scene.to){
//       clearInterval(recurringTimer)
//       count = 1
//       advanceSequence();
//     } else {
//       next = scene.from - (count*growOrShrink)
//       stateMgmt.set('widthh', next);
//       drawCanvas.fromState();

//       if(state.orbitt) stateMgmt.inc('angle', 1);
//       count++
//     }
//   }
// }

// ----------------

var frameRate = 33
var ranges = {
  quirkk: {low: -40,  high: 40,   period: 120},
  widthh: {low:  30,  high: 60,   period: 80}
}
var sweepTimer
var growOrShrink = {
  quirkk: true,
  widthh: true,
  energy: true,
  repeat: true,
  tensor: true,
  yessss: true
}

var deltas = []

function sweep(){
  stateMgmt.set('quirkk', ranges['quirkk'].low)
  drawCanvas.fromState();

  deltas['quirkk'] = (ranges['quirkk'].high - ranges['quirkk'].low)/ (ranges['quirkk'].period / 2)
  deltas['widthh'] = (ranges['widthh'].high - ranges['widthh'].low)/ (ranges['widthh'].period / 2)

  sweepTimer = setInterval(function(){ nextFrame() }, frameRate)
}

function nextFrame(){
  var attr = 'quirkk'
  if(growOrShrink[attr]){
    if(state[attr] < ranges[attr].high) stateMgmt.inc(attr, deltas[attr])
    else growOrShrink[attr] = !growOrShrink[attr]
  }
  else{
    if(state[attr] > ranges[attr].low) stateMgmt.dec(attr, deltas[attr])
    else growOrShrink[attr] = !growOrShrink[attr]
  }

  var attr = 'widthh'
  if(growOrShrink[attr]){
    if(state[attr] < ranges[attr].high) stateMgmt.inc(attr, deltas[attr])
    else growOrShrink[attr] = !growOrShrink[attr]
  }
  else{
    if(state[attr] > ranges[attr].low) stateMgmt.dec(attr, deltas[attr])
    else growOrShrink[attr] = !growOrShrink[attr]
  }

  drawCanvas.fromState();
}

// module.exports = {startSequence, playOrPause, sweep}
module.exports = {sweep}
