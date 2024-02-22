function pizzFactory(pizzaSize ) {
    const Size = pizzaSize;
    const type = "peproni";
    return {
        bake: () => console.log(`baking a ${Size} with ${type} crust pizza`)
    }
}
const mypizza = pizzFactory("small");
mypizza.bake(); 