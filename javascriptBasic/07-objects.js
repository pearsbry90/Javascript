// Objects: a data type that stores a collection of properties and method

// The parts of an Objects:

/*
1.) Objects can be stored in variable
2.) Objects always use { } to surround it's data
3.) Properties/Keys of the Object (the left side of the colon separated data)
4.) The value of the property/key (the right side of the colon separated data
*/

// Note: Object properties must ge , separated

// 1         //2
let myFriend = { 
    // 3        //4
    name       :"Nate",
    age        :27,
    nickname   :"Squirrel",
    likesHugs  :true
}

// Dot Notation: How we access object's specific values/data
// The dot/period is an operator .
// Ex. console.log(objectVariable.propertyName) --> Print the property value to the console

// console.log(myFriend); // Taking away to show/run the next individually
console.log(myFriend.name); // To show just the name
console.log(myFriend.age); // To show just the age

// Interpolate?
let sillyFriend = `I call ${myFriend.name} his nickname ${myFriend.nickname} when he's being silly!`;
console.log(sillyFriend);
console.log(myFriend.height); // Undefined is the Result

// Cool console trick:
console.table(myFriend);

// Objects can hold objects and arrays
let showOff = {
    thing1: {
        detail1: "yo"
    },
    thing2: {
        detail1: "hey"
    }
}

console.log(showOff.thing2.detail1); 