// Viết một hàm sử dụng generic type để nhận vào một mảng bất kỳ
// Hàm sẽ trả về phần tử đầu tiên trong mảng chia hết cho 2, hoặc undefined nếu không có phần tử nào thỏa mãn.
function findFirstEven<T extends number>(arr: T[]): T | undefined {
  return arr.find(num => num % 2 === 0);
}
console.log(findFirstEven([1, 3, 5, 6, 7])); // Output: 6
console.log(findFirstEven([1, 3, 5])); // Output: undefined