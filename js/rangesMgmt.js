var ui = require('./ui')

var ranges = {}

const attrs = [ 'quirkk', 'widthh', 'energy', 'repeat', 'tensor', 'yessss' ]

function init(){
  ranges = {
    quirkk: {low: 7, high: 7,   period: 90},
    widthh: {low: 19, high: 29, period: 90},
    energy: {low: 1, high: 1,   period: 90},
    repeat: {low: 1, high: 1,   period: 10},
    tensor: {low: 10, high: 10, period: 90},
    yessss: {low: 8, high: 8,   period: 10}
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
    var d = ranges[attr].high - ranges[attr].low
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

function set(attr, dir, to){
  ranges[attr][dir] = to
}

function inc(attr, dir, by){
  // TODO add bounds

  ranges[attr][dir] += by
  updateDeltas(attr)
  ui.updateRange(attr, ranges[attr])
}

function dec(attr, dir, by){
  // TODO add bounds

  ranges[attr][dir] -= by
  updateDeltas(attr)
  ui.updateRange(attr, ranges[attr])
}

module.exports = { init, get, inc, dec, getDeltas, attrs, set }
