// Viết một hàm generic flatten<T>(arr: T[]): T[] để làm phẳng một mảng có cấu trúc lồng nhau thành một mảng một chiều.
// Hàm này sẽ sử dụng đệ quy để xử lý mảng lồng nhau ở nhiều cấp độ.
// Kiểm tra nếu phần tử là mảng, ta gọi đệ quy để làm phẳng nó. Nếu phần tử không phải là mảng, ta chỉ cần thêm nó vào mảng kết quả.
function flatten<T>(arr: T[]): T[] {
    let result: T[] = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
const nested = [1, [2, [3, 4], 5], 6];
console.log(flatten(nested)); 
