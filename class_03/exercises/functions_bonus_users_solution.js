// Working with Users

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

// Create a function that receives an ID (index), an email and a password. If the function was provided with an email
// and a password that matches up, log `"You are logged in"`. Otherwise, log `"Sorry, something went wrong"`.

function userLogin(id, email, password) {
    if (users[id].email === email && users[id].password === password) {
        console.log("You are logged in");
    } else {
        console.log("Sorry, something went wrong");
    }
}

// userLogin(3, "zeppo@ga.co", "dumboOctopus");  // returns "You are logged in"
// userLogin(0, "wrong@email", "chicken");  // returns "Sorry, something went wrong"


// - Don't receive an ID! Find the user based on the email

function findUser(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return users[i];
        }
    }
    return "Sorry, user with such email doesn't exist.";
}

// console.log(findUser("harpo@ga.co")); // returns second user
// console.log(findUser("wrong@email")); //returns "Sorry, user with such email doesn't exist."

function findUser2(email) {
    const user = users.find(u => u.email === email);
    return user ? user : "Sorry, user with such email doesn't exist.";
}

// console.log(findUser2("harpo@ga.co")); // returns second user
// console.log(findUser2("wrong@email")); //returns "Sorry, user with such email doesn't exist."


// - Make a function that creates an account. e.g. `createAccount("chico@gmail.com", "redLippedBatfish", false);`
// - This should just add another object into the array

function createAccount(email, password, isAdmin) {
    users.push({email: email, password: password, isAdmin: isAdmin});
}

// createAccount("new@email", "newPassword", false);
// console.log(users);  // should have user with provided details


// - Make a function that deletes an account. e.g. `deleteAccount("zeppo@ga.co");`
// - This should just remove an object from the array

function deleteAccount(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            users.splice(i, 1);
            return users[i];
        }
    }
    return "Sorry, user with such email doesn't exist.";
}

// console.log(deleteAccount("groucho@ga.co")); // returns a deleted object
// console.log(users); // now users array has no object with provided email

// console.log(deleteAccount("wrong@email")); // returns "Sorry, user with such email doesn't exist."
// console.log(users); // users array should stay the same


// - Bonus: Make this only work if the correct password was provided as a parameter too

function deleteAccount2(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            users.splice(i, 1);
            return users[i];
        }
    }
    return "Sorry, something went wrong.";
}

// console.log(deleteAccount2("groucho@ga.co", "chicken")); // returns a deleted object
// console.log(users); // now users array has no object with provided email

// console.log(deleteAccount2("groucho@ga.co", "wrongPassword")); // returns "Sorry, something went wrong."
// console.log(users); // users array should stay the same

// console.log(deleteAccount2("groucho@ga.co")); // returns "Sorry, something went wrong."
// console.log(users); // users array should stay the same


// - Make a function that updates an account. e.g. `updateAccount("harpo@ga.co", "password", "ayeAye");`

function updateAccount(email, password, isAdmin) {

}

// - Bonus: Instead of receiving two strings to illustrate the change (like above), receive an object, so you could
//   potentially change multiple things at once. e.g. `updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });`

function updateAccount2(email, obj) {
    const user = findUser2(email);

    // TODO: Think, why do we need a check of user being an instance of an Object here?
    if (user && user instanceof Object) {
        user.password = obj.password;
        user.isAdmin = obj.isAdmin;
        return user;
    }

    return "Sorry, something went wrong.";
}

// console.log(updateAccount2("groucho@ga.co", {password: "newPassword", isAdmin: false})); // returns updated user
// console.log(users); // affected user should be updated in the users array

// console.log(updateAccount2("wrong@email", {password: "newPassword", isAdmin: false})); // returns "Sorry, something went wrong."
// console.log(users); // users array should stay the same


// - Bonus: Make this work only if the current password was also provided as a parameter. e.g.
//   `updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });`

function updateAccount3(email, password, obj) {
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        user.password = obj.password;
        user.isAdmin = obj.isAdmin;
        return user;
    }

    return "Sorry, something went wrong.";
}

// console.log(updateAccount3("groucho@ga.co", "chicken", {password: "newPassword", isAdmin: false})); // returns updated user
// console.log(users); // affected user should be updated in the users array

// console.log(updateAccount3("groucho@ga.co", "wrongPassword", {password: "newPassword", isAdmin: false})); // returns "Sorry, something went wrong."
// console.log(users); // users array should stay the same


// - Add a few extra users and make a search function. I'll let you decide on the interface or the _function signature_
// createAccount("new@email", "newPassword", false);
// createAccount("admin@email", "hardPassword", true);
// createAccount("user@email", "newPassword1", false);

// function searchUsers(isAdmin) {
//     const usersToReturn = [];
//     users.map(user => {
//         if(user.isAdmin === isAdmin) {
//             usersToReturn.push(user);
//         }
//     })
//     return usersToReturn;
// }

// console.log(searchUsers(true));   // should return all users with admin access
// console.log(searchUsers(false));  // should return all users without admin access
