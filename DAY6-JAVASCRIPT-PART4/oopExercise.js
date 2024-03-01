class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        throw new Error("Method not implemented.");
    }
}

class Rectangle extends Shape {
    displayFormula() {
        console.log("The formula to get the area of a rectangle is width * height.");
    }

    calculateArea() {
        let area = this.width * this.height;
        return area;
    }
}

const shape1 = new Rectangle(3, 4);
shape1.displayFormula();
console.log(shape1.calculateArea());