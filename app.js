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
let name = "Larry Doe";

if(name.charCodeAt() === 76) {
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

// Object created to define users that attempt to access site:
let user = {
    Name: 'John',
    Age: 17
}

// Conditional statement that defines if user is legal age to access site:
if(user.Age < 21) {
    console.log(checkAge());
}

// Function that diplays message if user is not of legal age to access site:
function checkAge() {
    return "Sorry " + user.Name +  " you " + "aren't " + "old " + "enough " + "to " + "view " + "this " + "page!";
}

// Array created to display a series of my favorite vegetables. Currently displays 1st index value:
let myFavVeggies = ['Collard Greens', 'Turnip Greens', 'Green Beans', 'Corn', 'Okra', 'Spinach'];
console.log(myFavVeggies[3]);



















