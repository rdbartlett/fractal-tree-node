var ranges = {}

function init(){
  ranges = {
    quirkk: {low: 0,  high: 2,   period: 10},
    widthh: {low:  30,  high: 60,   period: 0}
  }
  updateReader('quirkk')
  updateReader('widthh')
  return ranges
}

function get(){
  return ranges
}

function inc(attr, by){
  // TODO add bounds

  ranges[attr].high += by
  updateReader(attr)
}

function updateReader(attr){
  document.getElementById(attr + 'Low').textContent = ranges[attr].low.toFixed(2);
  document.getElementById(attr + 'High').textContent = ranges[attr].high.toFixed(2);
  document.getElementById(attr + 'Period').textContent = ranges[attr].period.toFixed(2);
}


module.exports = { init, get, inc }
