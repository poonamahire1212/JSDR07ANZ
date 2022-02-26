///////// Accessing DOM nodes  //////////////

// document.querySelector("") will return us first element that correspond search
// we can pass in either html tag as so "h1", either class ".className" or id "#ourId"
let ourParagraph = document.querySelector("h1");
// we will get button node as it is a first node that corresponds to our search
let elWithClassRedButton = document.querySelector(".red-button");

let listWithId = document.querySelector("#special-item");

// document.querySelectorAll("") will find all nodes that correspond to the search
// and return us an array of nodes. It has same rules as querySelector - we can accept html tag,
// class or id

let allNodesWithClassRedButton = document.querySelectorAll(".red-button");
let listItems = document.querySelectorAll("li");



////////////////// DOM traversal  ////////////////////

// as we have a DOM tree we can access nodes by their relations
// will return us parent node of the paragraph - body
ourParagraph.parentNode;


// we can access children, siblings etc



////////////////// Accessing text in the node /////////////

// the first element is our button, will return "Click me"
allNodesWithClassRedButton[0].innerHTML;

// the second element is our <ul> - unordered list node with 3 list nodes (<li>),
// it will return us all HTML that ul node has wrapped into string
allNodesWithClassRedButton[1].innerHTML;


// the first element is our button, will return "Click me"
allNodesWithClassRedButton[0].innerText;

// the second element is our <ul> - unordered list node with 3 list nodes (<li>),
// it will go as deep as needed to look for text and in this case will return us
// all text it will find: 'Item 1\nItem 2\nItem 3'
// \n stand for new line when is used in the string
allNodesWithClassRedButton[1].innerText;


///////////////// Accessing node attributes  //////////////////

// with .getAttribute("") method we can access any attribute that exist on the node
let ourLink = document.querySelector("a");
const href = ourLink.getAttribute("href");



/////////////// Working with styles    /////////////////

const button = document.querySelector("button");

// Getting Styles
const currentStyles = getComputedStyle(button);
const fontSize = currentStyles.fontSize;

// Setting Styles
button.style.width = "400px";
button.style.fontSize = "24px";




////////////////// Adding new node to the page  //////////////

const myParagraph = document.createElement("p");
myParagraph.innerText = "Created with JS";
myParagraph.style.fontSize = "24px";
myParagraph.style.color = "hotpink";

// console.log(myParagraph);

// there is few ways you can add new node to the page:
// 1. Put it on the page
// document.body.appendChild(myParagraph);
// 2. Or...
// document.body.insertBefore(myParagraph, document.body.firstChild);
// 3. Or...
// document.body.innerHTML += "<p style='font-size: 24px; color: hotpink;'>Created with JS</p>";



// iterate via array and create paragraph for each item, having value as a text in the <p></p>
const listOfNum = [1, 2, 3, 4];

listOfNum.map(function(li) {
    let liItem = document.createElement("p");
    // template literals using back ticks for string interpolation
    // in other words we use back tickets when we want to use some value from variable in our string
    // using ${} will let template know that any variable passed in needs to be returned as its value in the string
    liItem.innerText = `${li} my fave number`;
    liItem.style.fontSize = "24px";
    liItem.style.color = "hotpink";

    document.body.appendChild(liItem);
})
