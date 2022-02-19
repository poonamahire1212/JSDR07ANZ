const user = {
    firstName: "Tanya",
    lastName: "Butenko",
    email: "tanya.butenko@generalassemb.ly",
    isAdmin: true,
    age: 36,
    // posts: ["post 1", "post 2", "post 3"],
    // isActive: false,
    // birthDate: {
    //     day: 16,
    //     month: 05,
    //     year: 1986
    // }
};

console.table([user, user, user]);

const UsersLastPost = user.posts[user.posts.length - 1];
console.log(UsersLastPost);

const userName = user.firstName + " " + user.lastName;
console.log(userName);
user.phoneNumber = "0410203045";

user.firstName = "Tetiana";

const usersYearOfBirth = user.birthDate.year;
console.log(usersYearOfBirth);

console.log(18 <= 2022 - user.birthDate.year);

const isLegal = 18 <= 2022 - user.birthDate.year;

if (isLegal) {
    // give access to the website
} else {
    // give an error
    // print a warning
}

const usersList = [{}, {}, {}];
