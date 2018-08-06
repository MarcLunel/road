let zoneDiv = document.getElementById('zone');
let zoneDivWidth = zoneDiv.clientWidth;
let zoneDivHeight = zoneDiv.clientHeight;
let circle = document.getElementById('circle');
let road = document.getElementById('road');
let NumberRoad = 10;
class Road {
    constructor(roadPoints) {
        this.roadPoints = roadPoints;
        this.X1 = 1;
        this.X2 = 2;
        this.Y1 = 3;
        this.Y2 = 4;
    }
    editPoints(coordinateX, coordinateY) {
        let way = chooseWay(1, 2);
        switch (way) {
            case 1:
                this.X1 = coordinateX;
                this.X2 = coordinateX;
                this.Y1 = coordinateY;
                this.Y2 = Math.floor(Math.random() * ((zoneDivHeight - 10) - 10 + 1)) + 10;
                break;
            case 2:
                this.X1 = coordinateX;
                this.X2 = Math.floor(Math.random() * ((zoneDivWidth - 10) - 10 + 1)) + 10;
                ;
                this.Y1 = coordinateY;
                this.Y2 = coordinateY;
                break;
        }
    }
    showPoints() {
        console.log(this.X1, this.X2, this.Y1, this.Y2);
    }
}
let a = new Road();
let b = new Road();
let c = new Road();
a.showPoints();
var roadList = [a, b, c];
console.dir(roadList);
for (var i = 0; i < NumberRoad; i++) {
    let road = new Road();
}
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
