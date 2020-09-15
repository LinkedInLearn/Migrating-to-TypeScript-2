let myNullVar : null;
let myNullVar2 : undefined;

console.log(typeof myNullVar);
console.log(typeof myNullVar2);

 if (myNullVar === undefined) {
     console.log('Oh yeah nice 2.0 feature!');
 }

let myControlFlow: string | number;

myControlFlow = "Hello I'm a string";
console.log(typeof myControlFlow);

myControlFlow = 4;
console.log(typeof myControlFlow);

let myGroceryBasket: string | string[];
myGroceryBasket = 'Orange';
console.log(typeof myGroceryBasket);

myGroceryBasket = ['Orange', 'Apple', 'Banana'];
console.log(typeof myGroceryBasket);
