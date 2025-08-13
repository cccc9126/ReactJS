
// Viết hàm sử dụng generic type T và U để nhận hai đối tượng có kiểu khác nhau.
// Kết quả của hàm sẽ là một đối tượng mới chứa tất cả các thuộc tính của cả hai đối tượng đã được truyền vào, kết hợp với nhau.
function mregeObjects<T, U>(o1: T, o2: U): T & U{
    
    return {...o1, ...o2};
}
console.log(mregeObjects({name: "John"}, {age: 30}));