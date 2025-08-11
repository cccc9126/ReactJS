// Tạo interface changeSpeed với các phương thức:
// speedUp: Tăng tốc độ.
// slowDown: Giảm tốc độ.
// stop: Dừng phương tiện.
// Định nghĩa lớp Vehicle và thực hiện implements interface changeSpeed với thuộc tính private speed để lưu trữ tốc độ của phương tiện.
// Xây dựng các phương thức trong lớp Vehicle để thay đổi thuộc tính speed, bao gồm:
// slowDown: Giảm tốc độ.
// stop: Đưa tốc độ về 0.
// speedUp: Tăng tốc độ.
// Tạo một thực thể từ lớp Vehicle và gọi các phương thức thay đổi tốc độ. Sau mỗi phương thức, in thông tin về trạng thái của tốc độ để kiểm tra kết quả.
interface changeSpeed{
    speedUp(increment: number): void;
    slowDown(decrement: number): void;
    stop(): void;
}
class Vehicle implements changeSpeed {
    private speed: number;

    constructor(initialSpeed: number = 0) {
        this.speed = initialSpeed;
    }

    speedUp(increment: number): void {
        this.speed += increment;
        console.log(`Tăng tốc độ: ${this.speed} km/h`);
    }

    slowDown(decrement: number): void {
        this.speed -= decrement;
        if (this.speed < 0) this.speed = 0; 
        console.log(`Giảm tốc độ: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Dừng phương tiện, tốc độ hiện tại: ${this.speed} km/h`);
    }
}   
const vehicle = new Vehicle();
vehicle.speedUp(50); 
vehicle.slowDown(20); 
vehicle.stop();      