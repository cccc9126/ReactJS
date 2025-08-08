// Định nghĩa lớp Rectangle:
// Lớp Rectangle có 2 thuộc tính:
// width: Chiều rộng (kiểu number), có modifier private.
// height: Chiều dài (kiểu number), có modifier private.
// Cung cấp phương thức để truy cập và thay đổi giá trị của 2 thuộc tính này.
// Thêm 2 phương thức vào lớp Rectangle:
// Tính diện tích: Phương thức trả về diện tích hình chữ nhật (width * height).
// Tính chu vi: Phương thức trả về chu vi hình chữ nhật (2 * (width + height)).
// Khởi tạo đối tượng Rectangle:
// Tạo một đối tượng từ lớp Rectangle.
// In ra chiều dài, chiều rộng, chu vi và diện tích của đối tượng.
// Cập nhật lại kích cỡ của đối tượng và thực hiện lại các phép tính (diện tích, chu vi) sau khi cập nhật.
class Rectangle{
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
let rectangle = new Rectangle(5, 10);
console.log(`Width: ${rectangle.getWidth()}, Height: ${rectangle.getHeight()}`);
console.log(`Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);
rectangle.setWidth(7);
rectangle.setHeight(12);
console.log(`Updated Width: ${rectangle.getWidth()}, Updated Height: ${rectangle.getHeight()}`);
console.log(`Updated Area: ${rectangle.calculateArea()}, Updated Perimeter: ${rectangle.calculatePerimeter()}`);