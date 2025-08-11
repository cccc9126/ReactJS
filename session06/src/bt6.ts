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
      allStudents.splice(index, 1); // xóa khỏi mảng tất cả học sinh
    } else {
      console.log(
        `Không tìm thấy học sinh với ID ${studentId} trong allStudents.`
      );
    }
  }
}

// ===== DEMO =====

// Tạo 6 học sinh
for (let i = 1; i <= 6; i++) {
  allStudents.push(new Student(i, `Student ${i}`));
}

console.log(
  "Tất cả học sinh ban đầu:",
  allStudents.map((s) => s.getName())
);

// Tạo 2 lớp học
const classA = new Classroom();
const classB = new Classroom();

// Mỗi lớp lấy 3 học sinh từ allStudents
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("\n--- Lớp A ---");
classA.showStudents();

console.log("\n--- Lớp B ---");
classB.showStudents();

console.log(
  "\nAll students sau khi phân lớp:",
  allStudents.map((s) => s.getName())
); // rỗng
