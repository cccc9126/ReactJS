"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class Employee có thuộc tính:
// name: Tên nhân viên, có phạm vi truy cập là public.
// company: Tên công ty, có phạm vi truy cập là protected.
// phone: Số điện thoại, có phạm vi truy cập là private.
// Phương thức:
// printInfo(): In ra tất cả các thuộc tính của lớp Employee (bao gồm name, company, phone).
// class Manager:
// Lớp con kế thừa từ Employee.
// Thêm thuộc tính mới teamSize: Số lượng thành viên.
// Phương thức:
// printInfo(): Ghi đè phương thức printInfo() từ lớp Employee để in thêm thông tin về teamSize cùng với các thông tin từ lớp cha.
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}
let emp = new Employee("John Doe", "Tech Corp", "123-456-789");
emp.printInfo();
let mgr = new Manager("Jane Smith", "Tech Corp", "987-654-321", 10);
mgr.printInfo();
//# sourceMappingURL=bt1.js.map