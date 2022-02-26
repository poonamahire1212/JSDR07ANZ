console.log("Hello, World!");

// Methods - functions that belong to object
const myString = "Hello";
console.log(myString.toUpperCase());

const game = {
    score: 0,
    playerOne: "Tanya",
    start: function() {
        console.log("The game has started!");
    },
    monsters: ["blueMonster", "redMonster"]
}


game.start();
game.monsters;

// Scope/hoisting
// global scope

let globalVar = "I'm global";

if(true) {
    // local scope
    let localVar = "I'm local";
    console.log(localVar);
    if(true){
        // even more local
        let evenMoreLocalVar = "I'm super nested";
        var trickyVar = "I was created with var keyword";
        console.log(localVar);
    }
}

trickyVar = "I'm a new value";

for(var i = 0; i < 3; i++) {
    // console.log(i);
}

i = 6;
console.log(i);

// console.log(trickyVar);

// if (true) console.log("yay");
// const newFunction = () => console.log("hello");
// console.log(localVar);


// Callbacks - a functions that passed as a parameter to another function

const myCallback = function() {
    console.log("I'm a callback");
}

// Higher Order Function - a function that either accepts another function
// as a parameter or returns a function
function sayHello(call){
    console.log(call());
}

sayHello(function(){console.log("hey")});
sayHello(myCallback);
console.clear();
// Higher Order Functions
function SayHello2() {
    // we don't have access to name anymore
    return function(name){
        // only here we can access variable name
        console.log("hello " + name);
    }
}

const higherOrderFunc = SayHello2()("Glen");
console.log(higherOrderFunc);

// add()();

// IIFE - immediately invoked function expresions
(function(foo){
    console.log("I'm IIFE" + foo);
})("yay")

console.clear()

const games = [
    {
        score: 0,
        gameName: "Game one",
        playerOne: "Tanya",
        monsters: ["blueMonster", "redMonster"]
    },
    {
        score: 0,
        gameName: "Game two",
        playerOne: "Mark",
        monsters: ["blueMonster", "redMonster"]
    },
    {
        score: 3,
        gameName: "Game one",
        playerOne: "Tanya",
        monsters: ["blueMonster", "redMonster"]
    },
]

// 1 go through the array, so we can reach individual object
// 2 compare if playerOne value is equal to the one we are looking for
// 3 get the access to the needed key/value pair
// 4 change this value

const playerToChange = "Mark";
const update = { score: 2, playerOne: "Anna"};

function updateUser (obj) {
    for(let i = 0; i < games.length; i++) {
        if(games[i].playerOne === playerToChange) {
            games[i].score = obj.score;
            games[i].playerOne = obj.playerOne;
        }
    }
}

const newGame = games.find(function(game){
    return game.playerOne === "Fiona";
})

// const newGameArrow = games.find(game => game.playerOne === "Tanya");

console.log(newGame);
// updateUser({ score: 6, playerOne: "Anna"});
// console.log(games);

const randomNums = [4, 7, 2, 10, 6, 7];
const result = randomNums.find(number => number === 100);
console.log(result);

