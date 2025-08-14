import readlineSync from "readline-sync";

const name = readlineSync.question("Nhập tên của bạn: ");
console.log(`Hello, ${name}!`);
