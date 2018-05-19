function updateState(state){
  document.getElementById('quirkkState').textContent = state.quirkk.toFixed(2);
  document.getElementById('widthhState').textContent = state.widthh.toFixed(2);
  document.getElementById('energyState').textContent = state.energy.toFixed(2);
  document.getElementById('repeatState').textContent = state.repeat.toFixed(0);
  document.getElementById('tensorState').textContent = state.tensor.toFixed(2);
  document.getElementById('yessssState').textContent = state.yessss.toFixed(0);
  document.getElementById('orbittState').textContent = state.orbitt.toString();
  document.getElementById('pointsState').textContent = state.points.toString();
  document.getElementById('urgncyState').textContent = state.urgncy.toString();
  document.getElementById('modeState').textContent = state.mode.toString();
}

function updateModeSelection(state){
  const attrs = [ 'quirkk', 'widthh', 'energy', 'repeat', 'tensor', 'yessss', 'urgncy' ]
  attrs.forEach(function(attr){ document.getElementById(attr + 'UI').className = "" })
  document.getElementById(state.mode + 'UI').className = "selected"
}

function updateRange(attr, vals){
  document.getElementById(attr + 'Center').textContent = vals.center.toFixed(2);
  document.getElementById(attr + 'Amplitude').textContent = vals.amplitude.toFixed(2);
  document.getElementById(attr + 'Period').textContent = vals.freq.toFixed(2);
}

function updateDelta(attr, val){
  document.getElementById(attr + 'Delta').textContent = val.toFixed(3)
}

module.exports = {
  updateState, updateDelta, updateRange, updateModeSelection
}