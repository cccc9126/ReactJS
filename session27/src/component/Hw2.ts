type Callback = (number:number) => void;
function delayedCallback(a:number,callback:Callback) {
    callback(a);
}
const callback=(a:number) => {
    setTimeout(() => {
        console.log(`chạy sau ${a} giây`);
        
    },a)
}
let a = 1000;
delayedCallback(a,callback)