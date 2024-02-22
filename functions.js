function getEmailfromuser(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getEmailfromuser("kothasiri555@gmail.com"));
// arrow function 
const arrowfunction =(email) => {
    return email.slice(0,email.indexOf("@"));
    };
    console.log(arrowfunction("john@gmail.com"))
//annoymous function
const getEmailfromuser1 = function(email){
    return email.slice(0,email.indexOf("@"));
    
    };
    console.log(getEmailfromuser1("john@gmail.com"))
    // arrow function 2
    const toProperCase = (name) => {
        return name.charAt(0).toUpperCase() 
        +name.slice(1).toLowerCase();
    };
    console.log(toProperCase("SEPTEMBER"));
    // functions used to reusable code 
    
    