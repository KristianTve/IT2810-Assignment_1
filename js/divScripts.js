function closePopup() {
    $(".popupbox").css('display', 'none')
}
function openPopup() {
    $(".popupbox").css('display', 'inline')
}

function changeColorsCanvas() {
    if (circcol === 'grey') {
        circcol = 'darkgreen'
        line1col = 'seagreen'
        line2col = 'black'
        line3col = 'seagreen'
        arrowstroke = 'red'
        arrowfill = 'darkred'
    } else {
        circcol = 'grey'
        line1col = 'grey'
        line2col = 'grey'
        line3col = 'grey'
        arrowstroke = 'grey'
        arrowfill = 'grey'
    }
    drawCanvas()
}

function changeColorsSVG() {
    circ1 = $("#circle1")
    if (circ1.attr('fill') === 'grey') {
        circ1.attr('fill','darkgreen')
    } else {
        circ1.attr('fill','grey')
    }

    line1 = $("#line1")
    if (line1.attr('stroke') === 'grey') {
        line1.attr('stroke','seagreen')
    } else {
        line1.attr('stroke','grey')
    }

    line2 = $("#line2")
    if (line2.attr('stroke') === 'grey') {
        line2.attr('stroke','black')
    } else {
        line2.attr('stroke','grey')
    }

    line3 = $("#line3")
    if (line3.attr('stroke') === 'grey') {
        line3.attr('stroke','seagreen')
    } else {
        line3.attr('stroke','grey')
    }

    arrow1 = $("#arrow1")
    if (arrow1.attr('stroke') === 'grey') {
        arrow1.attr('stroke','red')
        arrow1.attr('fill','darkred')
    } else {
        arrow1.attr('stroke','grey')
        arrow1.attr('fill','grey')
    }
}
