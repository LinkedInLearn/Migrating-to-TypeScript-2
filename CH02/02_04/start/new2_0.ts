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

interface Archer {
    kind: 'archer';
    lastName: string;
}

interface Samurai {
    kind: 'samurai';
    lastName: string;
}

interface Magician {
    kind: 'magician';
    lastName: string;
}

type WarriorChoice = Archer | Samurai | Magician;

function selectWarrior(warrior: WarriorChoice) {
    switch (warrior.kind) {
        case 'archer':
            return `Our warrior (${warrior.kind})'s last name is (${warrior.lastName})`;
        
        case 'samurai':
            return `Our warrior (${warrior.kind})'s last name is (${warrior.lastName})`;
        
        case 'magician':
            return `Our warrior (${warrior.kind})'s last name is (${warrior.lastName})`;
    }
}