var animate = require('./animate')
var presets = require('./presets')

var i = 0;

function hide(){
  parent = document.getElementById('slides')
  Array.prototype.forEach.call(parent.children, child => {
    child.style.display = 'none'
  })
}

function show(index){
  hide()
  i = index
  if(d = document.getElementById('slide-' + index))
    d.style.display = 'block'

  console.log("slide: " + index)

  switch(index){
    case 2:
      animate.pause()
      break
    case 3:
      presets.load(10)
      break
    case 4:
      presets.load(11)
      break
    case 5:
      presets.load(12)
      break
    case 6:
      presets.load(13)
      break
    case 9:
      presets.load(14)
      break
    case 10:
      presets.load(15)
      break
    case 11:
      presets.load(16)
      break
    case 12:
      document.getElementById("tutorialState").style.display = "none"
      presets.load(17)
      break
    case 13:
      document.getElementById("tutorialState").style.display = "block"
      presets.load(18)
      break
    case 15:
      document.getElementById("tutorialState").style.display = "block"

      document.getElementById("slides-container").style.display = "block"
      document.getElementById("stateReader").style.display = "none"
      break
    case 16:
      document.getElementById("stateReader").style.display = "block"

      d = document.getElementsByClassName("phase2")
      for(var j = 0; j < d.length; j++) d[j].style.visibility = "hidden"

      document.getElementById("tutorialState").style.display = "none"
      break
    case 17:
      document.getElementById("slides-container").style.display = "none"
      break
    case 18:
      document.getElementById("slides-container").style.display = "block"

      d = document.getElementsByClassName("phase2")
      for(var j = 0; j < d.length; j++) d[j].style.visibility = "visible"

      animate.play()
      break
    case 19:
      document.getElementById("stateReader").style.display = "block"
      document.getElementById("slides-container").style.display = "none"
      break
  }

}

function next(){
  if(i<19) i++
  show(i)
}

function prev(){
  if(i>0) i--
  show(i)
}

function last(){
  show(19)
}

module.exports = {show, next, prev, last}