// Switch Statement
// Keywords: switch, case, break, default
// Making a string, make sure to add " "

let day = "Sat";

switch (day) {
    case "Sat":
    case "Sun":
        console.log("It's the freak'n weekend!")
        break;
    case "Mon":
    case "Tues":
    case "Wed":
    case "Thurs":
    case "Fri":
        console.log("... it's a weekday.")
        break;
    default:
        console.log("I'm not sure that's a day of the week... ")
}

// Ternaries: testing a true/false outcome similarly to an if/else
// Very concise, often one line only

// Has specific syntax versus keywords
/*
    (1)    (2)                                  (3)
(condition) ? run this code if condition is true : run this code if condition is false
1. The condition to test
2. A question mark (?) signals what code to run if true
3. The colon (:) signals what code to run if false
*/

let age = 31;
(age >= 21) ? console.log("You can enter the venue") : console.log("No fun for you!");

let num = 2;
(num > 10) ? console.log(`${num} is greater than 10. Truthy, so run that code.`) : console.log("That's less than 10, falsy code runs");