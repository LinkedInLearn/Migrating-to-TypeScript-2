var myNullVar;
var myNullVar2;
console.log(typeof myNullVar);
console.log(typeof myNullVar2);
if (myNullVar === undefined) {
    console.log('Oh yeah nice 2.0 feature!');
}
var myControlFlow;
myControlFlow = "Hello I'm a string";
console.log(typeof myControlFlow);
myControlFlow = 4;
console.log(typeof myControlFlow);
var myGroceryBasket;
myGroceryBasket = 'Orange';
console.log(typeof myGroceryBasket);
myGroceryBasket = ['Orange', 'Apple', 'Banana'];
console.log(typeof myGroceryBasket);
function selectWarrior(warrior) {
    switch (warrior.kind) {
        case 'archer':
            return "Our warrior (" + warrior.kind + ")'s last name is (" + warrior.lastName + ")";
        case 'samurai':
            return "Our warrior (" + warrior.kind + ")'s last name is (" + warrior.lastName + ")";
        case 'magician':
            return "Our warrior (" + warrior.kind + ")'s last name is (" + warrior.lastName + ")";
    }
}
var vreeg = { height: 100, width: 50, ocean: 'Pacific' };
console.log(vreeg);
// vreeg.ocean = 'Atlantic';
// console.log(vreeg);
var Boat = (function () {
    function Boat() {
        this.capacity = 30;
        this.name = 'The Adventurer';
    }
    return Boat;
}());
// Shorthand
// declare module 'test-module';
// import { test } from 'test-module';
