// Our nouns/subjects/items, how we tell JS what a "thing" (data item) is

// Declaration: give a key word and variable name
var myName;

// Initialization
myName = "Bryon";
console.log(myName, " Line 8 console.log")

// Re-initialization: adding another information
myName = "Bryon Pearson"
console.log(myName, " Line 12 console.log")

// Declaration & Initialization: do all in one line
let yourName = "Ryo";
console.log(yourName);

// JS uses key words to signal variable declarations: var, let, & const
/*
var - old school, not used often/outdated
let - cool & flexible, known as mutable, it can be re-initialized & changed values: can be "changed/info added" later
const - not flexible, known as immutable, it values cannot be changed, must be given a value: put into one line
*/

// *Highlight the information* you want to run so EVERYTHING isn't being ran

// Var: follows nobody's rules 
puppy = "Tiny"
var puppy;
console.log(puppy)

// Let - adheres to hoisting, needs to be declared first
let doggo = "Stormy";
// let doggo;
console.log(doggo);

// Const - only will be the declared and initialized value, aka, "I said what I said"
const theAlmightyRulerOfUsAll = "Theodore";
// theAlmightyRulerOfUsAll = "Ferd";
console.log(theAlmightyRulerOfUsAll); 