// Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và phương thức abstract getSize.
// phương thức getName để lấy ra tên của hình .
// Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
// getSize để in ra các kích cỡ của hình .
abstract class shape{
    protected name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    getName(): string {
        return this.name;
    }
    
    abstract getSize(): number;
}
class Rectangle extends shape{
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): number {
        return this.width * this.height;
    }

}
const rectangle = new Rectangle("Rectangle", 5, 10);
console.log(rectangle.getSize());



