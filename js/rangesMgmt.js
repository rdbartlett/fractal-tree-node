var ui = require('./ui')

var ranges = {}

const attrs = [ 'quirkk', 'widthh', 'energy', 'repeat', 'tensor', 'yessss' ]

function init(){
  ranges = {
    quirkk: {center: 0 , amplitude: 0 , freq: 1},
    widthh: {center: 30 , amplitude: 10 , freq: 5},
    energy: {center: 100 , amplitude: 0 , freq: 1},
    repeat: {center: 1 , amplitude: 0, freq: 1},
    tensor: {center: 10 , amplitude: 0 , freq: 1},
    yessss: {center: 8 , amplitude: 0 , freq: 1}
  }

  attrs.forEach(function(attr){
    updateDeltas(attr)
    ui.updateRange(attr, ranges[attr])
  })

  return ranges
}

var deltas = []


function updateDeltas(attr){
  if (ranges[attr].freq > 0){
    deltas[attr] = ranges[attr].amplitude * ranges[attr].freq / 100
  }
  else deltas[attr] = 0
  ui.updateDelta(attr, deltas[attr])

  return deltas
}

function getDeltas(){
  return deltas
}

function get(){
  return ranges
}

function set(attr, key, to){
  ranges[attr][key] = to
}


var bounds = {
  energy: {min: 0, max: 100},
  repeat: {min: 0, max: 300},
  tensor: {min: 0, max: 999},
  yessss: {min: 0, max: 16},
  speedd: {min: 0, max: 100}
}

function inc(attr, key, by){
  // only increment the attribute if it is not at maximum
  if(bounds[attr]){
    if((ranges[attr][key] + by) <= bounds[attr].max){
      ranges[attr][key] += by
    }
  }
  else{ ranges[attr][key] += by }
  updateDeltas(attr)
  ui.updateRange(attr, ranges[attr])
}

function dec(attr, key, by){
  // only decrement the attribute if it is not at minimum
  if(bounds[attr]){
    if((ranges[attr][key] - by) >= bounds[attr].min){
      ranges[attr][key] -= by
    }
  }
  else{ ranges[attr][key] -= by }
  updateDeltas(attr)
  ui.updateRange(attr, ranges[attr])
}

module.exports = { init, get, inc, dec, getDeltas, attrs, set }