//  Script that contains my name. Outputs first & last name:
let fullName = 'Bryan Clayton';

console.log (fullName);

// Script used to define total number of states. Outputs a contant total of 50:
const totalStates = 50;

console.log (totalStates);

// Operator script used calculate the sum of 5 & 4. Outputs a total of 9:
let sum = 5 + 4;
console.log(sum);

// Script used to conditionally display message if user's first name begins with "L":
let name = "Jack Doe";

if(name.charCodeAt() > 76) {
    console.log('Back of the line!');
} else {
    console.log('Next!');
}

// Function created to display an alert/greeting of "Hello World!":
let alert = sayHello()
console.log(sayHello());

function sayHello() {
    return "Hello World!";
}

// Test users created to test the checkAge function. All users received the applicable message in the console:

checkAge('Charles', 21);
checkAge('Aby', 27);
checkAge('James',18);
checkAge('John', 17);


// Function that displays message if user is not of legal age to access site:

function checkAge(Name,Age) {
    if (Age < 21) {
        console.log ("Sorry " + Name +  " you " + "aren't " + "old " + "enough " + "to " + "view " + "this " + "page!")
    } else {
        console.log("Come on In " + Name + "!");
    }
}
    

// Array and for loop created to display a series of my favorite vegetables:
let myFavVeggies = ['Collard Greens', 'Turnip Greens', 'Green Beans', 'Corn', 'Okra', 'Spinach'];

for(let i = 0 ; i < myFavVeggies.length; i++) {
    console.log(myFavVeggies[i]); 
}

// Array of objects created to define user specifications for site access:
let users = [
    { Name: 'Jada', Age: 17}, { Name: 'Joi', Age: 10}, 
    { Name: 'Shelby', Age: 38}, { Name: 'Brandon', Age: 30 },
    { Name: 'Tony', Age: 20}
];


// For loop created to loop through users to determine if they meet the age requirement for site access:
for (let i = 0; i < users.length; i++) {
    checkAge(users[i].Name, users[i].Age);
}

    
// Function that will return the amount of characters in the 'str' variable:
function getLenth() {
    return str.length;
}

// Variables created to display the total characters in 'Hello World' usung the getLength function:
let str = 'Hello World';
let n = str.length
console.log(getLenth());

//Variable created to store the total number of characters in 'Hello World'. Outputs 11:
let charLength = 11;

//Conditional logic that displays one message if 'charLength' is even and another if the variable is odd:
if (charLength % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}

















