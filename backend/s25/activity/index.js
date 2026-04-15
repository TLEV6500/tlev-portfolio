/*
1. In the s25 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message "Hello World" to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
 */

console.log("Hello World");

/*
4. Create the following variables to store the following user details:

    - Variable Name - Value Data Type:
        - firstName - String
        - lastName - String
        - age - Number
        - hobbies - Array
        - workAddress - Object

    - The hobbies array should contain at least 3 hobbies as Strings.
    - The work address object should contain the following key-value pairs:
        - houseNumber: <value>
        - street: <value>
        - city: <value>
        - state: <value>
*/

let firstName = "Tim Leobert";
let lastName = "Villacin";
let age = 24;
let hobbies = [
    "Piano and Violin",
    "Teaching",
    "Learning",
    "Programming",
    "Coffee Brewing",
];
let workAddress = {
    houseNumber: "785",
    street: "Tudela",
    city: "Danao",
    state: "Cebu",
};

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Hobbies:`);
console.log(hobbies);
console.log(`Work Address:`);
console.log(workAddress);

/*
5. Research how to concatenate strings using + operator in Javascript.

    - Create a new variable called fullName
        - Concatenate the firstName and lastName variables and save it into the fullName variable
        - Log the full name to the console using the variable: "fullName"
        - Example: "Michael Smith"

*/

let fullName = firstName + " " + lastName;
console.log(fullName);

/*
6. Continue the use of the + operator to concatenate strings.

    - Create variable named intro to store a message.
        - Combine the string "Hi! My name is" and the fullName variable.
        - Log the message "Hi! My name is" and your fullName to the console.
        - Example: "Hi! My name is Michael Smith"
*/

let intro = "Hi! My Name is " + fullName;
console.log(intro);

/*
7. Research how to determine the data type of each variable.
    - Add the variables of different primitive data types:

        - Variable Name - Value:
        - str = "Twice"
        - num = 27
        - bool = true
        - arr = ["Dahyun", "Chaeyoung", "Mina"]
        - obj = { twice: "Dahyun" }

    - Use the operator to determine the data type of each variable.
    - Log the result to the console.
*/

const str = "Twice";
const num = 27;
const bool = true;
const arr = ["Dahyun", "Chaeyoung", "Mina"];
const obj = { twice: "Dahyun" };

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);

/*
8. Identify and implement the best practices of creating and using variables by avoiding errors and debugging the following codes.
    - Log the values of each variable to follow/mimic the output.
*/

/* Don't change name of variables */
/* Don't change console.log() */

let realName = "Steve Rogers";
console.log("My real name is" + realName);

let currentAge = 40;
console.log("My current age is: " + currentAge);

let profile = {
    username: "captain_america",
    fullName: "Steve Rogers",
    age: 40,
    isActive: false,
};

console.log("My Full Profile: ");
console.log(profile);

let deposits = [2000, 4000, 600, 100];
console.log("Your deposits: " + deposits);

let expenses = [1000, 2000, 500, 210];
console.log("Your expenses: " + expenses);

let isAdmin = true;
console.log("Is the current user an admin?: " + expenses);

const interestRate = 30;
console.log("The current interest rate: " + interestRate);

const loginKey = "EcommerceAPI";
console.log("The current login key is: " + loginKey);

let bankCode = "BANK123";
bankCode = "BANK456";
console.log("Bank code: " + bankCode);

let bankBalance = 500;
bankBalance = bankBalance + 100;
console.log("Updated bank balance: " + bankBalance);
