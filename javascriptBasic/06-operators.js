// The data type is the type/kind of items we can communicate to JS

// Arithmetic Operators
console.log(36 + 6); // Addition Operator (+)
console.log(67 - 25); // Subtraction Operator (-)
console.log(7 * 8); // Multiplication Operator (*)
console.log(12 / 2); // Division Operator (/)
console.log(2 ** 3); // Exponentiation Operator (**); raising the first number by the power of the second number

// Modulo Operator
// Modulo (%) calculates the remainder for division
console.log(10 % 5); // Results 0
console.log(5 % 2); // Results = 1
console.log(42 % 8); // Results = 2
/*
 10 / 5 = 2 with a remainder of 0
 10 / 4 = 2 with a remainder of 2
 10 / 9 = 1 with a remainder of 1
 */

// Assignment Operator
// (=) evaluates the value assigned/initialized to variable declaration
let x = 42;
let y = "yikes";

// Comparison Operators
// Check and compares values, returns a boolean result (true or false) 
/*
==  Equality: checks value
=== Strict Equality: checks value and type
!=  Inequality
!== Strict Inequality
>   Greater Than
>=  Greater Than or Equal To
<   Less Than
<=  Less Than or Equal To
*/

// Boolean: True/False Values
// https://elevenfifty.instructure.com/courses/862/pages/javascript-basics-operators?module_item_id=82442
let yes = true;
let no = false;
console.log(yes, no);

// JS is objected based, due to different object (data) types, we have strict type checks due to JS weakly-type nature
let num = 1;
let sameNum = "1";
console.log(num == sameNum); // Equality operator returns true ... weird

console.log(num === sameNum); // Strict Equality returns false, not same data type

// Shorthand Operators
// https://elevenfifty.instructure.com/courses/862/pages/javascript-basics-operators?module_item_id=82442
let count = 3;
count += 23; // 26
count += 1233 //1259
count += 77; //1336
console.log(count);
// Continues math equations until each (count) is completed for a total number

// Logical Operators
// Used to determine/ check logical between variables of values (we'll see this later)
/*
|| (Or Operator)
&& (And Operator)
! Not Operator
*/