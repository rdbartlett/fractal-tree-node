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
}


function updateRed(state){
  document.getElementById('huuuueRed').textContent = state.red;
}
function updateGreen(state){
  document.getElementById('huuuueGreen').textContent = state.green;
}
function updateBlue(state){
  document.getElementById('huuuueBlue').textContent = state.blue;
}


function updateModeSelection(state){
  state.modes.forEach(function(attr){ document.getElementById(attr + 'UI').className = "" })
  document.getElementById(state.modes[state.modeIndex] + 'UI').className = "selected"
}

function updateRange(attr, vals){
  document.getElementById(attr + 'Amplitude').textContent = vals.amplitude.toFixed(2);
  document.getElementById(attr + 'Period').textContent = vals.freq.toFixed(2);
}

function updateTutorialSlideWithState(state){
  document.getElementById('tutorialQuirkkState').textContent = state.quirkk.toFixed(2);
  document.getElementById('tutorialWidthhState').textContent = state.widthh.toFixed(2);
  document.getElementById('tutorialEnergyState').textContent = state.energy.toFixed(2);
  document.getElementById('tutorialRepeatState').textContent = state.repeat.toFixed(0);
  document.getElementById('tutorialTensorState').textContent = state.tensor.toFixed(2);
  document.getElementById('tutorialYessssState').textContent = state.yessss.toFixed(0);
}

module.exports = {
  updateState, updateRange, updateModeSelection, updateRed, updateGreen, updateBlue, updateTutorialSlideWithState
}