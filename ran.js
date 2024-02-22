console.log("sireesha".charAt(Math.floor(Math.random() * 7)));
// for any name 
const anyname ="Mamu Siri";
console.log(anyname.charAt(Math.floor(Math.random()*anyname.length)));
// if statements 
let soup="chicken soup ";
let reply;
if(soup){
    reply=`here is your order of ${soup}`;
}
else{
    reply=`sorry no soup `
}
console.log(reply);
// for else part execution 
let soup2 ;
let reply1;
if(soup2){
    reply1=`here is your order of ${soup2}`;
}
else{
    reply1=`sorry no soup `
}
console.log(reply1);
// Another example 
let testScore = 59;
let collegestudent=true;
let grade;
if(testScore>=90){
      grade='your A grade';
}
else if (testScore>=80){
    grade='your B grade ';
}
else if (testScore>=70){
    grade='your C grade ';
}
else{
    if(collegestudent){
        grade='u';
    }
    else{
        grade='F';
    }
}
console.log(grade);