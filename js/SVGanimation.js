function createAnimation(itemid, attribute, duration, from, to) {

  var animation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
  animation.setAttribute("attributeType", "XML")
  animation.setAttribute("attributeName", attribute)
  animation.setAttribute("dur", duration)
  animation.setAttribute("to", to)
  animation.setAttribute("from", from)
  animation.setAttribute("repeatCount", "indefinite")
  animationID = itemid + attribute
  animation.setAttribute("id", animationID)
  SVGitem = document.getElementById(itemid)
  previous_animation = document.getElementById(animationID)
  if (previous_animation != null) {
    SVGitem.removeChild(previous_animation)
    console.log("Old ")
    return
  }
  SVGitem.appendChild(animation)
}

function initiateAnimation() {

  createAnimation("circle1","cx", "10s", 80, 100)
  createAnimation("circle1", "cy", "10s", 80, 400)

  createAnimation("line1","x2", "10s", 0, 400)
  createAnimation("line1", "y2", "10s", 400, 0)

  createAnimation("line3","x2", "10s", 200, 0)
  createAnimation("line3", "y2", "10s", 400, 0)
}

function stopAnimation() {
  SVGitem = $("#circle1")[0]
  SVGitem.removeChild(document.getElementById("circle1"+"cx"))
  SVGitem.removeChild(document.getElementById("circle1"+"cy"))

  SVGitem = $("#line1")[0]
  SVGitem.removeChild(document.getElementById("line1"+"x2"))
  SVGitem.removeChild(document.getElementById("line1"+"y2"))

  SVGitem = $("#line3")[0]
  SVGitem.removeChild(document.getElementById("line3"+"x2"))
  SVGitem.removeChild(document.getElementById("line3"+"y2"))
}
