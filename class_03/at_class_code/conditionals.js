console.log("Hello, world!");

// Conditionals

// if (true) {
//     // do smth here
// }

const myNumber = 1000;

// if (myNumber > 100) {
//     console.log("our number is greater then 100");
// } else {
//     console.log("our number is less then 100");
// }

// if (myNumber > 100) {
//     console.log("our number is greater then 100");
// } else if (myNumber === 100) {
//     console.log("our number is equal to 100");
// } else {
//     console.log("our number is less then 100");
// }

// Switch statements

let ourFruit = "Orange";

switch (ourFruit) {
    case("Orange"):
        console.log("Price is 5$");
        break;
    case("Banana"):
        console.log("Price is 3$");
        break;
    case("Apple"):
    case("Pear"):
        console.log("Price is 6$");
        break;
    default:
        console.log("Sorry, out of stock");
}


// Ternary operator
// condition ? true : false
let myAge = 18;

let isLegalAge = myAge === 18 ? true : false;

console.log("is legal? ", isLegalAge);


// x = 1950
// 1900 < x < 2000
// (1900 < x && x < 2000)
// ((1900 < x) && (x < 2000))
// ((true) && (true))
// (true)
// Logical operators
//  OR ||
// ((1900 < x) || (x === 1900))
// ((true) || (false))
// (true)
// AND &&
// NOT !

