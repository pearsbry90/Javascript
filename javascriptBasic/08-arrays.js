// Arrays: stores a list/assortments of items of any data type
//  Unlike properties name of objects, arrays use a numerically index map of values
// AKA the Keys (but called indexes) are numbers that start at 0

// The parts of an Array:
/*
1. Arrays can be stored in a variable
2. Arrays use [square brackets] to surround it's values/data
3. Items are comma separated
4. Can be a collection of one type - OR - multiple types (ex. a string and a bool) 
 */ 

// 1           //2         //3
let myHobbies = ["writing", "gaming", "hanging with friends/family", "disc golfing"]; //4
let aNewArray = ["this", 42, true, "and that"]; //4

// Indexes: How we access array values
// We use the array's variable name w/ [square bracket] containing the index who's value you want to use
// Ex. console.log(arrrayName[1]) --> Prints teh value of the second item
console.log(myHobbies); // Prints the array
console.log(myHobbies[2]); // Prints the value of index 2: "hanging w/ ..."
console.log(aNewArray[0]); // Prints the value of index 0: "this"

// Interpolate?
console.log(`My top two hobbies are ${myHobbies[2]} and ${myHobbies[3]}!`); // yes
// console.table(myHobbies);

// Side note: Arrays have a ton of methods(packaged logic accessed by dot notation and passing values) that allow you to easily utilize them
/* 
See external resources later:
--> https://www.w3schools.com/js/js_array_methods.asp
--> https://livecodestream.dev/post/15-must-know-javascript-array-methods/
*/

// .push() method - adds a new element/value
// console.log(myHobbies);
myHobbies.push("traveling");
console.log(myHobbies);

// .sort() - sorts alphabetically
myHobbies.sort();
console.log(myHobbies);
console.log(myHobbies[3]); // Prints a new list and which number you choose