// Viết hàm reverseArray<T> để đảo ngược mảng bất kỳ.
// Hàm này phải sử dụng generic để có thể áp dụng cho tất cả các loại mảng, không chỉ riêng số học hay chuỗi.
function reverseArray<T>(arr: T[]): T[]{;
    arr=arr.reverse();
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
