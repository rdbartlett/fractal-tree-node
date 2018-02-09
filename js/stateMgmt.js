var ui = require('./ui')

var state = {}

function init(){
  state = {
    quirkk: 7, widthh: 19, energy: 1, repeat: 1, tensor: 10, yessss: 8,
    color: '#D711B4', angle: -90, pointSize: 2, lineWidth: 1, points: false, orbitt: false
  }
  ui.updateState(state)
  return state
}

bounds = {
  energy: {whole: false, min: 0, max: 1},
  repeat: {whole: true, min: 1, max: 16},
  yessss: {whole: true, min: 1, max: 16}
}

function get(){
  return state
}

function set(attr, to){
  state[attr] = to
  ui.updateState(state)
}

function inc(attr, by){
  // only increment the attribute if it is not at maximum
  if(bounds[attr]){
    if((state[attr] + by) <= bounds[attr].max){
      state[attr] += by
    }
  }
  else{ state[attr] += by }
  ui.updateState(state)
}

function dec(attr, by){
  // only decrement the attribute if it is not at maximum
  if(bounds[attr]){
    if((state[attr] - by) >= bounds[attr].min){
      state[attr] -= by
    }
  }
  else{ state[attr] -= by }
  ui.updateState(state)
}


module.exports = { init, get, set, inc, dec}
