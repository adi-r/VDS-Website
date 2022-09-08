function circleChange() {
    var circle = document.getElementById("circle")
    var fill = circle.getAttribute("fill")

    if(fill == "green") circle.setAttribute("fill", "red")
    else circle.setAttribute("fill", "green")
}

function ellipseChange() {
    var ellipse = document.getElementById("ellipse")
    var rx = ellipse.getAttribute("rx")
    var ry = ellipse.getAttribute("ry")

    if(rx == "200") ellipse.setAttribute("rx", "0")
    else ellipse.setAttribute("rx", "200")

    if(ry == "200") ellipse.setAttribute("ry", "0")
    else ellipse.setAttribute("ry", "200")
}

function rectChange() {
    var rect = document.getElementById("rect")
    var width = rect.getAttribute("width")
    var height = rect.getAttribute("height")

    if(width == "300") rect.setAttribute("width", "150")
    else rect.setAttribute("width", "300")

    if(height == "100") rect.setAttribute("height", "50")
    else rect.setAttribute("height", "100")
}