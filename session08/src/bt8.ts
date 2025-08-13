
// Viết hàm partialUpdate nhận vào hai đối tượng:
// obj: Đối tượng ban đầu cần được cập nhật.
// updates: Đối tượng cập nhật, trong đó có thể chỉ định một số thuộc tính của obj cần thay đổi. Các thuộc tính không có trong updates sẽ không bị thay đổi.
// Hàm này trả về đối tượng mới với các thuộc tính được cập nhật từ updates, và các thuộc tính khác của obj giữ nguyên giá trị.
function partialUpdate<T, U>(obj: T, updates: Partial<U>): T{
    return { ...obj, ...updates };
}
console.log(partialUpdate({ name: "Alice", age: 25 }, { age: 30 })); // Output: { name: "Alice", age: 30 }