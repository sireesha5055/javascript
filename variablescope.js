var s = 1;
let m = 2;
// let m=2; it will throw an error 
m = 6;
console.log(s, m)
const v = "siri ";
console.log(v)
// will come error bcz const cant modify v= "Mamu ";
// global scope 
// var , let , const 
// local scope 
// a block inside function 
function myFunc() {
    const x = 8;
    console.log(x)
}
// local scope 
// block scope 
{
    var j = 9;
    console.log(j)
}
myFunc();
