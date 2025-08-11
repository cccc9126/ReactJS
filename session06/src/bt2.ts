// Định nghĩa lớp abstract Job có 
// Thuộc tính type
// Phương thức printType để in ra loại công việc 
// Phương thức abstract calculateSalary để tính lương khi làm công việc đó.
// Định nghĩa lớp PartimeJob và lớp FulltimeJob kế thừa lớp Job. 
// Lớp PartimeJob có thêm thuộc tính workingHour.
// Phương thức calculateSalary để tính lương công việc.
//  Lương fulltime sẽ mặc định là 10.000.000, lương partime sẽ được tính theo công thức 30.000 * workingHour.
// Yêu cầu khởi tạo 2 đối tượng ParttimeJob và FulltimeJob và thực hiện in ra thông tin lương của 2 dối tượng đó
abstract class Job {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  printfType(): void {
    console.log(`Job type: ${this.type}`);
  }
  abstract calculateSalary(): number;
}
class ParttimeJob extends Job{
    workingHour: number;
    constructor(workingHour: number) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000*this.workingHour;
    }
}
class FulltimeJob extends Job{
    fulltimeSalary: number = 10000000;
    constructor() {
        super("Full-time");
    }
    calculateSalary(): number {
        return this.fulltimeSalary;
    }
}
const part=new ParttimeJob(160);
part.printfType();
console.log(`Part-time salary: ${part.calculateSalary()}`);
const full=new FulltimeJob();
full.printfType();
console.log(`Full-time salary: ${full.calculateSalary()}`);


