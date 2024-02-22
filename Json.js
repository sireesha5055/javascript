const object ={
    name :"siri",
    hobbies : ["Eat","sleep","code"],
    hello : function (){
        console.log("hello world!");
    }
}
console.log(object);
console.log(object.name);
object.hello();
const sendJSON = JSON.stringify(object);
console.log(sendJSON);
console.log(typeof(sendJSON));
const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
console.log(typeof(recieveJSON));
