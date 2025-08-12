// Lớp Person (abstract class):

// Thuộc tính:
// name: Tên của người (public).
// Phương thức:
// displayInfo(): Phương thức in thông tin của đối tượng, được cài đặt trong lớp Person 
// Lớp Student:

// Lớp con kế thừa từ lớp Person.
// Thêm thuộc tính:
// id: Mã sinh viên.
// Phương thức:
// displayInfo(): Ghi đè phương thức displayInfo() từ lớp Person để in thông tin về mã sinh viên và tên sinh viên.
// Lớp Teacher:

// Lớp con kế thừa từ lớp Person.
// Thêm thuộc tính:
// subject: Môn học mà giáo viên giảng dạy.
// Phương thức:
// displayInfo(): Ghi đè phương thức displayInfo() từ lớp Person để in thông tin về tên giáo viên và môn học.
// Yêu cầu:

// Tạo đối tượng từ lớp Student và lớp Teacher, sau đó gọi phương thức displayInfo() để in thông tin tương ứng:
// Đối với Student: in ra id và name.
// Đối với Teacher: in ra name và subject.
abstract class Person{
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}
class Stuednt extends Person{
    public id: string;
    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Student ID: ${this.id}, Name: ${this.name}`);
    }
}
class Teacher extends Person{
    public subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}
let student = new Stuednt("Alice", "S123");
student.displayInfo();
let teacher = new Teacher("Bob", "Mathematics");
teacher.displayInfo();