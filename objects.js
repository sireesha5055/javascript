// objects 
// key value pairs in curly braces 
const myoobj ={name:"siri"};
const anotherObj ={
    alive :true,
    answer:43,
    hobbies :["Eat","Sleep","code"],
    beverage :{
        morning:'coffee',
        afternoon:"iced tea "
    },
    action:function(){
        return "hello world";
    }
}; 
console.log(myoobj.name);
console.log(anotherObj.alive);
console.log(anotherObj.beverage.morning);// accesing objects in nested objects 

