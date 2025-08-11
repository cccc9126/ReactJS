export {};

// Lớp Book
class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public stock: number,
    public status: string // "có sẵn", "đã mượn", "hết hàng"
  ) {}
}

// Lớp Member
class Member {
  public lendedBooks: LendedBook[] = [];

  constructor(
    public id: number,
    public name: string,
    public contact: string,
    public status: string // "hoạt động", "bị khóa"
  ) {}
}

// Lớp LendedBook
class LendedBook {
  constructor(
    public memberId: number,
    public bookId: number,
    public dueDate: Date
  ) {}
}

// Lớp Library
class Library {
  public books: Book[] = [];
  public members: Member[] = [];

  // Thêm sách
  addBook(book: Book): void {
    this.books.push(book);
    console.log(`📚 Đã thêm sách: ${book.title}`);
  }

  // Hiển thị tất cả sách
  showBooks(): void {
    if (this.books.length === 0) {
      console.log("❌ Thư viện chưa có sách.");
      return;
    }
    console.log("📖 Danh sách sách trong thư viện:");
    this.books.forEach((b) => {
      console.log(
        `ID: ${b.id}, Tiêu đề: ${b.title}, Tác giả: ${b.author}, SL: ${b.stock}, Trạng thái: ${b.status}`
      );
    });
  }

  // Đăng ký thành viên mới
  registerMember(id: number, name: string, contact: string): void {
    const newMember = new Member(id, name, contact, "hoạt động");
    this.members.push(newMember);
    console.log(`✅ Đã đăng ký thành viên: ${name}`);
  }

  // Khóa / thay đổi trạng thái thành viên
  blockMember(id: number, newStatus: string): void {
    const member = this.members.find((m) => m.id === id);
    if (!member) {
      console.log(`❌ Không tìm thấy thành viên ID ${id}`);
      return;
    }
    member.status = newStatus;
    console.log(
      `🔒 Trạng thái thành viên ${member.name} đã đổi thành: ${newStatus}`
    );
  }

  // Hiển thị tất cả thành viên
  showMembers(): void {
    if (this.members.length === 0) {
      console.log("📭 Chưa có thành viên nào.");
      return;
    }
    console.log("👥 Danh sách thành viên:");
    this.members.forEach((m) => {
      console.log(
        `ID: ${m.id}, Tên: ${m.name}, Liên hệ: ${m.contact}, Trạng thái: ${m.status}`
      );
    });
  }
}

// ===== DEMO =====
const myLibrary = new Library();

// Thêm sách
myLibrary.addBook(
  new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 5, "có sẵn")
);
myLibrary.addBook(new Book(2, "Học JavaScript", "Trần Thị B", 3, "có sẵn"));

// Hiển thị sách
console.log("\n--- Danh sách sách ---");
myLibrary.showBooks();

// Đăng ký thành viên
myLibrary.registerMember(101, "Huy", "huy@example.com");
myLibrary.registerMember(102, "Lan", "lan@example.com");

// Hiển thị thành viên
console.log("\n--- Danh sách thành viên ---");
myLibrary.showMembers();

// Khóa thành viên Huy
myLibrary.blockMember(101, "bị khóa");

// Hiển thị lại danh sách thành viên sau khi đổi trạng thái
console.log("\n--- Danh sách thành viên sau cập nhật ---");
myLibrary.showMembers();
