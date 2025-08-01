// Viết 1 hàm kiểm tra một số là số chẵn hay lẻ 
// Hàm này sẽ nhận 1 đối số  là một số nguyên bất kỳ 
// Kiểm tra xem đối số nhập vào có phải là số ko ?
// Nếu không phải là số thông báo không phải số 
// Nếu là số ,  thực hiện logic để kiểm tra chẵn hay lẻ 
// Kết quả trả về số đó là chẵn hay lẻ 
checkEvenOrOdd = (num) => {
    if (typeof num !== 'number') {
        return 'Đối số nhập vào không phải là số';
    }
    return num % 2 === 0 ? 'Số chẵn' : 'Số lẻ';
}