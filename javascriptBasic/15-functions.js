// Functions: the "verbs", our way to make JS perform a task/action
// Functions run only when invoked (their name is called/used) and return something

/*
The traditional function format:
Uses function and return keywords

                    (like an ID card)
function functionName(parameter) {
    -- block of code maybe doing something --
    return someValueOrThing
}

Invoking the function:
functionName(argument); (giving this a parameter, you have to give it an argument)

*/

// Ex. without a parameter
function hello() {
    console.log('I am a hello function')
}
// Evoking function: hello
// Can run multiple times
hello();

// Ex. with one parameter
// $ to Initialize
function greetPerson(name) {
    console.log(`Hey, ${name}, thanks for coming to class today. \n I'm glad you're here!`)
}
greetPerson("Bryon")
greetPerson("Matthew")
greetPerson("Maria")
// These are the values (arguments)

// Ex. with two parameters
function multiply(a, b) {
    return a * b 
}
// multiply(2, 3); // nothing to see here, but it does run
console.log(multiply(2, 3)) // Again, in order to PRINT, you must have a console...

// Ex. Part 2 from ^^
// Making "x" being the return, this is how
function multiply(a, b) {
    let x = a * b
    return x 
}
console.log(multiply(2, 3))

// Return vs. Console.log 
// ^best explained via the modules here: https://elevenfifty.instructure.com/courses/862/pages/return?module_item_id=82466

// There are other formats to functions, but we're sticking with the classic declarative kind for the sake of time.
// ^A great resource is the additional notes repo we will be cloning: https://github.com/KateLockhart/FunctionsNotes
