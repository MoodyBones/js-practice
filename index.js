// EXCERCISE 4

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"


// var age = prompt("How old are you?");
// if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
// }


// EXCERCISE 5

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.


//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

// let age = prompt("What is your age?");

// function checkDriverAge() { 
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// } 

// checkDriverAge();


//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.


// let age = prompt("What is your age?");

// var checkDriverAge2 = function() {
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// checkDriverAge2();


//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

// function checkDriverAge(argument) { 
//     if (Number(argument) < 18) {
//         console.log("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(argument) > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     } else if (Number(argument) === 18) {
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// } 

// checkDriverAge(18);




// EXCERCISE 6

// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(array);
// array.shift();
//     // .shift pops the first element off
//     // .pop pops the last element ("Blueberries") 
// console.log(array);

// //or

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(array);
// delete array[0];
//     // deletes the first element
//     // BUTTTT DO NOT USE
//     // it leaves undefined holes in the array
// console.log(array);

//or

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(array);
// array.splice(0, 1);
// console.log(array);

// console.log(array.splice(0, 1));
    // first parameter (0) defines the position where new elements should be added (spliced in)
    // second parameter (1) edfines how many element should be removed



// 2. Sort the array in order.

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(array.sort());


// 3. Put "Kiwi" at the end of the array.

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.push("Kiwi");
// console.log(array);

// //or

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.splice(4, 0, "Kiwi");
// console.log(array);


// 4. Remove "Apples" from the array.

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.splice(1, 1);
// console.log(array);


// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.shift();
// array.sort();
// array.push("Kiwi");
// array.splice(0, 1);
// array.reverse();
// console.log(array);

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// // using this array,
// var array2 = [
//     "Banana", [
//         "Apples",[
//             "Oranges"
//         ], 
//         "Blueberries"
//     ]
// ];
// console.log(array2);
// var getOrange = array2[1][1][0];
// console.log(getOrange);


//// MEL CONTINUE FROM HERE!!!


// EXCERCISE 7

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".