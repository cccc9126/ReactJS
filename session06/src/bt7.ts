export {};

class Student {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(newName: string): void {
    this.name = newName;
  }
}

// Mảng chứa tất cả học sinh
let allStudents: Student[] = [];

// Lớp Classroom
class Classroom {
  private students: Student[] = [];

  // In danh sách học sinh
  showStudents(): void {
    if (this.students.length === 0) {
      console.log("Lớp này chưa có học sinh.");
    } else {
      console.log("Danh sách học sinh:");
      this.students.forEach((s) => {
        console.log(`ID: ${s.getId()}, Name: ${s.getName()}`);
      });
    }
  }

  // Thêm học sinh trực tiếp vào lớp
  addStudent(student: Student): void {
    this.students.push(student);
  }

  // Lọc học sinh theo ID
  filterStudent(id: number): Student | undefined {
    return this.students.find((s) => s.getId() === id);
  }

  // Thêm học sinh từ allStudents vào lớp, đồng thời xóa khỏi allStudents
  addStudentInClass(studentId: number): void {
    const index = allStudents.findIndex((s) => s.getId() === studentId);
    if (index !== -1) {
      const student = allStudents[index];
      this.students.push(student);
      allStudents.splice(index, 1);
    } else {
      console.log(`Không tìm thấy học sinh với ID ${studentId} trong allStudents.`);
    }
  }

  // Xóa học sinh khỏi lớp và thêm lại vào allStudents
  removeStudent(studentId: number): void {
    const index = this.students.findIndex((s) => s.getId() === studentId);
    if (index !== -1) {
      const removedStudent = this.students.splice(index, 1)[0];
      allStudents.push(removedStudent);
      console.log(`Đã xóa học sinh ID ${studentId} khỏi lớp.`);
    } else {
      console.log(`Không tìm thấy học sinh với ID ${studentId} trong lớp.`);
    }
  }

  // Sửa thông tin học sinh trong lớp
  editStudent(studentId: number, newName: string): void {
    const student = this.students.find((s) => s.getId() === studentId);
    if (student) {
      student.setName(newName);
      console.log(`Đã đổi tên học sinh ID ${studentId} thành ${newName}.`);
    } else {
      console.log(`Không tìm thấy học sinh với ID ${studentId} trong lớp.`);
    }
  }
}

// ===== DEMO =====

// Tạo 6 học sinh ban đầu
for (let i = 1; i <= 6; i++) {
  allStudents.push(new Student(i, `Student ${i}`));
}

console.log("Tất cả học sinh ban đầu:", allStudents.map((s) => s.getName()));

// Tạo lớp học
const classA = new Classroom();

// Thêm 3 học sinh vào classA từ allStudents
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

console.log("\n--- Lớp A ban đầu ---");
classA.showStudents();

// Xóa học sinh ID 2 khỏi classA
classA.removeStudent(2);

console.log("\n--- Lớp A sau khi xóa ID 2 ---");
classA.showStudents();
console.log("AllStudents sau khi xóa:", allStudents.map((s) => s.getName()));

// Sửa tên học sinh ID 1
classA.editStudent(1, "Nguyễn Văn A");

console.log("\n--- Lớp A sau khi sửa tên ID 1 ---");
classA.showStudents();

