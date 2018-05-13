let zoneDiv = document.getElementById('zone');
let circle = document.getElementById('circle');
let road = document.getElementById('road');
/**
* @method chooseWay : Define with numbers which road points will follow
* @param min number : Minimum number of roads
* @param max number : Maximum number of roads
* @return Number which will represente a road
*/
function chooseWay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var choosenWay = chooseWay(1, 2);
setInterval(move, 10);
/**
* @method move : Move points on the road
* @return Void
*/
function move() {
    // Correct bug : the condition calculate with the number of numerals, not with the number directly
    let coordinateXPoint = Number(circle.getAttribute('cx'));
    let coordinateYPoint = Number(circle.getAttribute('cy'));
    let coordinateX1Road = Number(road.getAttribute('x1'));
    let coordinateY1Road = Number(road.getAttribute('y1'));
    let coordinateX2Road = Number(road.getAttribute('x2'));
    let coordinateY2Road = Number(road.getAttribute('y2'));
    switch (choosenWay) {
        case 1:
            if (coordinateXPoint < coordinateX1Road) {
                coordinateXPoint++;
                circle.setAttribute('cx', coordinateXPoint.toString());
            }
            else if (coordinateXPoint > coordinateX1Road) {
                coordinateXPoint--;
                circle.setAttribute('cx', coordinateXPoint.toString());
            }
            if (coordinateYPoint < coordinateY1Road) {
                coordinateYPoint++;
                circle.setAttribute('cy', coordinateYPoint.toString());
            }
            else if (coordinateYPoint > coordinateY1Road) {
                coordinateYPoint--;
                circle.setAttribute('cy', coordinateYPoint.toString());
            }
            break;
        case 2:
            if (coordinateXPoint < coordinateX2Road) {
                coordinateXPoint++;
                circle.setAttribute('cx', coordinateXPoint.toString());
            }
            else if (coordinateXPoint > coordinateX2Road) {
                coordinateXPoint--;
                circle.setAttribute('cx', coordinateXPoint.toString());
            }
            if (coordinateYPoint < coordinateY2Road) {
                coordinateYPoint++;
                circle.setAttribute('cy', coordinateYPoint.toString());
            }
            else if (coordinateYPoint > coordinateY2Road) {
                coordinateYPoint--;
                circle.setAttribute('cy', coordinateYPoint.toString());
            }
            break;
    }
}
