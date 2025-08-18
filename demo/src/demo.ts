import * as readlineSync from "readline-sync";

// ======= Book Class =======
class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public available: boolean = true
  ) {}
  getInfo(): string {
    return `ID: ${this.id} | Title: ${this.title} | Author: ${
      this.author
    } | Available: ${this.available ? "Yes" : "No"}`;
  }
}

// ======= Library Class =======
class Library {
  books: Book[] = [];
  private bookIdCounter = 1;

  addBook(title: string, author: string): void {
    const book = new Book(this.bookIdCounter++, title, author);
    this.books.push(book);
    console.log("Book added successfully!");
  }

  listBooks(): void {
    if (this.books.length === 0) {
      console.log("No books in library.");
      return;
    }
    this.books.forEach((b) => console.log(b.getInfo()));
  }

  borrowBook(id: number): void {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      console.log("Book not found.");
      return;
    }
    if (!book.available) {
      console.log("Book is already borrowed.");
      return;
    }
    book.available = false;
    console.log("Book borrowed successfully!");
  }

  returnBook(id: number): void {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      console.log("Book not found.");
      return;
    }
    if (book.available) {
      console.log("Book was not borrowed.");
      return;
    }
    book.available = true;
    console.log("Book returned successfully!");
  }
}

// ======= CLI Menu =======
const library = new Library();

while (true) {
  console.log(`
===== Library Menu =====
1. Add Book
2. List Books
3. Borrow Book
4. Return Book
0. Exit
`);
  const choice = readlineSync.questionInt("Enter your choice: ");
  switch (choice) {
    case 1:
      const title = readlineSync.question("Book title: ");
      const author = readlineSync.question("Author: ");
      library.addBook(title, author);
      break;
    case 2:
      library.listBooks();
      break;
    case 3:
      const borrowId = readlineSync.questionInt("Book ID to borrow: ");
      library.borrowBook(borrowId);
      break;
    case 4:
      const returnId = readlineSync.questionInt("Book ID to return: ");
      library.returnBook(returnId);
      break;
    case 0:
      process.exit();
    default:
      console.log("Invalid choice!");
  }
}
