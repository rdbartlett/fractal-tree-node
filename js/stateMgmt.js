var state = {}

function init(){
  state = {
  repeats: 1, depth: 12, offset: 60,
  skew: 0, opacity: 1, size: 6, color: '#D711B4',
  angle: -90, pointSize: 2, lineWidth: 1, toggleStroke: true, rotate: false
  }
  return state
}

function get(){
  return state
}

function set(attr, to){
  state[attr] = to
}

function inc(attr, by){
  state[attr] += by
}

function dec(attr, by){
  state[attr] -= by
}


module.exports = { init, get, set, inc, dec }
