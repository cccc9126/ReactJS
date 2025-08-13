// hân biệt giữa abstract method và method, khi nào thì sử dụng và cho ví dụ minh họa.

abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    // Method bình thường
    getDetails(): string {
        return `Tên: ${this.name}`;
    }
        
    // Abstract method
    abstract sound(): string;
}

class Cat extends Animal {
    sound(): string {
        return "Meo meo";
    }
}

const cat = new Cat("Miu");
console.log(cat.getDetails()); // Tên: Miu
console.log(cat.sound());      // Meo meo
// Trong ví dụ trên, `getDetails` là một method bình thường, có thể được định nghĩa và sử dụng trực tiếp.
// `sound` là một abstract method, không có phần thân trong lớp cha `Animal`,
// và phải được định nghĩa trong các lớp con như `Cat`. Điều này buộc các lớp con phải cung cấp cách thực hiện cụ thể cho phương thức này.
// Abstract method thường được sử dụng khi bạn muốn đảm bảo rằng tất cả các lớp con đều phải cung cấp một cách thực hiện cụ thể cho một hành động nào đó, trong khi method bình thường có thể được sử dụng để
// cung cấp một hành động chung mà không cần phải được định nghĩa lại trong các lớp con




    