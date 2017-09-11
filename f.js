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
const pC = new Point(0, 1);

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

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {
        const l1 = new Line(this.pointA, this.pointB);
        const l2 = new Line(this.pointA, this.pointC);
        const l3 = new Line(this.pointB, this.pointC);
        return l1.getLength() + l2.getLength() + l3.getLength();
    }
}

const l1 = new Line(pA, pB);
const tamGiac = new Triangle(pA, pB, pC);
console.log(tamGiac.getPerimeter());
