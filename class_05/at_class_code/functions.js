// Scope and hoisting

// global scope
// // let can be redeclared in different scopes with the key word let
// let localVariable;
//
// if(true) {
//     // local scope
//     let localVariable = "I'm Local";
//     console.log(localVariable);
// }
//
// console.log(localVariable);

// // const can be redeclared in different scopes with the key word const
// const localVariable = "I'm global now";
//
// if(true) {
//     // local scope
//     const localVariable = "I'm Local";
//     console.log(localVariable);
// }
//
// console.log(localVariable);


// variable created on any level can be accessed globally as
// javascript will hoist variables created with the key word var to the top of the file
// const localVariable = "I'm global now";
//
// if(true) {
//     // local scope
//     const localVariable = "I'm Local";
//     console.log(localVariable);
// }
//
// console.log(localVariable);



// Methods

// function sayHello(name) {
//     // console.log("Hello, " + name);
//     return "Hello, " + name;
// }
//
// const greetings = sayHello("Helen");
// console.log(greetings);
//
//
// const user = {
//     name: "Tanya",
//     age: 36,
//     sayHi: function(name) {
//         // any code
//         // console.log("Tanya says hi!");
//         return "Tanya says hi to " + name;
//     }
// }
//
//
// // Methods are functions that live at the object
// user.sayHi();
// console.log(user.sayHi("Dane"));
// const hello = "hello";
// console.log(hello.toUpperCase());


// I.I.F.E. Immediately Invoked Functional Expression
// A function wrapped in parentheses and that has parentheses right after it will invoke immediately as file will be loaded
// (function(){})()


// function sayHi() {
//     console.log("we are inside sayHi");
// }

//   function processInput(ourCallback) {
//       ourCallback();
//       console.log(ourCallback);
//   }

//   processInput(sayHi);


// function delayedFunction() {
//     console.log("I was delayed!");
//   }

// setTimeout(delayedFunction, 5000);

// setTimeout(function () {
//     console.log("I was also delayed - but I am anonymous");
// }, 2000);

// function regularlyCalledFunction() {
//     console.log("I am called regularly");
//   }

//   let timer = setInterval(regularlyCalledFunction, 1200);

//   clearInterval(timer); // You can cancel the interval too!

//   setInterval(function () {
//     console.log("I am also called regularly - but I am anonymous");
//   }, 2000);


const users = [
    {
        email: "groucho@ga.co",
        password: "chicken",
        isAdmin: true
    },
    {
        email: "harpo@ga.co",
        password: "elephant",
        isAdmin: false
    },
    {
        email: "gummo@ga.co",
        password: "pinkFairyArmadillo",
        isAdmin: true
    },
    {
        email: "zeppo@ga.co",
        password: "dumboOctopus",
        isAdmin: false
    }
];


function findAUser(usersList, userEmail) {
    //1 loop through an array
    //2 inside the loop we want to check each object's email and if it is equal to given one

    for(let i = 0; i < usersList.length; i++) {
        if (usersList[i].email === userEmail) {
            // console.log("The user exist");
            console.log(usersList[i]);
            return usersList[i];
        }

    }
    console.log("Sorry, user doesn't exist");
}

const ourUser1 = users.find(function (user){
    return user.email === "zeppo@ga.co"
});
// console.log(ourUser1)
// const ourUser = findAUser(users, "gummo@ga.co");

function findMyUser(arr, email) {
    const u = users.find(function (user){
        return user.email === email
    });

    if (u) {
        return u;
    } else {
        return "Sorry, user with such email doesn't exist";
    }
    // same if/else condition using ternary operator:
    // return u ? u : "Sorry, user with such email doesn't exist";
}

console.log(findMyUser(users, "gummo"));
