
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
class Employee{
    public name: string;
    protected company: string;
    private phone: string
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    public printInfo(): void{
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }

}
class Manager extends Employee{
    public teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
        
    }
}
let emp=new Employee("John Doe", "Tech Corp", "123-456-789");
emp.printInfo();
let mgr=new Manager("Jane Smith", "Tech Corp", "987-654-321", 10);
mgr.printInfo();