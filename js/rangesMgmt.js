var ranges = {}

function init(){
  ranges = {
    quirkk: {low: 7, high: 7,   period: 90},
    widthh: {low: 19, high: 19, period: 90},
    energy: {low: 1, high: 1,   period: 90},
    repeat: {low: 1, high: 2,   period: 90},
    tensor: {low: 12, high: 12, period: 90},
    yessss: {low: 7, high: 7,   period: 90}
  }

  updateReader('quirkk')
  updateReader('widthh')
  updateReader('energy')
  updateReader('repeat')
  updateReader('tensor')
  updateReader('yessss')
  return ranges
}

function get(){
  return ranges
}

function inc(attr, dir, by){
  // TODO add bounds

  ranges[attr][dir] += by
  updateReader(attr)
}

function dec(attr, dir, by){
  // TODO add bounds

  ranges[attr][dir] -= by
  updateReader(attr)
}

function updateReader(attr){
  document.getElementById(attr + 'Low').textContent = ranges[attr].low.toFixed(2);
  document.getElementById(attr + 'High').textContent = ranges[attr].high.toFixed(2);
  document.getElementById(attr + 'Period').textContent = ranges[attr].period.toFixed(2);
}


module.exports = { init, get, inc, dec }
