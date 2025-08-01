// Viết 1 hàm tạo một đối tượng người dùng với name, age và role
// Hàm này có thể nhận tối đa 3 đối số là name , age , role .  
// name : Tên người dùng .
// age: Tuổi .
// role : Vai trò của người dùng .
// Nếu hàm không truyền vào giá trị cho age hoặc role thì mặc định age = 18 và role = “user”
// Sử dụng Default Parameter 
let arr = [[1, 2, 3], [4, 7,5, 6], [7, 8, 9]];
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
    console.log(`Tổng của mảng ${i + 1} là: ${sum}`);
}