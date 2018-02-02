var state = {}

function init(){
  state = {
  quirkk: 10, widthh: 60, energy: 1, repeat: 6, tensor: 10, yessss: 9,
  color: '#D711B4',
  angle: -90, pointSize: 2, lineWidth: 1, points: true, orbitt: true
  }
  return state
}

function get(){
  return state
}

function set(attr, to){
  state[attr] = to
  updateReader()
}

function inc(attr, by){
  state[attr] += by
  updateReader()
}

function dec(attr, by){
  state[attr] -= by
  updateReader()
}

function updateReader(){
  document.getElementById('quirkk').textContent = state.quirkk;
  document.getElementById('widthh').textContent = state.widthh;
  document.getElementById('energy').textContent = state.energy;
  document.getElementById('repeat').textContent = state.repeat;
  document.getElementById('tensor').textContent = state.tensor;
  document.getElementById('yessss').textContent = state.yessss;
  document.getElementById('orbitt').textContent = state.orbitt.toString();
  document.getElementById('points').textContent = state.points.toString();
}

module.exports = { init, get, set, inc, dec }
