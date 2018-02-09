var reader = document.getElementById('readerQuirkk');
var ctx = reader.getContext('2d');

function init(){
  drawMidline()
  drawArc()
}

function drawMidline(){
  var x1 = 0
  var y1 = reader.height / 2
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(reader.width, y1)
  ctx.closePath()
  ctx.stroke()
}

function drawArc(){
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(0, reader.height)
  ctx.lineTo(reader.width / 2, 0)
  ctx.lineTo(reader.width, reader.height)
  // ctx.closePath()
  ctx.stroke()
}

function updateState(state){
  document.getElementById('quirkkState').textContent = state.quirkk.toFixed(2);
  document.getElementById('widthhState').textContent = state.widthh.toFixed(2);
  document.getElementById('energyState').textContent = state.energy.toFixed(2);
  document.getElementById('repeatState').textContent = state.repeat.toFixed(0);
  document.getElementById('tensorState').textContent = state.tensor.toFixed(2);
  document.getElementById('yessssState').textContent = state.yessss.toFixed(0);
  document.getElementById('orbittState').textContent = state.orbitt.toString();
  document.getElementById('pointsState').textContent = state.points.toString();
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
  init, updateState, updateDelta, updateRange
}