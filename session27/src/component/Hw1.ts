
type Callback = (number:number)=>void
function calculate(a:number, b:number, callback:Callback) {
  let sum = a + b;
  callback(sum);
}
const print = (number: number) => {
  console.log(number);
  
}
let a = 5;
let b = 10;
calculate(5,10,print)
  
