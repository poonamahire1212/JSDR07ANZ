// Bonus: A Transit Application

// Start with this data...
const stations = [
    "Museum",
    "St. James",
    "Circular Quay",
    "Wynyard",
    "Townhall",
    "Central",
    "Redfern",
    "Macdonaldtown",
    "Newtown"
];

// Create a function called `travelFrom` that receives a start station and an end station.
// - Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")

// function travelFrom(startStation, endStation){
//     // minus 1 because indexes start from 0
//     const numOfStops = stations.indexOf(endStation) - stations.indexOf(startStation) - 1;
//     const stops = numOfStops === 1 ? "stop" : "stops";

//     return `To go from ${startStation} to ${endStation} - you'll need to go through ${numOfStops} ${stops}`;
// }

// console.log(travelFrom("Circular Quay", "Central"));
// console.log(travelFrom("Central", "Macdonaldtown"));


// - Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")

// function travelFrom(startStation, endStation){
//     // the reason why I saved these values in variables so we don't use .indexOf method twice
//     // for numOfStops and for passing into .slice method - in our case we use .indexOf method once
//     // and after just using the value that we store in our variables (startStationIndex and endStationIndex)
//     const startStationIndex = stations.indexOf(startStation);
//     const endStationIndex = stations.indexOf(endStation);

//     const numOfStops = endStationIndex - startStationIndex - 1;
//     const stops = numOfStops === 1 ? "stop" : "stops";

//     // plus 1 as .slice method returns a new array object (without changing original array) selected
//     // from start to end (end not included) where start and end represent the index of items in that array
//     const stationsToPass = stations.slice(startStationIndex, endStationIndex + 1);

//     // \n helps us make a multilanes output with template literals
//     // .join method on array helps us turn array into the string, any string argument we will add in will
//     // indicate how the array values will be separated - it can be empty space, coma etc
//     const message =
//     `To go from ${startStation} to ${endStation} - you'll need to go through ${numOfStops} ${stops} \n ${stationsToPass.join(", -")}`

//     return message;
// }

// console.log(travelFrom("Circular Quay", "Central"));
// console.log(travelFrom("Central", "Macdonaldtown"));


// Bonus: A (more complicated) Transit Application
// - Make this work if you want to go backwards! e.g. `'You want to travel from "Redfern" to "St. James"'`

// SOLUTION 1:
// function travelFrom(startStation, endStation){
//     const startStationIndex = stations.indexOf(startStation);
//     const endStationIndex = stations.indexOf(endStation);

//     let numOfStops;
//     let stationsToPass;

//     if(startStationIndex > endStationIndex) {
//         const reverseStations = stations.reverse();
//         const reverseStartStationIndex = reverseStations.indexOf(startStation);
//         const reverseEndStationIndex = reverseStations.indexOf(endStation);

//         numOfStops = reverseEndStationIndex - reverseStartStationIndex - 1;
//         stationsToPass = reverseStations.slice(reverseStartStationIndex, reverseEndStationIndex + 1);
//     } else {
//         numOfStops = endStationIndex - startStationIndex - 1;
//         stationsToPass = stations.slice(startStationIndex, endStationIndex + 1);
//     }

//     const stops = numOfStops === 1 ? "stop" : "stops";

//     const message =
//     `To go from ${startStation} to ${endStation} - you'll need to go through ${numOfStops} ${stops} \n ${stationsToPass.join(", -")}`

//     return message;
// }

// console.log(travelFrom("Circular Quay", "Central"));
// console.log(travelFrom("Redfern", "St. James"));


// SOLUTION 2
// function travelFrom(startStation, endStation){
//     const startStationIndex = stations.indexOf(startStation);
//     const endStationIndex = stations.indexOf(endStation);

//     // in this example we moved repetative code into an inner function - closure
//     // it helps us encapsulate some variables and avoid repetative code
//     // result of the function we are storing in the variable trainStop
//     let trainStops = {};

//     function calculateTrainStops(startIndex, endIndex, stationsList){
//         const numOfStops = endIndex - startIndex - 1;
//         const stationsToPass = stationsList.slice(startIndex, endIndex + 1);

//         // we can create object as following when our key and name of variable that procides values
//         // are the same
//         // in order to reach this value you refer to the keys numOfStops and stationsToPass
//         return {
//             numOfStops,
//             stationsToPass
//         }
//     }

//     if(startStationIndex > endStationIndex) {
//         const reverseStations = stations.reverse();
//         const reverseStartStationIndex = reverseStations.indexOf(startStation);
//         const reverseEndStationIndex = reverseStations.indexOf(endStation);

//         trainStops = calculateTrainStops(reverseStartStationIndex, reverseEndStationIndex, reverseStations);
//     } else {
//         trainStops = calculateTrainStops(startStationIndex, endStationIndex, stations);
//     }

//     const stops = trainStops.numOfStops === 1 ? "stop" : "stops";
//     const message =
//     `To go from ${startStation} to ${endStation} - you'll need to go through ${trainStops.numOfStops} ${stops} \n ${trainStops.stationsToPass.join(", -")}`

//     return message;
// }

// console.log(travelFrom("Circular Quay", "Central"));
// console.log(travelFrom("Redfern", "St. James"));


// Make it error-tolerant. E.g.:
// - Make it case-insensitive - there should be no difference between `"redfern"`, `"Redfern"` and `"REDFERN"`
// - If someone passes in a station that doesn't exist, tell them

function travelFrom(startStation, endStation) {
    // always make checks and think of the edge cases
    // if not sure, check with team lead, QA, BA or PO on business requirements
    // exit sooner to avoid running unnecessary code
    if (startStation === endStation) {
        return "You don't need to take a train, you already on the right station";
    }

    // turn each train station to lowercase
    const lowerCaseStations = stations.map(st => st = st.toLowerCase());

    const startStationIndex = lowerCaseStations.indexOf(startStation.toLowerCase());
    const endStationIndex = lowerCaseStations.indexOf(endStation.toLowerCase());

    if (startStationIndex < 0 || endStationIndex < 0) {
        return "Please, provide a correct train station";
    }

    let trainStops = {};

    function calculateTrainStops(startIndex, endIndex, stationsList) {
        const numOfStops = endIndex - startIndex - 1;
        const stationsToPass = stationsList.slice(startIndex, endIndex + 1);
        return {
            numOfStops,
            stationsToPass
        }
    }

    if (startStationIndex > endStationIndex) {
        const reverseStations = lowerCaseStations.reverse();
        const reverseStartStationIndex = reverseStations.indexOf(startStation.toLowerCase());
        const reverseEndStationIndex = reverseStations.indexOf(endStation.toLowerCase());

        trainStops = calculateTrainStops(reverseStartStationIndex, reverseEndStationIndex, stations.reverse());
    } else {
        trainStops = calculateTrainStops(startStationIndex, endStationIndex, stations);
    }

    const stops = trainStops.numOfStops === 1 ? "stop" : "stops";

    // TODO: you can play around with user's input of stations to make them same as stations
    //       starting with capital letter each word
    const message =
        `To go from ${startStation} to ${endStation} - you'll need to go through ${trainStops.numOfStops} ${stops} \n ${trainStops.stationsToPass.join(", -")}`

    return message;
}

console.log(travelFrom("Circular Quay", "Central"));
console.log(travelFrom("Redfern", "St. James"));
console.log(travelFrom("Central", "Central"));
console.log(travelFrom("North Sydney", "Central"));
console.log(travelFrom("Circular Quay", "cenTRal"));
console.log(travelFrom("REDFERN", "St. James"));


// - Make it work across lines! I'll leave it up to you to create the data you need - but create arrays of multiple train lines in Sydney, and try it to get to print out the same things as above - but also things like `"Swap lines at ....."`
// - This will be very, very difficult! Don't feel like you have to add in all the lines, just a few to prove that it is working


// Hints

// - You can receive the name of the line! (e.g. `travelFrom("t2", "Circular Quay", "t3", "Canterbury")`)
// - Find the common station! (e.g. `"t2"` and `"t3"` both have `"Central"`)
// - Maybe drawing out the lines is a good approach!
//     - One of the easiest approaches to this is to treat a trip across lines as two separate trips
// - An object with arrays stored under the name of the train lines might be a good way to approach it (e.g. `const sydneyTrains = { t1: [], t2: [] };`
//     - Note that if you want to use a variable to decide which line to access - dot notation won't work on an object! You'll have to think of another way (think square brackets!)
