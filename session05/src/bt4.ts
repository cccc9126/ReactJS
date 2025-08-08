// Định nghĩa lại lớp Vehicle và thêm các access modifier cho các thuộc tính của lớp. 
// Thuộc tính name là public
// Thuộc tính year là protected 
// Thuộc tính company là private. 
// Ngoài ra hãy thêm một thuộc tính mới là id và sử dụng từ khóa readonly để đảm bảo rằng id không thể thay đổi. 
// Tạo ra một thực thể và in các thông tin ra màn hình để kiểm tra.
class Vehicle{
    readonly id: number;
    public name: string;
    protected year: number;
    private company: string;
    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
    getYear(): number{
        return this.year;
    }
    getCompany(): string {
        return this.company;
    }
}
let vehicle = new Vehicle(1, "Toyota", 2020, "Toyota Motor Corporation");
vehicle.displayInfo();  // In ra thông tin của xe