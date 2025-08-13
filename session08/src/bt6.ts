// Viết hàm findElement nhận vào:
// Một mảng arr chứa các phần tử kiểu T.
// Một giá trị value kiểu T cần tìm trong mảng.
// Hàm sẽ tìm kiếm giá trị value trong mảng arr và trả về phần tử đầu tiên tìm thấy trong mảng, hoặc undefined nếu không tìm thấy.
// Yêu cầu:

// Input: Một mảng và một giá trị cần tìm.
// Output: Phần tử tìm thấy trong mảng nếu có, hoặc undefined nếu không tìm thấy.

function findElement<T>(arr: T[], value: T): T | undefined {
    return arr.find(element => element === value);
}
console.log(findElement([1, 2, 3, 4, 5],3)); // Output: 3