// class Point 2 thuoc tinh x, y
// class Line 2 thuoc tinh pointA, pointB
// class Triangle, pointA, pointB, PointC, getPerimeter()
// phuong thuc tinh ra do dai cua Line getLength()
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const pA = new Point(0, 0);
const pB = new Point(1, 0);

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const l1 = new Line(pA, pB);
console.log(l1.getLength());
