var ranges = {}

const attrs = [ 'quirkk', 'widthh', 'energy', 'repeat', 'tensor', 'yessss' ]

function init(){
  ranges = {
    quirkk: {low: 10, high: 17,   period: 90},
    widthh: {low: 19, high: 19, period: 90},
    energy: {low: 1, high: 1,   period: 90},
    repeat: {low: 1, high: 1,   period: 10},
    tensor: {low: 6, high: 6, period: 90},
    yessss: {low: 1, high: 4,   period: 5}
  }

  attrs.forEach(function(attr){
    updateDeltas(attr)
    updateReader(attr)
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
  updateDeltaReader(attr)

  return deltas
}

function updateDeltaReader(attr){
  document.getElementById(attr + 'Delta').textContent = deltas[attr]
}

function getDeltas(){
  return deltas
}

function get(){
  return ranges
}

function inc(attr, dir, by){
  // TODO add bounds

  ranges[attr][dir] += by
  updateDeltas(attr)
  updateReader(attr)
}

function dec(attr, dir, by){
  // TODO add bounds

  ranges[attr][dir] -= by
  updateDeltas(attr)
  updateReader(attr)
}

function updateReader(attr){
  document.getElementById(attr + 'Low').textContent = ranges[attr].low.toFixed(2);
  document.getElementById(attr + 'High').textContent = ranges[attr].high.toFixed(2);
  document.getElementById(attr + 'Period').textContent = ranges[attr].period.toFixed(2);
}


module.exports = { init, get, inc, dec, getDeltas, attrs }
