//arrays
const myArray = [];
// add element to a array 
myArray[0] = "siri";
myArray[1] = "kotha";
myArray[2] = "Mamu";

console.log(myArray);
// length property 
console.log(myArray.length);
// last element  in ann array 
console.log(myArray[myArray.length - 1]);
console.log(myArray[1]);
// adding elements 
myArray.push("school");
console.log(myArray);
// remove an element in array
const lastitem = myArray.pop();// it will remove last time dafault 
console.log(lastitem);
const newitem = myArray.unshift(32);
console.log(newitem);
const firstitem = myArray.shift();
console.log(firstitem);
console.log(myArray);
myArray.splice(1, 2, "siri", "mamu");
console.log(myArray);
console.log(myArray.splice(1));
console.log(myArray);
const newArray = ["A", "B", "C", "D", "E", "F"];
const newstring = newArray.join(myArray);
console.log(newstring);
const array = newstring.split(",");
console.log(newArray);
// combine two arrays with concat () method 
const array1 = ['A', 'B', 'C'];
const array2 = ['D', 'E', 'F', 'G']
const newthing = array2.concat(array1);
console.log(newthing);
const new2 = [...array1, ...array2];
console.log(new2);
const new3 = [array1, array2];
console.log(new3);
const equipShelfA = ["baseball", "football", "voolyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];
const clothesShelfA = ["tank tops", "t-shirt", "jersys"];
const clothesShelfB = ["sweat tops ", "sweat pants", "hoodies"];
console.log(equipShelfA[0]);
console.log(equipShelfB[1]);
const equipdept = [equipShelfA, equipShelfB];
const clothedept = [clothesShelfA, clothesShelfB ];
console.log(equipdept[1][0]);
console.log(clothedept[0][1]);
const sportsStore =[equipdept,clothedept];
console.log(sportsStore[0][0][2]);
console.log(sportsStore[1][1][2]);

