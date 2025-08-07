
// Tạo hai kiểu dữ liệu riêng biệt sau bằng type hoặc interface:
// Đối tượng Person : có name , age 
// Đối tượng Employee : có  employeeId , department
// Sử dụng Intersection Type để tạo kiểu StaffMember bao gồm đầy đủ cả Person và Employee.
// Viết một hàm printStaffInfo(staff: StaffMember): void in ra thông tin chi tiết như sau:

// Nhân viên: Nguyễn Văn A (28 tuổi) , Mã nhân viên: EMP001 - Phòng: Kế toán
type Person = {
    name: string;
    age: number;
};
type Employee = {
    employeeId: string;
    department: string;
};
type StaffMember = Person & Employee;
function printStaffInfo(staff: StaffMember): void {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}
let staff: StaffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printStaffInfo(staff);