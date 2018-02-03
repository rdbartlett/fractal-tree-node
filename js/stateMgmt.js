var state = {}

function init(){
  state = {
    quirkk: 7, widthh: 19, energy: 1, repeat: 1, tensor: 12, yessss: 1,
    color: '#D711B4', angle: -90, pointSize: 2, lineWidth: 1, points: false, orbitt: false
  }
  updateReader()
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
  updateReader()
}

function inc(attr, by){
  // only increment the attribute if it is not at maximum
  if(bounds[attr]){
    if((state[attr] + by) <= bounds[attr].max){
      state[attr] += by
    }
  }
  else{ state[attr] += by }
  updateReader()
}

function dec(attr, by){
  // only decrement the attribute if it is not at maximum
  if(bounds[attr]){
    if((state[attr] - by) >= bounds[attr].min){
      state[attr] -= by
    }
  }
  else{ state[attr] -= by }
  updateReader()
}

function updateReader(){
  document.getElementById('quirkkState').textContent = state.quirkk.toFixed(2);
  document.getElementById('widthhState').textContent = state.widthh.toFixed(2);
  document.getElementById('energyState').textContent = state.energy.toFixed(2);
  document.getElementById('repeatState').textContent = state.repeat.toFixed(0);
  document.getElementById('tensorState').textContent = state.tensor.toFixed(2);
  document.getElementById('yessssState').textContent = state.yessss.toFixed(0);
  document.getElementById('orbittState').textContent = state.orbitt.toString();
  document.getElementById('pointsState').textContent = state.points.toString();
}

module.exports = { init, get, set, inc, dec}
