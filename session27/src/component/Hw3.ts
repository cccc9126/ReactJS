type Callback = (number: number) => void;
const processArray = (arr: number[], callback: Callback) => {
  arr.forEach((num, i) => {
    setTimeout(() => {
      callback(num);
    }, i * 1000);
  });
};
const print=(number:number) => {
    console.log(number);
    
}
let arr: number[] = [1, 2, 3, 4, 5, 6];
processArray(arr, print);