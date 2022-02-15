// Strings: the written word
// Can be denoted with ' ', " ", or ` `
let firstName = "Bryon";
let lastName = "Pearson";
let fullName = `Hello, my name is ${firstName} ${lastName}.`;
console.log(firstName, lastName, fullName);
// Use the \n to break a new line
console.log(`${firstName}\n ${lastName}\n ${fullName}`); 

// Dynamic Strings
let firstName = "Nate"
let cartItems = 5;
let greeting = `Welcome, ${firstName}! You have ${cartItems} units in your cart.`;
console.log(firstName, cartItems, greeting);

// Bending Strings to Your Will
// Index
const daysOfTheWorkWeek = "MTWRF";
let firstDay = daysOfTheWorkWeek[0];

// Change all words to another
// Replace All
const oldMarkup = "The apples are teh best fruit. Apples will dominate other fruits!"
let newMarkup = oldMarkup.replaceAll ("apples", "oranges");

// Checking if it contains a word/character
// Include
let stockChoices =  'AAPL, MSFT, GOOG, AMZN, FB';
let containsNeflixStock = stockChoices.includes('NFLX') 

// Changing All Letters to Uppercase/Lowercase
let userEmail = 'MyCoolMail@MailService.NET';
let allUpperCase = userEmail.toUpperCase();
let allLowerCase = userEmail.toLowerCase();