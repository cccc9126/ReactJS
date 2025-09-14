type Callback = (number: number,num:number) => void;

const displayNumbers = (number: number, callback: Callback) => {
    
   callback(number,0)
    
}
const print = (number: number, num: number) => {
    let max = 10;
    if (num > max) return;
  setTimeout(() => {
    console.log(num);
    print(number, num+1); 
  }, 1000);
}


displayNumbers(1, print);

