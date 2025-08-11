export {};

// Lớp Book
class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public stock: number,
    public status: string // ví dụ: "có sẵn", "đã mượn"
  ) {}
}

// Lớp Member
class Member {
  public lendedBooks: LendedBook[] = [];

  constructor(
    public id: number,
    public name: string,
    public contact: string,
    public status: string // ví dụ: "hoạt động", "bị khóa"
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

  // Thêm sách vào thư viện
  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Đã thêm sách: ${book.title}`);
  }

  // Hiển thị tất cả sách
  showBooks(): void {
    if (this.books.length === 0) {
      console.log("Thư viện chưa có sách.");
      return;
    }
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach((b) => {
      console.log(
        `ID: ${b.id}, Tiêu đề: ${b.title}, Tác giả: ${b.author}, SL: ${b.stock}, Trạng thái: ${b.status}`
      );
    });
  }
}

// ===== DEMO =====

// Tạo thư viện
const myLibrary = new Library();

// Tạo vài sách
const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 5, "có sẵn");
const book2 = new Book(2, "Học JavaScript", "Trần Thị B", 3, "có sẵn");
const book3 = new Book(3, "ReactJS Pro", "Lê Văn C", 0, "hết hàng");

// Thêm sách vào thư viện
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Xem tất cả sách
console.log("\n--- Danh sách sách ---");
myLibrary.showBooks();
