let zoneDiv = document.getElementById('zone');
let circle = document.getElementById('circle');
let road = document.getElementById('road');
setInterval(move, 10);
function move() {
    let coordinateXPoint = circle.getAttribute('cx');
    let coordinateYPoint = circle.getAttribute('cy');
    let coordinateX1Road = road.getAttribute('x1');
    let coordinateY1Road = road.getAttribute('y1');
    let coordinateX2Road = road.getAttribute('x2');
    let coordinateY2Road = road.getAttribute('y2');
    // let coordinatesPoint = [ coordinateXPoint, coordinateYPoint ];
    // Correct bug : the condition calculate with the number of numerals, not with the number directly
    coordinateXPoint = Number(coordinateXPoint);
    coordinateYPoint = Number(coordinateYPoint);
    coordinateX1Road = Number(coordinateX1Road);
    coordinateY1Road = Number(coordinateY1Road);
    coordinateX2Road = Number(coordinateX2Road);
    coordinateY2Road = Number(coordinateY2Road);
    if (coordinateXPoint < coordinateX1Road) {
        coordinateXPoint++;
        circle.setAttribute('cx', coordinateXPoint);
    }
    else if (coordinateXPoint > coordinateX1Road) {
        coordinateXPoint--;
        circle.setAttribute('cx', coordinateXPoint);
    }
    if (coordinateYPoint < coordinateY1Road) {
        coordinateYPoint++;
        circle.setAttribute('cy', coordinateYPoint);
    }
    else if (coordinateYPoint > coordinateY1Road) {
        coordinateYPoint--;
        circle.setAttribute('cy', coordinateYPoint);
    }
}
