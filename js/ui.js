function updateState(state){
  document.getElementById('quirkkState').textContent = state.quirkk.toFixed(2);
  document.getElementById('widthhState').textContent = state.widthh.toFixed(2);
  document.getElementById('energyState').textContent = state.energy.toFixed(2);
  document.getElementById('repeatState').textContent = state.repeat.toFixed(0);
  document.getElementById('tensorState').textContent = state.tensor.toFixed(2);
  document.getElementById('yessssState').textContent = state.yessss.toFixed(0);
  document.getElementById('orbittState').textContent = state.orbitt.toString();
  document.getElementById('pointsState').textContent = state.points.toString();
  document.getElementById('speeddState').textContent = state.speedd.toString();
  document.getElementById('modeState').textContent = state.mode.toString();
}

function updateRange(attr, vals){
  document.getElementById(attr + 'Low').textContent = vals.low.toFixed(2);
  document.getElementById(attr + 'High').textContent = vals.high.toFixed(2);
  document.getElementById(attr + 'Period').textContent = vals.period.toFixed(2);
}

function updateDelta(attr, val){
  document.getElementById(attr + 'Delta').textContent = val.toFixed(3)
}

module.exports = {
  updateState, updateDelta, updateRange
}