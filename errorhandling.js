"use strict";
// error handling 
const makeError = () =>{
    try{
       throw new Error("This is a custom error ");
    }catch(err){
        console.error(err.name);// name of error 
        console.error(err.message);// what is mistake will show
        console.error(err.stack);// everything will show ...


    }

};
makeError();
// didfferent types of consoles like 
// console.log()
// console.warn()
// console.error()
