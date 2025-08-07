// Tạo một object Student để mô tả thông tin sinh viên gồm các thuộc tính sau:
// name: tên sinh viên, kiểu string.
// age: độ tuổi của sinh viên, kiểu number.
// email: email của sinh viên, kiểu string.
// Định nghĩa rõ kiểu cho từng thuộc tính trong Student bằng cách sử dụng interface hoặc type trong TypeScript.
// Viết một hàm nhận vào đối tượng Student và in ra câu giới thiệu thông tin sinh viên. Ví dụ: "Tên tôi là [name], tôi [age] tuổi và email của tôi là [email]."
interface Student {
    name: string;
    age: number;
    email: string;
}
function introduceStudent(student: Student): void {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}
let student: Student = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "a@.com"
};
introduceStudent(student);