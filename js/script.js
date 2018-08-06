let zoneDiv = document.getElementById('zone');
let zoneDivWidth = zoneDiv.clientWidth;
let zoneDivHeight = zoneDiv.clientHeight;
let circle = document.getElementById('circle');
let road0 = document.getElementById('road0');
let map = document.getElementById('zoneMap');
let NumberRoad = 50;
class Road {
    constructor(roadPoints) {
        this.roadPoints = roadPoints;
        this.X1 = 25;
        this.X2 = 50;
        this.Y1 = 25;
        this.Y2 = 25;
    }
    createRoad(i) {
        if (i === undefined) {
            i = 1;
        }
        map.insertAdjacentHTML("afterbegin", "<line id='road" + i + "' x1='" + this.X1 + "' y1='" + this.Y1 + "' x2='" + this.X2 + "' y2='" + this.Y2 + "' stroke='#dcdde1' stroke-width='10' stroke-linecap='round'></line>");
        // let newRoad = document.getElementById("road" + i);
        // newRoad.setAttribute("x1", this.X1);
        // newRoad.setAttribute("x2", this.X2);
        // newRoad.setAttribute("y1", this.Y1);
        // newRoad.setAttribute("y2", this.Y2);
    }
    editPoints(coordinateX1, coordinateX2, coordinateY1, coordinateY2) {
        let way = chooseWay(1, 2);
        switch (way) {
            case 1:
                this.X1 = coordinateX2;
                this.X2 = coordinateX2;
                this.Y1 = coordinateY2;
                this.Y2 = Math.floor(Math.random() * ((zoneDivHeight - 10) - 10 + 1)) + 10;
                break;
            case 2:
                this.X1 = coordinateX2;
                this.X2 = Math.floor(Math.random() * ((zoneDivWidth - 10) - 10 + 1)) + 10;
                ;
                this.Y1 = coordinateY2;
                this.Y2 = coordinateY2;
                break;
        }
    }
    showPoints() {
        console.log(this.X1, this.X2, this.Y1, this.Y2);
    }
}
let a = new Road();
a.showPoints();
var roadList = [];
console.dir(roadList);
for (var i = 1; i < NumberRoad; i++) {
    let road = new Road();
    if (i == 1) {
        road.X1 = 25;
        road.Y1 = 50;
        road.X1 = 25;
        road.Y2 = 50;
    }
    else {
        let roadLast = roadList[i - 1];
        road.editPoints(roadLast.X1, roadLast.X2, roadLast.Y1, roadLast.Y2);
    }
    road.createRoad(i);
    roadList[i] = road;
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
    let coordinateX1Road = Number(road0.getAttribute('x1'));
    let coordinateY1Road = Number(road0.getAttribute('y1'));
    let coordinateX2Road = Number(road0.getAttribute('x2'));
    let coordinateY2Road = Number(road0.getAttribute('y2'));
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
