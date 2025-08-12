// Class Vehicle:
// Thuộc tính:
// name: Tên phương tiện (protected).
// speed: Tốc độ của phương tiện (protected).
// id: Mã định danh của phương tiện (protected).
// Phương thức:
// slowDown(): Phương thức để giảm tốc độ.
// speedUp(): Phương thức để tăng tốc độ.
// showSpeed(): Phương thức để in ra tốc độ hiện tại.
// Class Bicycle:
// Lớp Bicycle kế thừa từ Vehicle.
// Thêm thuộc tính:
// gear: Số bánh răng của xe đạp (private).
// Tạo phương thức:
// showInfo(): In ra tất cả thông tin của xe đạp, bao gồm thông tin từ lớp Vehicle và thêm thuộc tính gear.
class Vehicle{
    protected name: string;
    protected speed: number;
    protected id: string;
    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    public slowDown(): void {
        console.log(`${this.name} is slowing down.`);
        this.speed -= 10; 
        if (this.speed < 0) this.speed = 0;

    }
    public speedUp(): void {
        console.log(`${this.name} is speeding up.`);
        this.speed += 10;
    }
    public showSpeed(): void {
        console.log(`Current speed of ${this.name} is ${this.speed}.`);
    }   
}
class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    public showInfo(): void {
        console.log(`Bicycle Info: Name: ${this.name}, Speed: ${this.speed}, ID: ${this.id}, Gear: ${this.gear}`);
    }
}
let bike = new Bicycle("Mountain Bike", 20, "B123", 5);
bike.showInfo();
bike.speedUp();
bike.showSpeed();
bike.slowDown();
bike.showSpeed();
bike.showInfo();