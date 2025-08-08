// Định nghĩa lớp Book có 2 thuộc tính title và author, cả 2 thuộc tính đều có modifier là private.
// Định nghĩa lớp Library có 1 thuộc tính books là mảng sách trong thư viện. Trong lớp Library sẽ có 2 phương thức lần
//  lượt để thêm và xem danh sách các quyển sách trong thư viện.
// Khởi tạo 5 đối tượng từ lớp Book, 1 đối tượng từ lớp thư viện. Thêm 5 quyển sách vừa tạo vào trong thư viện, sau đó
//  xem danh sách các quyển sách trong thư viện.
// Thêm thuộc tính id có modifier là private cho lớp Book đã được định nghĩa.
// Xây dựng thêm phương thức sửa thông tin sách theo id cho lớp Library đã được định nghĩa.
// Tiến hành sửa thông tin của 1 quyển sách bất kỳ, sau đó in danh sách các quyển sách để kiểm tra.
class Book {
  private title: string;
  private author: string;
  private id: number;

  constructor(title: string, author: string, id: number) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  getTitle(): string {
    return this.title;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  getAuthor(): string {
    return this.author;
  }
  setAuthor(author: string): void {
    this.author = author;
  }
  getId(): number {
    return this.id;
  }
}
class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  viewBooks(): void {
    this.books.forEach((book) => {
      console.log(
        `ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}`
      );
    });
  }

  updateBook(id: number, newTitle: string, newAuthor: string): void {
    const book = this.books.find((b) => b.getId() === id);
    if (book) {
      book.setTitle(newTitle);
      book.setAuthor(newAuthor);
    } else {
      console.log(`Book with ID ${id} not found.`);
    }
  }

  searchBook(title: string): Book[] {
    return this.books.filter((book) =>
      book.getTitle().toLowerCase().includes(title.toLowerCase())
    );
  }
    deleteBook(id: number): Book[] {
        return this.books.filter(book => book.getId() !== id);
    }
}
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1);
let book2 = new Book("1984", "George Orwell", 2);
let book3 = new Book("To Kill a Mockingbird", "Harper Lee", 3);
let book4 = new Book("Pride and Prejudice", "Jane Austen", 4);
let book5 = new Book("The Catcher in the Rye", "J.D. Salinger", 5);
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
console.log("Books in library:");
library.viewBooks();
library.updateBook(
  3,
  "To Kill a Mockingbird - Updated",
  "Harper Lee - Updated"
);
console.log("Books in library after update:");
library.viewBooks();
console.log("Search results for '1984':");
const searchResults = library.searchBook("h");
searchResults.forEach((book) => {
  console.log(
    `ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}`
  );
});
console.log("Books after deletion:");
const updatedBooks = library.deleteBook(2);
updatedBooks.forEach((book) => {
  console.log(
    `ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}`
  );
});


