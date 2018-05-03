// Variables Definitions
var vcVarchar = "Prueba HELLO WORLD";
var nuNumber = 123;
var blBoolean = true; // Comentarios

var arArray = [1, "Valor 2", true];
var arArray2 = new Array(1, "Valor 2", false);

// Console Printing
console.log("Prueba de " + arArray2[2]);

//Comment
console.log("Prueba 2");

//Array Tests
var arMyArray1 = [];
arMyArray1 [3] = "Prueba";

console.log(arMyArray1);

// Trabajo de Pilas con Push y Pop.
var myStack = [];

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

console.log(myStack);

var number;

//For loop with POP test!
for (number = 0; number < myStack.length; number++) {
    console.log(myStack.pop());
}

// Shifh y un Shift para trabajar como una Cola combinando con Push
// Pues se devuelve en el mismo orden en que se hace PUSH
var myQueue = [];
myQueue.push("A");
myQueue.push("B");
myQueue.push("C");

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());

// Unshift will add ITEMS to the beggining of the Array[]
var myArray = [1, 2, 3];
myArray.unshift(0);
console.log(myArray);       // will print out 0,1,2,3

// To remove a part of an array: Splice
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var splice = myArray.splice(3, 5);

console.log("Splice array example")
console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9

// Operadores: Adición: +
// To subtract, multiply and divide two numbers, use the minus (-), asterisk (*) and slash (/) signs.
// % modular. mod.
//  instead of typing myNumber = myNumber / 2, you can type myNumber /= 2 ( /= *=  -= += %=)
// Math module math.abs() absolute value math.exp() e to the power math.pow(x,y) power x on y math.floor removes fraction part of number, Math.random()

// Condicionales.
if (confirm("Are you John Smith?")) { // Confirm pops out a confirmation chart.
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}

// == to evaluate truth in an IF, <, >  inequality, && and on if, || or on If, ! is NOT.(!notTrue)
var rank = "Commander";
switch (rank) {
    case "Private":
    case "Sergeant":
        console.log("You are not authorized."); // Both Private and Sergeant trigger this message.
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}

// Function definition
function checkNumber(myNumber) {
    // TODO: write your code here
    if (myNumber == 42) {
        console.log("correct");
    }
    else {
        console.log("incorrect");
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);

var i;

//For Loop
for ( i = 1; i<10; i++)
{
    console.log("Prueba " + i);
}

// Array with For Loop
var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++) {
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}

// While Loop
var i = 99;
while (true) {
    console.log(i + " bottles of beer on the wall");
    i -= 1;
    if (i == 95) {
        break;
    }
}

//Continue Skips inner code
for (var i = 0; i < 100; i++) {
    // check that the number is even
    if (i % 2 == 0) {
        continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}
//Learning with my love about git and github