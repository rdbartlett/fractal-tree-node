var ui = require('./ui')

var ranges = {}

const attrs = [ 'quirkk', 'widthh', 'energy', 'repeat', 'tensor', 'yessss' ]

function init(){
  ranges = {
    quirkk: {center: 0 , amplitude: 0 , period: 90},
    widthh: {center: 30 , amplitude: 10 , period: 90},
    energy: {center: 100 , amplitude: 0 , period: 90},
    repeat: {center: 1 , amplitude: 0 , period: 10},
    tensor: {center: 10 , amplitude: 0 , period: 90},
    yessss: {center: 8 , amplitude: 0 , period: 10}
  }

  attrs.forEach(function(attr){
    updateDeltas(attr)
    ui.updateRange(attr, ranges[attr])
  })

  return ranges
}

var deltas = []


function updateDeltas(attr){
  if (ranges[attr].period > 0){
    var d = ranges[attr].amplitude
    var t = ranges[attr].period / 2
    deltas[attr] = d/t
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

function inc(attr, key, by){
  // TODO add bounds

  ranges[attr][key] += by
  updateDeltas(attr)
  ui.updateRange(attr, ranges[attr])
}

function dec(attr, key, by){
  // TODO add bounds

  ranges[attr][key] -= by
  updateDeltas(attr)
  ui.updateRange(attr, ranges[attr])
}

module.exports = { init, get, inc, dec, getDeltas, attrs, set }
