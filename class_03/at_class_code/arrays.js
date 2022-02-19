// Creating arrays

const emptyArray = [];

const randomNumbers = [2, 8, -10, 9.5];

const randomTypes = [null, 5, "hello", undefined, ["a", "b", "c"]];

// we start indexes in arrays from 0

// console.log(randomTypes[0])
// console.log(randomTypes[1])
// console.log(randomTypes[2])
// console.log(randomTypes[3])
// console.log(randomTypes[4][0])
console.log(randomTypes[5])

console.log(randomTypes[randomTypes.length - 1]);

// Reassing the values
const instruments = [
    "Stylophone",
    "Ondes Martenot",
    "Sharpischord",
    "Hydraulophone",
    "Pyrophone",
];

// console.log("instruments 0", instruments);
// instruments[0] = "Roli Seaboard";
// console.log("instruments 1", instruments);

// for (let i = 0; i < instruments.length; i += 1) {
//     console.log(instruments[i]);
// }

console.clear();

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

arrOfArrs[1] // = ["first", "second", "third"]
for (let i = 0; i < arrOfArrs[1].length; i++) {
    console.log(arrOfArrs[1][i])
}
