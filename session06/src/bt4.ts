// Tạo ra interface Geometry với 2 phương thức:
// calculateArea: tính diện tích.
// calculatePerimeter: tính chu vi.
// Định nghĩa lớp Circle với thuộc tính private radius.
// Định nghĩa lớp Rectangle với 2 thuộc tính private width và private height.
// Cả 2 lớp này đều cần implements interface Geometry và phải cài đặt các phương thức calculateArea và calculatePerimeter cho các lớp Circle và Rectangle
// Khởi tạo 2 đối tượng Circle và Rectangle và thực hiện in ra chu vi và diện tích ra màn hình
interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}
class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
let circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`);
console.log(`Circle Perimeter: ${circle.calculatePerimeter()}`);  
let rectangle = new Rectangle(4, 6);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.calculatePerimeter()}`);  
