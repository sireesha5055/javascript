class Pizza{
    constructor(pizzaSize,pizzaType){
        this.size=pizzaSize;
        this.type=pizzaType;
        this.crust="original";
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.pizzaCrust=pizzaCrust;
    }
    bake(){
        return `here your ${this.type},${this.size} with ${this.crust}  `;
    }

}
const mypizza=new Pizza("medium","special");

console.log(mypizza.bake());
mypizza.setCrust("olives");
console.log(mypizza.getCrust());
// inheritance 
class Pizza1{
    constructor(pizzaSize,pizzaType){
        this.size=pizzaSize;
        this.type=pizzaType;
        this.crust="original";
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.pizzaCrust=pizzaCrust;
    }}
    class speciality extends Pizza1 {
        constructor(pizzaSize){
            super(pizzaSize);
            this.type="the works "

            }
            slice(){
                console.log(` our ,${this.type}, ${this.size} pizza has 8  slices.`);

            }
        }
    const myspeciality = new speciality("medium");
    myspeciality.slice();
